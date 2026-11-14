/** Rob Run cheat gameplay screenshots — every entry includes alt text. */

export interface GameplayImage {
  id: string;
  src: string;
  /** Blog cover / card path (same asset under /images/blog). */
  blogSrc: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

const gameplay = '/images/gameplay';
const blog = '/images/blog';

export const gameplayImages = {
  espRadar: {
    id: 'espRadar',
    src: `${gameplay}/rr-esp-radar.png`,
    blogSrc: `${blog}/rr-esp-radar.png`,
    alt: 'Rob Run radar overlay with loot ESP tags on cash stacks, safes, and players through an urban block',
    caption: 'Loot ESP & radar',
    captionDesc: 'Highlight safes, cash stacks, and players through walls with distance and role tags on night raids.',
  },
  vehicleEsp: {
    id: 'vehicleEsp',
    src: `${gameplay}/rr-vehicle-esp.png`,
    blogSrc: `${blog}/rr-vehicle-esp.png`,
    alt: 'Rob Run player ESP showing player model third-person view with green and red players boxes, player names and distance labels over a city block',
    caption: 'Air loot ESP',
    captionDesc: 'Track cops, bandits and getaway vehicles by name, role and range before they enter visual range.',
  },
  combatOverlay: {
    id: 'combatOverlay',
    src: `${gameplay}/rr-combat-overlay.png`,
    blogSrc: `${blog}/rr-combat-overlay.png`,
    alt: 'Rob Run cheat gameplay combat overlay highlighting enemy vehicles with ESP boxes and distance tags during a live battle',
    caption: 'Combat ESP overlay',
    captionDesc: 'Readable boxes and tags stay useful mid-fight without cluttering your reticle.',
  },
  aimbotFov: {
    id: 'aimbotFov',
    src: `${gameplay}/rr-aimbot-fov.png`,
    blogSrc: `${blog}/rr-aimbot-fov.png`,
    alt: 'Rob Run ADS view with green 3D ESP boxes around bandits and cops nearby plus meter distances on a urban district',
    caption: 'Player ESP in optics',
    captionDesc: 'See enemy players through smoke and foliage with model and distance readouts in the iron sights.',
  },
  airEsp: {
    id: 'airEsp',
    src: `${gameplay}/rr-air-esp.png`,
    blogSrc: `${blog}/rr-air-esp.png`,
    alt: 'Rob Run urban PvP overlay with loot ESP, player tags, and silent-aim FOV ring on bandits and cops',
    caption: 'Aimbot lead & player ESP',
    captionDesc: 'No-recoil control and long-range SMG/vehicle tags for urban PvP awareness.',
  },
  groundEsp: {
    id: 'groundEsp',
    src: `${gameplay}/rr-ground-esp.png`,
    blogSrc: `${blog}/rr-ground-esp.png`,
    alt: 'Rob Run Rob Run loot run with loot ESP marking cash stacks, safes, and players across the district',
    caption: 'Ground loot ESP',
    captionDesc: 'Spot players behind cover and flanks early with distance-capped ESP for loot raids.',
  },
  mapRadar: {
    id: 'mapRadar',
    src: `${gameplay}/rr-map-radar.png`,
    blogSrc: `${blog}/rr-map-radar.png`,
    alt: 'Rob Run scoped view with bright green ESP silhouette and bounding box on an enemy player at 1051 m through interior cover',
    caption: 'Through-cover player ESP',
    captionDesc: 'Green chams and weak-spot hints through leaves and terrain for long-range Ground shots.',
  },
  hackResults: {
    id: 'hackResults',
    src: `${gameplay}/rr-hack-results.png`,
    blogSrc: `${blog}/rr-hack-results.png`,
    alt: 'Rob Run player model over snow with red ESP name tags, players models, kilometer distances and a circular lead/radar assist overlay',
    caption: 'Player ESP & lead assist',
    captionDesc: 'Enemy name, model and range tags plus lead assist for classic propeller fights.',
  },
  menuVisuals: {
    id: 'menuVisuals',
    src: `${gameplay}/rr-menu-visuals.png`,
    blogSrc: `${blog}/rr-menu-visuals.png`,
    alt: 'Rob Run cheats Visuals menu showing player ESP toggles for bounding box, fill box, name, distance slider to 200m, player name and teammate filters',
    caption: 'Visuals menu',
    captionDesc: 'Tune player ESP boxes, names, distance caps and teammate filters in one Visuals tab.',
  },
  menuWorld: {
    id: 'menuWorld',
    src: `${gameplay}/rr-menu-world.png`,
    blogSrc: `${blog}/rr-menu-world.png`,
    alt: 'Rob Run cheats World menu with World ESP and Show Distance toggles on and World Distance slider set to 150m',
    caption: 'World menu',
    captionDesc: 'Enable world ESP markers and set how far objective and world objects draw.',
  },
  menuAimbot: {
    id: 'menuAimbot',
    src: `${gameplay}/rr-menu-aimbot.png`,
    blogSrc: `${blog}/rr-menu-aimbot.png`,
    alt: 'Rob Run cheats Aimbot menu with enable on, RMB and Mouse 4 binds, prediction on, FOV size 12 degrees and smoothness 48',
    caption: 'Aimbot menu',
    captionDesc: 'Set aim keys, prediction, FOV size and smoothing without digging through nested panels.',
  },
  menuMisc: {
    id: 'menuMisc',
    src: `${gameplay}/rr-menu-misc.png`,
    blogSrc: `${blog}/rr-menu-misc.png`,
    alt: 'Rob Run cheats Misc menu with Insert menu key, stream-proof on, panic key End, config save/load and cloud DMA connected status',
    caption: 'Misc & stream-proof',
    captionDesc: 'Stream-proof, panic key, menu binds and cloud connection status in one Misc tab.',
  },
} as const satisfies Record<string, GameplayImage>;

export type GameplayImageId = keyof typeof gameplayImages;

export function getGameplayImage(id: GameplayImageId): GameplayImage {
  return gameplayImages[id];
}
