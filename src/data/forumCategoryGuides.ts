/** ~One screen of buyer guidance per forum category (matches filter subheadings). */

export interface ForumGuideSection {
  heading: string;
  paragraphs: string[];
}

export interface ForumCategoryGuide {
  category: string;
  filterKey: string;
  intro: string;
  sections: ForumGuideSection[];
}

export const forumCategoryGuides: ForumCategoryGuide[] = [
  {
    category: 'ESP & Radar',
    filterKey: 'espradar',
    intro:
      'Threads here focus on what you actually see on screen: player boxes, loot tags, corner radar, FOV modules, and stream capture. Buyers compare presets—not full config dumps.',
    sections: [
      {
        heading: 'Start with a calm first layout',
        paragraphs: [
          'Most new Lite owners enable everything at once and then complain the overlay is unreadable. A friendlier order is players only, then vehicles, then loot—each with a distance cap you can memorize.',
          'Run one private lobby before you queue for coastal PvP. Note which colors clash with the skybox at dusk. If you cannot parse tags in ten seconds, remove a layer before tweaking saturation.',
        ],
      },
      {
        heading: 'Radar vs world ESP',
        paragraphs: [
          'World ESP tells you what is in front of you; radar tells you what is around the corner. When they disagree, check display mode (borderless vs fullscreen) and radar scale before blaming the module.',
          'Duos often split roles: one voice on radar count and direction, the other keeps eyes on world boxes. Keep callouts short—“two north-east”—instead of reading every blip.',
        ],
      },
      {
        heading: 'Stream and clip safety',
        paragraphs: [
          'Stream-proof helps game capture, not every monitor in a dual-screen setup. Test Discord share and OBS once with a ten-second clip before you go live.',
          'If a friend sees boxes on their stream of your second monitor, switch to game capture only and disable display capture for that session.',
        ],
      },
      {
        heading: 'When to upgrade from Lite',
        paragraphs: [
          'Stay on Lite if information wins you fights. Step toward Pro when you want help with recoil or soft aim—ESP threads will not replace combat modules, but they explain when the upgrade is worth it.',
        ],
      },
    ],
  },
  {
    category: 'Combat Tools',
    filterKey: 'combattools',
    intro:
      'Pro and Elite combat modules: soft aim, no-recoil profiles, trigger timing, and laptop performance. Share ranges and habits—avoid paste-style configs in public.',
    sections: [
      {
        heading: 'Soft aim without looking robotic',
        paragraphs: [
          'Smoothing that is too low snaps; too high arrives late on cops rushing a corner. Most buyers land near mid-single digits with activation only while aiming down sights.',
          'Test in a quiet session first. Change one value per raid until you can describe the feel in one sentence—if you cannot, you are tuning too fast.',
        ],
      },
      {
        heading: 'Recoil per weapon',
        paragraphs: [
          'Universal AK profiles rarely survive the next patch. Build or copy per-weapon curves and note the game build number in your notes app.',
          'Fence fights punish long sprays. Some buyers disable assist after the fifth round and rely on ESP for the reposition instead of fighting the recoil algorithm.',
        ],
      },
      {
        heading: 'Elite helpers and weekend players',
        paragraphs: [
          'Farm and loot helpers shine when you plan routes; casual weekend players often stay on Pro unless they deliberately grind cash.',
          'Elite threads discuss whether extra modules need daily babysitting—not whether the tier is “more undetected.”',
        ],
      },
      {
        heading: 'Performance on weaker GPUs',
        paragraphs: [
          'Full Pro stack plus dense ESP can tank mobile GPUs. Drop skeletons, lower ESP refresh, and shrink aim FOV before you blame the tier.',
        ],
      },
    ],
  },
  {
    category: 'Utilities',
    filterKey: 'utilities',
    intro:
      'HWID recovery, Cloud DMA questions, cosmetic preview, and unlock tools—high-stakes topics. Public threads are for general flow; serials and order emails belong in support.',
    sections: [
      {
        heading: 'HWID and new accounts',
        paragraphs: [
          'A hardware ban is not fixed by a new Steam login alone. Buyers usually run a compatibility scan, consider spoofer utilities, then plan a clean account strategy.',
          'Do not post disk serials or license keys here. Describe the error text and what you already tried.',
        ],
      },
      {
        heading: 'Cloud DMA expectations',
        paragraphs: [
          'Cloud DMA is popular with dual-PC setups. Single-rig buyers should read the utility page carefully—some features still need a host for the feed.',
        ],
      },
      {
        heading: 'Cosmetic preview and screenshots',
        paragraphs: [
          'Unlock / preview tools are often client-side. Screenshots for Discord planning are fine; flexing in lobby may still show your real inventory to friends.',
        ],
      },
      {
        heading: 'Checkout and bundle wording',
        paragraphs: [
          'When Elite mentions preview modules, refresh the portal after payment. Cart text can lag behind product pages during promos.',
        ],
      },
    ],
  },
  {
    category: 'Patch & Loader',
    filterKey: 'patchloader',
    intro:
      'EAC init failures, inject timeouts, hotkeys, and patch-week rituals. These threads save keys by repeating what veterans do before touching a main account.',
    sections: [
      {
        heading: 'Patch-day order of operations',
        paragraphs: [
          'Read the portal banner, patch the game, reboot once, launch without overlays, then run a short private test. Discord panic is not a status page.',
          'If EAC fails before the menu, fix the anti-cheat install before chasing cheat issues.',
        ],
      },
      {
        heading: 'Loader opens but menu hotkey dead',
        paragraphs: [
          'Exclude the loader from Defender, disable competing GPU overlays, and confirm the menu key in the portal profile saved before launch.',
          'Admin rights help some setups hurt others—note what changed when it last worked.',
        ],
      },
      {
        heading: 'Reporting bugs safely',
        paragraphs: [
          'Public posts: symptom, Windows build, tier name. Support tickets: screenshots and reproduction steps. Never paste license strings in open threads.',
        ],
      },
      {
        heading: 'Micro-builds after big patches',
        paragraphs: [
          'When radar offset returns after a game update, stop live raids until a micro-build posts. Veterans treat that pause as normal, not optional.',
        ],
      },
    ],
  },
  {
    category: 'Off Topic',
    filterKey: 'offtopic',
    intro:
      'Meta questions: forum vs Discord, tier bundles, duo routes, and billing. Friendly tone, no leaked patch files or credentials.',
    sections: [
      {
        heading: 'Forum vs Discord',
        paragraphs: [
          'This forum is for readable Q&A you can search later. Discord stays faster for emergencies and private tickets.',
          'Start here when you want preset opinions; jump to support when money or HWID is involved.',
        ],
      },
      {
        heading: 'Picking Lite, Pro, or Elite',
        paragraphs: [
          'Lite wins information fights. Pro adds combat help. Elite stacks helpers and preview tools. Match the tier to hours played, not hype.',
        ],
      },
      {
        heading: 'Routes and teamwork',
        paragraphs: [
          'Route threads share timing ideas, not exact coordinates. ESP makes over-rotation obvious—discuss when to third-party vs when to reset.',
        ],
      },
      {
        heading: 'Billing and wrong tier',
        paragraphs: [
          'If you bought the wrong tier and have not injected yet, support can often redirect you. Include purchase email in the ticket, not in a public reply.',
        ],
      },
    ],
  },
];

export const forumCategoryGuideByKey = Object.fromEntries(
  forumCategoryGuides.map((g) => [g.filterKey, g]),
) as Record<string, ForumCategoryGuide>;
