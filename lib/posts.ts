export type Post = { slug: string; title: string; date: string; excerpt: string; content: string };

export const posts: Post[] = [
  { slug: 'welcome', title: 'Welcome to Paradiigm', date: '2025-10-05', excerpt: 'Your new site is live on Vercel.', content: '<p>Replace these posts with your own content or a CMS later.</p>'},
  { slug: 'next-steps', title: 'Next Steps', date: '2025-10-05', excerpt: 'How to edit and ship changes quickly.', content: '<ul><li>Edit components</li><li>Push to GitHub</li><li>Vercel redeploys</li></ul>'}
];
