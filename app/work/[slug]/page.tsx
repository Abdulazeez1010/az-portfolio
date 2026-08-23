import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "../../lib/case-studies";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) return {};

  return {
    title: caseStudy.title,
    description: caseStudy.metaDescription,
    openGraph: {
      title: `${caseStudy.title} — Abdulazeez Alani`,
      description: caseStudy.ogDescription,
      images: ["/og-image.jpg"],
      type: "website",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) notFound();

  return <CaseStudyLayout caseStudy={caseStudy} />;
}