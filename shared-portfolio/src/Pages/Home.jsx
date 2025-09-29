import React from "react";
import { Link } from "react-router-dom";
import joshPic from '../assets/IMG_5881.jpg';
import aghiPic from '../assets/IMG_8996.jpg';
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

/* -------------------- Inline SVG Icons -------------------- */

const IconA = (props) => {
  const uid = React.useId();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon A">
      <g clipPath={`url(#${uid}-a)`}>
        <path fill="#2B2B2B" d="M93.1 40.9c1.2-3.4 1.6-6.9 1.2-10.3s-1.6-6.9-3.1-10c-2.8-4.7-6.9-8.4-11.6-10.6-5-2.2-10.3-2.8-15.6-1.6-2.5-2.5-5.3-4.7-8.4-6.2C52.4.6 48.7 0 45.2 0c-5.3 0-10.6 1.6-15 4.7s-7.5 7.5-9.1 12.5c-3.8.9-6.9 2.5-10 4.4-2.8 2.2-5 5-6.9 7.8-2.8 4.7-3.7 10-3.1 15.3C1.8 50 4 55 7.4 59.1 6.2 62.5 5.8 66 6.2 69.4s1.6 6.9 3.1 10c2.8 4.7 6.9 8.4 11.6 10.6 5 2.2 10.3 2.8 15.6 1.6 2.5 2.5 5.3 4.7 8.4 6.2s6.9 2.2 10.3 2.2c5.3 0 10.6-1.6 15-4.7s7.5-7.5 9.1-12.5c3.4-.6 6.9-2.2 9.7-4.4s5.3-4.7 6.9-7.8c2.8-4.7 3.8-10 3.1-15.3S96.5 45 93.1 40.9M55.6 93.4c-5 0-8.8-1.6-12.2-4.4 0 0 .3-.3.6-.3l20-11.6c.6-.3.9-.6 1.2-1.2s.3-.9.3-1.6V46.2l8.4 5v23.1c.4 11-8.3 19.1-18.3 19.1M15.2 76.2c-2.2-3.8-3.1-8.1-2.2-12.5 0 0 .3.3.6.3l20 11.6c.6.3.9.3 1.6.3s1.2 0 1.6-.3l24.4-14.1v9.7L40.9 83.1c-4.4 2.5-9.4 3.1-14.1 1.9-5-1.3-9.1-4.4-11.6-8.8M9.9 32.8c2.2-3.8 5.6-6.6 9.7-8.1v23.7c0 .6 0 1.2.3 1.6.3.6.6.9 1.2 1.2l24.4 14.1-8.4 5-20-11.6c-4.4-2.5-7.5-6.6-8.8-11.2s-.9-10.3 1.6-14.7M79 48.7l-24.4-14 8.4-5 20 11.6c3.1 1.9 5.6 4.4 7.2 7.5s2.5 6.6 2.2 10.3c-.3 3.4-1.6 6.9-3.8 9.7s-5 5-8.4 6.2V51.2c0-.6 0-1.2-.3-1.6 0 .1-.3-.5-.9-.9m8.4-12.5s-.3-.3-.6-.3l-20-11.6c-.6-.3-.9-.3-1.6-.3s-1.2 0-1.6.3L39.3 38.4v-9.7l20.3-11.9c3.1-1.9 6.6-2.5 10.3-2.5 3.4 0 6.9 1.2 10 3.4 2.8 2.2 5.3 5 6.6 8.1s1.6 7 .9 10.4M34.9 53.7l-8.4-5V25.3c0-3.4.9-7.2 2.8-10 1.9-3.1 4.7-5.3 7.8-6.9S44 6.2 47.4 6.9c3.4.3 6.9 1.9 9.7 4.1 0 0-.3.3-.6.3l-20 11.6c-.6.3-.9.6-1.2 1.2s-.3.9-.3 1.6v28zm4.4-10 10.9-6.2 10.9 6.2v12.5l-10.9 6.2-10.9-6.2z"/>
      </g>
      <defs>
        <clipPath id={`${uid}-a`}>
          <path fill="#fff" d="M0 0h100v100H0z"/>
        </clipPath>
      </defs>
      <p>Github</p>
    </svg>
  );
};

