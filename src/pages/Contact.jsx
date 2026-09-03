import { useState, useEffect } from 'react';
import useReveal from '../components/useReveal';

export default function Contact() {
  useReveal();

  const [form, setForm] = useState({ fname: '', lname: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (window.emailjs) {
      window.emailjs.init('RjB3UnaqKU8scQhGe');
    }
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    const { fname, lname, email, subject, message } = form;

    if (!fname || !lname || !email || !subject || !message) {
      setStatus({ type: 'error', text: 'Please fill in all fields before sending.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    setSending(true);
    setStatus({ type: '', text: '' });

    window.emailjs.send('service_aphi2004', 'template_26otmk6', {
      from_name:  fname + ' ' + lname,
      from_email: email,
      reply_to:   email,
      subject:    subject,
      message:    message,
    }).then(() => {
      setStatus({ type: 'success', text: `Message sent. I will get back to you shortly, ${fname}.` });
      setForm({ fname: '', lname: '', email: '', subject: '', message: '' });
      setSending(false);
    }, (err) => {
      setStatus({ type: 'error', text: 'Something went wrong. Please email me directly at aphiwemakhanya490@gmail.com' });
      setSending(false);
      console.error('EmailJS error:', JSON.stringify(err));
    });
  }

  return (
    <>
      <div className="page-banner">
        <div className="wrap">
          <h1>Get In Touch</h1>
          <p>Available immediately for graduate programmes, junior developer roles, and freelance work.</p>
        </div>
      </div>

      <section className="sec" style={{ background: 'var(--bg)' }}>
        <div className="wrap">
          <div className="contact-layout">

            {/* LEFT */}
            <div className="reveal">
              <p className="contact-intro">
                Whether you have a role, a project, or just want to chat about technology — feel free to reach out.
                I respond within 24 hours.
              </p>

              <div className="contact-cards">
                <a href="mailto:aphiwemakhanya490@gmail.com" className="cc">
                  <div className="cc-icon">✉️</div>
                  <div><div className="cc-lbl">Email</div><div className="cc-val">aphiwemakhanya490@gmail.com</div></div>
                </a>
                <a href="tel:0655510704" className="cc">
                  <div className="cc-icon">📱</div>
                  <div><div className="cc-lbl">Phone</div><div className="cc-val">065 551 0704</div></div>
                </a>
                <a href="https://www.linkedin.com/in/aphiwem490" target="_blank" rel="noreferrer" className="cc">
                  <div className="cc-icon">💼</div>
                  <div><div className="cc-lbl">LinkedIn</div><div className="cc-val">linkedin.com/in/aphiwem490</div></div>
                </a>
                <a href="https://github.com/aphiwemakhanya490" target="_blank" rel="noreferrer" className="cc">
                  <div className="cc-icon">🐙</div>
                  <div><div className="cc-lbl">GitHub</div><div className="cc-val">github.com/aphiwemakhanya490</div></div>
                </a>
                <div className="cc" style={{ cursor: 'default' }}>
                  <div className="cc-icon">📍</div>
                  <div><div className="cc-lbl">Location</div><div className="cc-val">Amanzimtoti, Durban (open to relocation)</div></div>
                </div>
              </div>

              <div className="avail-box">
                <div className="avail-heading">Currently available for</div>
                <div className="avail-list">
                  <div className="avail-row">Graduate developer programmes</div>
                  <div className="avail-row">Junior developer positions</div>
                  <div className="avail-row">Internships</div>
                  <div className="avail-row">Freelance and contract projects</div>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="reveal">
              <div className="form-card">
                <h2 className="form-title">Send a message</h2>
                <p className="form-sub">Fill in the form and I'll reply to your email directly.</p>

                <div className="form-row-2">
                  <div className="fg">
                    <label>First name</label>
                    <input type="text" name="fname" value={form.fname} onChange={handleChange} placeholder="John" autoComplete="given-name" />
                  </div>
                  <div className="fg">
                    <label>Last name</label>
                    <input type="text" name="lname" value={form.lname} onChange={handleChange} placeholder="Smith" autoComplete="family-name" />
                  </div>
                </div>

                <div className="fg">
                  <label>Email address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" autoComplete="email" />
                </div>

                <div className="fg">
                  <label>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">Select a subject</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Graduate Programme">Graduate Programme</option>
                    <option value="Internship">Internship</option>
                    <option value="Freelance / Contract">Freelance / Contract</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div className="fg">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Hi Aphiwe, I'd like to discuss..." />
                </div>

                {status.text && (
                  <div className={`form-msg ${status.type}`}>{status.text}</div>
                )}

                <button className="submit-btn" onClick={handleSubmit} disabled={sending}>
                  {sending ? 'Sending...' : 'Send message'}
                </button>
                <p className="form-note">I typically respond within 24 hours.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
