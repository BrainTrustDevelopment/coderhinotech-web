
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import HeaderImage from "@/ui/main/layout/HeaderImage";
import NavBar from "@/ui/main/layout/Navbar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Code Rhino Tech",
  description: "Engineering and Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 relative`}
        >
        {/* Render the header image absolutely positioned */}
        <HeaderImage />
        
        {/* Ensure children don't get affected by the HeaderImage */}
        <NavBar />
        <div className="">

          {children}
        </div>
      </body>
    </html>
  );
}