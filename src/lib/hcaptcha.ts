// hCaptcha configuration
// Get your keys from: https://dashboard.hcaptcha.com

export const HCAPTCHA_CONFIG = {
  SITE_KEY: process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || '',
  SECRET_KEY: process.env.HCAPTCHA_SECRET_KEY || '',
  API_URL: 'https://api.hcaptcha.com/siteverify',
};

// Verify hCaptcha token server-side
export async function verifyHcaptcha(token: string): Promise<boolean> {
  if (!HCAPTCHA_CONFIG.SECRET_KEY) {
    console.error('hCaptcha secret key not configured');
    return false;
  }

  try {
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
    return data.success === true;
  } catch (error) {
    console.error('hCaptcha verification error:', error);
    return false;
  }
}
