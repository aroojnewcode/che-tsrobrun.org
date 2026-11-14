/** Rob Run gameplay media (Supabase CDN). Hero uses clearest ESP shots only. */
export const ROB_RUN_MEDIA = {
  robCoastalEsp:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/rob-run/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1794586166042-kyijzb-rob3.webp',
  robBarInterior:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/rob-run/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1794586145548-9ks9ea-rob2.webp',
  robPoliceEsp:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/rob-run/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1794586121785-56w4nn-rob1.webp',
  reviewThumbA:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/rob-run/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794517330812-w1i7jp-neryz-rob-run-cheats-trying-out-the-most-insane-rob-run-cheat-is-it-worth-it-ffu.webp',
  reviewThumbB:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/rob-run/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794517311651-qos8ff-neryz-rob-run-cheats-trying-out-the-most-insane-rob-run-cheat-is-it-worth-it-ffu.webp',
  reviewThumbC:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/rob-run/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794517290334-1gs3l9-neryz-rob-run-cheats-trying-out-the-most-insane-rob-run-cheat-is-it-worth-it-ffu.webp',
  overviewWide:
    'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/rob-run/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794486558855-gfdg64-1.webp',
} as const;

export const ROB_RUN_HERO_SLIDES = [
  {
    src: ROB_RUN_MEDIA.robCoastalEsp,
    alt: 'Rob Run coastal PvP with vehicle ESP, cop tags, and distance labels',
  },
  {
    src: ROB_RUN_MEDIA.robPoliceEsp,
    alt: 'Rob Run police department ESP with player tags, vehicles, and aim FOV',
  },
  {
    src: ROB_RUN_MEDIA.robBarInterior,
    alt: 'Rob Run Reef Bar interior ESP with skeleton overlay and silent aim ring',
  },
] as const;
