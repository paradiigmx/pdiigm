import { useRouter } from 'next/router';
import { posts } from '@lib/posts';

export default function BlogPost() {
  const { query } = useRouter();
  const post = posts.find(p => p.slug === query.slug);
  if (!post) return <div className="card"><h1>Not found</h1></div>;
  return (
    <article className="card">
      <h1 style={{marginTop:0}}>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
