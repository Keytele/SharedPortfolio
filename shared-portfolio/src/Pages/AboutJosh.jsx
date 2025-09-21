import React, { useState } from "react";
import "../App.css";

function Chip({ children }) { // As chip on the bottom for tech skills
    return (
        <span className="inline-block rounded-full border border-white px-3 py-1 text-xs mr-2 mb-2">
            { children }
        </span>
    )
}

function SectionCard({ children, className = "" }) {
    return (
        <div className={`rounded-xl bg-white backdrop-blur-sm shadow-md p-5 ${className}`}>
            { children }
        </div>
    )
}

export default function AboutJosh() {
    const [activeTab, setActiveTab ] = useState("education");

    const TabButton = ({ id, children }) => (
        <button onClick={() => setActiveTab(id)} className={["rounded-xl px-6 py-3 font-semibold transition", 
        activeTab === id ? "bg-white/20 ring-2 ring-white/40" : "bg-white/10 hover:bg-white/20", ].join(" ")} aria-pressed={activeTab === id}>
            { children }
        </button>
    );

    const Education = () => (
        <div className="grid lg:grid-cols-2 gap-10">
            <SectionCard>
                <h4 className="text-xl font-semibold">Deakin University</h4>
                <p className="opacity-90">Feb 2021 - Dec 2025</p>
                <p className="mt-2">Bachelor of Information Technology - Cybersecurity Major</p>
                <p className="mt-2">WAM: 69.458</p>
                <p className="mt-2">Clubs: Deakin University Computer Society</p>

                <div className="mt-3">
                    <Chip>Wireshark</Chip>
                    <Chip>Linux</Chip>
                    <Chip>CSS</Chip>
                    <Chip>HTML</Chip>
                    <Chip>Vue.js</Chip>
                </div>
            </SectionCard>
        </div>
    )

    const Work = () => (
        <div className="grid lg:grid-cols-2 gap-10">
            <SectionCard>
                <h4 className="text-xl font-semibold">Hypergen</h4>
                <p className="opacity-90">Sep 2025 - Present</p>
                <p className="mt-2">Bachelor of Information Technology - Cybersecurity Major</p>
                <p className="mt-2">WAM: 69.458</p>
                <p className="mt-2">Clubs: Deakin University Computer Society</p>

                <div className="mt-3">
                    <Chip>Wireshark</Chip>
                    <Chip>Linux</Chip>
                    <Chip>CSS</Chip>
                    <Chip>HTML</Chip>
                    <Chip>Vue.js</Chip>
                </div>
            </SectionCard>

            <SectionCard>
                <h4 className="text-xl font-semibold">Deakin University</h4>
                <p className="opacity-90">Feb 2021 - Dec 2025</p>
                <p className="mt-2">Bachelor of Information Technology - Cybersecurity Major</p>
                <p className="mt-2">WAM: 69.458</p>
                <p className="mt-2">Clubs: Deakin University Computer Society</p>

                <div className="mt-3">
                    <Chip>Wireshark</Chip>
                    <Chip>Linux</Chip>
                    <Chip>CSS</Chip>
                    <Chip>HTML</Chip>
                    <Chip>Vue.js</Chip>
                </div>
            </SectionCard>

            <SectionCard>
                <h4 className="text-xl font-semibold">DeakinTALENT FreelancingHUB</h4>
                <p className="opacity-90">Feb 2021 - Dec 2025</p>
                <p className="mt-2">Bachelor of Information Technology - Cybersecurity Major</p>
                <p className="mt-2">WAM: 69.458</p>
                <p className="mt-2">Clubs: Deakin University Computer Society</p>

                <div className="mt-3">
                    <Chip>Wireshark</Chip>
                    <Chip>Linux</Chip>
                    <Chip>CSS</Chip>
                    <Chip>HTML</Chip>
                    <Chip>Vue.js</Chip>
                </div>
            </SectionCard>
        </div>
    )
}
