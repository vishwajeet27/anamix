import { Card, CardContent } from "@/components/ui/card.jsx"
import { Badge } from "@/components/ui/badge.jsx"
import { BarChart3, Users, Globe, TrendingUp, CheckCircle, Star } from "lucide-react"

import { ServicesSection } from "@/components/services-section.jsx";

import { ResearchMethodologySection } from "@/components/research-methodology-section.jsx";

export default function () {
  return (
    <div className="min-h-screen bg-white">
      <ServicesSection />
      <ResearchMethodologySection />
    </div>
  );
}
 