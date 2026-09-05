import { iconContentType, iconSize, renderSiteIcon } from '~/lib/icon';

export const contentType = iconContentType;
export const size = iconSize;

const Icon = () => {
  return renderSiteIcon(size);
};

export default Icon;
