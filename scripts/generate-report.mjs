import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import REPORT_BASE64 from '../src/data/reportBase64.js';
import COVER_REPORT_BASE64 from '../src/data/coverReportBase64.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function writeBase64File(base64, relativeOutput) {
  const outputPath = path.resolve(__dirname, relativeOutput);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, Buffer.from(base64, 'base64'));
  return outputPath;
}

const reportPath = await writeBase64File(
  REPORT_BASE64,
  '../public/file/PlainHive_Report_Why_AI_Assistants_Must_Change_0825_v2.pdf',
);
console.log(`Generated report PDF at ${reportPath}`);

const coverPath = await writeBase64File(
  COVER_REPORT_BASE64,
  '../public/images/graphics/CoverReport.png',
);
console.log(`Generated report cover at ${coverPath}`);
