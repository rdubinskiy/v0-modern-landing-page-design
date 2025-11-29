import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Topics } from "@/components/topics"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Topics />
      <CTA />
    </main>
  )
}