const IconB = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon B">
    <path fill="#8C8C8C" d="M33.3 100c9.2 0 16.7-7.5 16.7-16.7V66.7H33.3c-9.2 0-16.7 7.5-16.7 16.7S24.1 100 33.3 100"/>
    <path fill="#818181" d="M16.7 50c0-9.2 7.5-16.7 16.7-16.7H50v33.3H33.3c-9.2.1-16.6-7.4-16.6-16.6"/>
    <path fill="#7A7A7A" d="M16.7 16.7C16.7 7.5 24.1 0 33.3 0H50v33.3H33.3c-9.2 0-16.6-7.4-16.6-16.6"/>
    <path fill="#9B9B9B" d="M50 0h16.7c9.2 0 16.7 7.5 16.7 16.7s-7.5 16.7-16.7 16.7H50z"/>
    <path fill="#939393" d="M83.3 50c0 9.2-7.5 16.7-16.7 16.7S50 59.2 50 50s7.5-16.7 16.7-16.7S83.3 40.8 83.3 50"/>
  </svg>
);

const IconC = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon C">
    <path fill="#B9B9B9" d="M49.802 58.8c4.852 0 8.713-3.9 8.713-8.8s-3.861-8.8-8.713-8.8-8.713 3.9-8.713 8.8 3.861 8.8 8.713 8.8"/>
    <path stroke="#B9B9B9" strokeWidth="5" d="M49.802 68.1c25.842 0 46.832-8.1 46.832-18.1s-20.99-18.1-46.832-18.1S2.97 40 2.97 50s20.99 18.1 46.832 18.1Z"/>
    <path stroke="#B9B9B9" strokeWidth="5" d="M34.356 59c12.872 22.7 30.297 37 38.911 32 8.515-5 5.05-27.4-7.92-50C52.377 18.3 34.95 4 26.436 9c-8.614 5-5.05 27.4 7.92 50Z"/>
    <path stroke="#B9B9B9" strokeWidth="5" d="M34.357 41c-12.97 22.6-16.436 45-7.921 50 8.514 5 25.94-9.3 38.812-32 12.97-22.6 16.534-45 8.02-50-8.615-5-26.04 9.3-38.912 32Z"/>
  </svg>
);

const IconD = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon D">
    <path fill="#000" fillRule="evenodd" d="M100 93.957 50 7 0 93.957z" clipRule="evenodd"/>
  </svg>
);

const IconE = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon E">
    <path fill="#848484" d="M50 20c-13.3 0-21.7 6.7-25 20 5-6.7 10.8-9.2 17.5-7.5 3.8 1 6.5 3.7 9.5 6.8 4.9 5 10.6 10.7 23 10.7 13.3 0 21.7-6.7 25-20-5 6.7-10.8 9.2-17.5 7.5-3.8-1-6.5-3.7-9.5-6.8C68.1 25.8 62.4 20 50 20M25 50C11.7 50 3.3 56.7 0 70c5-6.7 10.8-9.2 17.5-7.5 3.8 1 6.5 3.7 9.5 6.8 4.9 5 10.6 10.7 23 10.7 13.3 0 21.7-6.7 25-20-5 6.7-10.8 9.2-17.5 7.5-3.8-.9-6.5-3.7-9.5-6.8C43.1 55.8 37.4 50 25 50"/>
  </svg>
);

const IconF = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon F">
    <path fill="#767676" d="M14 90 6 0h88.2l-8 90L50 100"/>
    <path fill="#888" d="M50.1 92.3v-85h36l-6.9 76.8"/>
    <path fill="#EBEBEB" d="M22.4 18.4h27.7v11H34.5l1 11.3h14.6v11H25.4zm3.5 38.9H37l.8 8.8 12.3 3.3v11.5l-22.7-6.3"/>
    <path fill="#fff" d="M77.7 18.4H50v11h26.6zm-2 22.3H50v11h13.6L62.3 66 50 69.4v11.5l22.6-6.3"/>
  </svg>
);

