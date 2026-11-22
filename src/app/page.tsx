import { Navbar } from "@/components/ui/navbar";
import { GrainOverlay } from "@/components/ui/particle-background";
import { HeroSection } from "@/components/hero-section";
import { VenturesPortfolio } from "@/components/ventures-portfolio";
import { AboutParent } from "@/components/about-parent";
import { CorporateContact } from "@/components/corporate-contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-clip bg-background text-foreground selection:bg-primary/30">
      <GrainOverlay />
      <Navbar />

      <HeroSection />
      <VenturesPortfolio />
      <AboutParent />
      <CorporateContact />
      <Footer />
    </main>
  );
}
