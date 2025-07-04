import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "ANAMIX transformed our market strategy with their comprehensive analytics. The insights we gained were invaluable for our product launch.",
      author: "Sarah Johnson",
      position: "CMO, TechCorp",
      avatar: "from-blue-400 to-cyan-600",
    },
    {
      quote:
        "The depth of consumer insights provided by ANAMIX helped us identify new market opportunities we never knew existed.",
      author: "Michael Chen",
      position: "VP Strategy, RetailPlus",
      avatar: "from-cyan-400 to-blue-600",
    },
    {
      quote:
        "Outstanding service and incredibly accurate data. ANAMIX is now our go-to partner for all market research needs.",
      author: "Emma Rodriguez",
      position: "Director, GlobalBrands",
      avatar: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 px-4 py-2 text-sm font-semibold">
            TESTIMONIALS
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Trusted by Industry Leaders</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className={`w-10 h-10 bg-gradient-to-r ${testimonial.avatar} rounded-full mr-3`}></div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
