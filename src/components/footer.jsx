"use client";
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function ComingSoonModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <span className="inline-block h-10 w-10 mb-2 text-blue-500 animate-pulse">✨</span>
          <h2 className="text-2xl font-bold mb-2 text-blue-700">Coming Soon</h2>
          <p className="text-gray-600 mb-2">This feature is launching soon. Stay tuned!</p>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const footerSections = [
    {
      title: "Services",
      links: ["Data Collections", "Data Processing", "Reports", "Market Analysis", "Consumer Insights", "Brand Tracking", "Custom Research"],
    },
    {
      title: "Industries",
      links: [
        "FMCG", "Healthcare/Pharma", "Education", "Automobile", 
        "Retail", "Banking & Finance", "Real Estate", "Telecom", 
        "E-commerce", "IT/Fintech", "Hospitality", "Industrial",
        "Power & Energy", "Aviation", "Social", "Government"
      ],
      twoColumns: true,
    },
    // {
    //   title: "Company",
    //   links: [
    //     { label: "About Us", href: "/about-us" },
    //     { label: "Careers", href: null },
    //     { label: "Contact", href: "/contact-us" },
    //     { label: "Privacy Policy", href: "/privacy-policy" },
    //   ],
    // }
    // {
    //   title: "Resources",
    //   links: ["Case Studies", "White Papers", "Blog", "Support"],
    // },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={320}
                height={60}
                // className="h-10 w-auto mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer"

                className="h-10 w-auto mb-4 brightness-0 invert hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading market research with 50+ years of combined experience and intelligent insights across PAN INDIA.
            </p>
            <div className="mb-4 text-gray-200 text-sm flex flex-col md:flex-row md:space-x-8">
              <div className="mb-2 md:mb-0 md:flex-1">
                <span className="font-semibold">Registered Office</span><br/>
                B-4029, Gali No-110/107,<br/>
                Sant Nagar, Burari,<br/>
                Delhi - 110084<br/>
                <span className="font-semibold">Phone:</span> <a href="tel:01144729131" className="text-blue-200 hover:underline ml-1">011-44729131</a><br/>
                <span className="font-semibold">Mobile:</span> <a href="tel:+918104141622" className="text-blue-200 hover:underline ml-1">+91 81041 41622</a>
              </div>
              <div className="md:flex-1">
                <span className="font-semibold">Corporate Office</span><br/>
                4/51, Nehru Nagar,<br/>
                Near Oxford Public School,<br/>
                Delhi - 110065<br/>
                <span className="font-semibold">Phone:</span> <a href="tel:01141607295" className="text-blue-200 hover:underline ml-1">011-41607295</a><br/>
                <span className="font-semibold">Mobile:</span> <a href="tel:+918104141622" className="text-blue-200 hover:underline ml-1">+91 81041 41622</a>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-white hover:text-blue-400 transition-colors duration-200" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-white hover:text-pink-400 transition-colors duration-200" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-white hover:text-blue-300 transition-colors duration-200" />
              </a>
            </div>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-blue-300">{section.title}</h4>
              {section.twoColumns ? (
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="text-gray-300">
                      <a href="#" className="hover:text-cyan-300 transition-colors duration-300 text-sm">
                        {link}
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2 text-gray-300">
                  {section.title === "Company"
                    ? section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          {link.href ? (
                            <Link href={link.href} className="hover:text-cyan-300 transition-colors duration-300">
                              {link.label}
                            </Link>
                          ) : (
                            <button
                              className="hover:text-cyan-300 transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer p-0 text-inherit font-inherit"
                              onClick={() => setShowComingSoon(true)}
                            >
                              {link.label}
                            </button>
                          )}
                        </li>
                      ))
                    : section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href="#" className="hover:text-cyan-300 transition-colors duration-300">
                            {link}
                          </a>
                        </li>
                      ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ANAMIX RESEARCH PVT. LTD. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Made with <span className="text-red-500">♥</span> by <span className="font-semibold text-blue-400">innovateWithMERAKI</span></p>
        </div>
      </div>
      {<ComingSoonModal open={showComingSoon} onClose={() => setShowComingSoon(false)} />}
    </footer>
  )
}
