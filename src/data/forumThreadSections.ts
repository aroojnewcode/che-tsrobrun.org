import type { ForumGuideSection } from './forumCategoryGuides';

/** Extra subheaded body copy per thread (~one readable page with comments). */
export const forumThreadSections: Record<string, ForumGuideSection[]> = {
  'welcome-read-first': [
    {
      heading: 'What this forum is for',
      paragraphs: [
        'Short buyer Q&A about ESP, radar, combat modules, utilities, and loaders—written like Discord, formatted for search.',
        'It is not the blog. Long setup walkthroughs and checkout explainers stay on product and blog pages.',
      ],
    },
    {
      heading: 'Your first ten minutes',
      paragraphs: [
        'Filter ESP & Radar, sort by Most discussed, open a thread with several replies, and read the TL;DR lines before the full posts.',
        'When something breaks, note Windows version, tier, and error text before you post.',
      ],
    },
    {
      heading: 'What stays private',
      paragraphs: [
        'Payment disputes, HWID details, and license keys go to support. Public posts help the next buyer; tickets help you.',
      ],
    },
  ],
  'esp-include': [
    {
      heading: 'Why coastal servers feel noisy',
      paragraphs: [
        'Coastal PvP stacks civilians, police, duos in cars, and loot on the same sight line. Lite ESP is powerful enough to tag all of them—which is the problem.',
        'The goal is not maximum information; it is the fastest information you can act on without tunnel vision.',
      ],
    },
    {
      heading: 'A sane first-session layout',
      paragraphs: [
        'Enable player boxes and vehicle tags with a 150–200m cap. Add loot after you recognize cop colors without thinking.',
        'Skeletons and thick boxes can wait until radar callouts feel natural.',
      ],
    },
    {
      heading: 'What to ask in replies',
      paragraphs: [
        'Share your resolution and whether you run borderless. Presets that work at 1440p may need thinner boxes at 1080p.',
      ],
    },
  ],
  'esp-setup': [
    {
      heading: 'Symptoms I saw',
      paragraphs: [
        'World ESP stayed glued to players; corner radar lagged a block behind when I sprinted. It felt like two different feeds.',
        'Happened on Windows 11, fullscreen borderless, first week on Lite.',
      ],
    },
    {
      heading: 'What I already tried',
      paragraphs: [
        'Reloaded the default preset, toggled radar scale, rebooted once. Offset improved slightly but did not vanish.',
      ],
    },
    {
      heading: 'Looking for confirmation',
      paragraphs: [
        'Is radar desync usually display mode, scale, or something that needs a portal profile re-save after patch week?',
      ],
    },
  ],
  'fov-settings': [
    {
      heading: 'Indoor fights and recoil',
      paragraphs: [
        'Wider FOV helps peek alleys in bar fights but SMG tracking felt floaty when I pushed past +15%.',
      ],
    },
    {
      heading: 'Reset discipline',
      paragraphs: [
        'I keep a hotkey to native FOV for range fights. Comparing wide vs default for thirty seconds tells me if I overdid it.',
      ],
    },
    {
      heading: 'Asking for defaults',
      paragraphs: [
        'Not looking for ranked advice—just sensible multipliers for close-quarter PvP on Lite.',
      ],
    },
  ],
  'stream-check': [
    {
      heading: 'What failed',
      paragraphs: [
        'OBS game capture looked clean. A friend streaming my second monitor during Discord share saw player boxes.',
      ],
    },
    {
      heading: 'My setup',
      paragraphs: [
        'Dual 1080p displays, stream-proof on, game on primary. I do not usually stream—this was a one-off test.',
      ],
    },
    {
      heading: 'What I need to know',
      paragraphs: [
        'Is stream-proof per-display or global? What is the minimal OBS layout that stays safe for highlights?',
      ],
    },
  ],
  'aim-smooth': [
    {
      heading: 'Police chase context',
      paragraphs: [
        'Soft aim on SMG at 4° FOV. Cops close distance fast—smoothing too low looks snappy; too high arrives late.',
      ],
    },
    {
      heading: 'Tuning approach',
      paragraphs: [
        'Changed one step per private session. Still hunting a value that feels human in third-person clips.',
      ],
    },
    {
      heading: 'Request',
      paragraphs: [
        'Interested in ADS-only activation and chest vs upper-chest bone opinions for Pro.',
      ],
    },
  ],
  'recoil-drill': [
    {
      heading: 'AK fence fights',
      paragraphs: [
        'Third bullet still climbs after 5–6 rounds with a toned-down community profile. Fence lines punish long sprays.',
      ],
    },
    {
      heading: 'Per-gun vs universal',
      paragraphs: [
        'Wondering if veterans maintain separate curves per rifle after each patch note.',
      ],
    },
    {
      heading: 'Goal',
      paragraphs: [
        'Control through ten rounds, not laser beam—trying to stay readable in clips.',
      ],
    },
  ],
  'elite-tools': [
    {
      heading: 'Play time reality',
      paragraphs: [
        'Maybe eight hours a week. Pro already covers ESP and aim. Elite slot opened—curious about farm helpers and preview.',
      ],
    },
    {
      heading: 'Maintenance fear',
      paragraphs: [
        'Do helpers need daily monitoring or are they fire-and-forget for weekend grinders?',
      ],
    },
    {
      heading: 'Decision help',
      paragraphs: [
        'Not asking if Elite is “worth it” globally—whether casual players actually use the extra modules.',
      ],
    },
  ],
  'lite-pro': [
    {
      heading: 'Duo loot focus',
      paragraphs: [
        'Lite ESP/radar cut wipes on coastal runs. We still lose every cop chase on SMG pushes.',
      ],
    },
    {
      heading: 'Upgrade trigger',
      paragraphs: [
        'Debating Pro for soft aim + no-recoil vs better comms and positioning with what we have.',
      ],
    },
    {
      heading: 'Poll intent',
      paragraphs: [
        'Did your squad upgrade when you started hunting players, not just loot?',
      ],
    },
  ],
  'hwid-check': [
    {
      heading: 'After the flag',
      paragraphs: [
        'Hardware ban popup on main work PC. Account gone; cannot risk another blind re-buy.',
      ],
    },
    {
      heading: 'Options on the table',
      paragraphs: [
        'Spoofer first vs compatibility scan vs new account strategy—what order did you use?',
      ],
    },
    {
      heading: 'Privacy',
      paragraphs: [
        'Will not post serials—looking for high-level flow only.',
      ],
    },
  ],
  'skin-info': [
    {
      heading: 'Preview use case',
      paragraphs: [
        'Want Discord thumbnails without buying every camo. Unlock All for local preview.',
      ],
    },
    {
      heading: 'What friends see',
      paragraphs: [
        'Screenshots show camo on my character; squad says real inventory unchanged in lobby.',
      ],
    },
    {
      heading: 'Expectation check',
      paragraphs: [
        'Assuming client-side only—confirming that is normal.',
      ],
    },
  ],
  'eac-init': [
    {
      heading: 'When it broke',
      paragraphs: [
        'Windows update overnight. Game dies at Easy Anti-Cheat init—cheat not loaded yet.',
      ],
    },
    {
      heading: 'Already tried',
      paragraphs: [
        'Verified files, reinstalled EAC from game folder, disabled GeForce overlay temporarily.',
      ],
    },
    {
      heading: 'Ask',
      paragraphs: [
        'Anyone fixed without full Windows reinstall? Looking for checklist order.',
      ],
    },
  ],
  'after-patch': [
    {
      heading: 'My ritual',
      paragraphs: [
        'Private lobby ten minutes, one low-pop extract, then main account. Feels slow but safe.',
      ],
    },
    {
      heading: 'Community noise',
      paragraphs: [
        'Portal says testing; Discord screams “good to go.” Which signal do you trust?',
      ],
    },
    {
      heading: 'When to stop',
      paragraphs: [
        'If radar offset returns, I pause until micro-build—confirming that is normal.',
      ],
    },
  ],
  'ext-loader': [
    {
      heading: 'Symptoms',
      paragraphs: [
        'Portal download fine, inject reports success, INSERT never opens menu. Game runs.',
      ],
    },
    {
      heading: 'Environment',
      paragraphs: [
        'Fresh Pro key, Defender exclusion added, tried admin and non-admin.',
      ],
    },
    {
      heading: 'Next steps',
      paragraphs: [
        'Suspecting overlay conflict—what did you disable first?',
      ],
    },
  ],
  'pre-install': [
    {
      heading: 'Single PC',
      paragraphs: [
        'One gaming box only. Read Cloud DMA page—thought DMA always meant two machines.',
      ],
    },
    {
      heading: 'Goal',
      paragraphs: [
        'Reduce local footprint after a scare, not build a broadcast rig.',
      ],
    },
    {
      heading: 'Question',
      paragraphs: [
        'Is Cloud DMA still useful solo or strictly dual-PC?',
      ],
    },
  ],
  'choose-tier': [
    {
      heading: 'Found via comparison',
      paragraphs: [
        'Tier table on site led me here. Prefer reading threads over scrolling support chat.',
      ],
    },
    {
      heading: 'Sync question',
      paragraphs: [
        'Are these posts mirrored from Discord or separate buyer discussions?',
      ],
    },
    {
      heading: 'Expectation',
      paragraphs: [
        'Want searchable answers, not live rescue.',
      ],
    },
  ],
  'admin-official': [
    {
      heading: 'Duo coastal routes',
      paragraphs: [
        'ESP helps spot squads but we third-party at wrong times. Timing tips only—no coords.',
      ],
    },
    {
      heading: 'Audio vs radar',
      paragraphs: [
        'When two teams on same pier, do you wait for first contact sound or push off radar count?',
      ],
    },
    {
      heading: 'Share style',
      paragraphs: [
        'General rotation ideas welcome; keep spots vague.',
      ],
    },
  ],
  'lite-or-pro': [
    {
      heading: 'Pistol fights',
      paragraphs: [
        'Trigger assist fired through bush—felt like pref fire on cop. High delay still snappy.',
      ],
    },
    {
      heading: 'Weapon split',
      paragraphs: [
        'Considering pistol-specific config off or much higher delay.',
      ],
    },
    {
      heading: 'Ask',
      paragraphs: [
        'How do you tune trigger for CQB without looking robotic?',
      ],
    },
  ],
  'spray-server': [
    {
      heading: 'Night raids',
      paragraphs: [
        '300m radar floods AI and props. Players blend into dark assets.',
      ],
    },
    {
      heading: 'Preset ask',
      paragraphs: [
        'Settings ranges only—no full dump. Need night-map quiet radar.',
      ],
    },
    {
      heading: 'Tradeoff',
      paragraphs: [
        'Willing to lose long-range blips for clean audio cues.',
      ],
    },
  ],
  'f1-console': [
    {
      heading: 'Checkout confusion',
      paragraphs: [
        'Elite page mentions preview; cart shows combat modules only after missed sale.',
      ],
    },
    {
      heading: 'Timing',
      paragraphs: [
        'Wondering if bundle wording changed or portal lag.',
      ],
    },
    {
      heading: 'Verify path',
      paragraphs: [
        'Where do you confirm what unlocked post-payment?',
      ],
    },
  ],
  'spray-safe': [
    {
      heading: 'Laptop thermals',
      paragraphs: [
        'GTX 1650 mobile: 60fps to 40 with full Pro + dense ESP after twenty minutes.',
      ],
    },
    {
      heading: 'Priority',
      paragraphs: [
        'Drop skeletons first or lower ESP refresh? Aim FOV already small.',
      ],
    },
    {
      heading: 'Goal',
      paragraphs: [
        'Playable temps without stripping everything.',
      ],
    },
  ],
  'esp-colorblind': [
    {
      heading: 'Visibility issue',
      paragraphs: [
        'Red/green defaults stack on coastal dusk. Deutan—need fast read, not neon.',
      ],
    },
    {
      heading: 'Palette idea',
      paragraphs: [
        'Blue vs yellow enemies/teammates, thicker boxes, skeletons off until comfortable.',
      ],
    },
    {
      heading: 'Stream note',
      paragraphs: [
        'Colors that work solo can blow out on OBS—testing both.',
      ],
    },
  ],
  'wrong-tier-help': [
    {
      heading: 'Purchase moment',
      paragraphs: [
        'Clicked Pro for aim mention; only need ESP/radar duo loot. Key not injected yet.',
      ],
    },
    {
      heading: 'Fear',
      paragraphs: [
        'Burning license or double-buying if I guess wrong in portal.',
      ],
    },
    {
      heading: 'Ask support flow',
      paragraphs: [
        'What do you send support for tier correction?',
      ],
    },
  ],
  'duo-radar-comms': [
    {
      heading: 'Roles',
      paragraphs: [
        'Driver watches radar, passenger loots. Four blips = talking over each other.',
      ],
    },
    {
      heading: 'Callout format',
      paragraphs: [
        'Trying “count + direction” only; 150m cap. Still noisy on hot drops.',
      ],
    },
    {
      heading: 'Ask',
      paragraphs: [
        'Trim AI dots or agree on code words first?',
      ],
    },
  ],
  'patch-status-check': [
    {
      heading: 'Second patch as buyer',
      paragraphs: [
        'Game bumped overnight. Discord loud; portal quieter. Do not want toasted key.',
      ],
    },
    {
      heading: 'Checklist draft',
      paragraphs: [
        'Portal banner → reboot → private test → low-pop raid. Sounds right?',
      ],
    },
    {
      heading: 'EAC first',
      paragraphs: [
        'If menu never loads, cheat stack irrelevant—agree?',
      ],
    },
  ],
  'report-thread-safely': [
    {
      heading: 'Loader timeout',
      paragraphs: [
        'Inject times out; game fine without tool. Reproducible on cold boot.',
      ],
    },
    {
      heading: 'Public vs ticket',
      paragraphs: [
        'Want to ask if others see 0x… without pasting logs or emails.',
      ],
    },
    {
      heading: 'Etiquette',
      paragraphs: [
        'Symptom + build + tier here; screenshots in support.',
      ],
    },
  ],
};
