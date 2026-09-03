import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';
import heroPhoto from '../assets/Graduation_half_pic.jpeg';

export default function Home() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-layout">
            <div>
              <div className="hero-eyebrow">
                <span>●</span> Open to graduate &amp; junior developer roles
              </div>
              <h1 className="hero-name">Aphiwe<br />Makhanya</h1>
              <p className="hero-title">C# · .NET · ASP.NET · SQL Server · Azure</p>
              <p className="hero-bio">
                BCom IS&amp;T graduate (UKZN, 2025) and <strong>Oracle OCI AI Foundations certified</strong> developer.
                Built a formally assessed, year-long full-stack system for a real client — from requirements through
                to <strong>Azure deployment</strong>. Based in Durban, South Africa.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">See My Work</Link>
                <Link to="/contact" className="btn btn-ghost">Get In Touch</Link>
              </div>
              <div className="stats-strip">
                <div><div className="stat-val">3+</div><div className="stat-lbl">Projects built</div></div>
                <div><div className="stat-val">2</div><div className="stat-lbl">Certifications</div></div>
                <div><div className="stat-val">Azure</div><div className="stat-lbl">Cloud deployed</div></div>
                <div><div className="stat-val">2025</div><div className="stat-lbl">Dean's Commendation</div></div>
              </div>
            </div>
            <div className="hero-avatar-wrap">
              <img src={heroPhoto} alt="Aphiwe Makhanya at UKZN graduation" className="hero-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="sec" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <span className="eyebrow reveal">Technical Skills</span>
          <h2 className="sec-heading reveal">What I build with</h2>
          <p className="sec-sub reveal">Skills built through a full-SDLC client project, personal projects, and ongoing self-study.</p>

          <div className="skills-grid">
            {[
              { icon: '🌐', cls: 'ic-blue',   name: 'Frontend',       tags: ['HTML5','CSS3','JavaScript','ASP.NET Web Forms','Bootstrap'] },
              { icon: '⚙️', cls: 'ic-green',  name: 'Backend',        tags: ['C#','.NET Framework 4.7.2','ASP.NET Web Forms','Entity Framework Core','REST APIs'] },
              { icon: '🗄️', cls: 'ic-purple', name: 'Data & ORM',     tags: ['SQL Server','T-SQL','Stored Procedures','ADO.NET','MySQL'] },
              { icon: '☁️', cls: 'ic-sky',    name: 'Cloud & APIs',   tags: ['Microsoft Azure','PayStack API','REST API','HttpClient','Postman'] },
              { icon: '🛠️', cls: 'ic-amber',  name: 'Tools',          tags: ['Visual Studio 2022','VS Code','Git / GitHub','SSMS','Power BI','draw.io'] },
              { icon: '🧠', cls: 'ic-red',    name: 'Practices',      tags: ['OOP','SDLC','Agile / Scrum','Systems Analysis','QA & Testing','Technical Docs'] },
            ].map((s) => (
              <div className="skill-card reveal" key={s.name}>
                <div className={`skill-icon ${s.cls}`}>{s.icon}</div>
                <div className="skill-name">{s.name}</div>
                <div className="tag-wrap">
                  {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="sec" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <span className="eyebrow reveal">Portfolio</span>
          <h2 className="sec-heading reveal">Featured projects</h2>
          <p className="sec-sub reveal">Real systems built end-to-end — requirements through deployment.</p>

          <div className="proj-grid">
            <div className="proj-card reveal">
              <div className="proj-thumb thumb-blue">🖥️</div>
              <div className="proj-body">
                <h3 className="proj-title">Full-Stack POS &amp; E-Commerce System</h3>
                <p className="proj-desc">Year-long client project for KwaMshana Café — C#/.NET WinForms desktop POS and ASP.NET web app sharing a SQL Server database. PayStack payments, Azure deployment, Power BI dashboards.</p>
                <div className="proj-tags">
                  {['C#','.NET 4.7.2','ASP.NET','SQL Server','Azure','PayStack'].map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
                <Link to="/projects" className="proj-link">Full details →</Link>
              </div>
            </div>

            <div className="proj-card reveal">
              <div className="proj-thumb thumb-purple">📚</div>
              <div className="proj-body">
                <h3 className="proj-title">Madlamini Library Management System</h3>
                <p className="proj-desc">Personal project — Windows Forms desktop app with catalogue, booking/cart, in-app payment, role-based access (Admin/Manager), and South African input validation.</p>
                <div className="proj-tags">
                  {['C#','.NET 4.7.2','WinForms','RBAC','Git'].map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
                <Link to="/projects" className="proj-link">Full details →</Link>
              </div>
            </div>

            <div className="proj-card reveal">
              <div className="proj-thumb thumb-green">🛒</div>
              <div className="proj-body">
                <h3 className="proj-title">E-Commerce Website</h3>
                <p className="proj-desc">WooCommerce storefront on XAMPP — product catalogue, cart, checkout, and payment processing. MySQL managed via phpMyAdmin with basic security configuration applied.</p>
                <div className="proj-tags">
                  {['WordPress','WooCommerce','MySQL','PHP'].map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
                <Link to="/projects" className="proj-link">Full details →</Link>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/projects" className="btn btn-outline">View all projects</Link>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="sec" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <span className="eyebrow reveal">Qualifications</span>
          <h2 className="sec-heading reveal">Education &amp; certifications</h2>

          <div className="edu-grid">
            <div className="edu-card reveal">
              <div className="edu-period">2022 – 2025</div>
              <div className="edu-degree">BCom — Information Systems &amp; Technology, IS Computing</div>
              <div className="edu-school">University of KwaZulu-Natal, Durban</div>
              <span className="edu-badge">Dean's Commendation, Semester 1 2025</span>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.9rem', lineHeight: '1.65' }}>
                Data Structures · Databases &amp; Programming · Advanced Systems Analysis &amp; Design ·
                Applied Systems Implementation · Networking &amp; Database Management · Information Systems Security · Algorithms
              </p>
            </div>

            <div className="edu-card reveal">
              <div className="edu-period">2021</div>
              <div className="edu-degree">National Senior Certificate (Grade 12)</div>
              <div className="edu-school">KwaMakhutha Comprehensive High School</div>
              <span className="edu-badge">72% Overall Average</span>
              <div className="cert-row">
                <div className="edu-period">August 2026 · Valid to August 2028</div>
                <div className="cert-name">Oracle OCI AI Foundations Associate</div>
                <div className="cert-issuer">Oracle University</div>
              </div>
              <div className="cert-row">
                <div className="edu-period">2025</div>
                <div className="cert-name">SQL Intermediate</div>
                <div className="cert-issuer">SoloLearn</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="wrap">
          <h2>Looking for a developer who ships?</h2>
          <p>Available immediately for graduate programmes, junior developer roles, and freelance work.</p>
          <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
        </div>
      </div>
    </>
  );
}
