/**
 * Unique titles/descriptions per route — all Rob Run–focused, no duplicate SERP copy.
 * Titles ~50–60 chars; descriptions ~140–155 chars.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy Rob Run Cheats 2026 | Undetected ESP & Aimbot',
    description:
      'Shop Rob Run cheats for Windows—ESP, radar, aimbot and stream-proof overlay. Compare Lite, Pro and Elite tiers, then checkout at cheatsrobrun.org.',
  },
  '/products/rob-run-cheats/': {
    title: 'Rob Run Cheats | Lite, Pro, Elite',
    description:
      'Compare Rob Run cheat tiers on Steam or ROB RUN launcher—Lite, Pro, Elite plus HWID and utilities. Module lists and secure checkout on one hub.',
  },
  '/products/rob-run-cheats/lite/': {
    title: 'Rob Run Lite Cheats | ESP, Radar & FOV',
    description:
      'Lite tier: player and skeleton ESP, directional radar, FOV hack and stream-proof overlay. Awareness modules only—no aimbot. Windows 10/11 PC.',
  },
  '/products/rob-run-cheats/pro/': {
    title: 'Rob Run Pro Cheats | Aimbot & Soft Aim',
    description:
      'Pro tier: aimbot, soft aim, no-recoil assist and spread control—plus every Lite ESP and radar module. Use conservative portal presets on live servers.',
  },
  '/products/rob-run-cheats/elite/': {
    title: 'Rob Run Elite Cheats | ESP, Aimbot, SL Helpers',
    description:
      'Elite tier: full Lite + Pro stack, cash and loot farm helpers, cosmetic preview and priority patch queue when slots are open. Limited availability.',
  },
  '/products/rob-run-cheats/hwid-spoofer/': {
    title: 'Rob Run HWID Spoofer | Reset After Ban',
    description:
      'HWID Spoofer utility after Easy Anti-Cheat hardware flags—portal workflow, compatibility scan and Discord setup help. Sold separate from cheat tiers.',
  },
  '/products/rob-run-cheats/ugc/': {
    title: 'Rob Run UGC Recovery | Account Appeals',
    description:
      'UGC appeal workspace for EAC holds, bans and restrictions—document cases, track status and rebuild account access with structured workflows.',
  },
  '/products/rob-run-cheats/unlock-all/': {
    title: 'Unlock All Cosmetics | Local Preview',
    description:
      'Unlock All camouflage preview for loot crates, safes and cash on your client—local cosmetics without market purchases; standalone or bundled with Elite.',
  },
  '/products/rob-run-cheats/utilities/': {
    title: 'Compare Cheat Utilities | HWID Spoofer & UGC',
    description:
      'Utility comparison for Rob Run—HWID Spoofer vs UGC recovery use cases, feature lists and product pages. Cosmetic preview details on Unlock All.',
  },
  '/blog/': {
    title: 'Module Guides | ESP, Aimbot & Setup Tips',
    description:
      'Tier comparison and module explainers—ESP, aimbot, FOV, HWID recovery after bans, and loader setup notes for Windows Steam or ROB RUN launcher.',
  },
  '/forum/': {
    title: 'ROB RUN Forum – ESP, Radar & Utility Discussions',
    description:
      'Community forum for Rob Run buyers—ESP and radar tuning, Pro combat presets, HWID and Cloud DMA utilities, loader issues and patch-day troubleshooting.',
  },
  '/reviews/': {
    title: 'Buyer Feedback | Tier Notes & Loader Tips',
    description:
      'Read buyer feedback on Elite ESP and aimbot, HWID Spoofer, UGC recovery and cosmetic preview—ratings shared by customers before checkout.',
  },
  '/faq/': {
    title: 'Faq – Tiers, Checkout & Ban Risk | Rob Run Cheats',
    description:
      'Rob Run buying FAQ—tiers, checkout delivery, ban risk, loader setup and HWID tools. Plain-language answers before you purchase at cheatsrobrun.org.',
  },
  '/terms/': {
    title: 'Rob Run Cheats Terms of Sale | License & Refunds',
    description:
      'Legal terms for purchasing Rob Run cheat licenses on cheatsrobrun.org—delivery, personal-use limits, refunds, ban risk and acceptable use.',
  },
  '/about/': {
    title: 'About Rob Run Cheats Store | Team & Disclaimers',
    description:
      'About cheatsrobrun.org—what each tier includes, ban-risk disclaimers, patch-day policy and Discord support after checkout. Not affiliated with Kefir.',
  },
  '/support/': {
    title: 'Rob Run Cheats Support — Discord, Loader & HWID Help',
    description:
      'Discord support for Rob Run loader errors, HWID Spoofer setup and checkout help. Open a ticket with your order ID, issue type and screenshots.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Data, Cookies & Your Rights',
    description:
      'Privacy policy for cheatsrobrun.org—cookies, analytics, Discord ticket data, checkout partners, retention and your rights when browsing or purchasing.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
