// import Link from "next/link";
// import {Metadata} from "next";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Abdulazeez Alani - Frontend Developer",
//   description: "What design approved is what ships — pixel for pixel, not close enough. React/TypeScript developer turning Figma designs into accurate, accessible components.",
//   openGraph: {
//     title: "Abdulazeez Alani - Frontend Developer",
//     description: "What design approved is what ships — pixel for pixel, not close enough.",
//     url: "https://abdulazeez-alani-portfolio.netlify.app/",
//     siteName: "Abdulazeez Alani Portfolio",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Abdulazeez Alani Portfolio",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

// export default function Home() {
//   return (
//     <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
//       {/* Real hero texture asset, not an approximation */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-60"
//         style={{
//           backgroundImage: "url('/hero-texture-v2.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Logo mark, top-left */}
//       <div className="absolute top-6 left-6">
//         <Image
//           src="/icon.svg"
//           alt="Abdulazeez Alani Logo" 
//           width={100}
//           height={100}
//         />
//       </div>


//       {/* Nav, top-right */}
//       <nav className="absolute top-6 right-6 text-sm">
//         <Link href="/contact" className="text-[#E6E8EB]/70 hover:text-[#4C8BF5] transition">
//           Contact
//         </Link>
//       </nav>

//       <div className="relative z-10 flex flex-col items-center">
//         <h1 className="text-4xl font-bold text-[#E6E8EB] mb-4">
//           Abdulazeez Alani
//         </h1>
//         <p className="max-w-xl text-lg text-[#E6E8EB]/80 mb-2">
//           What design approved is what ships — pixel for pixel, not close enough.
//         </p>
//         <p className="text-sm text-[#E6E8EB]/60 mb-10">
//           Frontend developer · Building a full-stack portfolio and completing
//           the FlyRank AI Fluency track
//         </p>

//         <a
//           href="https://calendly.com/alani-abdulazeez-akinpelumi/30min"
//           target="_blank"
//           className="bg-[#4C8BF5] text-[#0D1117] font-bold rounded px-6 py-3 hover:bg-[#7ED9C3] transition mb-2"
//         >
//           Book a call
//         </a>
//         <p className="text-xs text-[#E6E8EB]/40 mb-10">
//           Calendar not loading? Email me directly instead.
//         </p>

//         <div className="flex flex-wrap gap-6 justify-center text-sm">
//           <a
//             href="https://www.linkedin.com/in/abdulazeez-alani-3624901a0"
//             target="_blank"
//             className="text-[#E6E8EB]/60 hover:text-[#4C8BF5] transition underline underline-offset-4 decoration-[#4C8BF5]/30"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://github.com/Abdulazeez1010"
//             target="_blank"
//             className="text-[#E6E8EB]/60 hover:text-[#4C8BF5] transition underline underline-offset-4 decoration-[#4C8BF5]/30"
//           >
//             GitHub
//           </a>
//           <a
//             href="/cv.pdf"
//             target="_blank"
//             className="text-[#E6E8EB]/60 hover:text-[#4C8BF5] transition underline underline-offset-4 decoration-[#4C8BF5]/30"
//           >
//             CV
//           </a>
//         </div>
//       </div>
//     </main>
//   );
// }



import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
        url: "/og-image.jpg",
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
    <main className="relative min-h-screen overflow-hidden px-6 py-6 text-[#E6E8EB]">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/hero-texture-v2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-48px)] max-w-6xl flex-col">
        <header className="flex items-center justify-between">
          <Link href="/" aria-label="Abdulazeez Alani home">
            <Image
              src="/icon.svg"
              alt="Abdulazeez Alani Logo"
              width={48}
              height={48}
              priority
              className="h-12 w-12"
            />
          </Link>

          <nav className="flex items-center gap-5 text-sm text-[#E6E8EB]/65">
            <a
              href="https://github.com/Abdulazeez1010"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#7ED9C3]"
            >
              GitHub
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#7ED9C3]"
            >
              CV
            </a>
            <Link
              href="/contact"
              className="rounded border border-[#E6E8EB]/15 px-4 py-2 text-[#E6E8EB] transition hover:border-[#7ED9C3]/60 hover:text-[#7ED9C3]"
            >
              Contact
            </Link>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-14 py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#7ED9C3]">
              Frontend Developer
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] text-[#E6E8EB] sm:text-6xl lg:text-7xl">
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

        <footer className="flex flex-col gap-3 border-t border-[#E6E8EB]/10 py-5 text-sm text-[#E6E8EB]/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Available for frontend implementation work.</p>

          <a
            href="https://www.linkedin.com/in/abdulazeez-alani-3624901a0"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#7ED9C3]"
          >
            LinkedIn
          </a>
        </footer>
      </div>
    </main>
  );
}