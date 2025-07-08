import { Badge } from "@/components/ui/badge.jsx"
import { Card, CardContent } from "@/components/ui/card.jsx"
import { MapPin, Building, Users, Clock, Star, TrendingUp } from "lucide-react"

export function LocationsSection() {
  const milestones = [
    {
      year: "2025",
      title: "Foundation & Expansion",
      description: "ANAMIX established with strategic nationwide presence",
      offices: [
        { city: "Delhi", type: "Head Office", established: "May 2025", team: "25+", specialty: "Operations Hub" },
        { city: "Mumbai", type: "Branch", established: "June 2025", team: "15+", specialty: "Financial Markets" },
        { city: "Bangalore", type: "Branch", established: "June 2025", team: "20+", specialty: "Tech Research" },
        { city: "Chennai", type: "Branch", established: "June 2025", team: "12+", specialty: "Manufacturing" },
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      year: "Phase 1",
      title: "Northern & Western Expansion",
      description: "Strengthening presence in key commercial centers",
      offices: [
        { city: "Pune", type: "Branch", established: "July 2025", team: "10+", specialty: "Automotive" },
        { city: "Ahmedabad", type: "Branch", established: "July 2025", team: "8+", specialty: "Textiles" },
        { city: "Lucknow", type: "Branch", established: "Aug 2025", team: "12+", specialty: "FMCG" },
        { city: "Ludhiana", type: "Branch", established: "Aug 2025", team: "6+", specialty: "Agriculture" },
      ],
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
    },
    {
      year: "Phase 2",
      title: "Eastern & Central Coverage",
      description: "Completing nationwide research infrastructure",
      offices: [
        { city: "Kolkata", type: "Branch", established: "Sep 2025", team: "14+", specialty: "Traditional Markets" },
        { city: "Hyderabad", type: "Branch", established: "Sep 2025", team: "16+", specialty: "Pharma & Biotech" },
        { city: "Nagpur", type: "Branch", established: "Oct 2025", team: "8+", specialty: "Logistics Hub" },
        { city: "Indore", type: "Branch", established: "Oct 2025", team: "7+", specialty: "Education" },
      ],
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-100",
    },
    {
      year: "Phase 3",
      title: "Strategic Completion",
      description: "Final expansion to complete PAN India coverage",
      offices: [
        { city: "Patna", type: "Branch", established: "Nov 2025", team: "9+", specialty: "Rural Markets" },
        { city: "Bhubaneswar", type: "Branch", established: "Nov 2025", team: "6+", specialty: "Mining & Steel" },
        { city: "Guwahati", type: "Branch", established: "Dec 2025", team: "5+", specialty: "Northeast Markets" },
      ],
      color: "from-cyan-600 to-blue-700",
      bgColor: "bg-cyan-100",
    },
  ]

  const totalTeamSize = milestones.reduce(
    (total, phase) =>
      total +
      phase.offices.reduce((phaseTotal, office) => phaseTotal + Number.parseInt(office.team.replace("+", "")), 0),
    0,
  )

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flowing lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <path
            d="M0,300 Q250,200 500,300 T1000,300"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,500 Q250,400 500,500 T1000,500"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <path
            d="M0,700 Q250,600 500,700 T1000,700"
            stroke="url(#gradient3)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 px-4 py-2 text-sm font-semibold">
            EXPANSION JOURNEY
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Growth Story
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From foundation to nationwide presence - discover how ANAMIX strategically expanded across India to serve
            every major market with specialized expertise.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center animate-in fade-in slide-in-from-left duration-700">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Building className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">15</div>
            <div className="text-sm text-gray-600">Total Offices</div>
          </div>
          <div className="text-center animate-in fade-in slide-in-from-left duration-700 delay-200">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{totalTeamSize}+</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
          <div className="text-center animate-in fade-in slide-in-from-right duration-700 delay-400">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-sm text-gray-600">Months Timeline</div>
          </div>
          <div className="text-center animate-in fade-in slide-in-from-right duration-700 delay-600">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Star className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-sm text-gray-600">Specializations</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-600 rounded-full opacity-30"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative animate-in fade-in slide-in-from-${index % 2 === 0 ? "left" : "right"} duration-1000`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${milestone.color} rounded-full shadow-lg border-4 border-white animate-pulse`}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "lg:grid-flow-col-dense"}`}>
                  {/* Phase Info */}
                  <div className={`${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:pl-16"} space-y-4`}>
                    <div className={`inline-block px-4 py-2 ${milestone.bgColor} rounded-full`}>
                      <span className="text-sm font-semibold text-blue-700">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{milestone.offices.length} Offices</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>
                          {milestone.offices.reduce(
                            (total, office) => total + Number.parseInt(office.team.replace("+", "")),
                            0,
                          )}
                          + Team
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Offices Grid */}
                  <div className={`${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"} space-y-4`}>
                    <div className="grid gap-3">
                      {milestone.offices.map((office, officeIndex) => (
                        <Card
                          key={office.city}
                          className={`${milestone.bgColor} border-2 border-transparent hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group animate-in fade-in slide-in-from-bottom duration-500`}
                          style={{ animationDelay: `${index * 300 + officeIndex * 100}ms` }}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-10 h-10 bg-gradient-to-r ${milestone.color} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                                >
                                  {office.type === "Head Office" ? (
                                    <Building className="h-5 w-5 text-white" />
                                  ) : (
                                    <MapPin className="h-5 w-5 text-white" />
                                  )}
                                </div>
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <h4 className="font-semibold text-gray-900">{office.city}</h4>
                                    {office.type === "Head Office" && (
                                      <Badge className="bg-red-100 text-red-700 text-xs px-2 py-0.5">HQ</Badge>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-600">{office.established}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-blue-700">{office.team}</div>
                                <div className="text-xs text-gray-500">{office.specialty}</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
          <Card className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-600/80"></div>
            <CardContent className="relative p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Expansion Success</h3>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  Our strategic expansion has positioned ANAMIX as a leading market research partner across India, with
                  specialized expertise in every major market segment.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-3 text-cyan-200" />
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Market Coverage</div>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-3 text-blue-200" />
                  <div className="text-3xl font-bold mb-2">12+</div>
                  <div className="text-blue-100">Industry Specializations</div>
                </div>
                <div className="text-center">
                  <Star className="h-12 w-12 mx-auto mb-3 text-cyan-200" />
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-blue-100">Years Combined Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
