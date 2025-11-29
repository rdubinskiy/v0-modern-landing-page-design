import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "МПГО+ — Закрытый чат селлеров маркетплейсов",
  description:
    "Эксклюзивное сообщество селлеров с оборотом более 1 млн рублей. Wildberries, Ozon, Яндекс Маркет. Обмен опытом, решение кейсов, нетворкинг.",
  generator: "v0.app",
  keywords: ["селлеры", "маркетплейсы", "wildberries", "ozon", "яндекс маркет", "сообщество", "чат"],
  openGraph: {
    title: "МПГО+ — Закрытый чат селлеров маркетплейсов",
    description: "Эксклюзивное сообщество селлеров с оборотом более 1 млн рублей",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
