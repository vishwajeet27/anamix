import { Navigation } from "@/components/navigation.jsx";
import { Footer } from "@/components/footer.jsx";
import { ServicesSection } from "@/components/services-section.jsx";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ServicesSection />
      <Footer />
    </div>
  );
}