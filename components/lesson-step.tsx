import Image from 'next/image'
import { Footprints, MessageCircleHeart, Lightbulb } from 'lucide-react'
import type { SalatStep } from '@/lib/salat-steps'

export function LessonStep({ step }: { step: SalatStep }) {
  return (
    <article className="grid gap-6 md:grid-cols-2 md:gap-8">
      <div className="flex flex-col">
        <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border-4 border-card bg-secondary/40 shadow-md">
          <Image
            key={step.image}
            src={step.image || '/placeholder.svg'}
            alt={step.imageAlt}
            fill
            className="animate-in fade-in zoom-in-95 object-contain p-2 duration-500"
            sizes="(max-width: 768px) 90vw, 420px"
          />
          <span className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground shadow-md">
            {step.number}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="font-heading text-3xl font-extrabold leading-none text-foreground">
              {step.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              {step.meaning}
            </p>
          </div>
          <span
            className="font-heading text-3xl text-primary"
            lang="ar"
            dir="rtl"
          >
            {step.arabic}
          </span>
        </div>

        <div className="mt-5 space-y-4">
          <div className="rounded-3xl bg-secondary/50 p-5">
            <div className="flex items-center gap-2 text-secondary-foreground">
              <Footprints className="size-5" aria-hidden="true" />
              <h3 className="font-heading text-base font-bold">What to do</h3>
            </div>
            <p className="mt-2 leading-relaxed text-foreground">
              {step.whatToDo}
            </p>
          </div>

          <div className="rounded-3xl border-2 border-primary/15 bg-primary/5 p-5">
            <div className="flex items-center gap-2 text-primary">
              <MessageCircleHeart className="size-5" aria-hidden="true" />
              <h3 className="font-heading text-base font-bold">What to say</h3>
            </div>
            <p className="mt-2 font-heading text-xl font-bold text-foreground">
              {step.say}
            </p>
            <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground">
              {step.sayMeaning}
            </p>

            {step.extraPassages?.map((passage) => (
              <div
                key={passage.label}
                className="mt-4 border-t-2 border-dashed border-primary/15 pt-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-heading text-base font-bold text-primary">
                    {passage.label}
                  </h4>
                  {passage.when ? (
                    <span className="rounded-full bg-accent/30 px-2.5 py-0.5 text-xs font-bold text-accent-foreground">
                      {passage.when}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 font-heading text-lg font-bold leading-relaxed text-foreground">
                  {passage.say}
                </p>
                <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground">
                  {passage.meaning}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 rounded-3xl bg-accent/20 p-5">
            <Lightbulb
              className="mt-0.5 size-5 shrink-0 text-accent-foreground"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-accent-foreground">
              {step.funTip}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
