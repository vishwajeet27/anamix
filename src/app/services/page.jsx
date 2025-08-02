import { Navigation } from "@/components/navigation.jsx";
import { Footer } from "@/components/footer.jsx";
import { ServicesSection } from "@/components/services-section.jsx";
import { ResearchMethodologySection } from "@/components/research-methodology-section.jsx";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ServicesSection />
      <ResearchMethodologySection />
      
      {/* Our Impact Across Sectors Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12">
            <div className="flex-1 flex flex-col justify-center text-left text-gray-800">
              <h3 className="text-3xl font-bold text-blue-800 mb-6">Our Impact Across Sectors</h3>
              <div className="mb-4 text-lg">
                <span className="font-semibold text-blue-700">ANAMIX</span> brings rich, hands-on experience across key sectors, delivering tailored solutions that drive <span className="text-cyan-700 font-semibold">innovation</span>, <span className="text-cyan-700 font-semibold">efficiency</span>, and <span className="text-cyan-700 font-semibold">sustainable growth</span>.
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 mb-6 text-base">
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>FMCG</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Food/Alcohol/Beverages</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Healthcare/Pharma</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Education</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Media and Entertainment</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Agriculture</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Automobile</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Retail</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Banking, Finance and Insurance</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Real Estate</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Travel and Leisure</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Telecom</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>E-commerce</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>IT/Fintech</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Life Style</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Shopping Behaviors</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Hospitality</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Industrial</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Power & Energy</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Aviation</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Social</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Government Policies & Issues</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>Opinion Polls</div>
              </div>
              <div className="mb-4 text-base">
                We have successfully partnered with brands in these sectors, delivering <span className="font-semibold text-blue-700">strategic insights</span> and impactful outcomes.
              </div>
              <div className="mt-2 text-base">
                <span className="font-semibold text-cyan-700">Additionally</span>, ANAMIX plays a pivotal role in shaping narratives around <span className="font-semibold text-blue-700">Social Development</span>, <span className="font-semibold text-blue-700">Government Policies & Public Issues</span>, and <span className="font-semibold text-blue-700">Opinion Polls</span>, empowering organizations with <span className="font-semibold text-cyan-700">data-driven decisions</span> and actionable intelligence.
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Image src="NicePng_industry-png_7736121.png" alt="Global Impact" width={480} height={320} className="drop-shadow-lg rounded-xl object-cover w-full max-w-[480px] h-auto" />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}