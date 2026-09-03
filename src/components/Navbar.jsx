import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <div className="nav-row">
          <NavLink to="/" className="nav-logo">
            Aphiwe<em>.</em>
          </NavLink>

          <ul className={`nav-links${open ? ' open' : ''}`}>
            <li><NavLink to="/"        className={({isActive}) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about"   className={({isActive}) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>About</NavLink></li>
            <li><NavLink to="/projects"className={({isActive}) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>Projects</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>Contact</NavLink></li>
            <li>
              <a href="/Aphiwe_Makhanya_CV.pdf" target="_blank" rel="noreferrer" className="nav-cta">
                Download CV
              </a>
            </li>
          </ul>

          <button className="hamburger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
