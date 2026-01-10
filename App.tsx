
import React, { useState } from 'react';
import { RESUME_DATA } from './constants';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setFormStatus('submitting');

    // Simulate a professional delay
    setTimeout(() => {
      setFormStatus('success');
      
      // Construct the mailto link
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
      const body = encodeURIComponent(
        `Hi Gagan,\n\nYou have received a new message from your portfolio website:\n\n` +
        `Name: ${formState.name}\n` +
        `Email: ${formState.email}\n\n` +
        `Message:\n${formState.message}\n\n` +
        `---\nSent from Gaganjot Singh Portfolio`
      );
      
      // Open the user's mail client
      window.location.href = `mailto:${RESUME_DATA.email}?subject=${subject}&body=${body}`;
    }, 1500);
  };

  return (
    <div className="min-h-screen relative selection:bg-sky-500 selection:text-white">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-600 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600 blur-[120px]"></div>
      </div>

      <nav className="sticky top-0 z-40 glass border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
          >
            GS<span className="text-sky-500">.</span>
          </a>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-slate-400 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass border-b border-white/10 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-white text-lg font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-32">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col-reverse md:flex-row items-center gap-12 scroll-mt-28">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold tracking-wide uppercase">
              Principal Architect @ Nagarro
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              {RESUME_DATA.name}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Building highly scalable, cloud-native architectures. 13+ years of expertise in 
              <span className="text-white font-medium"> Microservices</span>, 
              <span className="text-white font-medium"> Node.js</span>, and 
              <span className="text-white font-medium"> AI-driven </span> solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="accent-gradient px-8 py-3 rounded-full text-white font-bold hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
              >
                Let's Connect
              </a>
              <a 
                href="#experience" 
                onClick={(e) => handleNavClick(e, '#experience')}
                className="px-8 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-all"
              >
                View Experience
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative p-1 bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-full shadow-2xl">
              <img 
                src={RESUME_DATA.profileImage} 
                alt={RESUME_DATA.name} 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-slate-900 object-cover"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-12 scroll-mt-28">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sky-500"></span> About Me
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-4xl">
              {RESUME_DATA.about}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-sky-400 mb-1">13+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Years Exp</div>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-indigo-400 mb-1">50+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Microservices</div>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-sky-400 mb-1">6+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Awards Won</div>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-indigo-400 mb-1">AI</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Expertise</div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-16 scroll-mt-28">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-[2px] bg-sky-500"></span> Professional Journey
          </h2>
          <div className="space-y-12">
            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                <div className="absolute left-0 top-0 bottom-[-48px] w-[1px] bg-slate-800 md:hidden"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-sky-500 md:hidden"></div>

                <div className="grid md:grid-cols-12 gap-6 md:gap-12 group">
                  <div className="md:col-span-3">
                    <div className="text-sky-500 font-bold text-lg">{exp.period}</div>
                    <div className="text-slate-500 text-sm font-medium mt-1 uppercase tracking-wider">{exp.company}</div>
                  </div>
                  <div className="md:col-span-9 glass p-8 rounded-3xl group-hover:bg-slate-800/60 transition-colors border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">{exp.role}</h3>
                    <ul className="space-y-3">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400 leading-relaxed">
                          <span className="text-sky-500 mt-1.5">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12 scroll-mt-28">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="w-8 h-[2px] bg-sky-500"></span> Technical Arsenal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESUME_DATA.skills.map((cat, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl border border-white/10 space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 bg-slate-800/80 border border-white/5 rounded-lg text-sm text-slate-300 hover:text-sky-400 hover:border-sky-500/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Certs Section */}
        <section id="awards" className="grid md:grid-cols-2 gap-16 scroll-mt-28">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sky-500"></span> Honors & Awards
            </h2>
            <div className="space-y-6">
              {RESUME_DATA.awards.map((award, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                  <div className="w-10 h-10 flex-shrink-0 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{award.title}</h4>
                    <p className="text-sm text-slate-500">{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sky-500"></span> Certifications
            </h2>
            <div className="space-y-6">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                  <div className="w-10 h-10 flex-shrink-0 bg-sky-500/10 rounded-xl flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{cert.name}</h4>
                    <p className="text-sm text-slate-500">{cert.issuer}</p>
                  </div>
                </div>
              ))}
              <div className="p-6 glass rounded-2xl border border-white/10 mt-8">
                <h4 className="font-bold text-white mb-2">{RESUME_DATA.education.school}</h4>
                <p className="text-sky-500 font-medium">{RESUME_DATA.education.degree}</p>
                <p className="text-sm text-slate-500 mt-1">{RESUME_DATA.education.period}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-12 scroll-mt-28">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
            <p className="text-slate-400">
              I'm always open to discussing advanced architectural patterns, 
              large-scale microservices, and AI integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-10 rounded-3xl border border-white/10 space-y-8 h-fit">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Phone</div>
                  <div className="text-white font-bold">{RESUME_DATA.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Email</div>
                  <div className="text-white font-bold">{RESUME_DATA.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Location</div>
                  <div className="text-white font-bold">{RESUME_DATA.location}</div>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Ready!</h3>
                  <p className="text-slate-400 max-w-xs">
                    Your email client should have opened. If not, please check your background apps to finalize sending.
                  </p>
                  <button 
                    onClick={() => {
                      setFormStatus('idle');
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="text-sky-500 font-bold hover:text-sky-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-400">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Message</label>
                    <textarea 
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      rows={4} 
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none" 
                      placeholder="Hello Gagan, let's talk about..." 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`w-full accent-gradient py-4 rounded-xl text-white font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Preparing...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Gaganjot Singh. Designed with passion and AI.</p>
      </footer>

    </div>
  );
};

export default App;
