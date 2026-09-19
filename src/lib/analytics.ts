/**
 * GA4 & Custom Analytics Event Tracking Helper
 */
export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined') {
    // Standard dataLayer push (for Google Tag Manager / GA4)
    const windowWithDataLayer = window as unknown as { dataLayer?: Record<string, unknown>[] };
    windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || [];
    windowWithDataLayer.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString(),
    });

    // Console logging in development mode
    if (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') {
      console.log(`[Analytics Event] ${eventName}:`, params);
    }
  }
};
