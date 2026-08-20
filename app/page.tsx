import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Real hero texture asset, not an approximation */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "url('/hero-texture.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Logo mark, top-left */}
      <div className="absolute top-6 left-6 font-bold text-[#7ED9C3] text-sm tracking-tight">
        <span className="text-[#7ED9C3]">{"<"}</span>
        <span className="text-[#E6E8EB]">AA</span>
        <span className="text-[#7ED9C3]">{" />"}</span>
      </div>

      {/* Nav, top-right */}
      <nav className="absolute top-6 right-6 text-sm">
        <Link href="/contact" className="text-[#E6E8EB]/70 hover:text-[#4C8BF5] transition">
          Contact
        </Link>
      </nav>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-[#E6E8EB] mb-4">
          Abdulazeez Alani
        </h1>
        <p className="max-w-xl text-lg text-[#E6E8EB]/80 mb-2">
          What design approved is what ships — pixel for pixel, not close enough.
        </p>
        <p className="text-sm text-[#E6E8EB]/60 mb-10">
          Frontend developer · Building a full-stack portfolio and completing
          the FlyRank AI Fluency track
        </p>

        <a
          href="https://calendly.com/alani-abdulazeez-akinpelumi/30min"
          target="_blank"
          className="bg-[#4C8BF5] text-[#0D1117] font-bold rounded px-6 py-3 hover:bg-[#7ED9C3] transition mb-2"
        >
          Book a call
        </a>
        <p className="text-xs text-[#E6E8EB]/40 mb-10">
          Calendar not loading? Email me directly instead.
        </p>

        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <a
            href="https://www.linkedin.com/in/abdulazeez-alani-3624901a0"
            target="_blank"
            className="text-[#E6E8EB]/60 hover:text-[#4C8BF5] transition underline underline-offset-4 decoration-[#4C8BF5]/30"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Abdulazeez1010"
            target="_blank"
            className="text-[#E6E8EB]/60 hover:text-[#4C8BF5] transition underline underline-offset-4 decoration-[#4C8BF5]/30"
          >
            GitHub
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            className="text-[#E6E8EB]/60 hover:text-[#4C8BF5] transition underline underline-offset-4 decoration-[#4C8BF5]/30"
          >
            CV
          </a>
        </div>
      </div>
    </main>
  );
}