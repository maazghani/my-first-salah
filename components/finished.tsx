import { PartyPopper, RotateCcw, Star, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Prayer, SalatStep } from '@/lib/salat-steps'

type FinishedProps = {
  steps: SalatStep[]
  prayer: Prayer
  onRestart: () => void
  onChooseAnother: () => void
}

export function Finished({
  steps,
  prayer,
  onRestart,
  onChooseAnother,
}: FinishedProps) {
  // Show the unique postures learned, in order, without repeating each rakah.
  const postures = steps.filter(
    (step, i) => steps.findIndex((s) => s.name === step.name) === i,
  )

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
        {`You prayed all ${prayer.rakahs} rakahs of ${prayer.name}, from the first Takbir to the final Salam. Every time you pray, you grow closer to Allah. Be proud of yourself!`}
      </p>

      <div className="mt-8 w-full rounded-[2rem] border border-border bg-card p-6 text-left shadow-sm">
        <h3 className="flex items-center justify-center gap-2 text-center font-heading text-lg font-bold text-foreground">
          <LayoutGrid className="size-5 text-primary" aria-hidden="true" />
          The positions you learned
        </h3>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {postures.map((step, i) => (
            <li
              key={step.name}
              className="flex items-center gap-3 rounded-2xl bg-secondary/50 px-4 py-3"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span className="font-heading font-bold text-foreground">
                {step.name}
              </span>
              <span className="ml-auto text-right text-sm text-muted-foreground">
                {step.meaning}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          onClick={onRestart}
          size="lg"
          className="h-14 rounded-full px-8 text-lg font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105"
        >
          <RotateCcw className="size-5" aria-hidden="true" />
          {`Pray ${prayer.name} Again`}
        </Button>
        <Button
          onClick={onChooseAnother}
          variant="outline"
          size="lg"
          className="h-14 rounded-full border-2 px-8 text-lg font-bold"
        >
          Choose Another Prayer
        </Button>
      </div>
    </section>
  )
}
