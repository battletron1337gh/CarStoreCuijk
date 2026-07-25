#!/bin/bash
# Poll and Rebuild Script voor Car Store Cuijk
# Checkt op 2 manieren of rebuild nodig is:
# 1. vehicles.json hash is gewijzigd (lokaal)
# 2. rebuild-queue.json bestaat op server (vanaf PHP webhook)

WORKSPACE="/home/battletron/.openclaw/workspace/carstorecuijk-v2"
DATA_FILE="$WORKSPACE/data/vehicles.json"
HASH_FILE="$WORKSPACE/logs/vehicles.hash"
LOG_FILE="$WORKSPACE/logs/rebuild.log"
HOSTINGER_USER="u258982067"
HOSTINGER_HOST="194.36.187.37"
HOSTINGER_PORT="65002"
SSH_KEY="/home/battletron/.ssh/carstorecuijk_deploy~"
QUEUE_FILE="rebuild-queue.json"

# Zorg dat logs directory bestaat
mkdir -p "$WORKSPACE/logs"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting poll check..." >> "$LOG_FILE"

# Stap 1: Check of er een rebuild queue is op de server
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Checking for rebuild queue on server..." >> "$LOG_FILE"

QUEUE_CONTENT=$(ssh -p $HOSTINGER_PORT -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST "cat ~/domains/carstorecuijk.nl/public_html/data/$QUEUE_FILE 2>/dev/null || echo '[]'")

QUEUE_COUNT=$(echo "$QUEUE_CONTENT" | python3 -c "import json,sys; data=json.load(sys.stdin); print(len(data))" 2>/dev/null || echo "0")

if [ "$QUEUE_COUNT" -gt "0" ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Found $QUEUE_COUNT pending rebuild(s) in queue" >> "$LOG_FILE"
    NEEDS_REBUILD=1
    # Clear the queue
    ssh -p $HOSTINGER_PORT -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST "echo '[]' > ~/domains/carstorecuijk.nl/public_html/data/$QUEUE_FILE"
else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] No rebuild queue found" >> "$LOG_FILE"
fi

# Stap 2: Sync data van server naar lokaal
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Syncing vehicles.json from server..." >> "$LOG_FILE"
scp -P $HOSTINGER_PORT -i $SSH_KEY $HOSTINGER_USER@$HOSTINGER_HOST:~/domains/carstorecuijk.nl/public_html/data/vehicles.json "$DATA_FILE" >> "$LOG_FILE" 2>&1

# Stap 3: Check hash
CURRENT_HASH=$(md5sum "$DATA_FILE" | awk '{print $1}')

if [ ! -f "$HASH_FILE" ]; then
    echo "$CURRENT_HASH" > "$HASH_FILE"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Initial hash created" >> "$LOG_FILE"
    NEEDS_REBUILD=1
else
    STORED_HASH=$(cat "$HASH_FILE" | awk '{print $1}')
    if [ "$CURRENT_HASH" != "$STORED_HASH" ]; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] vehicles.json changed, rebuild needed" >> "$LOG_FILE"
        NEEDS_REBUILD=1
    fi
fi

# Stap 4: Rebuild als nodig
if [ "$NEEDS_REBUILD" = "1" ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting rebuild..." >> "$LOG_FILE"
    
    cd "$WORKSPACE" || exit 1
    
    # Build
    npm run build >> "$LOG_FILE" 2>&1
    
    if [ $? -eq 0 ]; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Build successful, deploying..." >> "$LOG_FILE"
        
        # Deploy (exclude api/vwe/ and data/ to preserve PHP webhook and vehicle data)
        rsync -avz --progress --exclude='api/vwe/' --exclude='data/' -e "ssh -p $HOSTINGER_PORT -i $SSH_KEY" dist/ "$HOSTINGER_USER@$HOSTINGER_HOST:~/domains/carstorecuijk.nl/public_html/" >> "$LOG_FILE" 2>&1
        
        if [ $? -eq 0 ]; then
            echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deploy successful!" >> "$LOG_FILE"
            md5sum "$DATA_FILE" > "$HASH_FILE"
        else
            echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deploy FAILED!" >> "$LOG_FILE"
        fi
    else
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Build FAILED!" >> "$LOG_FILE"
    fi
else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] No rebuild needed" >> "$LOG_FILE"
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Poll check completed" >> "$LOG_FILE"
