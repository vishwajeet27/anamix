import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Anamix Research | Market Research & Analytics",
    template: "%s | Anamix Research"
  },
  description: "ANAMIX RESEARCH provides intelligent market research, analytics, and insights across India and globally. Trusted by 500+ companies.",
  openGraph: {
    title: "Anamix Research | Market Research & Analytics",
    description: "ANAMIX RESEARCH provides intelligent market research, analytics, and insights across India and globally. Trusted by 500+ companies.",
    url: "https://www.anamix.com/",
    siteName: "Anamix Research",
    images: [
      {
        url: "/Logo.png",
        width: 320,
        height: 60,
        alt: "Anamix Research Logo"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Anamix Research | Market Research & Analytics",
    description: "ANAMIX RESEARCH provides intelligent market research, analytics, and insights across India and globally. Trusted by 500+ companies.",
    images: ["/Logo.png"]
  },
  metadataBase: new URL("https://www.anamix.com/")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
