import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Aside from "@/app/components/Aside"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`min-h-screen grid place-items-center p-4 ${inter.className}`}>
        <div className="container overflow-hidden grid grid-cols-[auto_1fr] text-[#fff] bg-[#222] border-[0.0625rem] border-[#333] rounded-xl">
          <Aside />
          <main className="h-[60vh] p-4 pb-0">{children}</main>
        </div>
      </body>
    </html>
  )
}
