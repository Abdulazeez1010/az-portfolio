import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulazeez-alani-portfolio.vercel.app/"),
  title: {
    default: "Abdulazeez Alani - Frontend Developer",
    template: "%s | Abdulazeez Alani",
  },
  description: "I turn Figma designs into accurate, responsive, accessible React components.",
  openGraph: {
    title: "Abdulazeez Alani - Frontend Developer",
    description: "I turn Figma designs into accurate, responsive, accessible React components.",
    url: "https://abdulazeez-alani-portfolio.vercel.app/",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulazeez Alani - Frontend Developer",
    description: "I turn Figma designs into accurate, responsive, accessible React components.",
    images: ["/og-image.jpg"],
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
      <body className="min-h-full flex flex-col">
        {children}

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4X14GNYLNG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4X14GNYLNG');
          `}
        </Script>
      </body>
    </html>
  );
}
