/**
 * Utility to resolve public asset paths dynamically against Vite's base URL.
 * Ensures assets resolve correctly on:
 * - Local Dev / AI Studio preview (base: '/')
 * - GitHub Pages production deployment (base: '/homepage/')
 */
export function assetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base =
    (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
