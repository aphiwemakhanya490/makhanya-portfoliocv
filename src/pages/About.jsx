import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';
import sidebarPhoto  from '../assets/Graduation_full_pic.jpeg';
import galleryPhoto1 from '../assets/Graduation_half_pic.jpeg';
import galleryPhoto2 from '../assets/Senate_chamber_Picture.jpeg';

export default function About() {
  useReveal();

  return (
    <>
      <div className="page-banner">
        <div className="wrap">
          <h1>About Me</h1>
          <p>Graduate developer with a full-SDLC project delivered for a real client.</p>
        </div>
      </div>

      <section className="sec" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <div className="about-layout">

            {/* SIDEBAR */}
            <aside className="sidebar reveal">
              <div className="sidebar-top">
                <img src={sidebarPhoto} alt="Aphiwe Makhanya — UKZN graduation" className="sidebar-photo" />
                <div className="sidebar-name-block">
                  <div className="sidebar-name">Aphiwe G. Makhanya</div>
                  <div className="sidebar-role">Graduate Software Developer</div>
                </div>
              </div>

              <div className="sidebar-body">
                {[                
                  { icon: '🌍', label: 'Nationality',  val: 'South African' },
                  { icon: '🗣️', label: 'Languages',    val: 'isiZulu (native), English' },
                  { icon: '📍', label: 'Location',     val: 'Amanzimtoti, Durban (open to relocation)' },
                  { icon: '📋', label: 'Criminal',     val: 'None' },
                ].map((r) => (
                  <div className="info-row" key={r.label}>
                    <span className="info-icon">{r.icon}</span>
                    <span className="info-label">{r.label}</span>
                    <span className="info-val">{r.val}</span>
                  </div>
                ))}
                <div className="info-row">
                  <span className="info-icon">✅</span>
                  <span className="info-label">Available</span>
                  <span className="info-val"><span className="avail-pill">Immediately</span></span>
                </div>
              </div>

              <div className="sidebar-actions">
                <Link to="/contact" className="sidebar-btn sb-primary">Contact Me</Link>
                <a href="/Aphiwe_Makhanya_CV.pdf" target="_blank" rel="noreferrer" className="sidebar-btn sb-outline">Download CV</a>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="about-main">

              <section className="reveal">
                <h2 className="sub-heading">Professional Summary</h2>
                <div className="prose">
                  <p>
                    BCom Information Systems &amp; Technology graduate (UKZN, 2025) and{' '}
                    <strong>Oracle OCI AI Foundations Associate</strong>, Dean's Commendation recipient
                    (Semester 1, 2025). Led the full-stack development of a formally assessed, real-client system
                    for <strong>KwaMshana Café</strong> — a C#/.NET WinForms POS desktop application and a
                    companion ASP.NET Web Forms web app with PayStack payment integration, deployed on{' '}
                    <strong>Microsoft Azure</strong>.
                  </p>
                  <p>
                    Proficient across the Microsoft stack (C#, .NET, ASP.NET, Entity Framework Core, SQL Server,
                    REST APIs) and experienced in building and deploying <strong>React</strong> web applications.
                    Also built the <strong>Madlamini Library Management System</strong> — a full Windows Forms
                    desktop app with catalogue, booking/cart, role-based access, and South African input validation.
                  </p>
                    <p>
                      Applies OOP, Agile/Scrum, and full SDLC practices throughout. Eager to contribute to graduate
                      programmes and junior developer roles.
                    </p>
                </div>
              </section>

              <section className="reveal">
                <h2 className="sub-heading">Graduation — UKZN 2026</h2>
                <div className="photo-strip">
                  <img src={galleryPhoto1} alt="Aphiwe Makhanya at UKZN graduation ceremony" />
                  <img src={galleryPhoto2} alt="Aphiwe Makhanya inside the UKZN Senate chamber" />
                </div>
              </section>

              <section className="reveal">
                <h2 className="sub-heading">Work Experience</h2>
                <div className="timeline">
                  <div className="tl-item">
                    <div className="tl-date">February 2026 – May 2026 &amp; December 2024</div>
                    <div className="tl-title">Stock Handler</div>
                    <div className="tl-org">Makro Amanzimtoti — Durban, KwaZulu-Natal</div>
                    <p className="tl-desc">Received, sorted, and processed stock; picked, packed, and labelled customer orders with quality checks before dispatch. Maintained FIFO stock rotation and accurate inventory records; assisted customers with product queries and order status updates.</p>
                  </div>
                  <div className="tl-item">
                    <div className="tl-date">December 2023 – January 2024</div>
                    <div className="tl-title">Seasonal Beach Safety Guide</div>
                    <div className="tl-org">eThekwini Municipality — Durban, KwaZulu-Natal</div>
                    <p className="tl-desc">Directed beach visitors to safe swimming zones in English and isiZulu; ran a child ID wristband system and managed public safety incidents calmly and professionally.</p>
                  </div>
                </div>
              </section>

              <section className="reveal">
                <h2 className="sub-heading">Core Competencies</h2>
                <div className="comp-grid">
                  {[
                    'Analytical & Problem-Solving Thinking',
                    'Object-Oriented Software Design',
                    'Relational Database Design & Querying',
                    'Systems Analysis & Modelling',
                    'Agile / Scrum Methodology',
                    'REST API Development',
                    'Cloud Deployment (Azure)',
                    'Requirements Analysis & Documentation',
                    'Technical Documentation',
                    'Version Control (Git)',
                    'Teamwork & Collaboration',
                    'Continuous Learning',
                  ].map((c) => (
                    <div className="comp-item" key={c}>✔ {c}</div>
                  ))}
                </div>
              </section>

              <section className="reveal">
                <h2 className="sub-heading">Interests</h2>
                <div className="interest-grid">
                  {[        
                    { emoji: '🤖', name: 'Artificial Intelligence' },
                    { emoji: '☁️', name: 'Cloud Computing (AWS, Azure)' },
                    { emoji: '🔐', name: 'Cybersecurity' },
                    { emoji: '💻', name: 'Software Development' },
                    { emoji: '⚙️', name: 'Systems Development' },
                    { emoji: '🧪', name: 'Software Testing' },
                  ].map((i) => (
                    <div className="interest-item" key={i.name}>
                      <div className="interest-emoji">{i.emoji}</div>
                      <div className="interest-name">{i.name}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="reveal">
                <h2 className="sub-heading">References</h2>
                <div className="ref-grid">
                  <div className="ref-card">
                    <div className="ref-name">Dr D. Kumar</div>
                    <div className="ref-role">Lecturer, University of KwaZulu-Natal</div>
                    <div className="ref-detail">
                      <a href="mailto:kumard@ukzn.ac.za">kumard@ukzn.ac.za</a>
                      <span>031 260 8601</span>
                    </div>
                  </div>
                  <div className="ref-card">
                    <div className="ref-name">Nozipho Gumede</div>
                    <div className="ref-role">Supervisor, Makro Amanzimtoti</div>
                    <div className="ref-detail">
                      <span>031 003 1552</span>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.8rem' }}>
                  Additional references available on request.
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
