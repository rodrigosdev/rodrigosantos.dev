import { ImageResponse } from 'next/og';

export const size = {
  width: 48,
  height: 48,
};

export const contentType = 'image/png';

const triangleSrc = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21"><polygon points="12,0 24,21 0,21" fill="#fff"/></svg>',
)}`;

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#000',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {/* oxlint-disable-next-line next/no-img-element -- next/image is not supported inside ImageResponse */}
      <img alt="" height={21} src={triangleSrc} width={24} />
    </div>,
    {
      ...size,
    },
  );
}
