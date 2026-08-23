import type { Metadata } from "next";
import Nav from "./components/Nav";

import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Abdulazeez Alani - Frontend Developer",
  description:
    "Frontend developer turning approved designs into accurate, accessible React and TypeScript interfaces.",
  openGraph: {
    title: "Abdulazeez Alani - Frontend Developer",
    description:
      "Frontend developer turning approved designs into accurate, accessible React and TypeScript interfaces.",
    url: "https://abdulazeez-alani-portfolio.vercel.app/",
    siteName: "Abdulazeez Alani Portfolio",
    images: [
      {
        url: "/og-image-resized.jpg",
        width: 1200,
        height: 630,
        alt: "Abdulazeez Alani Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const techLogos = [
  { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-[#E6E8EB]" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#38BDF8]" },
];

const capabilities = [
  "Accessible UI",
  "Figma-to-code implementation",
  "Responsive layouts",
  "Pixel-accurate execution",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-[#E6E8EB]">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/hero-texture-v2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Nav />

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
          <section className="grid flex-1 items-center gap-14 py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)]">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#7ED9C3]">
                Frontend Developer
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] text-[#E6E8EB] sm:whitespace-nowrap sm:text-6xl lg:text-7xl">
                Abdulazeez Alani
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E6E8EB]/72">
                I turn approved Figma designs into accurate, responsive, accessible
                React and TypeScript experiences. Pixel for pixel, not close enough.
              </p>

              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
                <a
                  href="https://calendly.com/alani-abdulazeez-akinpelumi/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded bg-[#4C8BF5] px-6 font-bold text-[#0D1117] transition hover:bg-[#7ED9C3]"
                >
                  Book a call
                </a>
              </div>

              <p className="mt-3 text-sm text-[#E6E8EB]/50">
                Calendar not loading? {" "}
                <a
                  href="mailto:alani.abdulazeez.akinpelumi@gmail.com"
                  className="font-medium text-[#7ED9C3] underline underline-offset-4 transition hover:text-[#4C8BF5]"
                >
                  Email me directly
                </a>
              </p>
            </div>

            <div className="hidden lg:block" aria-hidden="true">
              {/* Kept intentionally empty for now */}
            </div>

            {/* To be replaced with something like */}

            {/* <aside className="hidden lg:block">
              <a
                href="/work/property-listing"
                className="group block rounded border border-[#E6E8EB]/10 bg-[#E6E8EB]/5 p-4 transition hover:border-[#7ED9C3]/50"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7ED9C3]">
                  Featured Work
                </p>
                <h2 className="mt-3 text-xl font-bold text-[#E6E8EB]">
                  Property listing site
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#E6E8EB]/60">
                  Figma to React implementation focused on responsive listings and lead capture.
                </p>
              </a>
            </aside> */}
          </section>

          <section
            aria-labelledby="tools-heading"
            className="mx-auto mt-4 max-w-4xl text-center">
            <h2
              id="tools-heading"
              className="text-sm font-medium uppercase tracking-[0.18em] text-[#E6E8EB]/40"
            >
              Tools I build with
            </h2>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
              {techLogos.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 text-sm text-[#E6E8EB]/68"
                >
                  <Icon
                    aria-hidden="true"
                    className={`h-6 w-6 ${color}`}
                  />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="capabilities-heading"
            className="mx-auto mt-16 max-w-4xl text-center"
          >
            <h2
              id="capabilities-heading"
              className="text-sm font-medium uppercase tracking-[0.18em] text-[#E6E8EB]/40"
            >
              Implementation strengths
            </h2>

            <div className="mt-7 grid gap-8 sm:grid-cols-2">
              {capabilities.map((item, index) => (
                <div key={item} className="text-center">
                  <p className="text-xs font-medium text-[#7ED9C3]/70">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-lg font-medium text-[#E6E8EB]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-20 flex flex-col gap-5 border-t border-[#E6E8EB]/10 py-6 text-sm text-[#E6E8EB]/45 sm:flex-row sm:items-center sm:justify-between">
            <p>Available for frontend implementation work.</p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://github.com/Abdulazeez1010"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#7ED9C3]"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abdulazeez-alani-3624901a0"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#7ED9C3]"
              >
                LinkedIn
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#7ED9C3]"
              >
                CV
              </a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}