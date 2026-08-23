import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import { caseStudies } from "../lib/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Abdulazeez Alani — Figma designs turned into accurate, responsive, accessible React components.",
  openGraph: {
    title: "Work — Abdulazeez Alani",
    description:
      "Case studies: Figma designs turned into accurate, responsive, accessible React components.",
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function WorkIndex() {
  return (
    <main className="relative min-h-screen text-[#E6E8EB]">
      <Nav />

      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-widest uppercase text-[#7ED9C3] mb-4 block">
            Work
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#E6E8EB] mb-12">
            Case studies
          </h1>

          <div className="flex flex-col gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group block border border-[#4C8BF5]/20 rounded-lg p-6 hover:border-[#4C8BF5]/60 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded border border-[#4C8BF5]/40 text-[#4C8BF5]">
                    {cs.status}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#E6E8EB] mb-2 group-hover:text-[#4C8BF5] transition">
                  {cs.title}
                </h2>
                <p className="text-sm text-[#E6E8EB]/70 leading-relaxed">
                  {cs.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}