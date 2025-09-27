// src/Pages/AboutJosh.jsx
import React, { useState } from "react";
import "../App.css"; // ensures Tailwind utilities are available sitewide

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

export default function AboutAghi() {
  const [activeTab, setActiveTab] = useState("education");

  const TabButton = ({ id, children }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={[
        "rounded-xl px-6 py-3 font-semibold transition",
        activeTab === id
          ? "bg-white/20 ring-2 ring-white/40"
          : "bg-white/10 hover:bg-white/20",
      ].join(" ")}
      aria-pressed={activeTab === id}
    >
      {children}
    </button>
  );

  const Education = () => (
    <div className="grid lg:grid-cols-2 gap-10">
      <SectionCard>
        <h4 className="text-xl font-semibold">Deakin University</h4>
        <p className="opacity-90">Dates</p>
        <p className="mt-2">Bachelor of Information Technology</p>
        <p className="mt-2 opacity-90">WAM: </p>
        <p className="mt-2 opacity-90">Add something here</p>
        <div className="mt-3">
          <Chip>Wireshark</Chip>
          <Chip>HTML</Chip>
          <Chip>CSS</Chip>
        </div>
      </SectionCard>
    </div>
  );

  const Work = () => (
    <div className="grid lg:grid-cols-2 gap-10">
      <SectionCard>
        <h4 className="text-xl font-semibold">Cybersecurity Intern — Example Co.</h4>
        <p className="opacity-90">Jun 2024 – Nov 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1 opacity-90">
          <li>Assisted with network traffic analysis and incident triage.</li>
          <li>Automated log parsing with Python to speed up investigations.</li>
        </ul>
        <div className="mt-3">
          <Chip>SIEM</Chip><Chip>Python</Chip><Chip>Packet Analysis</Chip>
        </div>
      </SectionCard>

      <SectionCard>
        <h4 className="text-xl font-semibold">IT Support (Part-time) — Campus</h4>
        <p className="opacity-90">Feb 2023 – May 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1 opacity-90">
          <li>Resolved tickets, imaging devices, and managing accounts.</li>
          <li>Created quick-start docs to reduce repeat tickets.</li>
        </ul>
        <div className="mt-3">
          <Chip>Windows</Chip><Chip>Azure AD</Chip><Chip>Documentation</Chip>
        </div>
      </SectionCard>
    </div>
  );

  const Hobbies = () => (
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
  );

  const Skills = () => (
    <SectionCard>
      <div className="flex flex-wrap">
        <Chip>HTML</Chip><Chip>CSS</Chip><Chip>JavaScript</Chip><Chip>React</Chip>
        <Chip>Tailwind CSS</Chip><Chip>Wireshark</Chip><Chip>Linux</Chip>
        <Chip>Git</Chip><Chip>Python</Chip>
      </div>
    </SectionCard>
  );

  return (
    <main className="px-6 pt-24 lg:px-9">
      {/* Header row with page title and a small button like the mock */}
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">About Aghi</h1>
        <button
          type="button"
          className="rounded-xl bg-white/20 px-4 py-3 text-sm font-semibold tracking-wide shadow-sm hover:bg-white/30"
          title="Demo badge – replace with your feature"
        >
          WEATHER APP<br />API
        </button>
      </div>

      <hr className="h-1 my-6 bg-white/70 border-0 rounded-sm" />

      {/* Hero card */}
      <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 sm:p-6 flex gap-5 items-center shadow-md">
        <img
          src="/assets/aghi.jpg"
          alt="Picture of Aghi"
          className="h-44 w-36 object-cover rounded-md select-none"
        />
        <div className="text-black bg-white rounded-md w-full p-4 sm:p-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">NAME</h2>
          <p className="mt-4 text-2xl font-semibold leading-snug">
            Summary Para
          </p>
        </div>
      </div>

      {/* Resume tabs */}
      <section className="mt-10">
        <h3 className="text-3xl font-bold text-center">My Resume</h3>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <TabButton id="education">Education</TabButton>
          <TabButton id="work">Work Experience</TabButton>
          <TabButton id="hobbies">Hobbies</TabButton>
          <TabButton id="skills">Skills</TabButton>
        </div>

        <div className="mt-8">
          {activeTab === "education" && <Education />}
          {activeTab === "work" && <Work />}
          {activeTab === "hobbies" && <Hobbies />}
          {activeTab === "skills" && <Skills />}
        </div>
      </section>
    </main>
  );
}
