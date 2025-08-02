"use client"
import React, { useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"
import { Badge } from "@/components/ui/badge.jsx"
import { Card, CardContent } from "@/components/ui/card.jsx"

const indiaGeoUrl = "/india_states.geojson"

const cities = [
  // North India
  {
    name: "Delhi",
    coordinates: [77.1025, 28.7041],
    type: "Head Office",
    specialty: "Operations Hub",
  },
  {
    name: "Lucknow",
    coordinates: [80.9462, 26.8467],
    type: "Branch",
    specialty: "FMCG",
  },
  {
    name: "Ludhiana",
    coordinates: [75.8573, 30.901],
    type: "Branch",
    specialty: "Agriculture",
  },
  {
    name: "Jaipur",
    coordinates: [75.7873, 26.9124],
    type: "Branch",
    specialty: "Tourism & Heritage",
  },
  {
    name: "Kanpur",
    coordinates: [80.3319, 26.4499],
    type: "Branch",
    specialty: "Manufacturing",
  },
  {
    name: "Varanasi",
    coordinates: [82.9739, 25.3176],
    type: "Branch",
    specialty: "Cultural Markets",
  },
  // West India
  {
    name: "Mumbai",
    coordinates: [72.8777, 19.076],
    type: "Branch",
    specialty: "Financial Markets",
  },
  {
    name: "Ahmedabad",
    coordinates: [72.5714, 23.0225],
    type: "Branch",
    specialty: "Textiles",
  },
  {
    name: "Pune",
    coordinates: [73.8567, 18.5204],
    type: "Branch",
    specialty: "Automotive",
  },
  {
    name: "Nagpur",
    coordinates: [79.0882, 21.1458],
    type: "Branch",
    specialty: "Logistics Hub",
  },
  {
    name: "Indore",
    coordinates: [75.8577, 22.7196],
    type: "Branch",
    specialty: "Education",
  },
  // South India
  {
    name: "Chennai",
    coordinates: [80.2707, 13.0827],
    type: "Branch",
    specialty: "Manufacturing",
  },
  {
    name: "Bangalore",
    coordinates: [77.5946, 12.9716],
    type: "Branch",
    specialty: "Tech Research",
  },
  {
    name: "Hyderabad",
    coordinates: [78.4867, 17.385],
    type: "Branch",
    specialty: "Pharma & Biotech",
  },
  {
    name: "Kochi",
    coordinates: [76.2673, 9.9312],
    type: "Branch",
    specialty: "Maritime & Ports",
  },
  // East India
  {
    name: "Kolkata",
    coordinates: [88.3639, 22.5726],
    type: "Branch",
    specialty: "Traditional Markets",
  },
  {
    name: "Patna",
    coordinates: [85.1376, 25.5941],
    type: "Branch",
    specialty: "Rural Markets",
  },
  {
    name: "Bhubaneswar",
    coordinates: [85.8245, 20.2961],
    type: "Branch",
    specialty: "Mining & Steel",
  },
  {
    name: "Guwahati",
    coordinates: [91.7362, 26.1445],
    type: "Branch",
    specialty: "Northeast Markets",
  },
]

export function LocationsSection() {
  const [tooltipContent, setTooltipContent] = useState(null)

  const totalOffices = cities.length
  // const totalTeamSize = cities.reduce(
  //   (acc, city) => acc + Number.parseInt(city.team.replace("+", "")),
  //   0,
  // )
  const totalTeamSize = 1000;
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/eartthBackground.jpg" 
          alt="Earth Background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-800/50 to-cyan-900/60"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative z-10">
          <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-2 text-sm font-semibold">
            PAN INDIA LOCATIONS
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
              City Presence
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our nationwide offices strategically located across India to serve diverse markets with expertise.
          </p>
        </div>

        {/* Metrics */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          <div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>
            </div>
            <div className="text-3xl font-bold text-gray-900">{totalOffices}</div>
            <div className="text-sm text-gray-600">Total Offices</div>
          </div>
          <div>
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7H7v6h6V7z"/></svg>
            </div>
            <div className="text-3xl font-bold text-gray-900">{totalTeamSize}+</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
          <div>
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3 6a9 9 0 0 1 14 0v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6z"/></svg>
            </div>
            <div className="text-3xl font-bold text-gray-900">8</div>
            <div className="text-sm text-gray-600">Months Timeline</div>
          </div>
          <div>
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
            </div>
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-600">Specializations</div>
          </div>
        </div> */}

        {/* Left + Right Sections */}
        <div className="flex flex-col md:flex-row gap-8 items-start mt-10">
          {/* Left Section: Office Presence */}
          <div className="md:w-1/3 w-full bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6 flex flex-col items-start mb-8 md:mb-0 relative z-10">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">We Have Office Presence</h3>
            <p className="text-gray-700 mb-4">
              Our footprint spans <span className="font-semibold">{totalOffices} Indian cities</span>, with headquarters in Delhi and specialist teams across metro and emerging markets.
            </p>
            <Card className="mb-2 w-full">
              <CardContent>
                <div className="flex flex-col">
                  <span className="font-semibold">Total Team Size:</span>
                  <span className="text-blue-600 text-xl font-bold">{totalTeamSize}+</span>
                </div>
              </CardContent>
            </Card>
            <Card className="mb-2 w-full">
              <CardContent>
                <div className="flex flex-col">
                  <span className="font-semibold">Industries:</span>
                  <span className="text-blue-600">FMCG, Healthcare, Education, Automobile, Retail, Banking, Real Estate, Telecom, E-commerce, IT/Fintech, Hospitality, Industrial, Power & Energy, Aviation, Social, Government & more</span>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent>
                <div className="flex flex-col">
                  <span className="font-semibold">Pan India Coverage:</span>
                  <span className="text-blue-600">15+ Major Cities</span>
                  <span className="text-sm text-gray-600 mt-1">Metro, Tier-I & Tier-II Markets</span>
                  <span className="text-sm text-gray-600">Strategic Presence Across All Regions</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section: Map */}
          <div className="md:w-2/3 w-full relative bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 relative z-10 border border-blue-200">
            {/* Map Header */}
            <div className="mb-4 text-center">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Strategic Office Network</h4>
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-600">Head Office</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Branch Offices</span>
                </div>
              </div>
            </div>

            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: [82.8, 22.5], scale: 1200 }}
              width={800}
              height={700}
              data-tip=""
              className="rounded-lg overflow-hidden shadow-lg"
            >
              {/* Background gradient */}
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E0F2FE" />
                  <stop offset="50%" stopColor="#DBEAFE" />
                  <stop offset="100%" stopColor="#E0F7FA" />
                </linearGradient>
              </defs>

              <Geographies geography={indiaGeoUrl}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="url(#mapGradient)"
                      stroke="#3B82F6"
                      strokeWidth={1}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#3B82F6", outline: "none", stroke: "#1D4ED8", strokeWidth: 2 },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {cities.map((city, index) => (
                <Marker
                  key={city.name}
                  coordinates={city.coordinates}
                  onMouseEnter={() => {
                    setTooltipContent(
                      `${city.name} - ${city.type}`
                    )
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(null)
                  }}
                >
                  {/* Animated pulse effect for HQ */}
                  {city.type === "Head Office" && (
                    <circle
                      r={12}
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth={2}
                      opacity={0.6}
                      style={{
                        animation: "pulse 2s infinite",
                      }}
                    />
                  )}
                  
                  {/* Main marker */}
                  <circle
                    r={city.type === "Head Office" ? 8 : 6}
                    fill={city.type === "Head Office" ? "#ef4444" : "#2563eb"}
                    stroke="#fff"
                    strokeWidth={3}
                    style={{ 
                      cursor: "pointer",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.2)";
                      e.target.style.filter = "drop-shadow(0 4px 8px rgba(0,0,0,0.4))";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.filter = "drop-shadow(0 2px 4px rgba(0,0,0,0.3))";
                    }}
                  />
                  
                  {/* City label */}
                  <text
                    textAnchor="middle"
                    y={city.type === "Head Office" ? -15 : -12}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fill: city.type === "Head Office" ? "#dc2626" : "#1e40af",
                      fontSize: city.type === "Head Office" ? 14 : 12,
                      fontWeight: city.type === "Head Office" ? "bold" : "normal",
                      textShadow: "0 1px 2px rgba(255,255,255,0.8)",
                    }}
                  >
                    {city.name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>

            {/* Enhanced Tooltip */}
            {tooltipContent && (
              <div className="absolute bottom-4 right-4 bg-white shadow-xl rounded-lg p-4 max-w-xs text-sm border border-blue-200 animate-in fade-in slide-in-from-bottom duration-300">
                <div className="font-semibold text-blue-800 mb-1">Office Details</div>
                <div className="text-gray-700 whitespace-pre-line">{tooltipContent}</div>
                <div className="mt-2 text-xs text-blue-600">Click for more info</div>
              </div>
            )}


          </div>
        </div>
      </div>
    </section>
  )
}
