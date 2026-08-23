import Nav from "./Nav";
import Image from "next/image";
import { CaseStudy } from "../lib/case-studies";

export default function CaseStudyLayout({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <main className="relative min-h-screen text-[#E6E8EB]">
      <Nav />

      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#7ED9C3]">
              Case Study
            </span>
            <span className="text-xs px-2 py-0.5 rounded border border-[#4C8BF5]/40 text-[#4C8BF5]">
              {caseStudy.status}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#E6E8EB] mb-4">
            {caseStudy.title}
          </h1>

          {/* <p className="text-lg text-[#E6E8EB]/80 mb-16">{caseStudy.summary}</p> */}
          <p className="text-lg text-[#E6E8EB]/80 mb-8">{caseStudy.summary}</p>

          <figure className="mb-16 overflow-hidden rounded border border-[#E6E8EB]/10 bg-[#E6E8EB]/5">
            <Image
              src={caseStudy.heroImage.src}
              alt={caseStudy.heroImage.alt}
              width={1440}
              height={900}
              className="aspect-[16/10] w-full object-cover"
              priority
            />

            {caseStudy.heroImage.caption && (
              <figcaption className="border-t border-[#E6E8EB]/10 px-4 py-3 text-xs text-[#E6E8EB]/45">
                {caseStudy.heroImage.caption}
              </figcaption>
            )}
          </figure>

          {/* 01 — Problem */}
          <section className="mb-16">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-sm font-bold text-[#4C8BF5]">01</span>
              <h2 className="text-xl font-bold text-[#E6E8EB]">The problem</h2>
            </div>
            {caseStudy.problem.intro.map((para, i) => (
              <p key={i} className="text-[#E6E8EB]/80 mb-4 leading-relaxed">
                {para}
              </p>
            ))}
            {caseStudy.problem.callouts && (
              <div className="border-l-2 border-[#7ED9C3]/40 pl-4 flex flex-col gap-2">
                {caseStudy.problem.callouts.map((line, i) => (
                  <p key={i} className="text-[#E6E8EB]/70 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </section>

          {/* 02 — What I did */}
          <section className="mb-16">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-sm font-bold text-[#4C8BF5]">02</span>
              <h2 className="text-xl font-bold text-[#E6E8EB]">What I did</h2>
            </div>
            {caseStudy.whatIDid.map((item, i) => (
              <div key={i} className={i < caseStudy.whatIDid.length - 1 ? "mb-6" : ""}>
                <p className="text-[#E6E8EB]/90 font-bold mb-2">{item.heading}</p>
                {item.bullets ? (
                  <ul className="text-[#E6E8EB]/80 text-sm leading-relaxed flex flex-col gap-1.5 list-disc list-inside">
                    {item.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#E6E8EB]/80 text-sm leading-relaxed">{item.body}</p>
                )}
              </div>
            ))}
          </section>

          {/* 03 — What came of it */}
          <section className="mb-20">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-sm font-bold text-[#4C8BF5]">03</span>
              <h2 className="text-xl font-bold text-[#E6E8EB]">What came of it</h2>
            </div>
            <p className="text-[#E6E8EB]/80 leading-relaxed">{caseStudy.whatCameOfIt}</p>
          </section>

          {/* Gallery */}
          {caseStudy.gallery && caseStudy.gallery.length > 0 && (
            <section className="mb-20">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-sm font-bold text-[#4C8BF5]">04</span>
                <h2 className="text-xl font-bold text-[#E6E8EB]">Screens from the build</h2>
              </div>

              <div className="grid gap-6">
                {caseStudy.gallery.map((image) => (
                  <figure
                    key={image.src}
                    className="overflow-hidden rounded border border-[#E6E8EB]/10 bg-[#E6E8EB]/5"
                  >
                    <div
                      className={
                        image.variant === "mobile"
                          ? "flex justify-center bg-[#05080D] px-4 py-8"
                          : "bg-[#05080D]"
                      }
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.variant === "mobile" ? 390 : 1440}
                        height={image.variant === "mobile" ? 844 : 900}
                        className={
                          image.variant === "mobile"
                            ? "h-auto w-full max-w-[260px] rounded sm:max-w-[300px]"
                            : "aspect-[16/10] w-full object-cover"
                        }
                      />
                    </div>

                    {image.caption && (
                      <figcaption className="border-t border-[#E6E8EB]/10 px-4 py-3 text-xs text-[#E6E8EB]/45">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="border-t border-[#4C8BF5]/20 pt-10">
            <a
              href="https://calendly.com/alani-abdulazeez-akinpelumi/30min"
              target="_blank"
              className="inline-block bg-[#4C8BF5] text-[#0D1117] font-bold rounded px-6 py-3 hover:bg-[#7ED9C3] transition mb-2"
            >
              Schedule an Interview
            </a>
            <p className="text-xs text-[#E6E8EB]/40">
              Calendar not loading? Email me directly instead.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}