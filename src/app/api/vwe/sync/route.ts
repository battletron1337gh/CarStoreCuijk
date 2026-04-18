// API Route: VWE Sync
// Endpoint to trigger manual sync from VWE XML/SOAP

import { NextRequest, NextResponse } from 'next/server';

// Static export - API routes worden niet geëxporteerd
export const dynamic = 'force-static';
export const revalidate = false;

/**
 * POST /api/vwe/sync
 * Trigger a manual sync from VWE
 */
export async function POST(request: NextRequest) {
  console.log('🔄 Manual VWE sync triggered via API');

  return NextResponse.json(
    { 
      success: false, 
      error: 'VWE sync requires server environment. Use VWE portal embed instead.' 
    },
    { status: 503 }
  );
}

/**
 * GET /api/vwe/sync
 * Get sync status
 */
export async function GET() {
  return NextResponse.json({
    configured: false,
    mode: 'static',
    message: 'VWE portal embed mode active. Sync handled by VWE.',
    timestamp: new Date().toISOString(),
  });
}
