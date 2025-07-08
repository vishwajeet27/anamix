import { Navigation } from "@/components/navigation.jsx";
import { Footer } from "@/components/footer.jsx";
import { Badge } from "@/components/ui/badge.jsx"
import { AboutSection } from "@/components/about-section.jsx"
import { ServicesSection } from "@/components/services-section.jsx"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutSection />
      <Footer />
    </div>
  )
} 