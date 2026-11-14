/** Product/support links for thread context — never blog guides. */
export const forumCategoryBlurbs: Record<string, string> = {
  'ESP & Radar': 'Overlay colors, radar range & stream-safe ESP',
  'Combat Tools': 'Pro soft aim, recoil profiles & tier picks',
  Utilities: 'HWID, Cloud DMA, cosmetics & unlock tools',
  'Patch & Loader': 'EAC errors, loader hotkeys & patch-day flow',
  'Off Topic': 'Tier bundles, Discord vs forum & general chat',
};

export const forumCategoryHelp: Record<
  string,
  { label: string; href: string; tip: string }
> = {
  'ESP & Radar': {
    label: 'Compare Lite ESP & radar',
    href: '/products/rob-run-cheats/lite/',
    tip: 'Use this thread for layout opinions—checkout and loader steps stay on the product pages.',
  },
  'Combat Tools': {
    label: 'See Pro combat modules',
    href: '/products/rob-run-cheats/pro/',
    tip: 'Share preset ranges, not full config dumps. Patch day? Check status before going live.',
  },
  Utilities: {
    label: 'Open utilities catalog',
    href: '/products/rob-run-cheats/utilities/',
    tip: 'HWID and DMA questions often need a private support ticket—avoid posting serials here.',
  },
  'Patch & Loader': {
    label: 'Patch-day support',
    href: '/support/',
    tip: 'List your Windows build and error text. Most loader fixes start with a clean reboot and overlay off.',
  },
  'Off Topic': {
    label: 'Browse all tiers',
    href: '/products/rob-run-cheats/',
    tip: 'Bundles change with promos—confirm what your checkout cart shows before buying.',
  },
};

/** Short onboarding copy for the forum index (not blog content). */
export const forumGettingStarted: string[] = [
  'Filter by topic, then open a thread with several community replies—you will see real preset ranges, not marketing copy.',
  'Sort by Latest after game patches for loader and EAC threads.',
  'Use support for license, HWID, and payment issues; keep those details out of public posts.',
];
