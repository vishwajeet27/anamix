import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Calendar } from "lucide-react"

export function AboutSection() {
  const founders = [
    {
      name: "Manish Kumar",
      role: "Co-Founder",
      education: "Arts Graduate from Delhi",
      experience: "25+ Years in Market Research",
      companies: "IMRB, RSMRS, Intage India, Takumi International",
      description:
        "Expert in operations, team building, and project management with extensive experience in Japanese research methodologies.",
    },
    {
      name: "Arjun Ramchet Yadav",
      role: "Co-Founder",
      education: "PGDM Marketing - Welingkar Institute Mumbai",
      experience: "25+ Years in Market Research",
      companies: "TNS Mode, TNS, MRSS, Hansa, Intage India, Takumi International",
      description:
        "Specialist in client servicing and strategic market analysis with deep expertise in global research practices.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 px-4 py-2 text-sm font-semibold">
            ABOUT ANAMIX
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Founded on Experience & Excellence</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            ANAMIX RESEARCH PVT. LTD. was registered in May 2025 and began full-scale operations on June 1st, 2025. Our
            name represents our core: <strong className="text-blue-600">ANA</strong> (Analytics) +{" "}
            <strong className="text-cyan-600">MIX</strong> (Matrix) - combining intelligent analysis with comprehensive
            data matrices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{founder.role}</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        <strong className="text-blue-600">Education:</strong> {founder.education}
                      </p>
                      <p>
                        <strong className="text-blue-600">Experience:</strong> {founder.experience}
                      </p>
                      <p>
                        <strong className="text-blue-600">Previous Companies:</strong> {founder.companies}
                      </p>
                    </div>
                    <p className="text-gray-700 mt-4">{founder.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-300 text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Established 2025</h3>
              <p className="text-gray-600">Registered in May, Operations from June 1st</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-cyan-100 to-blue-100 border-cyan-300 text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">50+ Years Combined</h3>
              <p className="text-gray-600">Founders' experience in market research</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-200 to-cyan-200 border-blue-400 text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Globe className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">10+ Years</h3>
              <p className="text-gray-600">Working with Japanese research teams</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
