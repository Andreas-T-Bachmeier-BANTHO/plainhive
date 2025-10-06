export function track(event, payload = {}) {
  if (typeof window === 'undefined') return;
  if (window.plainHive?.analytics) {
    window.plainHive.analytics(event, payload);
  } else {
    if (import.meta.env.DEV) {
      console.info(`[analytics] ${event}`, payload);
    }
  }
}
