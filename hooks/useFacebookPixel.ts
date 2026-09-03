/**
 * Custom hook to safely access Meta Pixel (fbq) function
 * Returns the fbq function if available, otherwise returns a no-op function
 */
export function useFacebookPixel() {
  const fbq = typeof window !== 'undefined' ? (window as any).fbq : null;
  
  return {
    trackEvent: (eventName: string, eventData?: Record<string, any>) => {
      if (fbq) {
        fbq('track', eventName, eventData);
      }
    }
  };
}
