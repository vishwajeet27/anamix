import { Navigation } from "@/components/navigation.jsx"
import { HeroSection } from "@/components/hero-section.jsx"
import { StatsSection } from "@/components/stats-section.jsx"
import { AboutSection } from "@/components/about-section.jsx"
import { ServicesSection } from "@/components/services-section.jsx"
import { ValuesSection } from "@/components/values-section.jsx"
import { LocationsSection } from "@/components/locations-section.jsx"
import { TestimonialsSection } from "@/components/testimonials-section.jsx"
import { CTASection } from "@/components/cta-section.jsx"
import { Footer } from "@/components/footer.jsx"
import ServicesPage from "./services.jsx"

export default function HomePage() {  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <LocationsSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
      <Footer />
    </div>
  )
}
