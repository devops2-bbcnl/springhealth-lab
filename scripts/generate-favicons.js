import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'safari-pinned-tab.svg', size: 0 }, // Special case for SVG
];

async function generateFavicons() {
  try {
    const inputPath = path.join(__dirname, '../public/images/logo.png');
    const outputDir = path.join(__dirname, '../public/favicons');
    
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // Generate PNG favicons
    for (const { name, size } of sizes.filter(s => s.size > 0)) {
      await sharp(inputPath)
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, name));
      console.log(`Generated ${name}`);
    }

    // For SVG, we'll just copy the logo if it's already an SVG
    // or convert it if needed
    const svgOutput = path.join(outputDir, 'safari-pinned-tab.svg');
    await fs.copyFile(inputPath, svgOutput);
    console.log('Generated safari-pinned-tab.svg');

    // Generate site.webmanifest
    const manifest = {
      name: 'SpringQuest Health Management Ltd',
      short_name: 'SpringQuest Health',
      description: 'Trusted Medical Laboratory Services',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#1e40af',
      icons: [
        {
          src: '/favicons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/favicons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    };

    await fs.writeFile(
      path.join(outputDir, 'site.webmanifest'),
      JSON.stringify(manifest, null, 2)
    );
    console.log('Generated site.webmanifest');

    // Generate browserconfig.xml
    const browserConfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/favicons/mstile-150x150.png"/>
      <TileColor>#1e40af</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;

    await fs.writeFile(
      path.join(outputDir, 'browserconfig.xml'),
      browserConfig
    );
    console.log('Generated browserconfig.xml');

  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
