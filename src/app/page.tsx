import { Navbar } from "@/components/ui/navbar";
import { ParticleBackground } from "@/components/ui/particle-background";
import { HeroSection } from "@/components/hero-section";
import { VenturesPortfolio } from "@/components/ventures-portfolio";
import { AboutParent } from "@/components/about-parent";
import { CorporateContact } from "@/components/corporate-contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-clip bg-background text-foreground selection:bg-primary/30">
      <ParticleBackground />
      <Navbar />

      {/* 1. Parent Enterprise Executive Hero */}
      <HeroSection />

      {/* 2. Portfolio of Businesses & Startups (with Direct Website Links) */}
      <VenturesPortfolio />

      {/* 3. About Starshift Parent Group */}
      <AboutParent />

      {/* 4. Executive Contact & Engagement */}
      <CorporateContact />

      {/* 5. Corporate Footer */}
      <Footer />
    </main>
  );
}
