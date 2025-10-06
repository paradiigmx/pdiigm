export default function Hero() {
  return (
    <section className="hero">
      <div>
        <span className="badge">Paradiigm • Next.js starter</span>
        <h1>Build fast. Ship faster.</h1>
        <p>Modern, maintainable, and easy to edit. Replace this copy and sections as you like, push to GitHub, and Vercel handles the rest.</p>
        <a className="btn" href="/contact">Get Started</a>
      </div>
      <div className="card">
        <h3 style={{marginTop:0}}>What’s included</h3>
        <ul>
          <li>Next.js 14 (TypeScript)</li>
          <li>Clean layout + components</li>
          <li>Blog pages scaffold</li>
          <li>Easy theming via CSS variables</li>
        </ul>
      </div>
    </section>
  );
}