const IconG = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon G">
    <path fill="#525252" d="m94.2 0-8 90L50 100 14 90 6 0z"/>
    <path fill="#626262" d="m79.3 84.3 6.9-76.9h-36v85z"/>
    <path fill="#EBEBEB" d="m24.4 40.7 1 11h24.7v-11zm25.7-22.3H22.4l1 11h26.7zm0 62.5V69.4l-12.3-3.3-.8-8.8H25.9l1.5 17.3z"/>
    <path fill="#fff" d="m63.6 51.8-1.3 14.3L50 69.4v11.5l22.6-6.3.2-1.9 2.6-29.1.3-3 2-22.3H50v11h15.6l-1 11.3H50v11h13.6z"/>
  </svg>
);

const IconH = (props) => {
  const uid = React.useId();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon H">
      <g fill="#7D7D7D" clipPath={`url(#${uid}-a)`}>
        <path d="M99 41.1c-.3-.2-2.8-2.1-8.1-2.1-1.4 0-2.8.1-4.2.4-1-7.1-6.9-10.5-7.2-10.7l-1.4-.8-.9 1.4c-1.2 1.8-2 3.8-2.5 6-1 4-.4 7.8 1.7 11.1-2.5 1.4-6.5 1.7-7.3 1.8h-66C1.4 48 0 49.4 0 51.1-.1 56.8.9 62.6 2.9 68c2.3 6 5.6 10.3 10 13 4.9 3 12.9 4.7 22 4.7 4.1 0 8.2-.4 12.2-1.1 5.6-1 11-3 15.9-5.8 4.1-2.4 7.8-5.4 10.9-8.9 5.2-5.9 8.3-12.5 10.6-18.3h.9c5.7 0 9.2-2.3 11.2-4.2 1.3-1.2 2.3-2.7 2.9-4.4l.4-1.2z"/>
        <path d="M9.2 46H18c.4 0 .8-.3.8-.8v-7.9c0-.4-.3-.8-.8-.8H9.2c-.4 0-.8.3-.8.8v7.9c.1.5.4.8.8.8m12.2 0h8.8c.4 0 .8-.3.8-.8v-7.9c0-.4-.3-.8-.8-.8h-8.8c-.4 0-.8.3-.8.8v7.9c0 .5.4.8.8.8m12.3 0h8.8c.4 0 .8-.3.8-.8v-7.9c0-.4-.3-.8-.8-.8h-8.8c-.4 0-.8.3-.8.8v7.9c.1.5.4.8.8.8M46 46h8.8c.4 0 .8-.3.8-.8v-7.9c0-.4-.3-.8-.8-.8H46c-.4 0-.8.3-.8.8v7.9c0 .5.3.8.8.8M21.4 34.7h8.8c.4 0 .8-.3.8-.8V26c0-.4-.3-.8-.8-.8h-8.8c-.4 0-.8.3-.8.8v7.9c0 .5.4.8.8.8m12.3 0h8.8c.4 0 .8-.3.8-.8V26c0-.4-.3-.8-.8-.8h-8.8c-.4 0-.8.3-.8.8v7.9c.1.5.4.8.8.8m12.3 0h8.8c.4 0 .8-.3.8-.8V26c0-.4-.3-.8-.8-.8H46c-.4 0-.8.3-.8.8v7.9c0 .5.3.8.8.8m0-11.3h8.8c.4 0 .8-.3.8-.8v-7.9c0-.4-.3-.8-.8-.8H46c-.4 0-.8.3-.8.8v7.9c0 .5.3.8.8.8M58.3 46h8.8c.4 0 .8-.3.8-.8v-7.9c0-.4-.3-.8-.8-.8h-8.8c-.4 0-.8.3-.8.8v7.9c0 .5.3.8.8.8"/>
      </g>
      <defs>
        <clipPath id={`${uid}-a`}>
          <path fill="#fff" d="M0 0h100v100H0z"/>
        </clipPath>
      </defs>
    </svg>
  );
};

