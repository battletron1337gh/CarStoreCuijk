#!/bin/bash
# Car Store Cuijk Auto Rebuild Script
# Checkt of vehicles.json is gewijzigd, zo ja: rebuild + deploy

WORKSPACE="/home/battletron/.openclaw/workspace/carstorecuijk-v2"
DATA_FILE="$WORKSPACE/data/vehicles.json"
HASH_FILE="$WORKSPACE/logs/vehicles.hash"
LOG_FILE="$WORKSPACE/logs/rebuild.log"
HOSTINGER_USER="u258982067"
HOSTINGER_HOST="194.36.187.37"
HOSTINGER_PORT="65002"
SSH_KEY="/home/battletron/.ssh/carstorecuijk_deploy~"

# Zorg dat logs directory bestaat
mkdir -p "$WORKSPACE/logs"

# Timestamp voor logging
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Checking for changes..." >> "$LOG_FILE"

# Check of hash file bestaat
if [ ! -f "$HASH_FILE" ]; then
    md5sum "$DATA_FILE" > "$HASH_FILE"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Initial hash created" >> "$LOG_FILE"
    exit 0
fi

# Bereken huidige hash
CURRENT_HASH=$(md5sum "$DATA_FILE" | awk '{print $1}')
STORED_HASH=$(cat "$HASH_FILE" | awk '{print $1}')

# Vergelijk hashes
if [ "$CURRENT_HASH" != "$STORED_HASH" ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Changes detected! Rebuilding..." >> "$LOG_FILE"
    
    # Ga naar workspace
    cd "$WORKSPACE" || exit 1
    
    # Build
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Running npm build..." >> "$LOG_FILE"
    npm run build >> "$LOG_FILE" 2>&1
    
    if [ $? -eq 0 ]; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Build successful, deploying..." >> "$LOG_FILE"
        
        # Deploy occasions pagina
        rsync -avz --progress -e "ssh -p $HOSTINGER_PORT -i $SSH_KEY" dist/occasions/ "$HOSTINGER_USER@$HOSTINGER_HOST:~/domains/carstorecuijk.nl/public_html/occasions/" >> "$LOG_FILE" 2>&1
        
        if [ $? -eq 0 ]; then
            echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deploy successful!" >> "$LOG_FILE"
            # Update hash
            md5sum "$DATA_FILE" > "$HASH_FILE"
        else
            echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deploy FAILED!" >> "$LOG_FILE"
        fi
    else
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Build FAILED!" >> "$LOG_FILE"
    fi
else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] No changes" >> "$LOG_FILE"
fi
