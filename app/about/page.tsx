import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abdulazeez Alani is a medical student and frontend developer building accurate, responsive, accessible React interfaces from Figma designs.",
  openGraph: {
    title: "About - Abdulazeez Alani",
    description:
      "Medical student, frontend developer, and AI Native Frontend Engineer intern building React interfaces from Figma designs.",
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function About() {
  return (
    <main className="relative min-h-screen text-[#E6E8EB]">
      <Nav />
      
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <div className="max-w-2xl"> 
            <span className="text-xs font-bold tracking-widest uppercase text-[#7ED9C3] mb-4 block">
              About
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-[#E6E8EB] mb-8">
              I build the interface the design promised.
            </h1>

            <p className="text-lg text-[#E6E8EB]/80 leading-relaxed mb-8">
              I&apos;m Abdulazeez Alani, a medical student and frontend developer working
              with React, TypeScript, Next.js, and Tailwind CSS. I turn Figma designs into
              responsive, accessible interfaces - the kind where the spacing, states, and
              behavior all survive contact with a real user.
            </p>

            <p className="text-[#E6E8EB]/70 text-sm leading-relaxed mb-6">
              I&apos;m currently an AI Native Frontend Engineer intern at FlyRank AI and
              volunteering with a startup on a property listing platform. The work is not
              just slicing screens into components. I&apos;m fixing broken filters, capping
              guest steppers at real occupancy limits, making layouts work without mobile
              Figma frames, and flagging spec conflicts before they turn into expensive code.
            </p>

            <p className="text-[#E6E8EB]/70 text-sm leading-relaxed mb-10">
              Medical school has trained me to notice details, question assumptions, and
              stay calm when the information is incomplete. Frontend development rewards
              the same habits. A design file rarely tells the whole story. Someone still has
              to ask what happens on a small screen, what a keyboard user experiences, what
              breaks when the data is messy, and whether the implementation actually matches
              what was approved.
            </p>

            <div className="border-l-2 border-[#4C8BF5]/30 pl-5 mb-12 flex flex-col gap-4">
              <p className="text-[#E6E8EB]/75 text-sm leading-relaxed">
                Before the property listing project, I built smaller apps to sharpen the
                basics: a weather app, a typing speed test, and an FX checker. Useful reps.
                But the startup project is the better proof - real design constraints, real
                bugs, real tradeoffs, and a sprint schedule that does not care how tidy the
                Figma file looks.
              </p>

              <p className="text-[#E6E8EB]/75 text-sm leading-relaxed">
                Right now, I&apos;m looking for a full-time React role where accuracy,
                accessibility, and product judgment matter. If you&apos;re hiring for that,
                the case study is the best place to see how I work.
              </p>
            </div>

            <div className="border-t border-[#4C8BF5]/20 pt-10">
              <a
                href="https://calendly.com/alani-abdulazeez-akinpelumi/30min"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#4C8BF5] text-[#0D1117] font-bold rounded px-6 py-3 hover:bg-[#7ED9C3] transition mb-2"
              >
                Schedule an Interview
              </a>

              <p className="text-xs text-[#E6E8EB]/40">
                Calendar not loading? Email me directly instead.
              </p>
            </div>
          </div>

          <div className="order-first lg:order-none">
            <Image
              src="/abdulazeez.png"
              alt="Abdulazeez Alani"
              width={560}
              height={700}
              className="aspect-[4/5] w-full max-w-[220px] rounded object-cover grayscale md:max-w-[280px]"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}