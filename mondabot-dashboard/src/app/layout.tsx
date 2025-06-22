import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "../app/globals.css";

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
        <div className="min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
