import "./About.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const interestTitleRef = useRef(null);
  const interestContentRef = useRef(null);
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const subtitleRef = useRef(null);
  const statRefs = useRef([]);

  // HERO ANIMATION
  useEffect(() => {
    const el = titleRef.current;
    const sub = subtitleRef.current;

    gsap.fromTo(
      [el, sub],
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: "power4.out", delay: 0.3 }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-hero",
        start: "top top",
        end: "+=350",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.to(el, {
      scale: 0.65,
      y: -20,
      opacity: 0.4,
      transformOrigin: "center center",
      ease: "none",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // IMAGE ANIMATION
  useEffect(() => {
    if (!imgRef.current) return;
    const anim = gsap.fromTo(
      imgRef.current,
      { y: 60, opacity: 0, scale: 1.04 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-content", start: "top 80%" },
      }
    );
    return () => anim.kill();
  }, []);

  // STAT COUNTER ANIMATION
  useEffect(() => {
    statRefs.current.forEach((el) => {
      if (!el) return;
      const target = parseInt(el.dataset.target, 10);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: "power2.out",
        snap: { val: 1 },
        onUpdate: () => {
          el.textContent = obj.val;
        },
        scrollTrigger: { trigger: el, start: "top 90%" },
      });
    });
  }, []);

  // WORK SECTION ANIMATION
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".work-section", start: "top 80%" },
      });

      gsap.from(".work-row", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".work-section", start: "top 75%" },
      });
    });
    return () => ctx.revert();
  }, []);

  // INTERESTS ANIMATION
  useEffect(() => {
    if (!interestTitleRef.current || !interestContentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(interestTitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: interestTitleRef.current, start: "top 85%" },
      });

      gsap.from(interestContentRef.current.children, {
        x: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: interestContentRef.current, start: "top 85%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page">
      <Navbar />

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-noise" />
        <div className="hero-inner">
          <p ref={subtitleRef} className="hero-eyebrow">Designer &amp; Developer</p>
          <h1 ref={titleRef} className="about-title">
            About Me
          </h1>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-content">
        <div className="about-wrapper">
          <div className="about-left">
            <div className="img-frame">
              <img ref={imgRef} src={heroImg} alt="Laiba" />
              <div className="img-badge">Based in Pakistan</div>
            </div>
          </div>

          <div className="about-right">
            <span className="section-label">Who I am</span>
            <h2>Hey, I'm <em>Laiba</em></h2>
            <p className="bio-lead">
              A Django &amp; frontend developer passionate about building smooth,
              modern web experiences that people love to use.
            </p>
            <p className="bio-sub">
              Independent by nature, collaborative by choice. I care deeply about
              clean code, thoughtful design, and delivering work that stands out.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h3>
                  <span ref={(el) => (statRefs.current[0] = el)} data-target="1">1</span>+
                </h3>
                <span>Year of experience</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <h3>
                  <span ref={(el) => (statRefs.current[1] = el)} data-target="10">10</span>+
                </h3>
                <span>Projects built</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <h3>2</h3>
                <span>Companies worked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="work-section">
        <div className="section-header">
          <span className="section-label">Career</span>
          <h2 className="work-title">Work Experience</h2>
        </div>

        <div className="work-list">
          <div className="work-row">
            <div className="work-timeline">
              <div className="timeline-dot" />
              <div className="timeline-line" />
            </div>
            <div className="work-card">
              <div className="work-card-left">
                <h3>Logicexer</h3>
                <div className="role-block">
                  <p className="role-title">Web Development Intern</p>
                  <span className="role-date">May 2024 – Aug 2024 · Onsite</span>
                </div>
                <div className="role-block">
                  <p className="role-title">Django Developer</p>
                  <span className="role-date">Sep 2024 – Dec 2025 · Onsite</span>
                </div>
              </div>
              <div className="work-card-right">
                <div className="skill-tags">
                  {["Django", "DRF", "Flask", "Python", "Bootstrap"].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
                <p>Learned HTML, CSS, Bootstrap, Python, Django, DRF, Flask</p>
                <p>Built full-stack applications using Django, DRF &amp; frontend tools</p>
              </div>
            </div>
          </div>

          <div className="work-row">
            <div className="work-timeline">
              <div className="timeline-dot active" />
            </div>
            <div className="work-card">
              <div className="work-card-left">
                <h3>Skills Share Hub <span className="company-tag">PSEB</span></h3>
                <div className="role-block">
                  <p className="role-title">Web Developer Intern</p>
                  <span className="role-date">2026 – Present · Onsite</span>
                </div>
              </div>
              <div className="work-card-right">
                <div className="skill-tags">
                  {["React", "JavaScript", "Web Dev"].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
                <p>Working on real-world web projects and improving development experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="interests-section">
        <span className="section-label">Beyond code</span>
        <h2 ref={interestTitleRef} className="interests-title">
          Personal Interests
        </h2>

        <div ref={interestContentRef} className="interests-grid">
          {[
            { icon: "⬡", text: "Building modern web applications and exploring new technologies" },
            { icon: "◈", text: "UI/UX design and creating clean, intuitive user experiences" },
            { icon: "◉", text: "Continuous learning and sharpening development skills" },
            { icon: "◎", text: "Problem solving and logical thinking" },
            { icon: "◇", text: "Exploring AI and future tech trends" },
            { icon: "◈", text: "Music and working in deep focus environments" },
          ].map((item, i) => (
            <div key={i} className="interest-item">
              <span className="interest-icon">{item.icon}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
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