
import Header from "@/components/header"; // @ allows us to bypass manually creating the route to the component
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react';
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Canyon | Personal Portfolio',
  description: 'Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>

      <body
            className={`${inter.className} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}>
              <div className="bg-[#9c9696] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
              <div className="bg-[#c9c2f6] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
              <ThemeContextProvider>
              <ActiveSectionContextProvider>
              <Header />
              {children}
              <Toaster position="top-right"/>
              </ActiveSectionContextProvider>
              <ThemeSwitch />
              </ThemeContextProvider>
        </body>
    </html>
  )
}
