import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("is-visible");
        obs.unobserve(el);
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <footer className="mt-24">
      <div
        ref={ref}
        className="reveal-up bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-10"
      >
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex justify-center gap-8 text-white/80">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/projects" className="hover:text-white">Projects</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </nav>

          <hr className="mt-6 border-white/20" />

          <p className="text-center text-sm text-white/60 py-6">
            Aghilesh Arasu &amp; Joshua Aldridge • 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
