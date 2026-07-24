/**
 * When the Bílavernd template runs under Leigsíða embed
 * (/synishorn/bilaverd), all internal links must keep that base.
 */
export const BILAVERD_EMBED_BASE = '/synishorn/bilaverd';

export function isBilaverdEmbedPath(pathname: string | null | undefined) {
  return Boolean(pathname && pathname.startsWith(BILAVERD_EMBED_BASE));
}

/** Prefix template hrefs when embedded in Leigsíða live preview. */
export function bilaverdHref(
  href: string,
  pathname?: string | null
): string {
  const inEmbed =
    typeof pathname === 'string'
      ? isBilaverdEmbedPath(pathname)
      : typeof window !== 'undefined' &&
        isBilaverdEmbedPath(window.location.pathname);

  if (!inEmbed) return href;

  // Same-page hash only
  if (href.startsWith('#') && !href.startsWith('/#')) return href;

  // "/#contact" -> "/synishorn/bilaverd#contact"
  if (href.startsWith('/#')) {
    return BILAVERD_EMBED_BASE + href.slice(1);
  }

  if (href === '/') return BILAVERD_EMBED_BASE;

  if (href.startsWith('/')) return BILAVERD_EMBED_BASE + href;

  return href;
}

/** Strip embed base so active-nav matching still works. */
export function bilaverdPathname(pathname: string) {
  if (pathname === BILAVERD_EMBED_BASE) return '/';
  if (pathname.startsWith(BILAVERD_EMBED_BASE + '/')) {
    return pathname.slice(BILAVERD_EMBED_BASE.length) || '/';
  }
  return pathname;
}
