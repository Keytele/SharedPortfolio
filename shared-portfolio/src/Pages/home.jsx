import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

/** Simple reveal-on-scroll wrapper (no external libs) */
function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal-up ${className}`}>
      {children}
    </Tag>
  );
}

export default function Home() {
  const founders = [
    { name: "Aghilesh Arasu", blurb: "Deakin University IT Grad [PLACEHOLDER]" },
    { name: "Joshua Aldridge", blurb: "Deakin University IT Grad [PLACEHOLDER]" },
  ];

  // Swap these labels for <img> logos later
  const logos = Array.from({ length: 10 }, (_, i) => `Logo ${i + 1}`);

  return (
    <>
      {/* HERO */}
      <Reveal as="section" className="pt-28 pb-16 px-6 text-center">
        <Reveal delay={0}>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Welcome to our portfolio site – By Aghi & Josh!
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-4 text-xl text-white/80">IT Graduates</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              to="/about"
              className="rounded-xl px-6 py-3 bg-white/10 text-white font-semibold hover:bg-white/20 ring-1 ring-white/20 backdrop-blur transition"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="rounded-xl px-6 py-3 bg-white/10 text-white font-semibold hover:bg-white/20 ring-1 ring-white/20 backdrop-blur transition"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>

        <hr className="mt-12 w-[92%] mx-auto border-t border-white/20" />
      </Reveal>

      {/* SHORT SUMMARY just below divider */}
      <Reveal as="section" className="px-6 pt-6 pb-4">
        <div className="max-w-3xl mx-auto text-center text-white/85 leading-relaxed">
          We’re two IT grads focused on building clean, usable web apps. Below you’ll
          find a quick intro, our preferred stack, and ways to get in touch.
        </div>
      </Reveal>

      {/* Push the cards further down for breathing room */}
      <div className="mt-20" />

      {/* FOUNDERS — stacked vertically, ~75% width, larger image, animated */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10">
          {founders.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 120}
              className="w-11/12 md:w-3/4 mx-auto rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-8 flex flex-col items-center text-center gap-5"
            >
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/60 text-sm">
                IMAGE
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-white/70">{p.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECH STACK — horizontal infinite marquee, fades/flies in once */}
      <Reveal as="section" className="px-6 py-16 mt-10">
        <Reveal delay={0}>
          <h2 className="text-center text-4xl font-semibold">Tech Stack we use</h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 marquee" role="region" aria-label="Technology logos">
            <div className="marquee__inner">
              {[...logos, ...logos].map((label, i) => (
                <div key={i} className="marquee__item">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Reveal>

      <BackToTop />
    </>
  );
}

function BackToTop() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 rounded-full p-3 ring-1 ring-white/20 bg-white/10 backdrop-blur hover:bg-white/20 transition ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      ↑
    </button>
  );
}
