import { forumThreadSections } from './forumThreadSections';

export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumSection {
  heading: string;
  paragraphs: string[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  /** One-line friendly summary shown on index and thread pages */
  tldr?: string;
  body: string[];
  /** Subheaded sections (~one page with intro + replies) */
  sections?: ForumSection[];
  comments: ForumComment[];
  /** Unix ms — used for “Latest” sort on the forum index */
  publishedAt: number;
}

export const forumCategories = [
  { name: 'ESP & Radar', tone: 'blue', icon: 'featureEsp' },
  { name: 'Combat Tools', tone: 'purple', icon: 'toolkitCombat' },
  { name: 'Utilities', tone: 'green', icon: 'featureUtilitySuite' },
  { name: 'Patch & Loader', tone: 'orange', icon: 'refresh' },
  { name: 'Off Topic', tone: 'green', icon: 'messageCircle' },
] as const;

const DAY = 86_400_000;
const now = Date.now();

function countComments(comments: ForumComment[]): number {
  return comments.reduce((n, c) => n + 1 + (c.replies?.length ?? 0), 0);
}

function thread(
  post: Omit<ForumPost, 'commentsCount'> & { comments: ForumComment[] },
): ForumPost {
  return { ...post, commentsCount: countComments(post.comments) };
}

export const forumPosts: ForumPost[] = [
  thread({
    slug: 'welcome-read-first',
    category: 'Off Topic',
    categoryTone: 'green',
    title: 'New buyer? Read this before your first ESP session',
    excerpt:
      'Five-minute checklist: test lobby, minimal overlay, panic key, and when to open a support ticket.',
    author: 'buyer_onboarding',
    age: 'Pinned',
    upvotes: 128,
    flair: 'Start here',
    tldr: 'Test in a private lobby first—keep the overlay simple until you recognize every icon on screen.',
    publishedAt: now - 30 * 60_000,
    body: [
      'Welcome—this forum is for quick buyer Q&A, not step-by-step guides. Start with one category filter (ESP & Radar is the usual pick).',
      'Before going live: private lobby → enable only player boxes → set a panic key → note your Windows version. If the loader fails, skip straight to support with a screenshot.',
    ],
    comments: [
      {
        author: 'radar_mike',
        age: '2 days ago',
        score: 42,
        body: 'Agree on panic key. Streamers should test OBS capture once before ranked sessions.',
      },
      {
        author: 'support_reader',
        age: '2 days ago',
        score: 28,
        body: 'Never paste order IDs here—use the support portal for HWID and payment issues.',
      },
    ],
  }),
  thread({
    slug: 'esp-include',
    category: 'ESP & Radar',
    categoryTone: 'blue',
    title: 'What should Lite ESP show on a busy coastal server?',
    excerpt:
      'Trying to balance player boxes, cop alerts and vehicle tags without turning the screen into Christmas lights.',
    author: 'coastal_runner',
    age: '2 hours ago',
    upvotes: 94,
    flair: 'Question',
    tldr: 'Turn on players and vehicles first; add loot ESP only after the layout feels readable.',
    publishedAt: now - 2 * 3_600_000,
    body: [
      'I picked up Lite mostly for player ESP and the mini radar. On coastal PvP there are cops, civilians and duos in cars everywhere.',
      'What do you actually leave enabled for a first session—skeletons on, max distance, loot boxes? Curious what everyone runs before they start tweaking colors.',
    ],
    comments: [
      {
        author: 'radar_mike',
        age: '1 hour ago',
        score: 31,
        body: 'Start with players + vehicles only, 150–200m cap. Add loot ESP after you can read tags without staring at the overlay.',
        replies: [
          {
            author: 'coastal_runner',
            age: '55 min ago',
            score: 8,
            body: 'That helped—dropping loot tags until I learned cop colors stopped the clutter.',
          },
        ],
      },
      {
        author: 'night_raid_99',
        age: '48 min ago',
        score: 19,
        body: 'Bind a panic key that toggles ESP off if you stream or clip highlights. Saved me twice when a friend joined Discord share.',
      },
    ],
  }),
  thread({
    slug: 'esp-setup',
    category: 'ESP & Radar',
    categoryTone: 'blue',
    title: 'First overlay test—ESP lines up but radar feels offset',
    excerpt:
      'Loot and player boxes look correct in a private lobby, but the corner radar lags a block behind my actual position.',
    author: 'fence_line_duo',
    age: '5 hours ago',
    upvotes: 61,
    flair: 'Troubleshooting',
    publishedAt: now - 5 * 3_600_000,
    body: [
      'Ran my first Lite session on a low-pop server. ESP distance and skeleton colors are fine, but the radar blip drifts when I sprint around corners.',
      'Anyone else see desync between world ESP and the radar panel? Windows 11, 1080p fullscreen borderless.',
    ],
    comments: [
      {
        author: 'urban_esp',
        age: '4 hours ago',
        score: 22,
        body: 'Switch to borderless windowed once, reload preset, then back to fullscreen. Fixed offset for me after a patch week.',
      },
      {
        author: 'loot_watcher',
        age: '3 hours ago',
        score: 11,
        body: 'Also lower radar scale—at 1.4x the lag is more obvious on tight maps.',
      },
    ],
  }),
  thread({
    slug: 'fov-settings',
    category: 'ESP & Radar',
    categoryTone: 'blue',
    title: 'FOV hack vs native FOV—what feels fair in CQB?',
    excerpt: 'Wider FOV helps peeking alleys but I lose track of SMG recoil. Looking for sensible defaults.',
    author: 'reef_bar_main',
    age: '8 hours ago',
    upvotes: 44,
    flair: 'Discussion',
    publishedAt: now - 8 * 3_600_000,
    body: [
      'Lite FOV module is nice for indoor fights but I overdid it and everything looked stretched. What multiplier do you leave for bar interior fights?',
    ],
    comments: [
      {
        author: 'smg_sweeper',
        age: '7 hours ago',
        score: 17,
        body: '+10–15% max for me. Anything past that and tracking feels floaty.',
      },
    ],
  }),
  thread({
    slug: 'stream-check',
    category: 'ESP & Radar',
    categoryTone: 'blue',
    title: 'Stream-proof check failed on second monitor',
    excerpt: 'ESP hidden on main display capture but flashed on Discord stream of monitor 2.',
    author: 'clip_friendly',
    age: '1 day ago',
    upvotes: 28,
    flair: 'OBS',
    publishedAt: now - DAY,
    body: [
      'Recorded a 30s clip with OBS game capture—clean. Friend streamed my second monitor and saw player boxes. Is stream-proof per-monitor or global?',
    ],
    comments: [
      {
        author: 'obs_tinker',
        age: '20 hours ago',
        score: 14,
        body: 'Capture only the game display in OBS; disable display capture on dual setup. Retest with a private VOD before going live.',
      },
    ],
  }),
  thread({
    slug: 'aim-smooth',
    category: 'Combat Tools',
    categoryTone: 'purple',
    title: 'Pro soft aim—smoothing 6 feels robotic, 12 feels late',
    excerpt: 'Trying to find human-looking settings for police chases without snapping.',
    author: 'pvp_lane',
    age: '3 hours ago',
    upvotes: 72,
    flair: 'Pro tier',
    publishedAt: now - 3 * 3_600_000,
    body: [
      'Upgraded to Pro for soft aim on SMG fights. FOV circle at 4° but smoothing is the hard part—either obvious or too slow for cops rushing me.',
    ],
    comments: [
      {
        author: 'bone_picker',
        age: '2 hours ago',
        score: 26,
        body: 'Try smoothing 9, chest bone, activation on ADS only. Test in a private lobby before cops-only servers.',
      },
      {
        author: 'pvp_lane',
        age: '1 hour ago',
        score: 9,
        body: 'ADS-only was the missing piece, thanks.',
      },
    ],
  }),
  thread({
    slug: 'recoil-drill',
    category: 'Combat Tools',
    categoryTone: 'purple',
    title: 'No-recoil profile for AK—still climbs on long bursts',
    excerpt: 'Pro no-recoil assist on but third bullet still kicks up in fence fights.',
    author: 'ak_or_nothing',
    age: '6 hours ago',
    upvotes: 39,
    flair: 'Help',
    publishedAt: now - 6 * 3_600_000,
    body: [
      'Copied a community AK profile from Discord and toned it down 20%. Still loses control after 5–6 rounds. Separate profiles per weapon or one universal?',
    ],
    comments: [
      {
        author: 'spray_control',
        age: '5 hours ago',
        score: 18,
        body: 'Per-weapon. Generic profiles never match Rob Run recoil patterns after the last patch.',
      },
    ],
  }),
  thread({
    slug: 'elite-tools',
    category: 'Combat Tools',
    categoryTone: 'purple',
    title: 'Elite farm helpers—worth it if I only play weekends?',
    excerpt: 'Casual player wondering if cash/loot helpers matter for 8 hours a week.',
    author: 'weekend_warrior',
    age: '12 hours ago',
    upvotes: 51,
    flair: 'Elite',
    publishedAt: now - 12 * 3_600_000,
    body: [
      'Already on Pro and happy. Elite slot opened up—mainly interested in farm routes and cosmetic preview. Do helpers need daily monitoring?',
    ],
    comments: [
      {
        author: 'elite_grinder',
        age: '10 hours ago',
        score: 21,
        body: 'If you only raid weekends, Pro is enough unless you grind cash deliberately. Preview is nice for skins without market buys.',
      },
    ],
  }),
  thread({
    slug: 'lite-pro',
    category: 'Combat Tools',
    categoryTone: 'purple',
    title: 'Staying on Lite or biting the bullet for Pro?',
    excerpt: 'ESP is enough for duo loot runs but we lose every cop chase.',
    author: 'duo_extract',
    age: '1 day ago',
    upvotes: 67,
    flair: 'Poll',
    publishedAt: now - DAY - 2 * 3_600_000,
    body: [
      'Two-man team: Lite ESP/radar saved us a ton of wipes. Close fights we still lose to cops with SMGs. Is Pro aim assist the usual upgrade path?',
    ],
    comments: [
      {
        author: 'one_more_raid',
        age: '22 hours ago',
        score: 24,
        body: 'Most squads go Lite → Pro when they start hunting players, not just loot. Soft aim + no-recoil is the jump.',
      },
    ],
  }),
  thread({
    slug: 'hwid-check',
    category: 'Utilities',
    categoryTone: 'green',
    title: 'HWID flag—new Steam account or spoofer first?',
    excerpt: 'EAC hardware ban message after a bad week. Main PC only, no alt parts.',
    author: 'flagged_pc',
    age: '9 hours ago',
    upvotes: 33,
    flair: 'HWID',
    publishedAt: now - 9 * 3_600_000,
    body: [
      'Got the hardware ban popup. Account is toast but I need this PC for work. Did people spoof first or buy HWID utility before a new account?',
    ],
    comments: [
      {
        author: 'restore_point',
        age: '8 hours ago',
        score: 15,
        body: 'Restore point + compatibility scan from the portal before anything else. New account on same disk without spoof is asking for a reconnect.',
      },
      {
        author: 'support_reader',
        age: '6 hours ago',
        score: 11,
        body: 'Open a support ticket with error screenshot—don’t stack random registry cleaners.',
      },
    ],
  }),
  thread({
    slug: 'skin-info',
    category: 'Utilities',
    categoryTone: 'green',
    title: 'Unlock All—do preview skins show in screenshots?',
    excerpt: 'Want thumbnails for Discord without buying every camo.',
    author: 'style_tester',
    age: '14 hours ago',
    upvotes: 22,
    flair: 'Cosmetics',
    publishedAt: now - 14 * 3_600_000,
    body: [
      'Standalone Unlock All for local preview. Screenshots show the camo on my character but friends say they still see my real inventory in-game. Expected?',
    ],
    comments: [
      {
        author: 'local_only',
        age: '12 hours ago',
        score: 19,
        body: 'Yeah—client-side only. Great for planning loadouts, not for flexing in lobby.',
      },
    ],
  }),
  thread({
    slug: 'eac-init',
    category: 'Patch & Loader',
    categoryTone: 'orange',
    title: 'Easy Anti-Cheat failed to initialize after Windows update',
    excerpt: 'Game won’t launch—EAC error before main menu. Cheat not even loaded yet.',
    author: 'patch_victim',
    age: '4 hours ago',
    upvotes: 41,
    flair: 'EAC',
    publishedAt: now - 4 * 3_600_000,
    body: [
      'KB503xxx installed overnight. Rob Run dies on EAC init. Verified files, reinstalled EAC, still stuck. Anyone fixed without reinstalling Windows?',
    ],
    comments: [
      {
        author: 'eac_vet',
        age: '3 hours ago',
        score: 20,
        body: 'Disable overlay software (GeForce, Discord legacy overlay), reboot, run EAC setup exe as admin from the game folder.',
      },
    ],
  }),
  thread({
    slug: 'after-patch',
    category: 'Patch & Loader',
    categoryTone: 'orange',
    title: 'Post-patch ritual—how long do you wait before live raids?',
    excerpt: 'Status says testing; Discord says online. Who actually waits?',
    author: 'patch_day_vet',
    age: '7 hours ago',
    upvotes: 58,
    flair: 'Patch day',
    publishedAt: now - 7 * 3_600_000,
    body: [
      'New build dropped. I usually private lobby 10 minutes, then one low-pop extract before bringing out the main account. Overkill or normal?',
    ],
    comments: [
      {
        author: 'roamer_main_5',
        age: '6 hours ago',
        score: 16,
        body: 'Same flow. If radar offsets after patch, I stop until a micro-build posts.',
      },
    ],
  }),
  thread({
    slug: 'ext-loader',
    category: 'Patch & Loader',
    categoryTone: 'orange',
    title: 'Loader opens but overlay hotkey does nothing',
    excerpt: 'Portal download fine, game runs, INSERT does not toggle menu.',
    author: 'loader_stuck',
    age: '11 hours ago',
    upvotes: 36,
    flair: 'Loader',
    publishedAt: now - 11 * 3_600_000,
    body: [
      'Fresh Pro key. Loader injects without error text but overlay never shows. Tried running as admin and excluding from Defender. What am I missing?',
    ],
    comments: [
      {
        author: 'hotkey_guru',
        age: '10 hours ago',
        score: 22,
        body: 'Check conflict with Steam overlay and GPU overlay both off. Rebind menu key in portal profile and save before launch.',
      },
    ],
  }),
  thread({
    slug: 'pre-install',
    category: 'Utilities',
    categoryTone: 'green',
    title: 'Cloud DMA worth it on a single PC?',
    excerpt: 'Saw the utility page—thought DMA always meant two machines.',
    author: 'single_rig',
    age: '2 days ago',
    upvotes: 29,
    flair: 'Cloud DMA',
    publishedAt: now - 2 * DAY,
    body: [
      'Only one gaming box. Cloud DMA still useful or is it strictly dual-PC? Trying to reduce local footprint after a scare.',
    ],
    comments: [
      {
        author: 'bridge_host',
        age: '1 day ago',
        score: 13,
        body: 'Dual-PC is the common setup. Cloud bridge still needs a host for the feed—read the compatibility scan before buying.',
      },
    ],
  }),
  thread({
    slug: 'choose-tier',
    category: 'Off Topic',
    categoryTone: 'green',
    title: 'New here—how active is this forum vs Discord?',
    excerpt: 'Prefer reading threads over scrolling #support.',
    author: 'lurker_101',
    age: '3 days ago',
    upvotes: 47,
    flair: 'Meta',
    publishedAt: now - 3 * DAY,
    body: [
      'Found the site through a tier comparison. Is this forum synced with Discord or separate buyer discussions only?',
    ],
    comments: [
      {
        author: 'mod_style',
        age: '2 days ago',
        score: 28,
        body: 'Mostly buyer threads here. Patch emergencies and ticket responses still go to Discord support.',
      },
    ],
  }),
  thread({
    slug: 'admin-official',
    category: 'Off Topic',
    categoryTone: 'green',
    title: 'Share your loot route for coastal duos (no coords pls)',
    excerpt: 'Looking for general timing tips—when to hit gas stations vs docks.',
    author: 'coastal_duo',
    age: '18 hours ago',
    upvotes: 83,
    flair: 'Routes',
    publishedAt: now - 18 * 3_600_000,
    body: [
      'ESP makes it easy to spot squads but we keep third-partying at the wrong time. How do you rotate when radar shows two teams on the same pier?',
    ],
    comments: [
      {
        author: 'map_reader',
        age: '16 hours ago',
        score: 25,
        body: 'Wait for first contact audio—if one team wipes fast, push the rez window. Otherwise circle wide with vehicle ESP off until tags thin.',
      },
    ],
  }),
  thread({
    slug: 'lite-or-pro',
    category: 'Combat Tools',
    categoryTone: 'purple',
    title: 'Trigger bot too obvious on pistol fights?',
    excerpt: 'Pro trigger fired on a cop through a bush—felt like instant pref fire.',
    author: 'trigger_shy',
    age: '1 day ago',
    upvotes: 31,
    flair: 'Pro',
    publishedAt: now - DAY - 4 * 3_600_000,
    body: [
      'Turned trigger assist on with a high delay but it still snapped when a player crossed a gap. Disable for pistols only or tune delay more?',
    ],
    comments: [
      {
        author: 'legit_aim',
        age: '20 hours ago',
        score: 14,
        body: 'Separate weapon class config. Pistols off or delay 120ms+ if you insist.',
      },
    ],
  }),
  thread({
    slug: 'spray-server',
    category: 'ESP & Radar',
    categoryTone: 'blue',
    title: 'Radar range for night raids—300m too noisy?',
    excerpt: 'Night map players blend in; radar picks every AI and static prop.',
    author: 'night_owl',
    age: '2 days ago',
    upvotes: 26,
    flair: 'Radar',
    publishedAt: now - 2 * DAY - 3 * 3_600_000,
    body: [
      'Dropping player-only filter helps but AI dots still flood the panel. Anyone run a night preset they can share settings for (not a full config dump)?',
    ],
    comments: [
      {
        author: 'radar_mike',
        age: '1 day ago',
        score: 11,
        body: 'Cut AI layer, 180m player cap, brighten player color only. Makes audio cues readable again.',
      },
    ],
  }),
  thread({
    slug: 'f1-console',
    category: 'Off Topic',
    categoryTone: 'green',
    title: 'Missed the sale—does checkout still bundle Unlock All with Elite?',
    excerpt: 'Saw old posts saying preview included; cart only shows combat modules.',
    author: 'sale_watcher',
    age: '2 days ago',
    upvotes: 19,
    flair: 'Checkout',
    publishedAt: now - 2 * DAY,
    body: [
      'Elite page lists cosmetic preview but my checkout link does not mention it. Did bundle wording change?',
    ],
    comments: [
      {
        author: 'tier_checker',
        age: '36 hours ago',
        score: 8,
        body: 'Elite still includes preview per product page—refresh portal after payment, modules unlock separately.',
      },
    ],
  }),
  thread({
    slug: 'spray-safe',
    category: 'Combat Tools',
    categoryTone: 'purple',
    title: 'Pro on laptop iGPU—FPS tank when ESP + aim both on',
    excerpt: 'GTX 1650 mobile, 60fps drops to 40 with full Pro stack.',
    author: 'laptop_heat',
    age: '3 days ago',
    upvotes: 34,
    flair: 'Performance',
    publishedAt: now - 3 * DAY,
    body: [
      'Thermal throttling after 20 minutes. Disable skeletons or lower ESP refresh first?',
    ],
    comments: [
      {
        author: 'fps_first',
        age: '2 days ago',
        score: 17,
        body: 'Boxes only, 30Hz ESP refresh, aim FOV smaller. Laptop dies with “everything on”.',
      },
    ],
  }),
  thread({
    slug: 'esp-colorblind',
    category: 'ESP & Radar',
    categoryTone: 'blue',
    title: 'ESP colors for color-blind setup—what actually works?',
    excerpt:
      'Red/green player tags blend together for me. Looking for a high-contrast preset that still looks normal on stream.',
    author: 'cb_friendly',
    age: '4 hours ago',
    upvotes: 37,
    flair: 'Accessibility',
    tldr: 'Use blue vs yellow for enemies/teammates and thicker boxes—skeletons can stay off until you are comfortable.',
    publishedAt: now - 4 * 3_600_000,
    body: [
      'Deutans here. Default presets are rough on coastal maps at dusk. I do not need crazy colors—just a combo that reads fast when three tags stack.',
      'Happy to share hex codes if someone has a calm palette that does not glow neon in clips.',
    ],
    comments: [
      {
        author: 'loot_watcher',
        age: '3 hours ago',
        score: 21,
        body: 'Blue enemy + amber squad + white vehicles. Bump box thickness one step instead of neon saturation.',
      },
      {
        author: 'clip_friendly',
        age: '2 hours ago',
        score: 9,
        body: 'If you stream, mute saturation before testing—what looks fine solo can blow out on capture.',
      },
    ],
  }),
  thread({
    slug: 'wrong-tier-help',
    category: 'Off Topic',
    categoryTone: 'green',
    title: 'Bought Pro but only wanted ESP—can I switch tiers?',
    excerpt:
      'Checkout went through and I opened the portal. Lite might have been enough; scared to mess up the license.',
    author: 'first_purchase',
    age: '6 hours ago',
    upvotes: 52,
    flair: 'Billing',
    tldr: 'Open support with your order email—staff can point you to the right tier without you guessing in the portal.',
    publishedAt: now - 6 * 3_600_000,
    body: [
      'Brand-new buyer. I clicked Pro because the comparison table mentioned aim assist, but all I need right now is ESP and radar for duo loot.',
      'Is there a clean upgrade/downgrade path or do I burn the key? I have not injected yet.',
    ],
    comments: [
      {
        author: 'support_reader',
        age: '5 hours ago',
        score: 34,
        body: 'If you have not injected, support can usually sort tier moves fast. Include purchase email—no passwords in this thread.',
      },
      {
        author: 'duo_extract',
        age: '4 hours ago',
        score: 12,
        body: 'Many teams start Lite and move to Pro later anyway. If you already paid, see what support offers before you panic-buy twice.',
      },
    ],
  }),
  thread({
    slug: 'duo-radar-comms',
    category: 'ESP & Radar',
    categoryTone: 'blue',
    title: 'Duos: how do you call radar contacts without tunnel vision?',
    excerpt:
      'Driver watches radar, passenger loots—we keep talking over each other when four blips stack.',
    author: 'driver_passenger',
    age: '10 hours ago',
    upvotes: 41,
    flair: 'Duo play',
    tldr: 'Call only “two threats north-east” style pings; driver keeps voice short so passenger is not staring at the minimap.',
    publishedAt: now - 10 * 3_600_000,
    body: [
      'We run Lite with shared Discord. Radar shows more than we can say in three seconds. Do you trim AI dots, lower range, or use a callout map grid?',
    ],
    comments: [
      {
        author: 'map_reader',
        age: '9 hours ago',
        score: 18,
        body: 'Driver owns radar audio. Passenger repeats only threat count + direction. 150m cap stops info overload.',
      },
    ],
  }),
  thread({
    slug: 'patch-status-check',
    category: 'Patch & Loader',
    categoryTone: 'orange',
    title: 'Where do you check if cheats are safe after a Rob Run patch?',
    excerpt:
      'Game updated overnight—Discord is loud, status page is quieter. What is the sane order of checks?',
    author: 'patch_day_newbie',
    age: '1 day ago',
    upvotes: 64,
    flair: 'Patch day',
    tldr: 'Portal status → short private test → one low-pop raid. Skip mains until a micro-build posts.',
    publishedAt: now - DAY - 6 * 3_600_000,
    body: [
      'Second patch since I bought in. I do not want to toast a key because I rushed. What is your actual checklist when the game version bumps?',
    ],
    comments: [
      {
        author: 'patch_day_vet',
        age: '22 hours ago',
        score: 27,
        body: 'Same as the vets here: read portal banner, test 5 minutes solo, then one quiet extract. Discord rumors come after that—not before.',
      },
      {
        author: 'eac_vet',
        age: '20 hours ago',
        score: 14,
        body: 'If EAC itself fails before the menu, fix that first—cheat stack is irrelevant until the game launches clean.',
      },
    ],
  }),
  thread({
    slug: 'report-thread-safely',
    category: 'Patch & Loader',
    categoryTone: 'orange',
    title: 'Reporting a loader bug in public—what is safe to share?',
    excerpt:
      'Want to ask if anyone else sees error 0x… without leaking account info or paste dumps.',
    author: 'safe_reporter',
    age: '15 hours ago',
    upvotes: 29,
    flair: 'Etiquette',
    tldr: 'Share Windows version + error text + tier—never keys, emails, or full log files in open threads.',
    publishedAt: now - 15 * 3_600_000,
    body: [
      'Loader times out on inject but the game runs fine without the tool. I can reproduce but I do not know what is okay to post here vs support.',
    ],
    comments: [
      {
        author: 'support_reader',
        age: '14 hours ago',
        score: 22,
        body: 'Forum: symptom + build number + “already tried reboot.” Support: screenshot + ticket ID stuff. Never paste license strings publicly.',
      },
    ],
  }),
];

function enrichPost(post: ForumPost): ForumPost {
  const sections = forumThreadSections[post.slug];
  if (!sections?.length) return post;
  return { ...post, sections };
}

export function getForumPost(slug: string): ForumPost | undefined {
  const post = forumPosts.find((p) => p.slug === slug);
  return post ? enrichPost(post) : undefined;
}

/** Index cards can show section count / full list uses enriched posts. */
export function getForumPostsEnriched(): ForumPost[] {
  return forumPosts.map(enrichPost);
}
