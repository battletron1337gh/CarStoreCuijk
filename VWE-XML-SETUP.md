# VWE XML/SOAP Setup Guide

## Overview

This guide explains how to set up the VWE XML/SOAP integration for Car Store Cuijk.

## What Was Built

### 1. VWE XML/SOAP Client (`src/lib/vwe-xml-client.ts`)
- Fetches vehicle inventory from VWE XML or SOAP endpoints
- Supports both protocols automatically
- Parses XML responses into structured data
- Handles authentication

### 2. Database Layer (`src/lib/db/database.ts`)
- SQLite database with better-sqlite3
- Tables: vehicles, vehicle_images, sync_logs
- CRUD operations for vehicles
- Image download tracking
- Sync logging

### 3. Sync Service (`src/lib/sync-service.ts`)
- Main synchronization logic
- Converts VWE data to Car format
- Handles add/update/delete operations
- Image synchronization
- Error handling and logging

### 4. Image Downloader (`src/lib/image-downloader.ts`)
- Downloads vehicle images from URLs
- Stores locally in `public/cars/`
- Tracks download status in database
- Cleanup orphaned images

### 5. API Routes
- `POST /api/vwe/sync` - Trigger manual sync
- `GET /api/vwe/sync` - Get sync status

### 6. Cron Scheduler (`src/lib/cron-scheduler.ts`)
- Runs automatic sync every 15 minutes
- Background process support

## Setup Instructions

### Step 1: Install Dependencies

```bash
npm install better-sqlite3 node-cron
npm install --save-dev @types/better-sqlite3 @types/node-cron
```

### Step 2: Configure Environment Variables

Create `.env.local` file:

```env
# VWE XML/SOAP API Configuration
VWE_API_ENDPOINT=https://api.vwe.nl/soap
VWE_USERNAME=your_username
VWE_PASSWORD=your_password
VWE_CLIENT_ID=your_client_id
VWE_API_KEY=your_api_key

# Sync Settings
SYNC_INTERVAL_MINUTES=15

# Database
DATABASE_URL=file:./data/cars.db
```

### Step 3: Get VWE Credentials

Contact VWE (MijnVWE) to obtain:
- API endpoint URL (XML or SOAP)
- Username and password
- Client ID
- API Key (if required)

### Step 4: Test Connection

1. Go to `/admin/vwe` in your browser
2. Click "Test Connectie"
3. Verify the connection works

### Step 5: Run First Sync

Option A: Via Admin Panel
- Go to `/admin/vwe`
- Click "Start Sync"

Option B: Via API
```bash
curl -X POST http://localhost:3000/api/vwe/sync
```

Option C: Manual Script
```bash
npx ts-node scripts/sync-vwe.ts
```

### Step 6: Start Scheduled Sync (Production)

For production, start the background scheduler:

```bash
npx ts-node scripts/start-scheduled-sync.ts
```

Or use PM2:
```bash
pm2 start scripts/start-scheduled-sync.ts --name vwe-sync
```

## XML vs SOAP

The system automatically detects the protocol:

### XML Endpoint
- URL contains no "soap" or ".asmx"
- Uses HTTP GET with query parameters
- Example: `https://mijnvwe.nl/api/xml/inventory`

### SOAP Endpoint
- URL contains "soap" or ".asmx"
- Uses HTTP POST with SOAP envelope
- Example: `https://api.vwe.nl/soap`

## Data Mapping

VWE XML fields are mapped to Car Store fields:

| VWE Field | Car Store Field |
|-----------|----------------|
| id | id, vweId |
| kenteken | kenteken |
| merk | merk |
| model | model |
| variant | variant |
| bouwjaar | bouwjaar |
| prijs | prijs |
| kilometerstand | kilometerstand |
| brandstof | brandstof |
| transmissie | transmissie |
| carrosserie | carrosserie |
| fotoUrls | afbeeldingen |
| opties | features |
| beschrijving | beschrijving |
| status | status |

## Troubleshooting

### Connection Failed
- Check VWE_API_ENDPOINT is correct
- Verify username and password
- Ensure VWE account has API access

### Sync Errors
- Check logs in `/admin/vwe`
- Verify XML format matches expected structure
- Check database permissions

### Images Not Downloading
- Ensure `public/cars/` directory exists and is writable
- Check image URLs are accessible
- Review image download logs

## File Structure

```
src/
├── lib/
│   ├── vwe-xml-client.ts      # XML/SOAP API client
│   ├── vwe-xml-config.ts      # Configuration
│   ├── sync-service.ts        # Sync logic
│   ├── image-downloader.ts    # Image handling
│   ├── cron-scheduler.ts      # Scheduled sync
│   └── db/
│       ├── database.ts        # SQLite operations
│       └── index.ts           # Exports
├── app/
│   └── api/
│       └── vwe/
│           └── sync/
│               └── route.ts   # API routes
│   └── admin/
│       └── vwe/
│           └── page.tsx       # Admin panel
└── types/
    └── index.ts               # TypeScript types
```

## Next Steps

1. Update frontend components to use database instead of static data
2. Add vehicle detail pages with dynamic routing
3. Implement search and filter functionality
4. Add caching for performance
5. Set up monitoring and alerts

## Support

For issues with the VWE integration:
1. Check the logs in `/admin/vwe`
2. Review the sync status API
3. Verify environment configuration
4. Contact VWE support for API issues
