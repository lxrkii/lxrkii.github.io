import Silk from "./Silk";
import ProfileCard from "./ProfileCard";
import GooeyNav from "./GooeyNav";
import ScrollFloat from "./ScrollFloat";
import "./ProfileCard.css";
import "./index.css";
import "./GooeyNav.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Backend Development",
    desc: "I can create a backend for your website or app",
  },
  {
    title: "Frontend Development",
    desc: "I can create a very complex and flexible frontend for your website or app",
  },
  {
    title: "Scipt creator",
    desc: "I can create a script that will help you find programming in various possible languages using Lua, Cleo, Js, etc.",
  },
  {
    title: "Content Manager",
    desc: "I can run your social media page, create content there, and promote you.",
  },
  {
    title: "Software Tester",
    desc: "I can become a tester of your software or website. Check for various vulnerabilities",
  },
  {
    title: "Mobile app Developer",
    desc: "I can create a mobile app for your business",
  },
];

const skills = [
  { name: "Python", icon: "/source/python.png" },
  { name: "C++", icon: "/source/c++.png" },
  { name: "Css", icon: "/source/css.png" },
  { name: "Html", icon: "/source/html.png" },
  { name: "Java Script", icon: "/source/js.png" },
  { name: "NodeJS", icon: "/source/node-js.png" },
  { name: "Swift", icon: "/source/swift.png" },
  { name: "React", icon: "/source/physics.png" },
  { name: "Python", icon: "/source/physics.png" },
  { name: "Php", icon: "/source/php.png" },
];

const socials = [
  { href: "https://github.com/lxrkii", icon: "/source/github.png", alt: "GitHub", title: "GitHub" },
  { href: "https://x.com/lxrkii", icon: "/source/twitter.png", alt: "Twitter", title: "Twitter" },
  { href: "https://youtu.be/dQw4w9WgXcQ?si=CuE0aANr4ZwlL1pv", icon: "/source/instagram.png", alt: "Instagram", title: "Instagram" },
];

function App() {
  return (
    <>
      <Silk />
      <header>
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "0.5em 0" }}>
          <a href="#" className="logo" style={{ marginRight: "2rem" }}>Kondrakov</a>
          <GooeyNav items={navItems} />
        </div>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
            <ScrollFloat containerClassName="section-title" textClassName="section-title">Home</ScrollFloat>
            <ProfileCard
              avatarUrl="/source/avatar.png"
              miniAvatarUrl="/source/avatar.png"
              name="George Kondrakov"
              title="Full stack developer and Crypto fluencer"
              handle="lxrkii"
              status="Online"
              contactText="Contact"
            />
            <div className="social-links" style={{ margin: "2rem 0 0 0", display: "flex", gap: "1.5rem" }}>
              {socials.map((s) => (
                <a key={s.href} href={s.href} title={s.title} target="_blank" rel="noopener noreferrer">
                  <img src={s.icon} alt={s.alt} style={{ width: 32, height: 32 }} />
                </a>
              ))}
            </div>
            <a href="#contact" className="hire-btn" style={{ marginTop: "2rem" }}>Hire Me</a>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container">
            <ScrollFloat containerClassName="section-title" textClassName="section-title">Services</ScrollFloat>
            <div className="services-grid">
              {services.map((s) => (
                <div className="service-card fade-in-up" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="skills">
          <div className="container">
            <ScrollFloat containerClassName="section-title" textClassName="section-title">Stack</ScrollFloat>
            <div className="skills-grid">
              {skills.map((s, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-icon"><img src={s.icon} alt={s.name} style={{ width: 40, height: 40 }} /></div>
                  <div className="skill-name">{s.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="education" className="education">
          <div className="container">
            <ScrollFloat containerClassName="section-title" textClassName="section-title">My Education</ScrollFloat>
            <div className="education-item fade-in-up">
              <h3 className="education-title">University</h3>
              <p className="education-desc">Not graduated yet</p>
            </div>
            <div className="education-item fade-in-up">
              <h3 className="education-title">High School</h3>
              <p className="education-desc">It school graduation</p>
            </div>
            <div className="education-item fade-in-up">
              <h3 className="education-title">Internship</h3>
              <p className="education-desc">Yandex, Sberbank, Tinkoff, Lukoil, 1C, Avito, + Exploiter work in Skeet</p>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container">
            <ScrollFloat containerClassName="section-title" textClassName="section-title">Contact Me</ScrollFloat>
            <form className="contact-form" action="https://formspree.io/f/mpwladyl" method="POST">
              <div className="form-group">
                <input name="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input name="email" type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input name="subject" type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="hire-btn">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;