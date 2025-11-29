"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tight text-foreground">
              МПГО<span className="text-accent">+</span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Возможности
            </a>
            <a
              href="#topics"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Темы чата
            </a>
            <a
              href="#stats"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              О сервисе
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex" asChild>
              <a href="#admin">Админ</a>
            </Button>
            <Button size="sm" className="hidden md:inline-flex" asChild>
              <a href="#cta">Подать заявку</a>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border/40 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Возможности
              </a>
              <a
                href="#topics"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Темы чата
              </a>
              <a
                href="#stats"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                О сервисе
              </a>
              <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                <a href="#admin">Админ</a>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <a href="#cta">Подать заявку</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
