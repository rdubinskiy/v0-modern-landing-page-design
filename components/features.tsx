import { Target, MessageSquare, Users, Sparkles, TrendingUp, Network } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Только реальные селлеры",
    description:
      "В чате только селлеры с подтвержденным оборотом более 1 млн рублей. Никакой рекламы, инфоцыган и курсов успешного успеха.",
  },
  {
    icon: MessageSquare,
    title: "Живое общение",
    description:
      "Обсуждаем реальные проблемы, делимся лайфхаками, помогаем друг другу. Только практический опыт от работающих селлеров.",
  },
  {
    icon: Sparkles,
    title: "Все площадки",
    description: "Селлеры с Wildberries, Ozon и Яндекс Маркет. Обмен опытом с разными площадками и стратегиями роста.",
  },
  {
    icon: TrendingUp,
    title: "Стратегии роста",
    description:
      "Масштабирование и оптимизация бизнеса. Реальные кейсы увеличения продаж и прибыли от практикующих селлеров.",
  },
  {
    icon: Users,
    title: "Нетворкинг",
    description: "Связи с другими селлерами, поиск партнеров и поставщиков. Проверенные практики успешных селлеров.",
  },
  {
    icon: Network,
    title: "Обмен опытом",
    description:
      "Проверенные практики, актуальные инсайты и оперативная помощь. Решаем вопросы вместе, растем быстрее.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            О закрытом чате МПГО+
          </h2>
          <p className="text-balance text-lg text-muted-foreground">
            Профессиональное сообщество селлеров маркетплейсов для обмена опытом, обсуждения проблем и получения
            реальных советов
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-accent/50"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>

              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
