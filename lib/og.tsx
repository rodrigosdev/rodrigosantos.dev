import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { ImageResponse } from 'next/og';

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = 'image/png';

const geistSansDir = path.join(process.cwd(), 'node_modules/geist/dist/fonts/geist-sans');
const geistMedium = await readFile(path.join(geistSansDir, 'Geist-Medium.ttf'));
const geistPixel = await readFile(path.join(process.cwd(), 'assets/GeistPixel-Square.ttf'));
const geistRegular = await readFile(path.join(geistSansDir, 'Geist-Regular.ttf'));

const color = {
  bg: '#000',
  muted: '#a1a1a1',
  text: '#f5f5f5',
};

type OgImageContent = {
  description: string | null;
  kicker: string | null;
  role: string | null;
  title: string;
};

const OgCard = ({ description, kicker, role, title }: OgImageContent) => {
  return (
    <div
      style={{
        backgroundColor: color.bg,
        color: color.text,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 80,
        width: '100%',
      }}
    >
      {kicker === null ? null : (
        <div
          style={{
            color: color.muted,
            display: 'flex',
            fontFamily: 'Geist Sans',
            fontSize: 28,
            fontWeight: 400,
            marginBottom: 20,
          }}
        >
          {kicker}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          fontFamily: 'Geist Sans',
          fontSize: 64,
          fontWeight: 500,
          letterSpacing: '-0.025em',
          lineHeight: 1.2,
          width: '100%',
        }}
      >
        {title}
      </div>
      {role === null ? null : (
        <div
          style={{
            color: color.muted,
            display: 'flex',
            fontFamily: 'Geist Pixel',
            fontSize: 36,
            fontWeight: 500,
            marginTop: 24,
          }}
        >
          {role}
        </div>
      )}
      {description === null ? null : (
        <div
          style={{
            color: color.muted,
            display: 'flex',
            fontFamily: 'Geist Sans',
            fontSize: 32,
            fontWeight: 400,
            lineHeight: 1.4,
            marginTop: 24,
            width: '100%',
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
};

const renderOgImage = (content: OgImageContent): ImageResponse => {
  return new ImageResponse(<OgCard {...content} />, {
    ...ogSize,
    fonts: [
      {
        data: geistRegular,
        name: 'Geist Sans',
        style: 'normal',
        weight: 400,
      },
      {
        data: geistMedium,
        name: 'Geist Sans',
        style: 'normal',
        weight: 500,
      },
      {
        data: geistPixel,
        name: 'Geist Pixel',
        style: 'normal',
        weight: 500,
      },
    ],
  });
};

export { renderOgImage };
