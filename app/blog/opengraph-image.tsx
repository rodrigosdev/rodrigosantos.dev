import { ogContentType, ogSize, renderOgImage } from '~/lib/og';

export const alt = 'Blog';
export const contentType = ogContentType;
export const size = ogSize;

const OpenGraphImage = () => {
  return renderOgImage({
    description: 'Experiments across software, security and AI by Rodrigo Santos.',
    kicker: null,
    role: null,
    title: 'Blog',
  });
};

export default OpenGraphImage;
