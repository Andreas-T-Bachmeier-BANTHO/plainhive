import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const rootDir = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const markers = ['<', '=', '>'].map((char) => char.repeat(7));
const ignore = new Set(['.git', 'node_modules', 'dist', 'build']);
const findings = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (ignore.has(entry.name)) continue;
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(entryPath);
    } else if (entry.isFile()) {
      await inspectFile(entryPath);
    }
  }
}

async function inspectFile(filePath) {
  const content = await readFile(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  lines.forEach((line, index) => {
    const marker = markers.find((token) => line.includes(token));
    if (marker) {
      findings.push({ filePath: path.relative(rootDir, filePath), line: index + 1, marker });
    }
  });
}

await walk(rootDir);

if (findings.length > 0) {
  console.error('Merge conflict markers detected:');
  for (const { filePath, line, marker } of findings) {
    console.error(` - ${filePath}:${line} contains "${marker}"`);
  }
  process.exit(1);
} else {
  console.log('No merge conflict markers found.');
}
