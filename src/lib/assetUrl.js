export function assetUrl(path) {
  const base = import.meta.env.BASE_URL ?? '/';
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  if (!normalized) {
    return base;
  }
  return base.endsWith('/') ? `${base}${normalized}` : `${base}/${normalized}`;
}
