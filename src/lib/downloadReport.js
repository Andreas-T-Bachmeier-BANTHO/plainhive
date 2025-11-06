import REPORT_BASE64 from '../data/reportBase64.js';

const MIME_TYPE = 'application/pdf';

export function downloadReport(filename) {
  const binary = atob(REPORT_BASE64);
  const length = binary.length;
  const buffer = new Uint8Array(length);

  for (let index = 0; index < length; index += 1) {
    buffer[index] = binary.charCodeAt(index);
  }

  const blob = new Blob([buffer], { type: MIME_TYPE });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
