import { Navigation } from "@/components/navigation.jsx";
import { Footer } from "@/components/footer.jsx";
import { Badge } from "@/components/ui/badge.jsx"

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <Navigation />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-300 px-4 py-2 text-sm font-semibold">
              CONTACT US
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Get in Touch with ANAMIX</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or want to start a project? Fill out the form below and our team will get back to you promptly.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-10">
            <form className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700" required />
                <input type="email" placeholder="Your Email" className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700" required />
              </div>
              <input type="text" placeholder="Subject" className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700" required />
              <textarea placeholder="Your Message" rows={5} className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700" required />
              <button type="submit" className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Send Message
              </button>
            </form>
            <div className="mt-10 text-center text-gray-600">
              <p className="mb-2 font-semibold text-blue-700">ANAMIX RESEARCH PVT. LTD.</p>
              <p>Email: <a href="mailto:info@anamix.com" className="text-blue-600 hover:underline">info@anamix.com</a></p>
              <p>Phone: <a href="tel:+911234567890" className="text-blue-600 hover:underline">+91 12345 67890</a></p>
              <div className="mt-8 flex flex-col md:flex-row justify-center gap-8 text-left max-w-2xl mx-auto">
                <div className="flex-1 bg-blue-50 rounded-lg p-4 shadow-sm border border-blue-100">
                  <div className="flex items-center mb-2">
                    <span className="material-icons text-blue-700 mr-2">location_on</span>
                    <span className="font-semibold text-blue-800">Registered Office</span>
                  </div>
                  <address className="not-italic text-gray-700 text-sm leading-relaxed">
                    B-4029, Gali No-110/107,<br/>
                    Sant Nagar, Burari,<br/>
                    Delhi - 110084<br/>
                    <span className="font-semibold">Phone:</span> <a href="tel:01144729131" className="text-blue-700 hover:underline ml-1">011-44729131</a>
                  </address>
                </div>
                <div className="flex-1 bg-blue-50 rounded-lg p-4 shadow-sm border border-blue-100">
                  <div className="flex items-center mb-2">
                    <span className="material-icons text-blue-700 mr-2">business</span>
                    <span className="font-semibold text-blue-800">Corporate Office</span>
                  </div>
                  <address className="not-italic text-gray-700 text-sm leading-relaxed">
                    4/51, Nehru Nagar,<br/>
                    Near Oxford Public School,<br/>
                    Delhi - 110065<br/>
                    <span className="font-semibold">Phone:</span> <a href="tel:01141607295" className="text-blue-700 hover:underline ml-1">011-41607295</a>
                  </address>
                </div>
              </div>
              <div className="mt-8 flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
                <div className="flex-1 rounded-lg overflow-hidden shadow-lg border border-blue-100">
                  <iframe
                    title="Registered Office Location"
                    src="https://www.google.com/maps?q=B-4029+Gali+No-110/107+Sant+Nagar+Burari+Delhi+110084&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden shadow-lg border border-blue-100">
                  <iframe
                    title="Corporate Office Location"
                    src="https://www.google.com/maps?q=4/51+Nehru+Nagar+Delhi+110065&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <p className="mt-6">15+ Locations PAN India</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 