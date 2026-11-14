import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE, SUPPORT_EMAIL } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Rob Run Cheats',
    domain: 'cheatsrobrun.org',
    title: 'Buy Rob Run Cheats 2026 | Undetected ESP & Aimbot',
    description:
      'Shop Rob Run cheats for Windows—ESP, radar, aimbot and stream-proof overlay. Compare Lite, Pro and Elite tiers, then checkout at cheatsrobrun.org.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/reviews/', label: 'Reviews' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Rob Run — game build online',
    eyebrow: '',
    title: 'Rob Run Hacks & Cheats – Latest Version',
    subtitle:
      'Kefir Rob Run cheats for Windows—skeleton ESP, role ESP, loot & cash ESP, directional radar, silent aim and no-recoil assist. Private keys; borderless window for overlay; 24h–30d checkout.',
    ctaPrimary: 'Get access',
    ctaPrimaryHref: PRIMARY_CHECKOUT_PATH,
    ctaDiscord: 'Shop products',
    modesLabel: 'Rob Run game modes',
    modes: ['PvP raids', 'Loot runs', 'Fence extraction'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Tiers', strong: 'Lite · Pro · Elite' },
      { label: 'Discord support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'What you buy in one Rob Run cheat package',
    subtitle: 'ESP, aimbot, no-recoil assist and utilities—priced by tier, delivered after checkout, updated every major patch.',
    items: [
      {
        title: 'Aimbot / Soft Aim',
        subtitle: 'Win Fights. Look Human.',
        desc: 'Aimbot and Soft Aim with bone select, smoothing and FOV limits—tuned for bandits, cops and NPCs in PvP and indoor fights battles.',
        bullets: [
          'Silent aim, humanized aimbot and optional hardlock aimbot',
          'Soft Aim that pulls the crosshair without rage snaps',
          'Bone select: head, chest or nearest bone',
          'No spread, no recoil and full-auto weapon profiles',
          'Humanized delay sliders and visibility checks',
        ],
        tags: ['silent aim rob run', 'humanized aimbot', 'hardlock aimbot'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'See Every Threat.',
        desc: 'Readable player ESP that stays clean in urban maps, flanking routes and mixed battles.',
        bullets: [
          'Rob Run skeleton ESP with boxes, names and distance',
          'Role ESP filters: cop, robber and civilian',
          'Clan tag ESP, party check ESP and team colors',
        ],
        tags: ['rob run skeleton esp', 'role esp', 'clan tag esp'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-1',
      },
      {
        title: 'Loot & player ESP',
        subtitle: 'Find It Before They Do.',
        desc: 'Track bandits, cops, civilians, loot crates, safes, and cash stashes so you commit with full battlefield awareness.',
        bullets: [
          'Loot ESP, cash ESP, safe ESP and container ESP',
          'Camera ESP, alarm ESP and instant loot reveal filters',
          'Police proximity alerts and battle mode ESP presets',
        ],
        tags: ['loot esp', 'cash esp', 'safe esp'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'No-recoil assist',
        subtitle: 'Hold the Spray.',
        desc: 'No-recoil control and dispersion control with per-weapon profiles—start conservative and tighten as you get comfortable.',
        bullets: ['Per-weapon ballistic profiles', 'Spread reduction sliders', 'Attachment-aware profiles in the portal'],
        tags: ['no-recoil assist', 'no spread', 'recoil control'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-2',
      },
      {
        title: 'Utility Suite',
        subtitle: 'Extra Tools for Clutch Moments.',
        desc: 'Radar, Cosmetic preview and quality-of-life tools beyond raw ESP and aim assist.',
        bullets: [
          'Directional radar, minimap overlay and rob run radar hack presets',
          'Cosmetic preview: Preview camos locally on your client',
          'Trigger Bot: Fire when the crosshair lands on a target',
          'Stream Proof: Hide overlays from OBS capture',
        ],
        tags: ['radar', 'skin changer', 'trigger bot'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'cash and loot farm helpers',
        subtitle: 'Efficient Farm. Zero Grind.',
        desc: 'Speed up resource runs with helpers that stay humanized—so you farm faster without obvious bot patterns.',
        bullets: [
          'loot route hints for PvE and events',
          'Objective-to-objective route hints',
          'Safe stop when players appear on ESP',
          'Event-day farm presets',
        ],
        tags: ['sl rp farm', 'sl rp helper', 'farm helper'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-3',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators Stay Safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs safe', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-1 lg:row-start-5',
      },
      {
        title: 'FOV Hack',
        subtitle: 'See More of the Fight.',
        desc: 'Widen your field of view for better awareness in close quarters and open-field fights.',
        bullets: ['Adjustable FOV range', 'Quick reset to default FOV', 'Pairs with Player ESP and radar'],
        tags: ['fov hack', 'field of view', 'awareness'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-5 lg:row-start-5',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch Day Ready.',
        desc: 'Same presets on every PC—portal updates track Rob Run patches and Easy Anti-Cheat update days.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-5',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Why buy Rob Run Cheats here—patches, not empty promises',
    subtitle:
      'Most Rob Run cheat shops ship stale loaders, obvious aimbots, and ticket bots. We built cheatsrobrun.org around patch-day delivery, humanized aim assist, and real Discord support.',
    usLabel: 'Rob Run Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'EAC-aware builds pushed within hours of Rob Run updates—check Discord #status before you join a server.',
      },
      {
        title: 'Humanized aim & delays',
        desc: 'Smoothing, FOV limits and conservative defaults mimic real player movement—not instant snaps that get you reported and banned.',
      },
      {
        title: 'Real Discord support',
        desc: 'Open a ticket for loader setup, configs and HWID resets—real staff, not copy-paste FAQ replies.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the Rob Run process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Weapon, ESP and per-server profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord tickets—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Rob Run or Easy Anti-Cheat changes.',
      },
      {
        value: '24/7',
        title: 'Discord support',
        desc: 'Open a ticket for setup, configs and account issues.',
      },
      {
        value: '600+',
        title: 'Active users',
        desc: 'Rob Run PC players running ESP, aim assist and utilities from cheatsrobrun.org.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first battle in just',
    titleHighlight: 'three simple steps',
    intro:
      'Buy a tier, unlock the portal, download the loader, load presets, and join Rob Run on Steam or ROB RUN launcher—with Discord support if anything blocks you.',
    ctaPrimary: 'Shop products',
    ctaSecondary: 'Pre-purchase FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your portal dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import weapon and ESP presets, and tune aim assist plus overlay sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & join Rob Run',
        desc: 'Check the live status banner, launch Rob Run, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Rob Run after updates.',
    items: ['Windows 10 & 11', 'Steam', 'Rob Run client (Steam or ROB RUN launcher)', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Cheat tiers',
    title: 'Rob Run Cheat Tiers',
    subtitle: 'Compare Lite ESP, Pro aim assist, and Elite farm helpers—same loader, priced by module set.',
    viewAll: 'Compare all tiers',
    explore: 'Get access',
    items: [
      {
        badge: 'Entry',
        tier: 'Awareness',
        name: 'Lite',
        title: 'Rob Run Lite Cheats — ESP, Radar & FOV',
        desc: 'Lite tier covers player ESP, vehicle tags, capture markers, radar and FOV changer for PvP, loot raids and extraction battles—no aimbot.',
        features: ['Player ESP', 'Vehicle & capture markers', 'Radar overlay', 'FOV changer', 'Stream-proof mode', 'Cloud configs'],
        more: 14,
        href: `${productBase}lite/`,
        variant: 'essential',
      },
      {
        badge: 'Most popular',
        tier: 'Combat',
        name: 'Pro',
        title: 'Rob Run Pro Cheats — Aimbot & Ballistic Assist',
        desc: 'Pro tier adds aimbot, Soft Aim, no-recoil assist and vehicle profiles on top of every Lite ESP and radar module for Windows PC.',
        features: ['All Lite ESP modules', 'Aimbot / Soft Aim', 'No-recoil assist', 'Target selector', 'Vehicle profiles', 'Smoothing presets'],
        more: 28,
        href: `${productBase}pro/`,
        variant: 'popular',
      },
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'Rob Run Elite Cheats — Full ESP, Aimbot & Farm Suite',
        desc: 'Elite tier is the full private suite—aimbot, no-recoil assist, player ESP, loot ESP, cash and loot farm helpers, cosmetic preview and priority EAC patch delivery for Windows PC.',
        features: ['Aimbot / Soft Aim', 'No-recoil assist', 'Player & Loot ESP', 'cash and loot farm helpers', 'Cosmetic preview', 'Priority patch queue'],
        more: 42,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'ROB RUN Cheats – Choose Your Lite, Pro & Elite Plan',
    subtitle:
      'Three cheat tiers for Windows PC, plus utilities when you need hardware tools or account help. Open a card for screenshots and module lists; checkout stays on the hub cards.',
    viewAll: 'Shop all products',
    get: 'Get access',
    explore: 'Get access',
    items: [
      {
        badge: 'Available',
        category: 'DMA hardware',
        title: 'Rob Run Cloud DMA — Remote Overlay Bridge',
        subtitle: 'Cloud DMA kit for Rob Run on Windows PC',
        desc: 'Cloud DMA connects your gaming PC to a remote overlay bridge—low-latency ESP and aim assist data without running heavy modules on the game machine. Includes portal setup and compatibility checklist.',
        features: ['Cloud DMA bridge', 'Dual-PC workflow', 'Encrypted feed', 'Portal pairing guide'],
        more: 6,
        href: `${productBase}cloud-dma/`,
      },
      {
        badge: 'Available',
        category: 'System utility',
        title: 'Rob Run HWID Spoofer — Reset Hardware After Ban',
        subtitle: 'HWID spoofer for Windows PC after a Easy Anti-Cheat hardware flag',
        desc: 'This HWID spoofer rotates disk serials, MAC addresses and GPU IDs after Easy Anti-Cheat flags your machine—portal setup included before you relaunch on Steam.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'Rob Run UGC — EAC Account Recovery',
        subtitle: 'Appeals for restricted Rob Run accounts',
        desc: 'Buy Rob Run UGC recovery tools for Steam holds, Easy Anti-Cheat bans and custom battle restrictions—custom appeal workflows, case docs and status tracking.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Unlock All — Camouflage Preview Locally',
        subtitle: 'Unlock All and Cosmetic preview on Windows PC',
        desc: 'Unlock All with Cosmetic preview previews cosmetics, decals and skins and rare variants locally—client-side cosmetics without Steam market purchases.',
        features: ['Camouflage swap', 'Clothing & item customizer', 'Rare skin preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Rob Run Cheat Buy Guides',
    subtitle: 'Tier comparison guides, ESP and aimbot module explainers, and checkout walkthroughs—pick a plan with confidence.',
    latestTitle: 'ROB RUN Blog – ESP, Aimbot & Setup Guides',
    latestSubtitle: 'Module explainers and tier comparisons to help you pick Lite, Pro or Elite and set up ESP, aimbot and utilities.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'Browse buy guides',
    read: 'Read & buy',
    items: [
      {
        tag: 'Guides',
        title: 'Live: Rob Run cheats: admin console codes only work where you host',
        slug: 'cheat-codes',
        image: '/images/blog/rr-hack-results.png',
        desc: 'Admin console codes only work where you are admin. See what works on live PvP and indoor fights battles and when a private loader with ESP and aimbot is.',
        date: 'Aug 20, 2026',
        readTime: '10 min read',
      },
      {
        tag: 'Guides',
        title: 'From practice commands to live Rob Run cheats ESP & aimbot guide',
        slug: 'console-tips',
        image: '/images/blog/rr-vehicle-esp.png',
        desc: 'Commands: Outgrown private-server practice? Compare undetected ESP and aimbot tiers for live PvP—Lite, Pro and Elite with secure checkout.',
        date: 'Aug 19, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'How to get Rob Run cheats working after checkout',
        slug: 'use-codes',
        image: '/images/blog/rr-combat-overlay.png',
        desc: 'Bought Rob Run cheats? Portal login, loader download, conservative presets and first-launch checks so your ESP and aimbot run on PvP, loot raids and extraction battles.',
        date: 'Aug 18, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Features',
        title: 'Cheat features by tier: ESP, aimbot, no-recoil assist & skins',
        slug: 'features',
        image: '/images/blog/rr-esp-radar.png',
        desc: 'Feature guide: Player ESP, Loot ESP, Aimbot, No-recoil assist, FOV hack and Cosmetic preview by Lite, Pro and Elite tier—compare modules before checkout.',
        date: 'Aug 18, 2026',
        readTime: '12 min read',
      },
      {
        tag: 'Guides',
        title: 'Private loader vs admin commands on live servers',
        slug: 'console-cmds',
        image: '/images/blog/rr-ground-esp.png',
        desc: 'Admin commands do not work on servers you do not own. Why buyers choose a private loader with ESP and aimbot—tiers, checkout and portal access.',
        date: 'Aug 17, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Rob Run Lite vs Pro: which cheat tier to purchase',
        slug: 'lite-vs-pro',
        image: '/images/blog/rr-aimbot-fov.png',
        desc: 'Lite for ESP and radar, Pro for aimbot and no-recoil assist. Compare tiers side by side and buy the Rob Run cheat tier that fits your game mode and playstyle.',
        date: 'Aug 16, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Rob Run Elite cheats: full suite pricing & who should upgrade',
        slug: 'elite',
        image: '/images/blog/rr-air-esp.png',
        desc: 'Elite is the full Rob Run cheats suite: aimbot, ESP, cash and loot farm helpers, Cosmetic preview and priority patches. See who should buy Elite and how to check out.',
        date: 'Aug 16, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Rob Run aimbot & no-recoil assist: Pro tier combat tools',
        slug: 'aimbot',
        image: '/images/blog/rr-aimbot-fov.png',
        desc: 'Buy Rob Run aimbot and no-recoil assist with Pro tier. See what Aimbot, Soft Aim, Bone Select and No-recoil assist do, then compare tiers and get access.',
        date: 'Aug 15, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Rob Run ESP & radar: Lite setup after purchase',
        slug: 'esp',
        image: '/images/blog/rr-map-radar.png',
        desc: 'Buy undetected Rob Run ESP and radar with Lite. See what you get, how fast setup is after checkout and when to upgrade to Pro or Elite.',
        date: 'Aug 15, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Rob Run FOV hack with ESP awareness (Lite+)',
        slug: 'fov',
        image: '/images/blog/rr-air-esp.png',
        desc: 'FOV hack ships on Lite and carries through Pro and Elite. Buy a wider view with ESP for urban map fights and open-field PvP—compare tiers and get access.',
        date: 'Aug 14, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Rob Run Cosmetic preview / Unlock All utility',
        slug: 'skins',
        image: '/images/blog/rr-vehicle-esp.png',
        desc: 'Buy Rob Run Cosmetic preview standalone or bundled with Elite. Preview vehicle cosmetics and decals locally—see what you get and where to check out.',
        date: 'Aug 14, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'EAC patch day checklist before checkout',
        slug: 'eac-patch',
        image: '/images/blog/rr-hack-results.png',
        desc: 'Rob Run or Easy Anti-Cheat patch just dropped? Check live status, pick the right tier and buy safely—patch-day checklist for checkout and first launch.',
        date: 'Aug 13, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy Rob Run HWID Spoofer after a ban',
        slug: 'hwid',
        image: '/images/blog/rr-ground-esp.png',
        desc: 'Hardware flagged after a Easy Anti-Cheat ban? Buy Rob Run HWID Spoofer, compare it to a new account, and see when UGC appeal help fits. Checkout at cheatsrobrun.org.',
        date: 'Aug 13, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'Checkout buy guide: Lite, Pro & Elite (2026)',
        slug: 'buy-guide',
        image: '/images/blog/rr-esp-radar.png',
        desc: 'Step-by-step buy guide: choose Lite, Pro or Elite, pay at secure checkout and unlock your portal. The 2026 walkthrough from tier pick to first launch.',
        date: 'Aug 12, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Pro aimbot bone select & weapon profiles',
        slug: 'bones',
        image: '/images/blog/rr-aimbot-fov.png',
        desc: 'Buy Pro for aimbot bone select and per-weapon recoil profiles on bandits, cops and NPCs and bolt. See example profiles and get access.',
        date: 'Aug 12, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Easy Anti-Cheat errors vs buying UGC recovery / HWID help',
        slug: 'eac-error',
        image: '/images/blog/rr-combat-overlay.png',
        desc: 'ROB RUN launcher failed to initialize is usually not a ban. Quick checks first, then when to buy UGC appeal workflows or HWID Spoofer. Then get access to Rob Run cheats.',
        date: 'Aug 11, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Buy external Rob Run cheats: safer loader delivery',
        slug: 'external',
        image: '/images/blog/rr-esp-radar.png',
        desc: 'Why buyers choose external Rob Run cheats: private loader, portal updates and cloud configs. Compare tiers and get access instead of risky free downloads.',
        date: 'Aug 11, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy stream-proof Rob Run cheats for creators',
        slug: 'stream-proof',
        image: '/images/blog/rr-map-radar.png',
        desc: 'Stream Proof hides your ESP and aimbot overlay from OBS and Game Bar. Included on every tier—compare Rob Run cheats for creators and get access.',
        date: 'Aug 10, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-session without tabbing through chaos.',
    items: [
      { num: '01', label: 'Combat', title: 'Aim assist that adapts to your weapon', desc: 'Aimbot, Soft Aim, Bone Select and smoothing in one combat tab.' },
      { num: '02', label: 'Vision', title: 'ESP that stays readable', desc: 'Filter by distance, team color, player role and capture point.' },
      { num: '03', label: 'Radar', title: 'Awareness on a compact overlay', desc: 'Radar with players, vehicles and objective markers on a compact overlay.' },
      { num: '04', label: 'Weapons', title: 'Per-weapon recoil profiles', desc: 'Save pistol, SMG, and rifle no-recoil profiles and swap with hotkeys.' },
      { num: '05', label: 'Movement', title: 'Farm & movement helpers', desc: 'cash and loot farm helpers, FOV hack and utility tools for efficient grind runs.' },
      { num: '06', label: 'Profiles', title: 'Configs for every server type', desc: 'Separate PvP, loot raids and extraction presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Rob Run profile you can reuse every session.',
    ctaLabel: 'Shop products',
    ctaHref: productBase,
    ctaSecondary: 'Pre-purchase FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check game build status',
        desc: 'Read the live banner on cheatsrobrun.org before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Lite, Pro or Elite—the access level that matches how you play.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune smoothing on a test server.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save PvP and indoor fights presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Rob Run plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you join a server.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe smoothing and ESP ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real Discord support', desc: 'Stuck on the loader or weapon configs? Discord staff walk you through it—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Rob Run Cheats Support — Discord, Loader & HWID Help',
    subtitle: 'Open a Discord ticket for Rob Run loader errors, HWID Spoofer setup and checkout help—or use the cards below for self-serve answers first.',
    channels: [
      {
        icon: 'messageCircle',
        title: 'Discord support',
        desc: 'Join Discord and open a ticket for loader, HWID, and account issues. Fastest path after checkout.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
      {
        icon: 'navFaq',
        title: 'Pre-purchase FAQ',
        desc: 'Tier differences, ban risk, Windows requirements, and what happens after you buy—before you open a ticket.',
        linkLabel: 'Read FAQ',
        href: '/faq/',
      },
      {
        icon: 'package',
        title: 'Products & tiers',
        desc: 'Compare Lite, Pro, Elite and utilities—module lists, screenshots, and secure checkout.',
        linkLabel: 'Shop products',
        href: productBase,
      },
      {
        icon: 'mail',
        title: 'Email support',
        desc: 'Prefer email for billing or order ID questions? Message support with your checkout confirmation.',
        linkLabel: 'Email support',
        href: `mailto:${SUPPORT_EMAIL}`,
      },
    ],
    ticketTitle: 'Include in your Discord ticket',
    ticketItems: [
      { title: 'Order ID', desc: 'Your Zadeyo / checkout order ID from the purchase confirmation.' },
      { title: 'Issue type', desc: 'Loader, HWID Spoofer, Cosmetic preview, or account access—say which one.' },
      { title: 'Error screenshot', desc: 'Exact error text or a screenshot from the loader or game.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Buying FAQ — Tiers, Checkout & Ban Risk',
    subtitle: 'Clear answers on Rob Run cheat tiers, ban risk, Windows support and how checkout delivery works.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Rob Run cheats are online?',
        a: 'The live status banner is on cheatsrobrun.org and in the Discord #status channel. Always check after a Rob Run patch, patch or Easy Anti-Cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Rob Run.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Rob Run cheats?',
        a: 'Yes—any modification carries risk. Easy Anti-Cheat, Kefir Games and server admins keep evolving detection and reports. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Rob Run via Steam or ROB RUN launcher on Windows 10/11 64-bit only. macOS, Linux and consoles are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, UGC and Cosmetic preview live at cheatsrobrun.org/products/rob-run-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Buy undetected Rob Run cheats — ESP, aimbot & utilities for PC. Secure checkout at cheatsrobrun.org',
    explore: 'Shop',
    exploreLinks: [
      { href: '/', label: 'What you can buy', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/rob-run-cheats/elite/', label: 'Buy Elite Rob Run cheats', ariaLabel: 'Elite cheats' },
      { href: '/products/rob-run-cheats/', label: 'Shop all products', ariaLabel: 'Products' },
      { href: '/reviews/', label: 'Buyer reviews', ariaLabel: 'Reviews' },
      { href: '/blog/', label: 'Buy guides & tier tips', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Our Rob Run Cheats Store Tools Online Support',
      description:
        'Who runs cheatsrobrun.org, what each tier includes, ban-risk disclaimers, patch-day policy and how to reach Discord support after checkout.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Rob Run Cheats (cheatsrobrun.org) is a buyer-focused storefront for third-party Rob Run tools on Windows PC. We publish tier comparisons, setup guides, and explicit ban-risk notes before checkout.',
            'We are not Kefir Games and we are not affiliated with Easy Anti-Cheat. Rob Run is a trademark of Kefir Games. Nothing on this site is an official game feature or endorsement.',
          ],
        },
        {
          heading: 'Ban risk and realistic expectations',
          paragraphs: [
            'No cheat tier is ban-proof. Easy Anti-Cheat and server reports can flag accounts at any time, even with conservative presets. You buy at your own risk—read the Terms of Sale and pre-purchase FAQ before paying.',
            'We do not guarantee “undetected” status forever. Status banners mean a build passed our internal smoke tests on a supported Windows setup—not a promise that Kefir will never flag it.',
            'After a hardware ban, a new Steam account plus HWID Spoofer may be required. UGC organizes appeals but cannot guarantee unbans. See product pages for scope, not marketing slogans.',
          ],
        },
        {
          heading: 'What we sell (aligned to tier pages)',
          paragraphs: [
            'Lite — Player ESP, skeleton ESP, loot and player ESP, directional radar, FOV hack, stream-proof overlay. No aimbot or farm automation.',
            'Pro — Everything in Lite plus aimbot, soft aim, no-recoil assist, spread control, bone select, and trigger bot presets in the portal.',
            'Elite — Everything in Pro plus cash and loot farm helpers, cosmetic preview, priority patch queue when slots are open, and Elite-only ESP rows on the compare table (cash/safe/container ESP, camera and alarm markers, grenade trajectory helper, battle mode ESP, instant loot reveal filters).',
            'Utilities (separate checkout): HWID Spoofer, UGC appeal workspace, Unlock All cosmetic preview, and Cloud DMA bridge. HWID is not bundled inside combat tier keys.',
            'Module names on marketing copy match the compare table on each tier page—if a row is not checked for your tier, it is not included.',
          ],
        },
        {
          heading: 'How buying works',
          paragraphs: [
            'Use Get access on the homepage or product page to open checkout. You will complete payment on our partner checkout, then receive portal access for downloads. Keep your order confirmation email—support tickets ask for that order ID.',
            'Not sure which tier to pick? Start with the Lite vs Pro guide on the blog, the features guide for every module, or the pre-purchase FAQ. Buyer reviews on /reviews/ describe real setups on PvP, loot raids and extraction battles (ESP tuning, stream-proof overlays, spoofer workflows).',
            'We do not sell loader files through Discord DMs or random download links. Only use files from your portal after checkout.',
          ],
        },
        {
          heading: 'How we update after Rob Run patches',
          paragraphs: [
            'Rob Run patch days and Easy Anti-Cheat updates can disable modules until a new build ships. We post status on the homepage banner and in Discord #status when builds are online, testing, or offline.',
            'Elite buyers get priority in the patch queue when slots are available. If the banner shows offline, do not launch modules—wait for the updated loader and read the EAC patch day checklist on the blog before rejoining servers.',
            'Blog posts cover post-patch workflows: checking status, downloading the latest loader, loading conservative presets, and when HWID Spoofer or UGC help applies after a ban.',
          ],
        },
        {
          heading: 'Proof and self-serve answers',
          paragraphs: [
            'The FAQ answers tier differences, ban risk, Windows/Steam requirements, and what happens after checkout. The forum hosts buyer-style Q&A on ESP setup, aim smoothing, and utility choice—search there before opening a ticket.',
            'Product pages include gameplay screenshots updated for current patches. Reviews are labeled by product (Elite, HWID Spoofer, UGC, Cosmetic preview) so you can read feedback relevant to your purchase.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Loader errors, HWID Spoofer setup, and checkout questions go through Discord tickets (linked on the Support page). Include your order ID, Windows build, Rob Run game mode, and a screenshot of any error text.',
            'For billing or refund policy questions, read the Terms of Sale first—then open a ticket if your case matches the supported refund criteria (fault on our side on a supported setup with the status banner online).',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy — Data, Cookies & Checkout',
      description:
        'Privacy policy for cheatsrobrun.org: how we handle cookies, analytics, Discord tickets, checkout partners, data retention and your rights as a shopper.',
      sections: [
        {
          heading: 'Scope',
          paragraphs: [
            'This privacy policy covers cheatsrobrun.org—the marketing site, guides, and product pages. It does not govern third-party checkout, payment processing, or your operator portal; those services have their own policies when you leave our domain.',
            'Last updated: October 2026. We may revise this page when our analytics or support tools change; material updates will be reflected in the date above.',
          ],
        },
        {
          heading: 'Information we collect',
          paragraphs: [
            'When Google Analytics is enabled, we may receive aggregated metrics such as pages viewed, referral source, device category, browser, and approximate geography. We use this to see which buy guides and product pages help shoppers—not to build individual advertising profiles on this site.',
            'If you open a Discord support ticket, we see what you send there: Discord username, message text, attachments you choose to upload, and any order ID or email you provide for billing lookup.',
            'We do not ask for your Rob Run account password on cheatsrobrun.org. We do not store payment card numbers, CVV codes, or full billing addresses on this domain.',
          ],
        },
        {
          heading: 'Information we do not sell',
          paragraphs: [
            'We do not sell your personal information to data brokers. Affiliate checkout links (for example through our Zadeyo partner URLs) may use their own tracking when you complete a purchase on their domain—that processing is governed by the checkout provider’s policy, not this page.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics inform content updates: which FAQ topics need expansion, which product pages get the most pre-purchase traffic, and whether mobile readers can load guides quickly.',
            'Support data is used only to troubleshoot loader issues, utility setup, or order access. Staff may reference your ticket history if you follow up on the same order ID.',
          ],
        },
        {
          heading: 'Cookies and local storage',
          paragraphs: [
            'Analytics cookies (when enabled) measure traffic volume. You can block or delete cookies in your browser; the site remains readable without them.',
            'We store theme preference (light or dark) in local storage so your choice persists between visits. That value stays on your device unless you clear site data.',
            'We do not use advertising cookies on cheatsrobrun.org for retargeting across unrelated websites.',
          ],
        },
        {
          heading: 'Checkout and delivery partners',
          paragraphs: [
            'Clicking Get access opens our partner checkout (Zadeyo) in the same browser tab to pay and receive portal credentials. Name, email, payment method, and fraud-prevention signals are handled by that provider.',
            'We may receive confirmation that a purchase completed (for example order ID and product tier) through support workflows you initiate—we do not host the payment form itself.',
          ],
        },
        {
          heading: 'Security',
          paragraphs: [
            'cheatsrobrun.org is served over HTTPS. Do not send payment details or portal passwords through Discord tickets; use the official checkout and portal only.',
          ],
        },
        {
          heading: 'Data retention',
          paragraphs: [
            'Analytics retention follows the configuration in Google Analytics when the service is active. Discord ticket content is kept as long as needed to resolve the issue and for reasonable follow-up on the same order.',
            'You may ask us to delete support messages that are no longer needed after a case is closed, subject to legal or fraud-prevention holds.',
          ],
        },
        {
          heading: 'Your choices and rights',
          paragraphs: [
            'You can opt out of analytics cookies via browser settings or extensions. For portal or billing data held by the checkout provider, contact that provider using the links in your order email.',
            'For privacy questions about cheatsrobrun.org or Discord tickets, open a ticket from the Support page. For purchase disputes, see the Terms of Sale.',
          ],
        },
        {
          heading: 'Children',
          paragraphs: [
            'cheatsrobrun.org is not directed at children under 13, and we do not knowingly collect personal information from children. Rob Run is rated for mature audiences; purchasers must comply with Steam and local age rules.',
          ],
        },
      ],
    },
    terms: {
      title: 'Rob Run Cheats Terms of Sale',
      description:
        'Rules for purchasing Rob Run cheat licenses on cheatsrobrun.org—delivery, personal use, refunds, Easy Anti-Cheat risk and acceptable product use.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using cheatsrobrun.org or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Rob Run cheat tiers (Lite, Pro, Elite) and utility tools (HWID Spoofer, UGC, Cosmetic preview / Unlock All) delivered through a portal and loader for Steam on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Rob Run or Easy Anti-Cheat updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. cheatsrobrun.org does not process or store payment card numbers.',
            'After purchase, use the portal linked from your order flow to download the current loader and setup guide before launching Rob Run.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, Easy Anti-Cheat or server bans, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Rob Run on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—open a ticket on our Discord. Include your order ID, Windows version, Rob Run client build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Rob Run can conflict with game updates and Easy Anti-Cheat. Kefir Games and battle admins may take action against accounts. You use this software at your own risk, including possible bans.',
            'Check the homepage status banner before every session. Do not join servers while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, join our Discord and open a ticket via the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Rob Run Cheats Support — Discord, Loader & HWID Help',
      description:
        'Get Discord support for Rob Run loader errors, HWID Spoofer setup and checkout questions at cheatsrobrun.org.',
      sections: [
        {
          heading: 'Before you open a ticket',
          paragraphs: [
            'Check the live status banner on the homepage and in Discord #status—especially after a Rob Run update or EAC patch. If status is offline, wait for the new build instead of forcing an old loader.',
            'Download the loader only from your operator portal (linked in your order email). Do not run files from DMs, YouTube links, or forum attachments.',
            'Have your checkout order ID, Windows version (10 or 11), Rob Run client build, and a screenshot of the exact error ready. Redact unrelated personal info from screenshots when possible.',
          ],
        },
        {
          heading: 'Loader and in-game issues',
          paragraphs: [
            'Start the loader before Rob Run, use the setup guide tier for your purchase, and test on a private test session or custom battle with conservative ESP ranges and aim smoothing.',
            'If Easy Anti-Cheat shows “failed to initialize,” read the Easy Anti-Cheat errors guide on the blog first—many cases are driver or overlay conflicts, not a ban. Include whether the issue started right after a patch.',
            'For aimbot or ESP tuning, say which weapon and server type (PvP raids, loot runs, extraction) you use. Staff can suggest portal presets; they cannot guarantee ban immunity.',
          ],
        },
        {
          heading: 'HWID Spoofer and utilities',
          paragraphs: [
            'HWID tickets: note whether you are on a fresh Steam account, if Easy Anti-Cheat flagged hardware, and whether you ran the compatibility scan from the spoofer guide. Follow cleanup steps before relaunching Rob Run.',
            'UGC tickets: describe ban type (Steam, Easy Anti-Cheat, battle admin) and what appeal steps you already tried. UGC tools organize cases—they do not automatically remove bans.',
            'Cosmetic preview tickets: confirm you purchased the utility or Elite tier that includes it, and whether the issue is preview-only (client-side) versus a loader error.',
          ],
        },
        {
          heading: 'Checkout and portal access',
          paragraphs: [
            'If payment succeeded but portal access is missing, wait a few minutes and check spam for the order email. Open a ticket with the order ID and the email used at checkout—do not share card numbers in Discord.',
            'Wrong tier purchased? Ask in a ticket before rebuying; staff may advise upgrade paths through the portal when available.',
            'Refund requests must match the criteria in our Terms of Sale (fault on our side on a supported setup with status online). Change-of-mind or ban-related refunds are not offered.',
          ],
        },
        {
          heading: 'Buying help (pre-purchase)',
          paragraphs: [
            'Compare Lite, Pro and Elite on the products hub, read Lite vs Pro and the features guide, or search the FAQ for tier and ban-risk questions. Reviews on /reviews/ are grouped by product for ESP, Elite, spoofer, and UGC feedback.',
            'Utility shoppers: use the utilities comparison table for HWID Spoofer vs UGC vs Cosmetic preview, then open the product page for screenshots and requirements before Get access.',
          ],
        },
        {
          heading: 'What to expect from support',
          paragraphs: [
            'Tickets are answered in Discord when staff are online—peak times follow EU and US evenings. One ticket per issue keeps threads clear; bump only after 24 hours with new logs if nothing changed.',
            'We do not provide ban guarantees, server unbans, or instructions to evade EAC rules. We help with loader delivery, setup, and product behavior described on cheatsrobrun.org.',
          ],
        },
      ],
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Get access',
    browseCheatsMobile: 'Get access',
    homeAria: 'Rob Run Cheats home',
    checkoutAria: 'Get access to Rob Run Cheats',
    discordAria: 'Join Rob Run Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
