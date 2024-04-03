import type { Metadata } from "next";
import { Inter, Spectral, Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import ActiveSectionContextProvider from "@/context/active-section-context";

const epilogue = Epilogue({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-epilogue",
});
const theSeasons = localFont({
  src: "./../public/fonts/Fontspring-DEMO-theseasons-reg.otf",
  variable: "--font-seasons",
});

export const metadata: Metadata = {
  title: "Elke Schoenmaekers",
  description: "Portfolio of Elke Schoenmaekers, made with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="!scroll-smooth snap-y snap-mandatory overflow-y-scroll"
    >
      <body
        className={`${theSeasons.variable} ${epilogue.variable} font-epilogue bg-white text-brownish z-0`}
      >
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
