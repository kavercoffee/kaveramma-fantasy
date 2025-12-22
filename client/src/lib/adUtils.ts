/**
 * Utility functions for Google Ads banner detection
 */

/**
 * Detects if the user is on a mobile device
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check user agent for mobile devices
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  
  // Mobile device patterns
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i;
  
  // Check screen width as additional validation
  const isMobileWidth = window.innerWidth <= 768;
  
  return mobileRegex.test(userAgent.toLowerCase()) || isMobileWidth;
}

/**
 * Detects if the user came from Google Ads
 * Checks for specific Google Ads URL parameters:
 * - utm_source=google
 * - utm_medium=cpc
 * - utm_campaign (presence indicates Google Ads campaign)
 * - gclid (Google Click ID)
 */
export function isFromGoogle(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check URL parameters for Google Ads indicators
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source')?.toLowerCase();
  const utmMedium = urlParams.get('utm_medium')?.toLowerCase();
  const utmCampaign = urlParams.get('utm_campaign');
  const hasGclid = urlParams.has('gclid'); // Google Click ID
  const hasGadSource = urlParams.has('gad_source'); // Google Ads source
  
  // User is from Google Ads if:
  // 1. utm_source=google AND utm_medium=cpc (Cost Per Click)
  // 2. OR has gclid (Google Click ID)
  // 3. OR has gad_source (Google Ads source)
  const isGoogleAds = (utmSource === 'google' && utmMedium === 'cpc') ||
                      (utmSource === 'google' && utmCampaign !== null) ||
                      hasGclid ||
                      hasGadSource;
  
  return isGoogleAds;
}

/**
 * Checks if the Google Ads banner should be displayed
 */
export function shouldShowGoogleAdsBanner(): boolean {
  return isMobileDevice() && isFromGoogle();
}


