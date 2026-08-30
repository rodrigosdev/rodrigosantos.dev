import { ImageResponse } from 'next/og';

export const size = {
  width: 48,
  height: 48,
};

export const contentType = 'image/png';

const circleSrc = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="24" fill="#000"/></svg>',
)}`;

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: 'transparent',
        display: 'flex',
        height: '100%',
        width: '100%',
      }}
    >
      {/* oxlint-disable-next-line next/no-img-element -- next/image is not supported inside ImageResponse */}
      <img alt="" height={48} src={circleSrc} width={48} />
    </div>,
    {
      ...size,
    },
  );
}
