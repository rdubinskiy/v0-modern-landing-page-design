import { Flame, Lightbulb, TrendingUp, Zap, Wrench, BarChart3, Users, Target } from "lucide-react"

const topics = [
  {
    icon: Flame,
    title: "Реальные проблемы",
    description: "Решаем актуальные вопросы селлеров вместе",
  },
  {
    icon: Lightbulb,
    title: "Лайфхаки",
    description: "Практические советы для роста продаж",
  },
  {
    icon: TrendingUp,
    title: "Стратегии роста",
    description: "Масштабирование и оптимизация бизнеса",
  },
  {
    icon: Zap,
    title: "Новости площадок",
    description: "Оперативные изменения правил и условий",
  },
  {
    icon: Wrench,
    title: "Техподдержка",
    description: "Помощь в решении технических вопросов",
  },
  {
    icon: BarChart3,
    title: "Аналитика трендов",
    description: "Анализ рынка и возможностей",
  },
  {
    icon: Users,
    title: "Нетворкинг",
    description: "Связи с другими селлерами",
  },
  {
    icon: Target,
    title: "Обмен опытом",
    description: "Проверенные практики успешных селлеров",
  },
]

export function Topics() {
  return (
    <section id="topics" className="relative py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Что обсуждаем в чате
          </h2>
          <p className="text-balance text-lg text-muted-foreground">Реальные темы от практикующих селлеров</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/50"
            >
              <div className="mb-3 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent transition-transform duration-300 group-hover:scale-110">
                <topic.icon className="h-5 w-5" />
              </div>

              <h3 className="mb-2 font-semibold text-foreground">{topic.title}</h3>

              <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
