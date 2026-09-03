import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-logo">Aphiwe<em>.</em></div>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="footer-socials">
            <a href="https://github.com/aphiwemakhanya490" target="_blank" rel="noreferrer" className="social-icon">🐙</a>
            <a href="https://www.linkedin.com/in/aphiwem490" target="_blank" rel="noreferrer" className="social-icon">💼</a>
            <a href="mailto:aphiwemakhanya490@gmail.com" className="social-icon">✉️</a>
          </div>
        </div>
        <p className="footer-copy">© 2025 Aphiwe Goodwill Makhanya · Durban, South Africa</p>
      </div>
    </footer>
  );
}
