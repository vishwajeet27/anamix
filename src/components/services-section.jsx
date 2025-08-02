import { Card, CardContent } from "@/components/ui/card.jsx"
import { Badge } from "@/components/ui/badge.jsx"
import { BarChart3, Users, Globe, TrendingUp, CheckCircle, Star, Database, Cpu, FileText } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Database,
      title: "Data Collections",
      description: "Systematic data gathering through quantitative and qualitative techniques, ensuring comprehensive coverage of your target market with precision and reliability.",
      color: "text-blue-600",
      hoverColor: "hover:border-blue-300",
      bgColor: "bg-blue-50",
    },
    {
      icon: Cpu,
      title: "Data Processing",
      description: "Advanced data processing tools and methodologies that transform raw information into actionable insights, tailored to your specific product and user requirements.",
      color: "text-cyan-600",
      hoverColor: "hover:border-cyan-300",
      bgColor: "bg-cyan-50",
    },
    {
      icon: FileText,
      title: "Reports",
      description: "Comprehensive, data-driven reports that provide clear insights and strategic recommendations, helping you make informed decisions based on thorough analysis.",
      color: "text-blue-700",
      hoverColor: "hover:border-blue-400",
      bgColor: "bg-blue-100",
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Deep dive into market trends, size, and growth opportunities with our advanced analytics platform.",
      color: "text-blue-600",
      hoverColor: "hover:border-blue-300",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Consumer Insights",
      description: "Understand your target audience with comprehensive behavioral and demographic analysis.",
      color: "text-cyan-600",
      hoverColor: "hover:border-cyan-300",
      bgColor: "bg-cyan-50",
    },
    {
      icon: Globe,
      title: "Global Research",
      description: "Access worldwide market data and insights across multiple regions and demographics.",
      color: "text-blue-700",
      hoverColor: "hover:border-blue-400",
      bgColor: "bg-blue-100",
    },
    {
      icon: TrendingUp,
      title: "Trend Forecasting",
      description: "Predict future market movements with our AI-powered forecasting algorithms.",
      color: "text-cyan-700",
      hoverColor: "hover:border-cyan-400",
      bgColor: "bg-cyan-100",
    },
    {
      icon: CheckCircle,
      title: "Brand Tracking",
      description: "Monitor brand performance and perception across all touchpoints and channels.",
      color: "text-blue-800",
      hoverColor: "hover:border-blue-500",
      bgColor: "bg-blue-200",
    },
    {
      icon: Star,
      title: "Custom Solutions",
      description: "Tailored research methodologies designed specifically for your unique business needs.",
      color: "text-cyan-800",
      hoverColor: "hover:border-cyan-500",
      bgColor: "bg-cyan-200",
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
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
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 px-4 py-2 text-sm font-semibold animate-pulse animate-bounce">
            OUR SERVICES
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 animate-in fade-in slide-in-from-top duration-700 delay-200">
            Comprehensive Market Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-in fade-in slide-in-from-top duration-700 delay-400">
            From consumer insights to competitive analysis, we provide the data-driven solutions your business needs to
            stay ahead in today's dynamic market.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`${service.bgColor} border-2 border-transparent ${service.hoverColor} transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 group animate-in fade-in slide-in-from-bottom duration-700`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <IconComponent
                    className={`h-12 w-12 ${service.color} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
