import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';
import { gameplayImages } from './gameplayImages';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['esp', 'lite-vs-pro', 'fov', 'eac-patch'],
  pro: [
    'aimbot',
    'bones',
    'lite-vs-pro',
    'stream-proof',
  ],
  elite: [
    'elite',
    'features',
    'esp',
    'eac-patch',
    'buy-guide',
  ],
  'hwid-spoofer': [
    'hwid',
    'eac-error',
    'eac-patch',
    'external',
  ],
  ugc: [
    'eac-error',
    'hwid',
    'buy-guide',
  ],
  'unlock-all': [
    'skins',
    'features',
    'stream-proof',
  ],
  'cloud-dma': ['external', 'features', 'stream-proof', 'buy-guide'],
};

const productBase = '/products/rob-run-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live status banner on cheatsrobrun.org and Discord #status before purchase—especially after a EAC patch or client update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite Rob Run cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Steam platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test on a private test session, load presets, then join PvP, loot raids or extraction battles.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Rob Run and Easy Anti-Cheat receive frequent updates, especially on major EAC patch and patch days. Confirm module availability on the live status panel at cheatsrobrun.org before you purchase or launch. Overlay behavior may differ between PvP, loot raids and extraction (indoor/outdoor) servers after patches.';

const sharedLimitations =
  'Third-party software in Rob Run can violate Kefir Games Terms of Service and lead to EAC bans, server bans or account action. You use this software at your own risk. Compatibility and availability can change after game, Easy Anti-Cheat, or Windows updates without notice.';

const robRunSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Rob Run via Steam or ROB RUN launcher with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Rob Run published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const galleryRaw = {
  gpMapHack: {
    src: gameplayImages.mapRadar.src,
    alt: gameplayImages.mapRadar.alt,
    caption: gameplayImages.mapRadar.caption,
    captionDesc: gameplayImages.mapRadar.captionDesc,
  },
  gpScripts: {
    src: gameplayImages.aimbotFov.src,
    alt: gameplayImages.aimbotFov.alt,
    caption: gameplayImages.aimbotFov.caption,
    captionDesc: gameplayImages.aimbotFov.captionDesc,
  },
  gpZoomHack: {
    src: gameplayImages.espRadar.src,
    alt: gameplayImages.espRadar.alt,
    caption: gameplayImages.espRadar.caption,
    captionDesc: gameplayImages.espRadar.captionDesc,
  },
  gpSkinChanger: {
    src: gameplayImages.vehicleEsp.src,
    alt: gameplayImages.vehicleEsp.alt,
    caption: gameplayImages.vehicleEsp.caption,
    captionDesc: gameplayImages.vehicleEsp.captionDesc,
  },
  gpAutoKill: {
    src: gameplayImages.combatOverlay.src,
    alt: gameplayImages.combatOverlay.alt,
    caption: gameplayImages.combatOverlay.caption,
    captionDesc: gameplayImages.combatOverlay.captionDesc,
  },
  gpFarmBot: {
    src: gameplayImages.airEsp.src,
    alt: gameplayImages.airEsp.alt,
    caption: gameplayImages.airEsp.caption,
    captionDesc: gameplayImages.airEsp.captionDesc,
  },
  gpPlayerEsp: {
    src: gameplayImages.hackResults.src,
    alt: gameplayImages.hackResults.alt,
    caption: gameplayImages.hackResults.caption,
    captionDesc: gameplayImages.hackResults.captionDesc,
  },
  gpGroundEsp: {
    src: gameplayImages.groundEsp.src,
    alt: gameplayImages.groundEsp.alt,
    caption: gameplayImages.groundEsp.caption,
    captionDesc: gameplayImages.groundEsp.captionDesc,
  },
  gpMenuVisuals: {
    src: gameplayImages.menuVisuals.src,
    alt: gameplayImages.menuVisuals.alt,
    caption: gameplayImages.menuVisuals.caption,
    captionDesc: gameplayImages.menuVisuals.captionDesc,
  },
  gpMenuWorld: {
    src: gameplayImages.menuWorld.src,
    alt: gameplayImages.menuWorld.alt,
    caption: gameplayImages.menuWorld.caption,
    captionDesc: gameplayImages.menuWorld.captionDesc,
  },
  gpMenuAimbot: {
    src: gameplayImages.menuAimbot.src,
    alt: gameplayImages.menuAimbot.alt,
    caption: gameplayImages.menuAimbot.caption,
    captionDesc: gameplayImages.menuAimbot.captionDesc,
  },
  gpMenuMisc: {
    src: gameplayImages.menuMisc.src,
    alt: gameplayImages.menuMisc.alt,
    caption: gameplayImages.menuMisc.caption,
    captionDesc: gameplayImages.menuMisc.captionDesc,
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'rob-run-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Rob Run Lite is built for players who want information first. In Rob Run, knowing where enemies, wrecks and objectives are before you commit wins more fights than raw aim—Lite gives you that edge without aim automation.',
    },
    { type: 'h2', text: 'Low-profile by design' },
    {
      type: 'p',
      text: 'Lite skips aimbot and bot modules entirely. Your gameplay looks natural while player ESP, radar and FOV changer keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Rob Run Pro is the sweet spot for players who fight often. Aimbot, recoil control and Smart Aim help you win gunfights without obvious snap patterns—when you tune smoothing and FOV using our portal presets.',
    },
    { type: 'h2', text: 'Combat tools + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds aimbot, target selector, recoil control and weapon-aware profiles. You see the fight before it starts and win it with settings that stay human at default values.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Rob Run Elite is the private build for players who want everything—cash and loot farm helpers, combat assist, Cosmetic preview, full ESP suite and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test on a private test session, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first PvP, loot raids or extraction session.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, downed-player markers, NPC patrol highlights, loot crate and safe ESP, radar, FOV changer, and stream-safe overlay hiding. Config presets for PvP, loot raids and extraction (indoor/outdoor) battles ship in the portal—load before you queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Combat tools and automation' },
    {
      type: 'p',
      text: 'Aimbot, recoil control, Smart Aim with bullet-drop prediction, target selector and weapon profiles for bandits, cops and NPCs. Smoothing and FOV limits keep aim natural on PvP and indoor fights battles. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at cheatsrobrun.org—enough firepower for busy loot raids queues without Elite slot limits. Pair with our aimbot guide in the blog before your first session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full bot and finish suite' },
    {
      type: 'p',
      text: 'cash and loot farm helpers, combat assist, Cosmetic preview and the full ESP suite with vehicle and objective alerts. Use a private test session or custom battle before live PvP, loot raids or extraction play—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh Steam accounts fail instantly on one PC but work elsewhere—classic hardware ban enforcement after a EAC ban action. Do not use for account-only bans; see [UGC](/products/rob-run-cheats/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before joining a server. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Steam restrictions, Easy Anti-Cheat and server bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'loot raids expectations' },
    {
      type: 'p',
      text: 'Some EAC bans cannot be reversed. UGC organizes evidence and follow-ups for Kefir Games and server-owner review. Pair with [HWID Spoofer](/products/rob-run-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'cloud-dma': [
    { type: 'h2', text: 'When Cloud DMA fits' },
    {
      type: 'p',
      text: 'Use Cloud DMA when you want ESP and radar on a second machine or a thin client link—separate the game PC from overlay processing. Pair with Lite or Pro tiers on the main cheat build for full combat modules.',
    },
    { type: 'h2', text: 'Setup expectations' },
    {
      type: 'p',
      text: 'Follow the portal pairing guide: verify firmware, run the compatibility scan, bind network paths, then test on a private session before live PvP or loot raids.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Skins display on your client for testing and content creation. Other players on the server see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Cosmetic preview ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpPlayerEsp', 'gpMapHack', 'gpMenuVisuals', 'gpMenuWorld'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: robRunSystemRequirements,
    fullFeatures: [
      'Player ESP & Rob Run skeleton ESP boxes',
      'Role ESP: cop, robber & civilian filters',
      'Clan tag ESP & party check ESP',
      'Auto-spot & disabled vehicle tags',
      'Vehicle ESP, passengers & capture markers',
      'Directional radar & minimap-style overlay',
      'Streamproof external overlay mode',
      'Distance readouts',
      'Team color filter',
      'Vehicle & police proximity alerts',
      'FOV changer',
      'PvP / loot raids preset config',
      'extraction / night-raid preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Built around a clear Rob Run awareness workflow',
      paragraphs: [
        'Rob Run Lite focuses on skeleton ESP, role ESP (cop, robber, civilian), clan tag ESP, party check ESP, vehicle passenger tags, directional radar and FOV changer—awareness without silent aim or hardlock aimbot. Modules are grouped in the portal so you can tune distance, colors, and stream-proof mode before you queue a battle.',
        'Lite is the entry path for PvP, loot raids and extraction (indoor/outdoor) players who want awareness with minimal report risk. No aimbot, no bots—just readable overlays maintained every patch at cheatsrobrun.org.',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpMenuAimbot', 'gpMapHack', 'gpPlayerEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: robRunSystemRequirements,
    fullFeatures: [
      'All Lite ESP & radar modules',
      'Aimbot, silent aim & humanized presets',
      'Hardlock aimbot key-hold option',
      'No-recoil assist & no spread sliders',
      'Full-auto weapon profiles',
      'Smart Aim & lead prediction',
      'Target selector',
      'Vehicle-specific profiles',
      'Throwable arc assist',
      'FOV circle drawing',
      'Smoothing & delay tuning',
      'Silent-safe default presets',
      'Patrol & vehicle proximity alerts',
      'Test server profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Built around a clear Rob Run combat workflow',
      paragraphs: [
        'Rob Run Pro adds silent aim, humanized aimbot, optional hardlock aimbot, no spread and no recoil assist, plus Smart Aim and vehicle profiles on top of every Lite module. Per-weapon profiles, smoothing and activation keys live in one combat tab—tuned for Kefir PvP when you start with portal presets, not max sliders.',
        'Pro is the most popular tier: enough firepower for busy loot raids and extraction queues without Elite slot limits. Target selector and no-recoil assist keep you efficient mid-fight while settings stay human at default values.',
      ],
    },
  },
  elite: {
    images: slide('gpAutoKill', 'gpFarmBot', 'gpMenuVisuals', 'gpMenuAimbot', 'gpMenuMisc'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: robRunSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Loot ESP, cash ESP, safe & container ESP',
      'Camera ESP & alarm ESP markers',
      'Grenade ESP trajectory helper',
      'Battle mode ESP & instant loot reveal',
      'cash and loot farm helpers',
      'Objective & SL route pathing',
      'Auto pickup & reward tracker',
      'Combat assist',
      'Auto finish helper',
      'Full ESP suite',
      'Event & ticket alerts',
      'Police proximity detector',
      'Cosmetic preview (Unlock All)',
      'Priority patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'Built around a full Rob Run operator workflow',
      paragraphs: [
        'Elite tier is the top combat package—every Lite and Pro module plus loot ESP, cash ESP, safe ESP, container ESP, camera and alarm ESP, grenade trajectory helpers, battle mode ESP, instant loot reveal, cash and loot farm helpers, Cosmetic preview, and priority patch-day delivery.',
        'Elite slots are limited so patch cycles stay fast and builds stay maintainable. Direct dev support in Discord helps you tune conservative profiles before joining loot raids battles. Check the status banner on cheatsrobrun.org before purchase.',
      ],
    },
  },
  'cloud-dma': {
    images: slide('gpMenuMisc', 'gpAutoKill', 'gpMapHack'),
    goodToKnow:
      'Cloud DMA needs stable Ethernet on both ends when possible. Run the portal compatibility scan before purchase day. Read the live status banner for bridge firmware builds.',
    limitations:
      'Cloud DMA is not a ban-proof hardware pass—EAC can still flag accounts. Requires compatible capture hardware and correct cabling. Does not replace HWID recovery after a hardware ban.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit on gaming PC and bridge host (if dual-PC).' },
      { icon: 'reqWifi', text: 'Low-latency LAN or dedicated link between game PC and DMA host.' },
      { icon: 'reqShieldGuide', text: 'Administrator access for portal firmware and driver steps.' },
      { icon: 'reqMailOrder', text: 'Order email from cheatsrobrun.org checkout for portal unlock.' },
    ],
    fullFeatures: [
      'Cloud DMA bridge pairing',
      'Dual-PC overlay path',
      'Encrypted sensor feed',
      'Firmware flash helper',
      'Portal pairing wizard',
      'Latency tuning presets',
      'Stream-proof secondary display',
      'Panic disconnect bind',
      'Config cloud backup',
      'Discord setup support',
    ],
    overview: {
      title: 'Built around a remote overlay bridge workflow',
      paragraphs: [
        'Rob Run Cloud DMA offloads overlay processing to a dedicated bridge so your game PC runs fewer cheat modules locally. The portal walks through pairing, firmware checks and feed encryption before you join PvP or loot raids.',
        'Buy standalone when you already own combat tiers elsewhere, or stack with Lite, Pro or Elite on cheatsrobrun.org for a full operator kit. Check Discord #status before flashing firmware on patch weeks.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpMapHack', 'gpPlayerEsp', 'gpZoomHack'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Rob Run.',
    limitations:
      'Spoofing does not help account-only bans. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Rob Run after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Built around a clear hardware recovery workflow',
      paragraphs: [
        'This Rob Run HWID spoofer helps players recover when Easy Anti-Cheat flags PC hardware but the game account is still clean. Disk and MAC profile tools ship with a restore-point checklist, compatibility scan, and post-spoof verification steps.',
        'Use this path when fresh accounts fail instantly on one machine but work elsewhere—not for account-only bans. After spoofing, load a conservative cheat profile from cheatsrobrun.org before joining a server.',
      ],
    },
  },
  ugc: {
    images: slide('gpMapHack', 'gpPlayerEsp', 'gpZoomHack'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent EAC bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on cheatsrobrun.org.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'Built around account recovery and appeal workflows',
      paragraphs: [
        'UGC (Unban & Governance Control) is our Rob Run account recovery workspace—structured appeal workflows for Steam holds, EAC ban actions and server restrictions, not instant unban guarantees.',
        'Build custom dispute paths, track case status and rebuild your presence with smart restriction-management tools. Support walks you through each step via Discord when you need hands-on help.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinChanger', 'gpPlayerEsp', 'gpMapHack'),
    goodToKnow:
      'Unlock All previews skins locally on your client. Other players on the server see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Steam inventory or store state. Other players cannot see previewed vehicle camos or decals.',
    systemRequirements: robRunSystemRequirements,
    fullFeatures: [
      'Camouflage swap',
      'Clothing & armor skin preview',
      'Deployable & building skin preview',
      'Tool & weapon effect customizer',
      'Loading screen editor',
      'Crosshair & HUD theme',
      'Skin search & catalog',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Built around a local cosmetic preview workflow',
      paragraphs: [
        'This Cosmetic preview / Unlock All utility lets you browse vehicle camos and decals locally in Rob Run—searchable catalog, favorites, and loadout export without modifying live Steam purchases.',
        'Skins display on your client for testing and content creation. Other players see your actual inventory, not preview skins. Included free with Elite; available standalone for cosmetic preview without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'Rob Run Lite' : cheat.name === 'Pro' ? 'Rob Run Pro' : 'Rob Run Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpScripts', 'gpAutoKill', 'gpFarmBot');

export const heroSlides = slide(
  'gpMapHack',
  'gpScripts',
  'gpZoomHack',
  'gpSkinChanger',
  'gpAutoKill',
  'gpFarmBot',
  'gpPlayerEsp',
  'gpGroundEsp',
  'gpMenuVisuals',
  'gpMenuWorld',
  'gpMenuAimbot',
  'gpMenuMisc',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Compare Lite, Pro and Elite Rob Run cheat tiers on Windows PC—screenshots, modules, and checkout on each product card.',
  buyUrl: checkoutPath('robrun'),
};
