import { Badge } from "@/components/ui/badge.jsx"
import { Lightbulb, Users, Target, User } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const directors = [
    {
      name: "Manish Kumar",
      role: "Director",
      education: "Arts Graduate from Delhi",
      experience: "20+ Years in Market Research",
      companies: "IMRB, Indica, GFK, RSMRS, Intage, Takumi International",
      photo: "/team/Manish Kumar.jpg", // Placeholder image
      description:
        "Manish, an Arts graduate with over 20 years of experience in market research, currently spearheads operations at ANAMIX. He has successfully managed large-scale client accounts in the past. His core strengths lie in client satisfaction, operational leadership, and team management—enabling him to ensure timely delivery and flawless execution across all project levels.\n\nPrior to launching his own venture, Manish held key positions at leading market research firms such as IMRB, Indica, GFK, RSMRS, Intage and Takumi. He is known for his exceptional ability to streamline systems and optimize processes across diverse functions, consistently driving performance and achieving strategic milestones.",
    },
    {
      name: "Arjun Ramchet Yadav",
      role: "Director",
      education: "PGDM Marketing - Welingkar Institute Mumbai",
      experience: "20+ Years in Market Research",
      companies: "TNS Mode, MBL RCG, NFO, TNS India, Hansa Research, Intage India, Takumi International",
      photo: "/team/Arjun Yadav.jpg", // Placeholder image
      description:
        `Arjun holds a PGDM in Marketing from Welingkar Institute of Management, Mumbai, and brings over 20 years of rich experience in the Market Research industry, beginning his career with TNS Mode. He has deep expertise in both offline and online methodologies, spanning Qualitative and Quantitative research. Throughout his career, he has worked with reputed market research organizations including MBL RCG, NFO, TNS India, Hansa Research, and Intage India & Takumi before establishing his own venture.\n\nHe has served a wide array of clients across diverse industries—automotive, FMCG, electronics, electricals, pharmaceuticals, healthcare, sanitaryware, education, BFSI, IT, telecom, e-commerce, logistics, industrial, social, agriculture, hospitality, fashion & lifestyle, aviation, real estate, media, beverages, and food & service sectors—garnering multi-sectoral insights and domain knowledge.\n\nANAMIX stands to gain from his vast international experience, having worked with global clients from Japan, Germany, France, the UK, the US, Australia, China, Singapore, Italy, Korea, and Vietnam.`,
    },
  ]

  const team = [
    {
      name: "Ram Chander",
      designation: "Manager Operations",
      city: "North India",
      photo: "/team/Ram Chander.jpg", // Place your image in public/team/
    },
    {
      name: "Balwant Singh",
      designation: "Manager Operations",
      city: "North India",
      photo: "/team/Balwant Singh.jpg", // Place your image in public/team/
    },
    {
      name: "Ruhi Yasmin",
      designation: "Manager - PMT & QC",
      city: "PAN India",
      photo: "/team/Ruhi.jpg",
    },
    {
      name: "Kumar Karthikeyan",
      designation: "Manager - Operations",
      city: "South India",
      photo: "/team/Karthik.jpg",
    },
    {
      name: "Madhavi Ashok",
      designation: "Manager - Operations",
      city: "West India",
      photo: "/team/Madhavi.jpg",
    },
    {
      name: "Johnwessley Nadar",
      designation: "Manager - Operations",
      city: "West India",
      photo: "/team/John.jpg",
    },
    {
      name: "Avijit Guchhait",
      designation: "Manager - Operations",
      city: "East India",
      photo: "/team/Avijit.jpg",
    },
    
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 px-4 py-2 text-sm font-semibold animate-bounce">
            ABOUT ANAMIX
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Founded on Experience & Excellence</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl shadow-lg p-8 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-700">At ANAMIX (ANA – Analytics | MIX – Matrix)</h3>
            </div>
            <p className="text-gray-700 text-base">
              We're proud to be powered by an intelligent, experienced team that continuously inspires us to serve our clients better.
            </p>
          </div>
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl shadow-lg p-8 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-cyan-700 mr-3" />
              <h3 className="text-xl font-semibold text-cyan-700">Our Strength</h3>
            </div>
            <p className="text-gray-700 text-base">
              Our strength lies in our deep-rooted connection to the world of Market Research—right from the grassroots to strategic leadership. Driven by a shared vision, we strive to create an ecosystem where fact-based insights and high-quality data fuel meaningful decisions—delivered on time, every time.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-8 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-700 mr-3" />
              <h3 className="text-xl font-semibold text-blue-700">Our Purpose</h3>
            </div>
            <p className="text-gray-700 text-base">
              Founded with the purpose of empowering clients across India and abroad, ANAMIX exists to help organizations achieve their goals through precision, passion, and purpose-led research.
            </p>
          </div>
        </div>
        <div className="mt-6 text-blue-900 font-medium text-lg max-w-4xl mx-auto mb-12 text-left">
          Founded in May 2025, ANAMIX RESEARCH hit the ground running and was fully operational by June. Powered by a passionate and experienced team, we bring deep expertise and commitment to every project we undertake.
        </div>
        <div className="flex flex-col sm:flex-row gap-8 my-6 max-w-3xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-6 shadow text-center flex-1">
            <div className="text-3xl font-bold text-blue-700 mb-2">ESTABLISHED</div>
            <div className="text-xl text-gray-700">MAY 2025</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 shadow text-center flex-1">
            <div className="text-3xl font-bold text-blue-700 mb-2">OPERATIONS BEGIN</div>
            <div className="text-xl text-gray-700">JUNE 2025</div>
          </div>
        </div>
        <div className="mt-20 mb-10">
          <h3 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Directors</h3>
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {directors.map((director, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-blue-200 hover:shadow-2xl transition-shadow duration-300">
                <div
                  className="rounded-full flex items-center justify-center mb-4 overflow-hidden border-4 border-blue-100"
                  style={{ width: 160, height: 160 }}
                >
                  <Image
                    src={director.photo}
                    alt={director.name}
                    width={160}
                    height={160}
                    className="object-cover object-center w-full h-full rounded-full"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{director.name}</h4>
                <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wide">{director.role}</p>
                <div className="text-gray-600 text-sm mb-2">
                  <p><span className="font-semibold text-blue-600">Education:</span> {director.education}</p>
                  <p><span className="font-semibold text-blue-600">Experience:</span> {director.experience}</p>
                  <p><span className="font-semibold text-blue-600">Previous Companies:</span> {director.companies}</p>
                </div>
                <p className="text-gray-700 text-base mt-2 whitespace-pre-line">{director.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 mb-10">
          <h3 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Team</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100 bg-blue-50">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium text-sm">{member.designation}</p>
                <p className="text-gray-500 text-xs mt-1">{member.city}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
