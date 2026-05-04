import "./Home.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const nameRef = useRef(null);
  const SKILLS = [
  { name: "Python",     icon: "🐍", category: "Backend"  },
  { name: "Django",     icon: "🟢", category: "Backend"  },
  { name: "DRF",        icon: "⚙️", category: "Backend"  },
  { name: "Flask",      icon: "🌶️", category: "Backend"  },
  { name: "React",      icon: "⚛️", category: "Frontend" },
  { name: "JavaScript", icon: "JS",  category: "Frontend" },
  { name: "HTML & CSS", icon: "🎨", category: "Frontend" },
  { name: "Bootstrap",  icon: "BS",  category: "Frontend" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "REST APIs",  icon: "🔗", category: "Backend"  },
  { name: "Git",        icon: "🌿", category: "Tools"    },
  { name: "VS Code",    icon: "💻", category: "Tools"    },
];
const skillsRef = useRef(null);

  const handleMove = (e) => {
    const rect = nameRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const moveX = x * 25;
    nameRef.current.style.transform = `translateX(${moveX}px)`;
  };
  useEffect(() => {
  if (!skillsRef.current) return;
  const ctx = gsap.context(() => {

    gsap.from(".skills-heading", {
      y: 50, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ".skills-section", start: "top 80%" },
    });

    gsap.from(".skills-divider", {
      scaleX: 0, duration: 1.2, ease: "power3.out",
      transformOrigin: "left center",
      scrollTrigger: { trigger: ".skills-section", start: "top 75%" },
    });

    gsap.from(".skill-card", {
      y: 50, opacity: 0, scale: 0.88,
      stagger: 0.07,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: { trigger: ".skills-grid", start: "top 85%" },
    });

  }, skillsRef);
  return () => ctx.revert();
}, []);

  return (
    <div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="hero">

        <div className="left-text">
          <h2>Web & Backend Developer</h2>
        </div>

        <h1
          className="hero-name"
          ref={nameRef}
          onMouseMove={handleMove}
        >
          Laiba Shaban
        </h1>

        <p className="sub-text">Django Developer</p>

      </section>
      <section className="skills-section" ref={skillsRef}>
  <div className="skills-inner">

    <div className="skills-header">
      <span className="skills-eyebrow">What I work with</span>
      <h2 className="skills-heading">
        Skills &amp; <em>Technologies</em>
      </h2>
      <div className="skills-divider" />
    </div>

    <div className="skills-grid">
      {SKILLS.map((skill) => (
        <div className="skill-card" key={skill.name}>
          <span className="skill-icon">{skill.icon}</span>
          <span className="skill-name">{skill.name}</span>
          <span className="skill-cat">{skill.category}</span>
        </div>
      ))}
    </div>

  </div>
</section>

{/* CONTACT SECTION */}
 <section className="contact-section">
        <div className="contact-inner">
          <span className="section-label light">Get in touch</span>
          <h2 className="contact-title">
            Let's work <em>together.</em>
          </h2>
          <p className="contact-text">
            I'm always looking for new projects and collaborations.
            If you have something exciting in mind, I'd love to hear about it.
          </p>

          <div className="contact-card">
            <div className="contact-avatar">LS</div>
            <div>
              <h4>Laiba Shaban</h4>
              <p>laiba@email.com</p>
            </div>
          </div>

          <div className="contact-buttons">
            <a href="#" className="contact-btn outline">Instagram</a>
            <a href="#" className="contact-btn filled">LinkedIn →</a>
          </div>
        </div>
      </section>
    </div>
  );
}