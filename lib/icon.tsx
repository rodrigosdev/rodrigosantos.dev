import { ImageResponse } from 'next/og';

export const iconContentType = 'image/png';

export const iconSize = {
  width: 32,
  height: 32,
};

export const appleIconSize = {
  width: 180,
  height: 180,
};

type SiteIconSize = {
  width: number;
  height: number;
};

const Circle = () => {
  return (
    <div
      style={{
        backgroundColor: '#000000',
        borderRadius: '50%',
        display: 'flex',
        height: '100%',
        width: '100%',
      }}
    />
  );
};

const renderSiteIcon = (size: SiteIconSize): ImageResponse => {
  return new ImageResponse(<Circle />, size);
};

export { renderSiteIcon };
