// src/Pages/AboutJosh.jsx
import React, { useEffect, useRef, useState } from "react";
import "../App.css"; // Tailwind + our new animation utilities

function Chip({ children }) {
  return (
    <span className="inline-block rounded-full border border-white/40 px-3 py-1 text-xs tracking-wide mr-2 mb-2">
      {children}
    </span>
  );
}

function SectionCard({ children, className = "" }) {
  return (
    <div className={`rounded-xl bg-white/10 backdrop-blur-sm shadow-md p-5 ${className}`}>
      {children}
    </div>
  );
}

/** Minimal reveal-once helper (vanilla, no libs) */
function AboutReveal({ as: Tag = "div", delay = 0, className = "", children }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.setProperty("--a-delay", `${delay}ms`);
        el.classList.add("is-visible");
        io.unobserve(el);
      }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref} className={`about-reveal ${className}`}>
      {children}
    </Tag>
  );
}

export default function AboutJosh() {
  const [activeTab, setActiveTab] = useState("education");

  const TabButton = ({ id, children }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={[
        "rounded-xl px-6 py-3 font-semibold transition tab-underline",
        activeTab === id ? "bg-white/20 ring-2 ring-white/40" : "bg-white/10 hover:bg-white/20",
      ].join(" ")}
      aria-pressed={activeTab === id}
    >
      {children}
    </button>
  );

  const Education = () => (
    <div className="grid lg:grid-cols-2 gap-10">
      <AboutReveal delay={60}><SectionCard>
        <h4 className="text-xl font-semibold">Deakin University</h4>
        <p className="opacity-90">Feb 2021 – Dec 2024</p>
        <p className="mt-2">Bachelor of Information Technology – Cybersecurity Major</p>
        <p className="mt-2 opacity-90">WAM: 69.458</p>
        <p className="mt-2 opacity-90">Clubs: Deakin University Computer Society</p>
        <div className="mt-3"><Chip>Wireshark</Chip><Chip>HTML</Chip><Chip>CSS</Chip></div>
      </SectionCard></AboutReveal>

      <AboutReveal delay={120}><SectionCard>
        <h4 className="text-xl font-semibold">Deakin University</h4>
        <p className="opacity-90">Feb 2021 – Dec 2024</p>
        <p className="mt-2">Bachelor of Information Technology – Cybersecurity Major</p>
        <p className="mt-2 opacity-90">WAM: 69.458</p>
        <p className="mt-2 opacity-90">Clubs: Deakin University Computer Society</p>
        <div className="mt-3"><Chip>Wireshark</Chip><Chip>HTML</Chip><Chip>CSS</Chip></div>
      </SectionCard></AboutReveal>

      <AboutReveal delay={180}><SectionCard className="lg:col-span-2">
        <h4 className="text-xl font-semibold">Deakin University</h4>
        <p className="opacity-90">Feb 2021 – Dec 2024</p>
        <p className="mt-2">Bachelor of Information Technology – Cybersecurity Major</p>
        <p className="mt-2 opacity-90">WAM: 69.458</p>
        <p className="mt-2 opacity-90">Clubs: Deakin University Computer Society</p>
        <div className="mt-3"><Chip>Wireshark</Chip><Chip>HTML</Chip><Chip>CSS</Chip></div>
      </SectionCard></AboutReveal>
    </div>
  );

  const Work = () => (
    <div className="grid lg:grid-cols-2 gap-10">
      <AboutReveal delay={60}><SectionCard>
        <h4 className="text-xl font-semibold">Cybersecurity Intern — Example Co.</h4>
        <p className="opacity-90">Jun 2024 – Nov 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1 opacity-90">
          <li>Assisted with network traffic analysis and incident triage.</li>
          <li>Automated log parsing with Python to speed up investigations.</li>
        </ul>
        <div className="mt-3"><Chip>SIEM</Chip><Chip>Python</Chip><Chip>Packet Analysis</Chip></div>
      </SectionCard></AboutReveal>

      <AboutReveal delay={120}><SectionCard>
        <h4 className="text-xl font-semibold">IT Support (Part-time) — Campus</h4>
        <p className="opacity-90">Feb 2023 – May 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1 opacity-90">
          <li>Resolved tickets, imaging devices, and managing accounts.</li>
          <li>Created quick-start docs to reduce repeat tickets.</li>
        </ul>
        <div className="mt-3"><Chip>Windows</Chip><Chip>Azure AD</Chip><Chip>Documentation</Chip></div>
      </SectionCard></AboutReveal>
    </div>
  );

  const Hobbies = () => (
    <AboutReveal delay={60}>
      <SectionCard>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="opacity-90">🏋️ Fitness & Calisthenics</li>
          <li className="opacity-90">🎮 Gaming</li>
          <li className="opacity-90">🧪 Security Labs & CTFs</li>
          <li className="opacity-90">📷 Photography</li>
          <li className="opacity-90">🧑‍🍳 Cooking</li>
          <li className="opacity-90">✈️ Travel</li>
        </ul>
      </SectionCard>
    </AboutReveal>
  );

  const Skills = () => (
    <AboutReveal delay={60}>
      <SectionCard>
        <div className="flex flex-wrap">
          <Chip>HTML</Chip><Chip>CSS</Chip><Chip>JavaScript</Chip><Chip>React</Chip>
          <Chip>Tailwind CSS</Chip><Chip>Wireshark</Chip><Chip>Linux</Chip>
          <Chip>Git</Chip><Chip>Python</Chip>
        </div>
      </SectionCard>
    </AboutReveal>
  );

  return (
    <main className="px-6 pt-24 lg:px-9">
      <AboutReveal as="div" delay={0} className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">About Josh</h1>
        <button type="button" className="rounded-xl bg-white/20 px-4 py-3 text-sm font-semibold tracking-wide shadow-sm hover:bg-white/30">
          WEATHER APP<br />API
        </button>
      </AboutReveal>

      <AboutReveal as="hr" delay={80} className="h-1 my-6 bg-white/70 border-0 rounded-sm" />

      <AboutReveal delay={120}>
        <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 sm:p-6 flex gap-5 items-center shadow-md">
          <img src="/assets/josh.jpg" alt="Josh in front of the Merlion" className="h-44 w-36 object-cover rounded-md select-none" />
          <div className="text-black bg-white rounded-md w-full p-4 sm:p-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Joshua Aldridge</h2>
            <p className="mt-4 text-2xl font-semibold leading-snug">Recent IT Graduate - Current Software Developer</p>
          </div>
        </div>
      </AboutReveal>

      <section className="mt-10">
        <AboutReveal delay={160}><h3 className="text-3xl font-bold text-center">My Resume</h3></AboutReveal>

        <AboutReveal delay={200}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <TabButton id="education">Education</TabButton>
            <TabButton id="work">Work Experience</TabButton>
            <TabButton id="hobbies">Hobbies</TabButton>
            <TabButton id="skills">Skills</TabButton>
          </div>
        </AboutReveal>

        {/* swap with a fade by remounting keyed container */}
        <div className="mt-8">
          <AboutReveal key={activeTab} delay={40}>
            {activeTab === "education" && <Education />}
            {activeTab === "work" && <Work />}
            {activeTab === "hobbies" && <Hobbies />}
            {activeTab === "skills" && <Skills />}
          </AboutReveal>
        </div>
      </section>
    </main>
  );
}
