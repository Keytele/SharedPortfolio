import React, { useEffect, useRef } from "react";
import "../App.css";
import bannerImg from "../assets/IMG_9895.jpg";

const IconLinkedIn = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.851-3.036-1.853 0-2.136 1.447-2.136 2.943v5.662H9.0V9h3.11v1.561h.044c.434-.824 1.494-1.692 3.074-1.692 3.29 0 3.897 2.165 3.897 4.983v6.6zM5.337 7.433a1.806 1.806 0 1 1 0-3.612 1.806 1.806 0 0 1 0 3.612zM6.999 20.452H3.675V9H6.999v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
  </svg>
);
const IconGitHub = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.35-1.75-1.35-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.63-2.66-.3-5.46-1.33-5.46-5.91 0-1.3.47-2.36 1.24-3.19-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.22a11.46 11.46 0 0 1 6 0c2.28-1.54 3.29-1.22 3.29-1.22.67 1.66.25 2.88.12 3.18.77.83 1.23 1.89 1.23 3.19 0 4.6-2.81 5.6-5.49 5.89.43.37.81 1.1.81 2.23v3.3c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" fill="currentColor"/>
  </svg>
);

/** Small reveal helper reusing .about-reveal */
function Reveal({ as: Tag = "div", delay = 0, className = "", children }) {
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
  return <Tag ref={ref} className={`about-reveal ${className}`}>{children}</Tag>;
}

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been captured (demo).");
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        className="relative w-full kenburns"
        style={{
          backgroundImage:
            `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 90%",
        }}
        aria-label="City skyline of Singapore"
      >
        <div className="bg-black/40">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <Reveal as="h1" delay={0} className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Contact Us
            </Reveal>
            <Reveal as="p" delay={120} className="mt-6 max-w-3xl text-lg leading-7">
              Feel free to reach out to know more about us!
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contacts + Form */}
      <section className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column: Aghi + Form */}
        <div>
          <Reveal as="h2" delay={0} className="text-xl font-semibold tracking-wide">Contact Aghi</Reveal>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-6">
            <Reveal delay={60}>
              <a className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 text-black hover:bg-white transition"
                 href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="Aghi on LinkedIn">
                <IconLinkedIn className="h-6 w-6" />
              </a>
            </Reveal>
            <Reveal delay={120}>
              <a className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 text-black hover:bg-white transition"
                 href="https://github.com/" target="_blank" rel="noreferrer" aria-label="Aghi on GitHub">
                <IconGitHub className="h-6 w-6" />
              </a>
            </Reveal>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-4 max-w-md">
            <Reveal delay={0}>
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input id="name" name="name" type="text" placeholder="Name"
                  className="w-full rounded-md bg-white text-black placeholder-black/60 px-3 py-2 outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-white/70"
                  required />
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div>
                <label htmlFor="email" className="sr-only">E-mail</label>
                <input id="email" name="email" type="email" placeholder="E-mail"
                  className="w-full rounded-md bg-white text-black placeholder-black/60 px-3 py-2 outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-white/70"
                  required />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" placeholder="Message" rows={4}
                  className="w-full rounded-md bg-white text-black placeholder-black/60 px-3 py-2 outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-white/70"
                  required />
              </div>
            </Reveal>
            <Reveal delay={180}>
              <button type="submit" className="rounded-md bg-white/80 text-black px-6 py-2 font-semibold hover:bg-white transition">
                SEND
              </button>
            </Reveal>
          </form>
        </div>

        {/* Right column: Josh + Email blurb */}
        <div>
          <Reveal as="h2" delay={0} className="text-xl font-semibold tracking-wide">Contact Josh</Reveal>

          <div className="mt-6 flex items-center gap-6">
            <Reveal delay={60}>
              <a className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 text-black hover:bg-white transition"
                 href="https://www.linkedin.com/in/joshua-aldridge3" target="_blank" rel="noreferrer" aria-label="Josh on LinkedIn">
                <IconLinkedIn className="h-6 w-6" />
              </a>
            </Reveal>
            <Reveal delay={120}>
              <a className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 text-black hover:bg-white transition"
                 href="https://github.com/Keytele" target="_blank" rel="noreferrer" aria-label="Josh on GitHub">
                <IconGitHub className="h-6 w-6" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={180} className="mt-12">
            <h3 className="text-base font-semibold">Shared Inbox</h3>
            <a href="mailto:aghijosh@outlook.com" className="mt-1 inline-block underline underline-offset-4">
              E-mail Us Here
            </a>
          </Reveal>
        </div>
      </section>

      {/* Locations / Google Maps placeholders */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal delay={0}>
            <div>
              <h3 className="text-lg font-medium">Our Locations</h3>
              <div id="map-aghi" className="mt-4 aspect-video rounded-xl bg-black/20 ring-1 ring-white/25 flex items-center justify-center">
                <span className="text-white/70 text-sm">Google Map (Aghi) — embed here</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h3 className="text-lg font-medium">Our Locations</h3>
              <div id="map-josh" className="mt-4 aspect-video rounded-xl bg-black/20 ring-1 ring-white/25 flex items-center justify-center">
                <span className="text-white/70 text-sm">Google Map (Josh) — embed here</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
