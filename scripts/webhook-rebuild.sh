#!/bin/bash
# Car Store Cuijk Webhook Rebuild Script
# Wordt aangeroepen door webhook om direct rebuild te triggeren
# Dit script forceert altijd een rebuild, ongeacht hash changes

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
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Webhook triggered rebuild..." >> "$LOG_FILE"

# Stap 1: Sync data van database naar JSON (indien mogelijk)
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Syncing data from database..." >> "$LOG_FILE"
cd "$WORKSPACE" || exit 1

# Probeer data te syncen via npm run sync (als het bestaat)
if npm run sync --if-present >> "$LOG_FILE" 2>&1; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Data sync successful" >> "$LOG_FILE"
else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Data sync skipped or failed, continuing with rebuild..." >> "$LOG_FILE"
fi

# Stap 2: Build
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Running npm build..." >> "$LOG_FILE"
npm run build >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Build successful, deploying..." >> "$LOG_FILE"
    
    # Stap 3: Deploy occasions pagina
    rsync -avz --progress -e "ssh -p $HOSTINGER_PORT -i $SSH_KEY" dist/ "$HOSTINGER_USER@$HOSTINGER_HOST:~/domains/carstorecuijk.nl/public_html/" >> "$LOG_FILE" 2>&1
    
    if [ $? -eq 0 ]; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deploy successful!" >> "$LOG_FILE"
        # Update hash na succesvolle deploy
        md5sum "$DATA_FILE" > "$HASH_FILE" 2>/dev/null || true
        exit 0
    else
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deploy FAILED!" >> "$LOG_FILE"
        exit 1
    fi
else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Build FAILED!" >> "$LOG_FILE"
    exit 1
fi
