"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressBar from "next-nprogress-bar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "airbnb",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
          <ProgressBar
            height="4px"
            color="#FE595E"
            options={{ showSpinner: false }}
            shallowRouting
            appDirectory
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}
