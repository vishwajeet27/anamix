import { Card, CardContent } from "@/components/ui/card.jsx"
import { Badge } from "@/components/ui/badge.jsx"
import { Brain, Cpu, Award, Zap, Shield, Hammer, Lightbulb, Clock, DollarSign, Users } from "lucide-react"

export function ValuesSection() {
  const values = [
    {
      icon: Brain,
      title: "Intelligent",
      description: "Smart analytical approaches to complex research challenges",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Cutting-edge tools and methodologies for accurate insights",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Uncompromising standards in data collection and analysis",
      color: "text-blue-700",
      bgColor: "bg-blue-200",
    },
    {
      icon: Zap,
      title: "Flexibility",
      description: "Adaptable solutions tailored to client requirements",
      color: "text-cyan-700",
      bgColor: "bg-cyan-200",
    },
    {
      icon: Shield,
      title: "Responsibility",
      description: "Ethical practices and reliable service delivery",
      color: "text-blue-800",
      bgColor: "bg-blue-300",
    },
    {
      icon: Hammer,
      title: "Hard Work",
      description: "Dedicated effort in every project we undertake",
      color: "text-cyan-800",
      bgColor: "bg-cyan-300",
    },
    {
      icon: Lightbulb,
      title: "Smart Work",
      description: "Efficient processes that maximize value and impact",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Clock,
      title: "Timeline",
      description: "Committed to delivering results within agreed schedules",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Optimal solutions that provide maximum ROI",
      color: "text-blue-700",
      bgColor: "bg-blue-200",
    },
    {
      icon: Users,
      title: "Team Work",
      description: "Collaborative approach for comprehensive solutions",
      color: "text-cyan-700",
      bgColor: "bg-cyan-200",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 px-4 py-2 text-sm font-semibold">
            OUR VALUES
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">What We Believe In</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our core values drive everything we do. From intelligent analysis to cost-effective solutions, these
            principles guide our commitment to excellence in market research.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card
                key={index}
                className={`${value.bgColor} border-2 border-transparent hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center transform hover:scale-105`}
              >
                <CardContent className="p-6">
                  <IconComponent className={`h-10 w-10 ${value.color} mx-auto mb-3`} />
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
