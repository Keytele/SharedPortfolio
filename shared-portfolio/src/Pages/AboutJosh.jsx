// src/Pages/AboutJosh.jsx
import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import joshPic from "../assets/IMG_5881.jpg";

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
        <div className="mt-3"><Chip>Wireshark</Chip><Chip>HTML</Chip><Chip>CSS</Chip><Chip>JavaScript</Chip><Chip>Vue.js</Chip><Chip>Kali Linux</Chip></div>
      </SectionCard></AboutReveal>

      <AboutReveal delay={120}><SectionCard>
        <h4 className="text-xl font-semibold">Launceston College</h4>
        <p className="opacity-90">Feb 2019 - Nov 2020</p>
        <p className="mt-2">Tasmanian Certificate of Education</p>
        <p className="mt-2 opacity-90">ATAR: 63.70</p>
      </SectionCard></AboutReveal>
    </div>
  );

  const Work = () => (
    <div className="grid lg:grid-cols-2 gap-10">
      <AboutReveal delay={60}><SectionCard>
        <h4 className="text-xl font-semibold">Hypergen</h4>
        <p className="opacity-90">Sep 2025 - Present</p>
        <ul className="list-disc list-inside mt-2 space-y-1 opacity-90">
          <li>Using workflow and Microsoft Power Automate to create an automated customer service agent</li>
        </ul>
        <div className="mt-3"><Chip>Microsoft Power Automate</Chip><Chip>Python</Chip><Chip>Generative AI</Chip></div>
      </SectionCard></AboutReveal>

      <AboutReveal delay={120}><SectionCard>
        <h4 className="text-xl font-semibold">DeakinTALENT Digital Services Intern - Deakin University</h4>
        <p className="opacity-90">Feb 2023 – May 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1 opacity-90">
          <li>Assisting with general administration and BAU duties within DeakinTALENT</li>
          <li>Promptly responding to emails to both external and internal stakeholders at Deakin University and providing high-quality service, resulting in overall positive feedback from students/alumni/staff</li>
          <li>Processing Deakin University alumni requests on the TargetConnect system and data entry on MS Excel</li>
          <li>Conducting staff and permissions auditing for DeakinTALENT and Deakin University faculty staff</li>
          <li>Revamped an internal data request form using Microsoft Lists & Power Automate</li>
          <li>Developed a new Microsoft SharePoint homepage with an automatic event calendar system using Power Automate</li>
        </ul>
        <div className="mt-3"><Chip>Microsoft Office</Chip><Chip>Microsoft Power Automate</Chip><Chip>Microsoft SharePoint</Chip><Chip>Internal and External Communications</Chip><Chip>Student Engagement</Chip><Chip>Administrative Assistance</Chip></div>
      </SectionCard></AboutReveal>

      <AboutReveal delay={120}><SectionCard>
        <h4 className="text-xl font-semibold">DeakinTALENT FreelancingHUB Senior Intern</h4>
        <p className="opacity-90">Feb 2023 – May 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1 opacity-90">
          <li>Collaborating with project manager and 53 interns across 7 teams and clients</li>
          <li>Acting as Senior Intern for Trimester 1, 2 and 3, 2024 & Trimester 1, 2025</li>
          <li>Hybrid working environment on MS Teams, Zoom across Geelong, Burwood and Online</li>
          <li>Mentoring and guiding teams of 8-10 interns, leading to highly collaborative work environment and positive team culture</li>
          <li>Engaging with clients through face-to-face and online meetings to gather requirements and presenting deliverables resulting in overall positive feedback</li>
          <li>Using Figma and Canva to create multiple mock-up designs and templates to modernise existing websites/apps for clients and assisting in the creation of a comprehensive project report that include recommendations for further project development</li>
        </ul>
        <div className="mt-3"><Chip>Figma</Chip><Chip>Microsoft Power BI</Chip><Chip>Microsoft Office</Chip><Chip>Client Relations</Chip><Chip>Stakeholder Management</Chip><Chip>UX/UI Development</Chip></div>
      </SectionCard></AboutReveal>

      <AboutReveal delay={120}><SectionCard>
        <h4 className="text-xl font-semibold">DeakinTALENT FreelancingHUB Project Intern</h4>
        <p className="opacity-90">Nov 2023 – Dec 2023</p>
        <ul className="list-disc list-inside mt-2 space-y-1 opacity-90">
          <p>Client: Deakin and Community Childcare Centre (DACCC)</p>
          <li>Project Stream Lead (Media)</li>
          <li>Collaborating with project manager and senior intern along with 7 other project interns in a hybrid work environment</li>
          <li>Collaborating with project manager and senior intern along with 7 other project interns</li>
          <li>Capturing of images and photo editing using Adobe Lightroom</li>
          <li>Designed colour palettes and high-fidelity website design mockups using Figma</li>
        </ul>
        <div className="mt-3"><Chip>UX/UI Development</Chip><Chip>Figma</Chip><Chip>Adobe Lightroom</Chip><Chip>Project Report Writing</Chip><Chip>Photography</Chip></div>
      </SectionCard></AboutReveal>
    </div>
  );

  const Hobbies = () => (
    <AboutReveal delay={60}>
      <SectionCard>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="opacity-90">🎮 Gaming</li>
          <li className="opacity-90">🧪 Security Labs & CTFs</li>
          <li className="opacity-90">📷 Photography</li>
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
          <Chip>Git</Chip><Chip>Python</Chip><Chip>Microsoft Power Platform</Chip><Chip>Adobe Lightroom</Chip><Chip>Affinity Photography</Chip>
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
          <img src={joshPic} alt="Josh in front of the Merlion" className="h-60 w-45 object-cover rounded-md select-none" />
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
