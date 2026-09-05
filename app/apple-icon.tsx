import { appleIconSize, iconContentType, renderSiteIcon } from '~/lib/icon';

export const contentType = iconContentType;
export const size = appleIconSize;

const AppleIcon = () => {
  return renderSiteIcon(size);
};

export default AppleIcon;
