import { Navigation } from "@/components/navigation.jsx";
import { Footer } from "@/components/footer.jsx";
import { Badge } from "@/components/ui/badge.jsx"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <Navigation />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 px-4 py-2 text-sm font-semibold">
              ABOUT ANAMIX
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Founded on Experience & Excellence</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Founded in May 2025, ANAMIX RESEARCH hit the ground running and was fully operational by June. Powered by a passionate and experienced team, we bring deep expertise and commitment to every project we undertake.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 my-6 max-w-3xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-6 shadow text-center flex-1">
              <div className="text-3xl font-bold text-blue-700 mb-2">ESTABLISHED</div>
              <div className="text-xl text-gray-700">MAY 2025</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow text-center flex-1">
              <div className="text-3xl font-bold text-blue-700 mb-2">OPERATIONS BEGIN</div>
              <div className="text-xl text-gray-700">JUNE 2025</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-10 max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
            <p>
              ANAMIX brings rich, hands-on experience across key sectors, delivering tailored solutions that drive innovation, efficiency, and sustainable growth. We have successfully partnered with brands in Lifestyle, Hospitality, Industrial Manufacturing, Power & Energy, and Aviation, delivering strategic insights and impactful outcomes.
            </p>
            <p className="mt-6">
              Additionally, ANAMIX plays a pivotal role in shaping narratives around Social Development, Government Policies & Public Issues, and Opinion Polls, empowering organizations with data-driven decisions and actionable intelligence.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 