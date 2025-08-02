"use client"
import { Badge } from "@/components/ui/badge.jsx"
import { Card, CardContent } from "@/components/ui/card.jsx"
import { 
  Users, 
  MessageCircle, 
  Eye, 
  Monitor, 
  Phone, 
  Globe, 
  FileText, 
  Search, 
  TestTube, 
  Home, 
  Building, 
  Car 
} from "lucide-react"
import { useState } from "react"

export function ResearchMethodologySection() {
  const [activeTab, setActiveTab] = useState("Qualitative Research")
  
  const methodologies = [
    {
      category: "Qualitative Research",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      methods: [
        {
          name: "Focus Group Discussion",
          description: "Interactive group sessions to gather in-depth insights and opinions",
          icon: MessageCircle,
        },
        {
          name: "In-depth Interviews",
          description: "One-on-one comprehensive interviews for detailed understanding",
          icon: Users,
        },
        {
          name: "Ethnography",
          description: "Immersive research to understand cultural contexts and behaviors",
          icon: Globe,
        },
      ],
    },
    {
      category: "Quantitative Research",
      icon: FileText,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      methods: [
        {
          name: "Face to Face Interviews (PAPI & CAPI)",
          description: "Personal interviews using paper and computer-assisted methods",
          icon: Users,
        },
        {
          name: "Web based Interviews (CAWI)",
          description: "Online surveys and interviews for digital data collection",
          icon: Globe,
        },
        {
          name: "Self-Completion Interviews",
          description: "Self-administered surveys for independent responses",
          icon: FileText,
        },
        {
          name: "Telephonic Interviews (CATI)",
          description: "Computer-assisted telephone interviews for remote data collection",
          icon: Phone,
        },
      ],
    },
    {
      category: "Other Research Methodology",
      icon: Search,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      methods: [
        {
          name: "Mystery Audits",
          description: "Undercover assessments of service quality and customer experience",
          icon: Eye,
        },
        {
          name: "Observations",
          description: "Direct observation of behaviors and interactions in natural settings",
          icon: Monitor,
        },
        {
          name: "Eye Tracking",
          description: "Advanced technology to track visual attention and gaze patterns",
          icon: Eye,
        },
        {
          name: "Sensory Research",
          description: "Analysis of sensory perceptions and product experiences",
          icon: TestTube,
        },
        {
          name: "HUT (Home Uses Test product)",
          description: "In-home product testing and usage behavior analysis",
          icon: Home,
        },
        {
          name: "CLT (Central Location Test)",
          description: "Controlled environment testing for product evaluation",
          icon: Building,
        },
        {
          name: "Clinics (Auto, Home Appliances etc..)",
          description: "Specialized testing facilities for automotive and appliance research",
          icon: Car,
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 px-4 py-2 text-sm font-semibold">
            RESEARCH METHODOLOGY
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Research Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From qualitative insights to quantitative analysis, we employ cutting-edge methodologies to deliver 
            accurate, actionable research data that drives your business decisions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {methodologies.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveTab(category.category)}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === category.category
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {methodologies.map((category) => {
            const CategoryIcon = category.icon
            return (
              <div
                key={category.category}
                className={`animate-in fade-in slide-in-from-bottom duration-700 ${
                  activeTab === category.category ? "block" : "hidden"
                }`}
              >
                {/* Category Header with Photo */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center shadow-lg`}>
                        <CategoryIcon className={`h-8 w-8 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
                        <p className="text-gray-600">
                          {category.category === "Qualitative Research" && "Deep insights through human interaction and observation"}
                          {category.category === "Quantitative Research" && "Data-driven analysis with statistical precision and measurable results"}
                          {category.category === "Other Research Methodology" && "Specialized techniques for unique research needs and advanced analytics"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="prose prose-lg">
                      <p className="text-gray-700 leading-relaxed">
                        {category.category === "Qualitative Research" && 
                          "Our qualitative research methods focus on understanding the 'why' behind consumer behavior. We dive deep into motivations, attitudes, and perceptions through direct human interaction and observation."}
                        {category.category === "Quantitative Research" && 
                          "Our quantitative research provides statistically significant data through structured surveys and systematic data collection. We deliver measurable insights that support data-driven decision making."}
                        {category.category === "Other Research Methodology" && 
                          "Our specialized research methodologies combine cutting-edge technology with innovative approaches to deliver unique insights that traditional methods cannot capture."}
                      </p>
                    </div>
                  </div>
                  
                  {/* Photo Section */}
                  <div className="relative">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                      <img
                        src={
                          category.category === "Qualitative Research" 
                            ? "/pexels-fauxels-3184339.jpg"
                            : category.category === "Quantitative Research"
                            ? "/pexels-goumbik-669621.jpg"
                            : "/pexels-fauxels-3183153.jpg"
                        }
                        alt={`${category.category} Research`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-xl font-semibold">{category.category}</h4>
                        <p className="text-sm opacity-90">Professional Research Environment</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Methods Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.methods.map((method, methodIndex) => {
                    const MethodIcon = method.icon
                    return (
                      <Card
                        key={method.name}
                        className={`${category.bgColor} border-2 border-transparent hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group animate-in fade-in slide-in-from-bottom duration-500`}
                        style={{ animationDelay: `${methodIndex * 100}ms` }}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                              <MethodIcon className={`h-6 w-6 ${category.color}`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                                {method.name}
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {method.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        
      </div>
    </section>
  )
} 