const IconI = (props) => {
  const uid = React.useId();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon I">
      <g clipPath={`url(#${uid}-a)`}>
        <path fill="#fff" d="M8.033 4.314 63.487.227c6.81-.583 8.56-.19 12.84 2.917L94.03 15.587c2.923 2.14 3.897 2.724 3.897 5.054v68.243c0 4.277-1.56 6.807-7.007 7.193l-64.397 3.89c-4.093.194-6.036-.39-8.18-3.113L5.31 79.941C2.967 76.827 2 74.497 2 71.774v-60.66c0-3.497 1.56-6.413 6.033-6.8"/>
        <path fill="#000" fillRule="evenodd" d="M63.49.227 8.027 4.314C3.56 4.701 2 7.617 2 11.114v60.66c0 2.723.97 5.053 3.307 8.167l13.036 16.913c2.143 2.723 4.087 3.307 8.177 3.113l64.403-3.89c5.447-.386 7.007-2.916 7.007-7.193V20.641c0-2.21-.877-2.847-3.457-4.734l-.44-.32-17.7-12.443C72.05.037 70.3-.356 63.487.227zM27.977 19.524c-5.257.353-6.454.433-9.437-1.99l-7.59-6.027c-.777-.78-.387-1.753 1.557-1.946l53.316-3.887c4.474-.39 6.81 1.167 8.56 2.527l9.147 6.61c.39.196 1.36 1.36.193 1.36l-55.066 3.306zm-6.13 68.777V30.367c0-2.53.78-3.696 3.113-3.893l63.236-3.693c2.144-.194 3.117 1.166 3.117 3.693v57.547c0 2.53-.39 4.67-3.893 4.863l-60.513 3.5c-3.5.193-5.06-.97-5.06-4.083m59.74-54.827c.386 1.75 0 3.5-1.757 3.7l-2.913.577v42.773c-2.534 1.36-4.867 2.137-6.814 2.137-3.113 0-3.893-.974-6.226-3.887l-19.07-29.94v28.967l6.033 1.363s0 3.5-4.867 3.5l-13.423.777c-.39-.78 0-2.724 1.36-3.11l3.503-.97v-38.3l-4.863-.394c-.39-1.75.58-4.276 3.307-4.47l14.4-.973 19.846 30.333V38.724l-5.06-.58c-.387-2.143 1.167-3.697 3.113-3.89z" clipRule="evenodd"/>
      </g>
      <defs>
        <clipPath id={`${uid}-a`}>
          <path fill="#fff" d="M2 0h96.667v100H2z"/>
        </clipPath>
      </defs>
    </svg>
  );
};

const IconJ = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon J">
    <path fill="#161616" d="M50 1C22.4 1 0 23.4 0 51c0 22.1 14.3 40.8 34.2 47.4 2.5.5 3.4-1.1 3.4-2.4 0-1.2 0-5.1-.1-9.3-13.9 3-16.8-5.9-16.8-5.9-2.3-5.8-5.6-7.3-5.6-7.3-4.5-3.1.3-3 .3-3 5 .4 7.7 5.2 7.7 5.2 4.5 7.6 11.7 5.4 14.6 4.2.4-3.2 1.7-5.4 3.2-6.7-11.1-1.3-22.8-5.6-22.8-24.7 0-5.5 2-9.9 5.2-13.4-.5-1.3-2.2-6.3.5-13.2 0 0 4.2-1.3 13.8 5.1 4-1.1 8.3-1.7 12.5-1.7s8.5.6 12.5 1.7c9.5-6.5 13.7-5.1 13.7-5.1 2.7 6.9 1 12 .5 13.2 3.2 3.5 5.1 8 5.1 13.4 0 19.2-11.7 23.4-22.8 24.7 1.8 1.6 3.4 4.6 3.4 9.3 0 6.7-.1 12.1-.1 13.7 0 1.3.9 2.9 3.4 2.4C85.7 91.8 100 73.1 100 51c0-27.6-22.4-50-50-50"/>
    <path fill="#161616" d="M18.7 72.2c-.1.2-.5.3-.9.2-.4-.2-.6-.5-.4-.8.1-.3.5-.3.9-.2.3.2.6.6.4.8m2.5 2.2c-.2.2-.7.1-1-.2s-.4-.8-.1-1c.2-.2.7-.1 1 .2s.3.8.1 1m1.7 2.8c-.3.2-.8 0-1.1-.4s-.3-1 0-1.2.8 0 1.1.4c.3.5.3 1 0 1.2m2.8 3.3c-.3.3-.9.2-1.3-.2s-.6-1-.3-1.3.9-.2 1.3.2c.5.4.6 1 .3 1.3m3.7 1.1c-.1.4-.7.6-1.2.4-.6-.2-.9-.6-.8-1s.7-.6 1.3-.4c.5.1.8.6.7 1m4.2.4c0 .4-.5.8-1.1.8s-1.1-.3-1.1-.7.5-.8 1.1-.8 1.1.3 1.1.7m4.1-.1c.1.4-.3.8-.9.9s-1.1-.1-1.2-.5.3-.8.9-.9c.6-.2 1.2.1 1.2.5"/>
  </svg>
);

