import { NextRequest, NextResponse } from 'next/server';
import { HCAPTCHA_CONFIG } from '@/lib/hcaptcha';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'No token provided' },
        { status: 400 }
      );
    }

    if (!HCAPTCHA_CONFIG.SECRET_KEY) {
      console.error('hCaptcha secret key not configured');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Verify token with hCaptcha
    const response = await fetch(HCAPTCHA_CONFIG.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: HCAPTCHA_CONFIG.SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error('hCaptcha verification failed:', data);
      return NextResponse.json(
        { success: false, error: 'Verification failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('hCaptcha verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
