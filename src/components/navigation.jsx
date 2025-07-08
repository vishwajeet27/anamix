"use client"

import { Button } from "@/components/ui/button.jsx"
import Image from "next/image"
import { LogIn, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  const navLinks = [
    { label: "ABOUT US", href: "/about-us" },
    { label: "OUR WORK", href: "#" },
    { label: "SERVICES", href: "/services" },
    { label: "CONTACT US", href: "/contact-us" },
  ]

  return (
    <nav className="border-b border-blue-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-blue-100/50 animate-in slide-in-from-top duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={320}
                height={60}
                className="h-8 w-auto hover:scale-110 transition-all duration-500 ease-out animate-in fade-in slide-in-from-left duration-700 cursor-pointer"
              />
            </Link>
          </div>
          <div className="hidden xl:block flex-1">
            <div className="flex items-center justify-center space-x-6">
              {navLinks.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-blue-50 rounded-lg relative group animate-in fade-in slide-in-from-top duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
            {/* Modern Sign In Button */}
            <Button
              variant="ghost"
              className="relative group bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-cyan-50 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 text-sm px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md animate-in fade-in slide-in-from-right duration-700 delay-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300"></div>
              <LogIn className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative font-medium">SIGN IN</span>
            </Button>

            {/* Modern Get Started Button */}
            <Button className="relative group bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-800 text-white font-semibold text-sm px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-right duration-700 delay-500 overflow-hidden">
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              {/* Sparkle effect */}
              <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-3 w-3 text-cyan-200 animate-pulse" />
              </div>

              <span className="relative flex items-center">
                GET STARTED
                <div className="ml-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <svg
                    className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <Button variant="ghost" size="sm" className="hover:bg-blue-50 group" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <svg
                className={`h-6 w-6 text-blue-600 transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 xl:hidden">
          <div ref={menuRef} className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
            <div className="flex justify-end mb-4">
              <Button variant="ghost" size="sm" className="hover:bg-blue-50" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 hover:bg-blue-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-6">
              <Button
                variant="ghost"
                className="relative group bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-cyan-50 border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 text-sm px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300"></div>
                <LogIn className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative font-medium">SIGN IN</span>
              </Button>
              <Button className="relative group bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-800 text-white font-semibold text-sm px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="h-3 w-3 text-cyan-200 animate-pulse" />
                </div>
                <span className="relative flex items-center">
                  GET STARTED
                  <div className="ml-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <svg
                      className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
