import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { ImageResponse } from 'next/og';

import { SITE_URL } from '~/app/site';

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = 'image/png';

const geistSansDir = path.join(process.cwd(), 'node_modules/geist/dist/fonts/geist-sans');
const geistMedium = await readFile(path.join(geistSansDir, 'Geist-Medium.ttf'));
const geistRegular = await readFile(path.join(geistSansDir, 'Geist-Regular.ttf'));

const siteHost = new URL(SITE_URL).host;

const color = {
  bg: '#fafafa',
  muted: '#525252',
  text: '#171717',
};

type OgImageContent = {
  description: string | null;
  kicker: string | null;
  title: string;
};

const OgCard = ({ description, kicker, title }: OgImageContent) => {
  return (
    <div
      style={{
        backgroundColor: color.bg,
        color: color.text,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        padding: 80,
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
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
      <div
        style={{
          color: color.muted,
          display: 'flex',
          fontFamily: 'Geist Sans',
          fontSize: 24,
          fontWeight: 400,
        }}
      >
        {siteHost}
      </div>
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
    ],
  });
};

export { renderOgImage };
