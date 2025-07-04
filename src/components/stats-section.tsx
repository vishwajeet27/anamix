export function StatsSection() {
  const stats = [
    { value: "15+", label: "Office Locations", color: "text-blue-600", bg: "bg-blue-100" },
    { value: "50+", label: "Years Combined Experience", color: "text-cyan-600", bg: "bg-cyan-100" },
    { value: "10+", label: "Years with Japanese Teams", color: "text-blue-700", bg: "bg-blue-200" },
    { value: "PAN", label: "India Coverage", color: "text-cyan-700", bg: "bg-cyan-200" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 border-y border-blue-300 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 animate-gradient-x"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-110 transition-all duration-500 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`inline-flex items-center justify-center w-20 h-20 ${stat.bg} rounded-full mb-4 shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <div
                  className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.value}
                </div>
              </div>
              <div className="text-white font-medium text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
