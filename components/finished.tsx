import { PartyPopper, RotateCcw, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { SalatStep } from '@/lib/salat-steps'

type FinishedProps = {
  steps: SalatStep[]
  onRestart: () => void
}

export function Finished({ steps, onRestart }: FinishedProps) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-5 py-10 text-center md:py-16">
      <span className="relative flex size-20 items-center justify-center rounded-full bg-accent text-accent-foreground">
        <PartyPopper className="size-10" aria-hidden="true" />
        <Star
          className="absolute -right-1 -top-1 size-6 animate-pulse fill-primary text-primary"
          aria-hidden="true"
        />
      </span>

      <h2 className="mt-6 text-balance font-heading text-4xl font-extrabold text-foreground">
        {'Masha\u02beAllah, you did it!'}
      </h2>
      <p className="mt-3 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
        {
          'You finished one full rak\u02bcah of Salah. Every time you pray, you grow closer to Allah. Keep practicing and be proud of yourself!'
        }
      </p>

      <div className="mt-8 w-full rounded-[2rem] border border-border bg-card p-6 text-left shadow-sm">
        <h3 className="text-center font-heading text-lg font-bold text-foreground">
          The steps you learned
        </h3>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {steps.map((step) => (
            <li
              key={step.id}
              className="flex items-center gap-3 rounded-2xl bg-secondary/50 px-4 py-3"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {step.number}
              </span>
              <span className="font-heading font-bold text-foreground">
                {step.name}
              </span>
              <span className="ml-auto text-sm text-muted-foreground">
                {step.meaning}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <Button
        onClick={onRestart}
        size="lg"
        className="mt-8 h-14 rounded-full px-8 text-lg font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105"
      >
        <RotateCcw className="size-5" aria-hidden="true" />
        Practice Again
      </Button>
    </section>
  )
}
