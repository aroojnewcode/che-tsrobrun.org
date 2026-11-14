/** Props for outbound checkout / affiliate links. */
export function externalLinkProps(href: string | undefined): { target?: string; rel?: string } {
  if (!href) return {};
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return { target: '_self', rel: 'noopener noreferrer sponsored' };
  }
  return {};
}
