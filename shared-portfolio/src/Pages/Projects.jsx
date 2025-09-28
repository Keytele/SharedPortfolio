import React, { useEffect, useMemo, useRef, useState } from "react";

/** ---------- Small UI bits ---------- */
function Chip({ children }) {
  return (
    <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs tracking-wide mr-2 mb-2">
      {children}
    </span>
  );
}

function StatusBadge({ status = "Planned" }) {
  const styles = status === "Live"
    ? "bg-emerald-400/20 text-emerald-200 border-emerald-300/30"
    : "bg-yellow-400/10 text-yellow-200 border-yellow-300/30";
  return (
    <span className={"inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-semibold " + styles}>
      <span className="h-2 w-2 rounded-full bg-current opacity-70"></span>
      {status}
    </span>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl bg-white/10 backdrop-blur-[2px] shadow-lg ring-1 ring-white/10",
        "transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/** ---------- Reveal on scroll (vanilla, no libraries) ---------- */
function useRevealOnce() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({ children, delay = 0 }) {
  const { ref, visible } = useRevealOnce();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/** ---------- Data ---------- */
const ALL_PROJECTS = [
  {
    id: "qr",
    title: "QR Code Generator",
    summary:
      "Enter text/URL and generate a QR instantly. React front end, Python (FastAPI) service creating PNG/SVG on demand.",
    stack: ["React", "FastAPI", "Python", "Tailwind", "qrcode"],
    status: "Planned",
    category: "Utilities",
    href: null,
  },
  {
    id: "chatbot",
    title: "Mini Chatbot",
    summary:
      "Lightweight chat interface with streaming responses. Front end in React; Python back end for the LLM bridge.",
    stack: ["React", "Python", "LLM API", "WebSockets"],
    status: "Planned",
    category: "AI",
    href: null,
  },
  {
    id: "todo",
    title: "To‑Do List",
    summary:
      "Clean, keyboard‑friendly tasks with filters and local persistence. Optional sync to a simple API later.",
    stack: ["React", "LocalStorage", "Tailwind"],
    status: "Planned",
    category: "Productivity",
    href: null,
  },
  {
    id: "rss",
    title: "RSS Feed Embed",
    summary:
      "Render and auto‑refresh feeds in a tidy card layout. Python service (feedparser) → JSON → React UI.",
    stack: ["React", "Python", "Feedparser", "Cron"],
    status: "Planned",
    category: "Feeds",
    href: null,
  },
];

/** ---------- Filters ---------- */
const CATEGORIES = ["All", "Utilities", "AI", "Productivity", "Feeds"];

/** ---------- Projects Page ---------- */
export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_PROJECTS.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.join(" ").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <main className="px-6 lg:px-10 py-20">
      {/* Header */}
      <Reveal>
        <section className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Projects Lab
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            A growing collection of mini‑apps and experiments. Front end in
            React for a snappy UI, with room for a Python back end where it
            makes sense.
          </p>
        </section>
      </Reveal>

      {/* Controls */}
      <Reveal delay={80}>
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={[
                    "rounded-full border px-4 py-2 text-sm transition",
                    category === c
                      ? "bg-white/20 border-white/50"
                      : "bg-white/10 hover:bg-white/20 border-white/20",
                  ].join(" ")}
                  aria-pressed={category === c}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full md:w-80 rounded-xl bg-white/10 border border-white/20 px-4 py-2 outline-none placeholder-white/60 focus:ring-2 focus:ring-white/40"
              />
              <span className="absolute right-3 top-2.5 text-xs text-white/60">
                ⌘K
              </span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, idx) => (
          <Reveal key={p.id} delay={idx * 60}>
            <Card className="p-5 h-full flex flex-col">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <StatusBadge status={p.status} />
              </div>
              <p className="mt-2 text-white/80">{p.summary}</p>

              <div className="mt-4 -mb-2">
                {p.stack.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <ProjectPrimaryAction href={p.href} status={p.status} />
                <DetailsPopover>
                  <strong>What&apos;s planned:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-white/90">
                    {p.id === "qr" && (
                      <>
                        <li>PNG/SVG output with custom colors and margin.</li>
                        <li>FastAPI endpoint: <code>/qr?data=</code></li>
                        <li>Drag‑drop logo overlay (optional).</li>
                      </>
                    )}
                    {p.id === "chatbot" && (
                      <>
                        <li>Streaming responses with typing effect.</li>
                        <li>Temperature &amp; system prompt controls.</li>
                        <li>Export chat as JSON/Markdown.</li>
                      </>
                    )}
                    {p.id === "todo" && (
                      <>
                        <li>Keyboard shortcuts (N, Enter, ⌫).</li>
                        <li>Filters: All / Active / Done.</li>
                        <li>Persistence via LocalStorage.</li>
                      </>
                    )}
                    {p.id === "rss" && (
                      <>
                        <li>Feed settings panel + refresh interval.</li>
                        <li>Server: Python + feedparser → JSON.</li>
                        <li>Card layout with favicon &amp; source.</li>
                      </>
                    )}
                  </ul>

                  <div className="mt-3 text-xs text-white/70">
                    This card will link to its mini‑app once it&apos;s ready.
                  </div>
                </DetailsPopover>
              </div>
            </Card>
          </Reveal>
        ))}
      </section>

      {/* Empty state */}
      {filtered.length === 0 && (
        <Reveal delay={120}>
          <Card className="p-8 mt-6 text-center">
            <p className="text-white/80">
              No matches yet. Try a different keyword or category.
            </p>
          </Card>
        </Reveal>
      )}

      {/* Helper: how the lab works */}
      <Reveal delay={160}>
        <section className="mt-12">
          <Card className="p-6">
            <h4 className="text-lg font-semibold">How this page will evolve</h4>
            <p className="mt-2 text-white/80">
              Each card routes to a focused mini‑app page. These projects are still in planning or in development. Animations here are pure CSS +{" "}
              <code>IntersectionObserver</code>.
            </p>
          </Card>
        </section>
      </Reveal>
    </main>
  );
}

function ProjectPrimaryAction({ href, status }) {
  const isLive = status === "Live" && href;
  return (
    <a
      href={isLive ? href : undefined}
      aria-disabled={!isLive}
      className={[
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold",
        isLive
          ? "bg-white text-black hover:bg-white/90"
          : "bg-white/10 text-white/70 cursor-not-allowed",
      ].join(" ")}
    >
      {isLive ? "Open" : "Coming soon"}
    </a>
  );
}

/** ---------- Simple details popover (no libs) ---------- */
function DetailsPopover({ children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
        aria-expanded={open}
      >
        Details
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-80 max-w-[80vw] rounded-xl border border-white/20 bg-black/70 p-4 shadow-2xl backdrop-blur">
          {children}
        </div>
      )}
    </div>
  );
}
