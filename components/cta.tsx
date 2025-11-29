import { Button } from "@/components/ui/button"
import { Gift, Send, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-card to-accent/5 p-12 shadow-2xl">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

            <div className="relative">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <Gift className="h-4 w-4" />
                Присоединяйтесь к сообществу
              </div>

              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Чат полностью бесплатный!
              </h2>

              <p className="mb-8 text-balance text-lg leading-relaxed text-muted-foreground">
                Для входа требуется только подтвердить свой оборот через бота в Telegram. Никаких платежей, подписок или
                скрытых условий.
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button size="lg" className="group min-w-[220px] text-base">
                  <Send className="mr-2 h-5 w-5" />
                  Подать заявку в Telegram
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-sm text-muted-foreground">Проверка занимает до 24 часов</p>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Заявка в бот</div>
                    <div className="text-muted-foreground">Нажмите на кнопку выше</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Подтверждение</div>
                    <div className="text-muted-foreground">Отправьте скриншот оборота</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Доступ в чат</div>
                    <div className="text-muted-foreground">Получите ссылку на вступление</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
