import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';

export default function Projects() {
  useReveal();

  return (
    <>
      <div className="page-banner">
        <div className="wrap">
          <h1>Projects</h1>
          <p>Systems built end-to-end — requirements, architecture, development, testing, deployment.</p>
        </div>
      </div>

      {/* MAIN PROJECTS */}
      <section className="sec" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <span className="eyebrow reveal">Full builds</span>
          <h2 className="sec-heading reveal">Featured work</h2>
          <p className="sec-sub reveal">Four complete projects covering desktop, web, and cloud — each one taught me something different.</p>

          {/* PROJECT 1a */}
          <div className="proj-block reveal">
            <div className="proj-block-inner">
              <div className="proj-visual pv-blue">
                <div className="proj-emoji">🖥️</div>
                <div className="proj-type-badge">Desktop Application</div>
              </div>
              <div className="proj-info">
                <div className="proj-meta">Project 01a · KwaMshana Café (Client) · February – November 2025</div>
                <h2 className="proj-heading">POS Desktop Application — WinForms</h2>
                <p className="proj-about">
                  Built for a real external client — <strong>KwaMshana Café</strong> — as part of a formally assessed
                  year-long module at UKZN. The desktop POS is a C#/.NET 4.7.2 MDI Windows Forms application
                  connected to a centralised SQL Server database via ADO.NET and TableAdapters.
                </p>
                <div className="proj-sub-heading">Key features</div>
                <ul className="feat-list">
                  <li>Requirements elicitation with a real client — Agile user stories, Context/Level-0 DFDs, fully normalised ERD (3NF, 9+ entities) in draw.io</li>
                  <li>Role-based access control (RBAC) with day-specific menu visibility</li>
                  <li>End-to-end transaction processing — cart, payment validation, iTextSharp PDF receipt generation</li>
                  <li>Embedded Power BI dashboards via WebView2 for business reporting</li>
                  <li>Centralised SQL Server database shared with the companion web application</li>
                </ul>
                <div className="proj-stack">
                  {['C#','.NET 4.7.2','WinForms / MDI','SQL Server','ADO.NET','iTextSharp','Power BI','draw.io','Git / GitHub'].map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="proj-actions">
                  <a href="https://github.com/aphiwemakhanya490/Windows-App-POS.git" target="_blank" rel="noreferrer" className="proj-btn pb-solid">
                    View on GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 1b */}
          <div className="proj-block reveal">
            <div className="proj-block-inner">
              <div className="proj-visual pv-blue">
                <div className="proj-emoji">🌐</div>
                <div className="proj-type-badge">Web App + Cloud</div>
              </div>
              <div className="proj-info">
                <div className="proj-meta">Project 01b · KwaMshana Café (Client) · February – November 2025</div>
                <h2 className="proj-heading">E-Commerce Web Application — ASP.NET &amp; Azure</h2>
                <p className="proj-about">
                  The companion web application to the POS desktop system, both sharing the same centralised
                  SQL Server database. Built with <strong>ASP.NET Web Forms</strong>, deployed to{' '}
                  <strong>Microsoft Azure</strong>, and integrating a live PayStack payment gateway.
                  Delivered through 4 Git milestones with 3 live demonstrations to an academic panel and external moderator.
                </p>
                <div className="proj-sub-heading">Key features</div>
                <ul className="feat-list">
                  <li>OWIN/ASP.NET Identity authentication with SendGrid email confirmation and OAuth login</li>
                  <li>PayStack REST payment gateway integrated via HttpClient and Newtonsoft.Json</li>
                  <li>Order lifecycle managed with SQL Server stored procedures</li>
                  <li>Formal alpha testing using a 4-level defect taxonomy</li>
                  <li>Deployed to Microsoft Azure; version control with Git/GitHub across all four milestones</li>
                </ul>
                <div className="proj-stack">
                  {['ASP.NET Web Forms','C#','OWIN / Identity','PayStack API','SQL Server','Stored Procedures','Microsoft Azure','SendGrid','Git / GitHub'].map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="proj-actions">
                  <a href="https://github.com/aphiwemakhanya490/ASP.NET-Final-year-Website.git" target="_blank" rel="noreferrer" className="proj-btn pb-solid">
                    View on GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="proj-block reveal">
            <div className="proj-block-inner">
              <div className="proj-visual pv-purple">
                <div className="proj-emoji">📚</div>
                <div className="proj-type-badge">Desktop App · Personal Project</div>
              </div>
              <div className="proj-info">
                <div className="proj-meta">Project 02 · Personal Project · June 2026</div>
                <h2 className="proj-heading">Madlamini Library Management System</h2>
                <p className="proj-about">
                  A full-featured <strong>Windows Forms desktop application</strong> to manage a library catalogue,
                  booking/cart workflow, and in-app payment flow. Built to deepen skills in C# desktop development,
                  event-driven architecture, role-based access, and South African–specific UX patterns.
                </p>
                <div className="proj-sub-heading">Key features</div>
                <ul className="feat-list">
                  <li>Email/password authentication with role-based session management (Admin and Manager roles)</li>
                  <li>Book catalogue and cart — browse, adjust quantities, add/remove items, persistent subtotal across forms</li>
                  <li>Modal payment flow with amount validation and change calculation</li>
                  <li>SA-specific input validation: 13-digit ID (date-of-birth parse), 10-digit phone, 4-digit postal code</li>
                  <li>Tooltip-guided UX, constrained date selection controls, and event-driven form separation of concerns</li>
                </ul>
                <div className="proj-stack">
                  {['C#','.NET Framework 4.7.2','Windows Forms','RBAC','Visual Studio 2022','Git / GitHub'].map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="proj-actions">
                  <a href="https://github.com/aphiwemakhanya490/madlamini-library-dotnet472.git" target="_blank" rel="noreferrer" className="proj-btn pb-solid">
                    View on GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

        {/* PROJECT 3: PORTFOLIO WEBSITE */}
        <div className="proj-block reveal">
         <div className="proj-block-inner">
           <div className="proj-visual" style={{ background: 'linear-gradient(145deg,#f0fdf4,#bbf7d0)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', padding: '2.5rem 1.5rem', minHeight: '260px' }}>
              <div className="proj-emoji">🌍</div>
              <div className="proj-type-badge">Web · React · Deployed</div>
            </div>
            <div className="proj-info">
              <div className="proj-meta">Project 03 · Personal Project · September 2026</div>
                <h2 className="proj-heading">Portfolio Website — React &amp; Netlify</h2>
                <p className="proj-about">
                 multi-page personal portfolio built with <strong>React 18</strong> and <strong>Vite</strong>,
                 showcasing projects, skills, and professional background. Implemented client-side routing,
                 scroll-reveal animations, a fully working contact form via EmailJS, and deployed to Netlify
                 with continuous deployment from GitHub.
                </p>
                <div className="proj-sub-heading">Key features</div>
                <ul className="feat-list">
                  <li>Multi-page SPA with React Router v6 — Home, About, Projects, and Contact pages</li>
                  <li>Scroll-reveal animations using IntersectionObserver via a custom React hook</li>
                  <li>Contact form integrated with EmailJS — sends emails directly to Gmail with auto-reply</li>
                  <li>Fully responsive layout with mobile hamburger navigation</li>
                  <li>Deployed on Netlify with continuous deployment; <code>_redirects</code> configured for SPA routing</li>
                </ul>
              <div className="proj-stack">
                {['React 18','Vite 5','React Router v6','CSS3','JavaScript','EmailJS','Netlify','Git / GitHub'].map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
             </div>
            <div className="proj-actions">
              <a href="https://makhanya-portfolio.netlify.app" target="_blank" rel="noreferrer" className="proj-btn pb-solid">
                Live Site ↗
              </a>
              <a href="https://github.com/aphiwemakhanya490/makhanya-portfoliocv.git" target="_blank" rel="noreferrer" className="proj-btn" style={{ background: 'transparent', border: '1.5px solid var(--border)', color: 'var(--text)' }}>
                GitHub ↗
             </a>
           </div>
          </div>
        </div>
      </div>

          {/* PROJECT 4 */}
          <div className="proj-block reveal">
            <div className="proj-block-inner">
              <div className="proj-visual pv-green">
                <div className="proj-emoji">🛒</div>
                <div className="proj-type-badge">Web · E-Commerce</div>
              </div>
              <div className="proj-info">
                <div className="proj-meta">Project 04 · UKZN · May 2025</div>
                <h2 className="proj-heading">E-Commerce Website — WordPress &amp; WooCommerce</h2>
                <p className="proj-about">
                  A fully functional WooCommerce storefront built on <strong>XAMPP</strong> for a university module.
                  Covered the full e-commerce workflow from product setup through to checkout and payment processing,
                  plus database management and basic security hardening.
                </p>
                <div className="proj-sub-heading">Key features</div>
                <ul className="feat-list">
                  <li>Product catalogue — browsing, filtering, and adding items to cart</li>
                  <li>Shopping cart with quantity management and order summary</li>
                  <li>Checkout flow with multiple options and payment processing</li>
                  <li>MySQL database managed via phpMyAdmin</li>
                  <li>WordPress hosting configuration and basic security settings applied</li>
                </ul>
                <div className="proj-stack">
                  {['WordPress','WooCommerce','MySQL','phpMyAdmin','PHP','HTML / CSS'].map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="proj-actions">
                  <span className="proj-btn pb-grey">No repository — local XAMPP build</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC WORK */}
      <section className="sec" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <span className="eyebrow reveal">Academic work</span>
          <h2 className="sec-heading reveal">Coursework &amp; documentation</h2>
          <p className="sec-sub reveal">Beyond full projects, my degree involved substantial analysis, design, and documentation work.</p>

          <div className="small-grid">
            {[
              { icon: '📐', title: 'Systems Analysis & Design',    desc: 'Requirements gathering, stakeholder analysis, feasibility studies, DFDs, and full system design documentation.' },
              { icon: '🗂️', title: 'Database Design',              desc: 'Normalised relational schemas (3NF), ER diagrams, T-SQL queries, stored procedures, and data integrity design.' },
              { icon: '📊', title: 'UML Diagram Work',             desc: 'Use case, class, sequence, activity, and state machine diagrams produced with draw.io across multiple modules.' },
              { icon: '📡', title: 'Networking & Security',        desc: 'TCP/IP, OSI model, network addressing, subnetting, and information systems security concepts.' },
              { icon: '🧪', title: 'QA & Software Testing',        desc: 'Formal alpha testing with a 4-level defect taxonomy; test case design and defect tracking on the POS project.' },
              { icon: '📈', title: 'Business Information Systems', desc: 'IT strategy, enterprise systems, business process modelling, and IT governance frameworks.' },
            ].map((c) => (
              <div className="small-card reveal" key={c.title}>
                <div className="sc-icon">{c.icon}</div>
                <div className="sc-title">{c.title}</div>
                <div className="sc-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="proj-cta-band">
        <div className="wrap">
          <h2>Want to see the code or ask about a project?</h2>
          <p>Feel free to reach out — I'm happy to walk through any project in detail.</p>
          <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
        </div>
      </div>
    </>
  );
}
