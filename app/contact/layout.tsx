import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule an interview or send a message directly - let's talk about your frontend role.",
  openGraph: {
    title: "Contact — Abdulazeez Alani",
    description: "Schedule an interview or send a message directly - - let's talk about your frontend role.",
    images: ["/og-image-resized.jpg"],
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}