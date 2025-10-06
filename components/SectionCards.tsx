export default function SectionCards() {
  const items = [
    { title: 'Speed', body: 'Pre-rendered pages on Vercel CDN give instant loads.' },
    { title: 'Simplicity', body: 'Edit components/pages and push to GitHub—done.' },
    { title: 'Scalability', body: 'Add sections, routes, and features as your brand grows.' },
  ];
  return (
    <section style={{paddingBottom: 32}}>
      <div className="grid">
        {items.map((it, i) => (
          <div className="card" key={i}>
            <h3 style={{marginTop:0}}>{it.title}</h3>
            <p style={{marginBottom:0, color:'var(--muted)'}}>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
