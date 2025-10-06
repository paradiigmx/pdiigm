import Link from 'next/link';
import { posts } from '@lib/posts';

export default function BlogIndex() {
  return (
    <div>
      <h1>Blog</h1>
      <div className="grid">
        {posts.map(p => (
          <article className="card" key={p.slug}>
            <h3 style={{marginTop:0}}><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <small style={{color:'var(--muted)'}}>{p.date}</small>
            <p style={{color:'var(--muted)'}}>{p.excerpt}</p>
            <Link className="btn" href={`/blog/${p.slug}`}>Read</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
