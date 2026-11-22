import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starshift | Parent Enterprise & Venture Group",
  description: "Starshift is the parent company and operational venture studio powering an expanding ecosystem of autonomous technology, software infrastructure, and modern commerce startups.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        {children}
        {/* @ts-expect-error Custom element */}
        <elevenlabs-convai agent-id="agent_9501kbdjgv8peh7ahp5pm7jvhs4h"></elevenlabs-convai>
        <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async />
      </body>
    </html>
  );
}
