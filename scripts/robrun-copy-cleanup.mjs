import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const src = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');

const reps = [
  ['Track enemy tanks, aircraft, ships, AI columns and capture objectives', 'Track bandits, cops, civilians, loot crates, safes, and cash stashes'],
  ['Enemy tanks, aircraft, ships and AI columns', 'Enemy players, bandits, cops, and loot containers'],
  ['Save tank, fighter and SPAA profiles and swap with hotkeys.', 'Save pistol, SMG, and rifle no-recoil profiles and swap with hotkeys.'],
  ['tank, fighter and SPAA', 'pistol, SMG, and rifle'],
  ['tanks, fighters, SPAA and naval guns', 'pistols, SMGs, rifles, and shotguns'],
  ['tanks, fighters, SPAA', 'pistols, SMGs, and rifles'],
  ['Ballistic profiles (tanks, fighters, SPAA)', 'No-recoil profiles (pistols, SMGs, rifles)'],
  ['arcade_tanker', 'loot_runner'],
  ['tank and aircraft camos', 'weapon and outfit cosmetics'],
  ['real hangar', 'real loadout'],
  ['tank duels', 'CQB fights'],
  ['tank duel', 'close-quarters fight'],
  ['dogfight', 'indoor PvP'],
  ['dogfights', 'indoor PvP'],
  ['SPAA', 'SMG'],
  ['biplane', 'player model'],
  ['aircraft', 'players'],
  ['M2A4 Tetrarch Pz.II and Chi-Ha tanks', 'bandits and cops nearby'],
  ['enemy tanks', 'enemy players'],
  ['hull-down tanks', 'players behind cover'],
  ['tank gunner sight', 'ADS view'],
  ['tank sniper sight', 'scoped view'],
  ['enemy medium tank', 'enemy player'],
  ['Tank ESP', 'Player ESP'],
  ['tank ESP', 'player ESP'],
  ['Air ESP', 'Player ESP'],
  ['air ESP', 'player ESP'],
  ['Through-cover tank ESP', 'Through-wall player ESP'],
  ['jet combat', 'urban PvP'],
  ['tropical coastline', 'city block'],
  ['tropical map', 'urban district'],
  ['tropical foliage', 'interior cover'],
  ['gun sight', 'iron sights'],
  ['capture lane', 'loot route'],
  ['capture objectives', 'loot points and safes'],
  ['vehicle type', 'player role'],
  ['vehicle name', 'player name'],
  ['Tanks, aircraft, ships, AI and objectives', 'Players, loot, safes, and objectives'],
  ['mission editor tools for repeatable tank and SPAA drills', 'private lobby tools for repeatable CQB drills'],
  ['GRB fights', 'fence-line fights'],
  ['an private test session', 'a private test session'],
  ['Loot raids Ground', 'loot runs'],
  ['War Thunder Cheats', 'Rob Run Cheats'],
  ['War Thunder cheats', 'Rob Run cheats'],
  ['War Thunder', 'Rob Run'],
  ['vehicle ESP', 'loot ESP'],
];

function walk(d) {
  const out = [];
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) out.push(...walk(f));
    else if (/\.(ts|astro|json|svg|webmanifest)$/i.test(e.name)) out.push(f);
  }
  return out;
}

let n = 0;
for (const root of [src, publicDir]) {
  for (const file of walk(root)) {
    const before = fs.readFileSync(file, 'utf8');
    let after = before;
    for (const [a, b] of reps) after = after.split(a).join(b);
    if (after !== before) {
      fs.writeFileSync(file, after, 'utf8');
      n++;
    }
  }
}
console.log(`Cleaned ${n} files`);