const IconK = (props) => {
  const uid = React.useId();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon K">
      <g clipPath={`url(#${uid}-a)`}>
        <path fill="#3D3D3D" d="M0 0h100v100H0z"/>
        <path fill="#fff" d="M49.7 10.7h-39v78.5h38.9V30.5h19.8v58.7h19.8V10.7z"/>
      </g>
      <defs>
        <clipPath id={`${uid}-a`}>
          <path fill="#fff" d="M0 0h100v100H0z"/>
        </clipPath>
      </defs>
    </svg>
  );
};

const IconL = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props} role="img" aria-label="Icon L">
    <path fill="#727272" d="M1 35.5s-2.4-1.8.5-4.1l6.8-6.1s1.9-2 4-.3l62.8 47.6v22.8s0 3.6-4.6 3.2z"/>
    <path fill="#5B5B5B" d="M17.1 50.2 1 64.9s-1.7 1.2 0 3.5l7.5 6.8s1.8 1.9 4.4-.3l17.2-13z"/>
    <path fill="#5D5D5D" d="m45.6 50.3 29.7-22.7L75.1 5s-1.3-5-5.5-2.4l-39.5 36z"/>
    <path fill="#848484" d="M70.5 98.7c1.7 1.8 3.8 1.2 3.8 1.2l23.1-11.4c3-2 2.5-4.5 2.5-4.5V15.8c0-3-3.1-4-3.1-4L76.9 2.1c-4.4-2.7-7.3.5-7.3.5S73.3-.1 75.1 5v90c0 .6-.1 1.2-.4 1.8-.5 1.1-1.7 2.1-4.4 1.6z"/>
  </svg>
);

/* -------------------- Home -------------------- */

export default function Home() {
  const founders = [
    { name: "Aghilesh Arasu", blurb: "Deakin University IT Graduate - Currently in Kuala Lumpur", img: aghiPic },
    { name: "Joshua Aldridge", blurb: "Deakin University IT Graduate - Geelong based working at Hypergen as a Junior AI Developer. Experience with UI/UX, Microsoft Power Platform and automation", img: joshPic },
  ];

  // Replace text labels with actual SVG icon components
  const icons = [IconA, IconB, IconC, IconD, IconE, IconF, IconG, IconH, IconI, IconJ, IconK, IconL];

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
        <div className="max-w-7xl mx-auto text-center text-white/85 leading-relaxed text-[25px]">
          We’re two Deakin University IT Graduates. Below you’ll
          find a quick intro and the tech used to build this site.
        </div>
      </Reveal>

      {/* Push the cards further down for breathing room */}
      <div className="mt-20" />

      {/* FOUNDERS */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10">
          {founders.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 120}
              className="w-11/12 md:w-3/4 mx-auto rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-8 flex flex-col items-center text-center gap-5"
            >
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center text-white/60 text-sm">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover rounded-2xl" loading="lazy" decoding="async"/>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-white/70">{p.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECH STACK — horizontal infinite marquee, now with SVGs */}
      <Reveal as="section" className="px-6 py-16 mt-10">
        <Reveal delay={0}>
          <h2 className="text-center text-4xl font-semibold">Tech we used</h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 marquee" role="region" aria-label="Technology logos">
            <div className="marquee__inner">
              {[...icons, ...icons].map((IconCmp, i) => (
                <div key={i} className="marquee__item flex items-center justify-center">
                  <IconCmp className="w-12 h-12" />
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
