#!/bin/bash
# Car Store Cuijk - Veilige deploy zonder VWE webhook te overschrijven
# Gebruik dit script altijd in plaats van rsync --delete zonder excludes

WORKSPACE="/home/battletron/.openclaw/workspace/carstorecuijk-v2"
HOSTINGER_USER="u258982067"
HOSTINGER_HOST="194.36.187.37"
HOSTINGER_PORT="65002"
SSH_KEY="/home/battletron/.ssh/carstorecuijk_deploy~"
LOG_FILE="$WORKSPACE/logs/deploy.log"

mkdir -p "$WORKSPACE/logs"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Start veilige deploy..." >> "$LOG_FILE"

cd "$WORKSPACE" || exit 1

# Build
echo "[$(date '+%Y-%m-%d %H:%M:%S')] npm run build..." >> "$LOG_FILE"
npm run build >> "$LOG_FILE" 2>&1

if [ $? -ne 0 ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Build FAILED!" >> "$LOG_FILE"
    exit 1
fi

# Deploy met excludes voor VWE webhook + data
# BELANGRIJK: Geen --delete gebruiken op root level, anders wordt PHP/data weggegooid
rsync -avz --progress \
  --exclude='api/' \
  --exclude='data/' \
  --exclude='vwe-fotos/' \
  --exclude='status.php' \
  --exclude='test-webhook.php' \
  --exclude='config.php' \
  -e "ssh -p $HOSTINGER_PORT -i $SSH_KEY -o StrictHostKeyChecking=no" \
  dist/ "$HOSTINGER_USER@$HOSTINGER_HOST:~/domains/carstorecuijk.nl/public_html/" >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deploy successful!" >> "$LOG_FILE"
else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deploy FAILED!" >> "$LOG_FILE"
    exit 1
fi
