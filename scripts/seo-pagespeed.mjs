/**
 * Run Agentic SEO Skill PageSpeed check and write JSON under seo-audit-output/.
 * Set PAGESPEED_API_KEY in .env or the environment (see .env.example).
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(projectRoot, 'seo-audit-output');
const url = process.env.PAGESPEED_URL || 'https://cheatsrobrun.org/';

const skillCandidates = [
  path.join(process.env.USERPROFILE || '', '.cursor', 'skills-cursor'),
  path.join(
    process.env.LOCALAPPDATA || '',
    'Cursor',
    'AgentStores',
    'cursor_agent_stores',
    '20607c4b-0f04-4fae-9ac2-2377935ed5b5',
    'files',
    'Agentic-SEO-Skill',
  ),
];

let skillDir = process.env.AGENTIC_SEO_SKILL_DIR;
if (!skillDir) {
  for (const base of skillCandidates) {
    const candidate = base.includes('Agentic-SEO-Skill')
      ? base
      : path.join(base, 'Agentic-SEO-Skill');
    if (fs.existsSync(path.join(candidate, 'scripts', 'pagespeed.py'))) {
      skillDir = candidate;
      break;
    }
  }
}

if (!skillDir) {
  console.error('seo:pagespeed — set AGENTIC_SEO_SKILL_DIR to the Agentic-SEO-Skill clone.');
  process.exit(1);
}

const envPath = path.join(projectRoot, '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!m || process.env[m[1]]) continue;
    const val = m[2].replace(/^["']|["']$/g, '').trim();
    if (val) process.env[m[1]] = val;
  }
}

fs.mkdirSync(outDir, { recursive: true });
const jsonOut = path.join(outDir, 'pagespeed-mobile.json');
const args = [
  path.join(skillDir, 'scripts', 'pagespeed.py'),
  url,
  '--strategy',
  process.env.PAGESPEED_STRATEGY || 'mobile',
  '--json',
];
if (process.env.PAGESPEED_API_KEY) {
  args.push('--api-key', process.env.PAGESPEED_API_KEY);
}

const run = spawnSync('python', args, { encoding: 'utf8', env: process.env });
if (run.stdout) {
  try {
    fs.writeFileSync(jsonOut, `${JSON.stringify(JSON.parse(run.stdout), null, 2)}\n`);
    console.log(`Wrote ${jsonOut}`);
  } catch {
    fs.writeFileSync(jsonOut.replace('.json', '.txt'), run.stdout);
    console.log('Wrote raw PageSpeed output (non-JSON).');
  }
}
if (run.stderr) console.error(run.stderr);
if (run.status !== 0) {
  console.error(
    'PageSpeed failed—add PAGESPEED_API_KEY to .env if you hit rate limits, or check DNS for the URL.',
  );
  process.exit(run.status ?? 1);
}