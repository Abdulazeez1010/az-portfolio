import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulazeez-alani-portfolio.netlify.app/"),
  title: {
    default: "Abdulazeez Alani - Frontend Developer",
    template: "%s | Abdulazeez Alani",
  },
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
