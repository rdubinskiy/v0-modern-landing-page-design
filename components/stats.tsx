"use client"

import { TrendingUp, Users, MessageCircle, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Активных участников",
    description: "Селлеров с оборотом 1+ млн",
  },
  {
    icon: MessageCircle,
    value: "10 000+",
    label: "Сообщений в месяц",
    description: "Обмен опытом и решение кейсов",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Рост прибыли",
    description: "У участников за первый квартал",
  },
  {
    icon: Zap,
    value: "< 2 ч",
    label: "Среднее время ответа",
    description: "На актуальные вопросы",
  },
]

export function Stats() {
  return (
    <section id="stats" className="relative py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Сообщество в цифрах
          </h2>
          <p className="text-balance text-lg text-muted-foreground">
            МПГО+ — это не просто чат, это экосистема роста для вашего бизнеса
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
  description,
  index,
}: {
  icon: typeof Users
  value: string
  label: string
  description: string
  index: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-lg ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="relative">
        <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
          <Icon className="h-6 w-6" />
        </div>

        <div className="mb-2 text-4xl font-bold tracking-tight text-foreground">{value}</div>

        <div className="mb-1 font-semibold text-foreground">{label}</div>

        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}
