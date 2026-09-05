import { notFound } from 'next/navigation';

import { formatPostDate, getLocalPosts, getPost } from '~/lib/blog';
import { ogContentType, ogSize, renderOgImage } from '~/lib/og';

export const alt = 'Blog post';
export const contentType = ogContentType;
export const size = ogSize;

export const generateStaticParams = async () => {
  const posts = await getLocalPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

const OpenGraphImage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (post === null || post.external !== null) {
    notFound();
  }

  return renderOgImage({
    description: formatPostDate(post.date),
    kicker: 'Blog',
    title: post.title,
  });
};

export default OpenGraphImage;
