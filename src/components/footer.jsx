import Image from "next/image"

export function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: ["Market Analysis", "Consumer Insights", "Brand Tracking", "Custom Research"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact", "Privacy Policy"],
    },
    {
      title: "Resources",
      links: ["Case Studies", "White Papers", "Blog", "Support"],
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Image
              src="/Logo.png"
              alt="ANAMIX RESEARCH - Trusted Data. Smart Decisions. Global Impact"
              width={320}
              height={60}
              className="h-10 w-auto mb-4 brightness-0 invert hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Leading market research with 50+ years of combined experience and intelligent insights across PAN INDIA.
            </p>
            <div className="mb-4 text-gray-200 text-sm">
              <div className="mb-2">
                <span className="font-semibold">Registered Office</span><br/>
                B-4029, Gali No-110/107,<br/>
                Sant Nagar, Burari,<br/>
                Delhi - 110084<br/>
                <span className="font-semibold">Phone:</span> <a href="tel:01144729131" className="text-blue-200 hover:underline ml-1">011-44729131</a>
              </div>
              <div>
                <span className="font-semibold">Corporate Office</span><br/>
                4/51, Nehru Nagar,<br/>
                Near Oxford Public School,<br/>
                Delhi - 110065<br/>
                <span className="font-semibold">Phone:</span> <a href="tel:01141607295" className="text-blue-200 hover:underline ml-1">011-41607295</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
            </div>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-blue-300">{section.title}</h4>
              <ul className="space-y-2 text-gray-300">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-cyan-300 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ANAMIX RESEARCH PVT. LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
