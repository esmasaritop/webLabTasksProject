#!/usr/bin/env node
/**
 * Daire şeklinde favicon oluşturur (profil fotoğrafından).
 * Çalıştırmak için: node scripts/generate-favicon.mjs
 */
import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(root, 'public/photos/esmaSaritopProfil.jpeg');
const out = path.join(root, 'public/favicon.png');

const size = 64;
const r = size / 2;

// Daire maskesi: SVG (beyaz daire = opak)
const circleSvg = Buffer.from(
  `<svg width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="white"/></svg>`
);

const rounded = await sharp(src)
  .resize(size, size)
  .composite([{ input: circleSvg, blend: 'dest-in' }])
  .png()
  .toBuffer();

writeFileSync(out, rounded);
console.log('Daire favicon oluşturuldu: public/favicon.png');
process.exit(0);
