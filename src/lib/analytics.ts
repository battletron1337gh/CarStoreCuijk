// Google Analytics 4 Event Tracking Utility

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'consent' | 'js',
      action: string,
      params?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

/**
 * Track a custom event in Google Analytics 4
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, any>
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track page views (for single page applications)
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_location: url,
      page_title: title || document.title,
    });
  }
}

// Predefined event tracking functions

/**
 * Track when user clicks on WhatsApp
 */
export function trackWhatsAppClick(location: string): void {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: location,
  });
}

/**
 * Track when user clicks on phone number
 */
export function trackPhoneClick(location: string): void {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: location,
  });
}

/**
 * Track when user views a car detail page
 */
export function trackCarView(carId: string, carName: string, price: number): void {
  trackEvent('view_car', {
    event_category: 'ecommerce',
    event_label: carName,
    value: price,
    car_id: carId,
  });
}

/**
 * Track when user submits contact form
 */
export function trackContactFormSubmit(subject: string): void {
  trackEvent('contact_form_submit', {
    event_category: 'lead',
    event_label: subject,
  });
}

/**
 * Track when user uses financing calculator
 */
export function trackCalculatorUse(params: {
  amount: number;
  downPayment: number;
  term: number;
  monthlyPayment: number;
}): void {
  trackEvent('financing_calculator', {
    event_category: 'engagement',
    amount: params.amount,
    down_payment: params.downPayment,
    term_months: params.term,
    monthly_payment: params.monthlyPayment,
  });
}

/**
 * Track when user clicks on CTA buttons
 */
export function trackCTAClick(buttonName: string, destination: string): void {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: buttonName,
    destination: destination,
  });
}

/**
 * Track search queries
 */
export function trackSearch(query: string, resultsCount: number): void {
  trackEvent('search', {
    event_category: 'engagement',
    search_term: query,
    results_count: resultsCount,
  });
}

/**
 * Track filter usage on occasions page
 */
export function trackFilterUse(filterType: string, filterValue: string): void {
  trackEvent('filter_use', {
    event_category: 'engagement',
    event_label: filterType,
    filter_value: filterValue,
  });
}

/**
 * Track when user requests a quote
 */
export function trackQuoteRequest(carId?: string): void {
  trackEvent('quote_request', {
    event_category: 'lead',
    car_id: carId || 'general',
  });
}

/**
 * Track social media link clicks
 */
export function trackSocialClick(platform: string): void {
  trackEvent('social_click', {
    event_category: 'engagement',
    event_label: platform,
  });
}
