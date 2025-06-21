import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "../app/globals.css";
import Sidebar from "../components/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Client Onboard",
  description: "Client Onboard Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans page-background`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-8 ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
