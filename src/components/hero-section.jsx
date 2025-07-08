import { Button } from "@/components/ui/button.jsx"
import { ArrowRight, Play, BarChart3, TrendingUp, Users, Globe, Sparkles, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium animate-in fade-in slide-in-from-top duration-700 delay-300">
                <Sparkles className="h-4 w-4" />
                <span>Trusted by 500+ Companies</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                <span className="animate-in fade-in slide-in-from-left duration-1000 delay-500 block">
                  TRUSTED DATA.
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 animate-in fade-in slide-in-from-left duration-1000 delay-700 block">
                  SMARTER DECISIONS.
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-500 to-blue-800 animate-in fade-in slide-in-from-left duration-1000 delay-900 block">
                  GLOBAL IMPACT.
                </span>
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-1100">
                With over 25 years of combined experience in market research, ANAMIX delivers intelligent insights and
                quality data across PAN INDIA. We transform analytics into actionable intelligence for your business
                growth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left duration-1000 delay-1300">
              {/* Modern Get In Touch Button */}
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl px-8 py-3 overflow-hidden"
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                {/* Icon and text */}
                <div className="relative flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>GET IN TOUCH</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Sparkle effect */}
                <div className="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="h-3 w-3 text-cyan-200 animate-pulse" />
                </div>
              </Button>

              {/* Modern Watch Demo Button */}
              <Button
                size="lg"
                variant="outline"
                className="relative group border-2 border-blue-500 text-blue-600 hover:text-white bg-white/80 backdrop-blur-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 rounded-xl px-8 py-3 overflow-hidden"
              >
                {/* Animated background fill */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                {/* Content */}
                <div className="relative flex items-center">
                  <div className="mr-3 w-8 h-8 bg-blue-100 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300">
                    <Play className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span>WATCH DEMO</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Interactive Dashboard Mockup */}
          <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-500">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-blue-200 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-cyan-600/50 animate-pulse"></div>
                <div className="relative flex items-center justify-between">
                  <h3 className="text-white font-semibold">Market Research Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-lg border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-in fade-in slide-in-from-left duration-700 delay-1000">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-8 w-8 text-blue-600 animate-bounce" />
                      <div>
                        <p className="text-2xl font-bold text-blue-700 animate-pulse">85%</p>
                        <p className="text-sm text-blue-600">Data Accuracy</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-4 rounded-lg border border-cyan-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-in fade-in slide-in-from-right duration-700 delay-1200">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-8 w-8 text-cyan-600 animate-bounce delay-300" />
                      <div>
                        <p className="text-2xl font-bold text-cyan-700 animate-pulse delay-500">92%</p>
                        <p className="text-sm text-cyan-600">Client Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200 animate-in fade-in slide-in-from-bottom duration-700 delay-1400">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-800">Market Trends</h4>
                    <Globe className="h-5 w-5 text-blue-600 animate-spin" style={{ animationDuration: "3s" }} />
                  </div>
                  <div className="space-y-2">
                    {[75, 80, 65].map((width, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-full bg-blue-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-progress"
                            style={{
                              width: `${width}%`,
                              animationDelay: `${index * 300}ms`,
                              animationDuration: "2s",
                            }}
                          />
                        </div>
                        <span className="text-sm text-blue-600 font-medium">{width}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg border border-cyan-200 animate-in fade-in slide-in-from-bottom duration-700 delay-1600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-cyan-600 animate-pulse" />
                      <div>
                        <p className="font-semibold text-cyan-700">15+ Locations</p>
                        <p className="text-sm text-cyan-600">PAN India Coverage</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-700 animate-pulse delay-700">50+</p>
                      <p className="text-sm text-blue-600">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full animate-bounce delay-1000"></div>

            {/* Orbiting elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-orbit"></div>
              <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-orbit-reverse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
