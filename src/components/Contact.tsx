export default function Contact({ line }: { line: string }) {
  return (
    <footer id="contact" className="contact">
      <div className="section-index"><span>04</span><span>CONTACT / BEGIN</span></div>
      <div className="contact-stage">
        <span className="contact-ghost">BEGIN</span>
        <div className="contact-copy">
          <h2>{line}</h2>
          <p>For collaborations, systems work, dashboards, HR transformation, or intelligent product ideas that need a sharper operating shape.</p>
        </div>
        <a className="contact-orbit" href="mailto:hello@mohamedfadel.com"><span>START A CONVERSATION · START A CONVERSATION ·</span><b>↗</b></a>
        <div className="contact-plate" aria-label="Availability">
          <span>OPEN TO</span>
          <b>Selective collaborations</b>
          <small>Tripoli · Remote · Global</small>
        </div>
      </div>
      <a className="email" href="mailto:hello@mohamedfadel.com">HELLO@MOHAMEDFADEL.COM <span>↗</span></a>
      <div className="contact-bottom"><span>© 2026 MOHAMED FADEL</span><div><a href="#">LINKEDIN</a><a href="#">INSTAGRAM</a><a href="#">X / TWITTER</a></div><a href="#home">BACK TO TOP ↑</a></div>
    </footer>
  );
}
