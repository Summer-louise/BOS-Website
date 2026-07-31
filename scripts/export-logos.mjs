import pkg from '/home/runner/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.js';
const { chromium } = pkg;
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const iconBase64 = readFileSync('artifacts/bos-automated/public/icon-topo.png').toString('base64');
const cormorantLight = readFileSync('/tmp/fonts/CormorantGaramond-Light.ttf').toString('base64');
const cormorantRegular = readFileSync('/tmp/fonts/CormorantGaramond-Regular.ttf').toString('base64');
const dmSansLight = readFileSync('/tmp/fonts/DMSans-Light.ttf').toString('base64');

const variants = [
  {
    name: 'bos-automated-olive',
    bg: '#4a4e22',
    iconFilter: 'brightness(0) invert(1) sepia(0.15)',
    titleColor: '#f0ead8',
    ruleColor: 'rgba(240,234,216,0.45)',
    subtitleColor: 'rgba(240,234,216,0.60)',
  },
  {
    name: 'bos-automated-cream',
    bg: '#F5F0E8',
    iconFilter: 'none',
    titleColor: '#3a3d1e',
    ruleColor: 'rgba(58,61,30,0.35)',
    subtitleColor: 'rgba(58,61,30,0.55)',
  },
  {
    name: 'bos-automated-white',
    bg: '#ffffff',
    iconFilter: 'none',
    titleColor: '#2a2c14',
    ruleColor: 'rgba(42,44,20,0.30)',
    subtitleColor: 'rgba(42,44,20,0.50)',
  },
  {
    name: 'bos-automated-charcoal',
    bg: '#1a1a14',
    iconFilter: 'brightness(0) invert(1) sepia(0.15)',
    titleColor: '#e8e0cc',
    ruleColor: 'rgba(232,224,204,0.40)',
    subtitleColor: 'rgba(232,224,204,0.55)',
  },
];

function buildHtml(variant) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: 'CormorantGaramond';
    src: url('data:font/truetype;base64,${cormorantLight}') format('truetype');
    font-weight: 300;
  }
  @font-face {
    font-family: 'CormorantGaramond';
    src: url('data:font/truetype;base64,${cormorantRegular}') format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'DMSans';
    src: url('data:font/truetype;base64,${dmSansLight}') format('truetype');
    font-weight: 300;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 3000px;
    height: 1200px;
    background: ${variant.bg};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lockup {
    display: flex;
    align-items: center;
    gap: 80px;
  }
  .icon {
    width: 480px;
    height: 480px;
    flex-shrink: 0;
    filter: ${variant.iconFilter};
  }
  .text-block {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .title {
    font-family: 'CormorantGaramond', serif;
    font-weight: 300;
    font-size: 148px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: ${variant.titleColor};
    line-height: 1;
    white-space: nowrap;
  }
  .rule {
    width: 100%;
    height: 1.5px;
    background: ${variant.ruleColor};
  }
  .subtitle {
    font-family: 'DMSans', sans-serif;
    font-weight: 300;
    font-size: 38px;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: ${variant.subtitleColor};
    white-space: nowrap;
  }
</style>
</head>
<body>
  <div class="lockup">
    <img class="icon" src="data:image/png;base64,${iconBase64}" />
    <div class="text-block">
      <div class="title">BOS Automated</div>
      <div class="rule"></div>
      <div class="subtitle">Business Optimisation Systems</div>
    </div>
  </div>
</body>
</html>`;
}

const browser = await chromium.launch({ executablePath: '/tmp/pw-browsers/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell' });
const page = await browser.newPage();
await page.setViewportSize({ width: 3000, height: 1200 });

for (const variant of variants) {
  const html = buildHtml(variant);
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500); // let fonts render
  const outPath = `exports/logos/${variant.name}.png`;
  await page.screenshot({ path: outPath, type: 'png', fullPage: false });
  console.log(`✓ ${outPath}`);
}

await browser.close();
console.log('Done.');
