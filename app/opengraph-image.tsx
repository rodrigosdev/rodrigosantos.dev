import { SITE_NAME } from '~/app/site';
import { ogContentType, ogSize, renderOgImage } from '~/lib/og';

export const alt = SITE_NAME;
export const contentType = ogContentType;
export const size = ogSize;

const OpenGraphImage = () => {
  return renderOgImage({
    description: null,
    kicker: null,
    role: 'AI Engineer',
    title: SITE_NAME,
  });
};

export default OpenGraphImage;
