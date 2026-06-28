'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Droplets,
  Footprints,
  Lightbulb,
  Repeat,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { wuduSteps } from '@/lib/wudu-steps'

type Stage = 'intro' | 'lesson' | 'finished'

export function WuduGuide() {
  const [stage, setStage] = useState<Stage>('intro')
  const [index, setIndex] = useState(0)

  const step = wuduSteps[index]
  const isLastStep = index === wuduSteps.length - 1

  function start() {
    setIndex(0)
    setStage('lesson')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goNext() {
    if (isLastStep) {
      setStage('finished')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setIndex((i) => Math.min(i + 1, wuduSteps.length - 1))
  }

  function goBack() {
    setIndex((i) => Math.max(i - 1, 0))
  }

  function restart() {
    setIndex(0)
    setStage('lesson')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border bg-card/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Droplets className="size-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-xl font-extrabold text-foreground">
              Learn Wudu
            </span>
          </div>
          <Link
            href="/"
            className="rounded-full px-3 py-1.5 text-sm font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Back to Salah
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {stage === 'intro' && (
          <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-5 py-10 text-center md:py-16">
            <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-[2rem] border-4 border-card bg-card shadow-xl">
              <Image
                src="/images/wudu-hero.png"
                alt="A clean washing area with a water tap, gentle water droplets, and a folded towel."
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 320px"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
                <Sparkles className="size-4" aria-hidden="true" />
                Get ready to pray
              </span>
              <h1 className="mt-4 text-balance font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
                Let{'\u02bc'}s make <span className="text-primary">Wudu</span>
              </h1>
              <p className="mx-auto mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                Wudu is the special wash we do before Salah to get clean and
                fresh. We{'\u02bc'}ll go through it together, one little step at a
                time.
              </p>
            </div>
            <Button
              size="lg"
              onClick={start}
              className="h-14 rounded-full px-8 text-base font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Start Wudu
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
          </section>
        )}

        {stage === 'lesson' && (
          <section className="mx-auto max-w-4xl px-5 py-8 md:py-10">
            {/* Progress map */}
            <div className="rounded-[2rem] border border-border bg-card p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="font-heading text-sm font-bold text-foreground">
                  {`Step ${index + 1} of ${wuduSteps.length}`}
                </span>
                <span className="text-sm font-semibold text-muted-foreground">
                  {step.name}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {wuduSteps.map((s, i) => {
                  const done = i < index
                  const current = i === index
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`Go to step ${i + 1}: ${s.name}`}
                        aria-current={current ? 'step' : undefined}
                        className={`flex size-9 items-center justify-center rounded-full text-sm font-bold transition-all ${
                          current
                            ? 'scale-110 bg-primary text-primary-foreground shadow-md'
                            : done
                              ? 'bg-primary/15 text-primary'
                              : 'bg-secondary text-muted-foreground hover:bg-secondary/70'
                        }`}
                      >
                        {done ? (
                          <Check className="size-4" aria-hidden="true" />
                        ) : (
                          i + 1
                        )}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Step card */}
            <div className="mt-8 rounded-[2rem] border border-border bg-card p-5 shadow-sm sm:p-8">
              <article className="grid gap-6 md:grid-cols-2 md:gap-8">
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

                <div className="flex flex-col">
                  <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/40 px-3 py-1 text-xs font-bold text-accent-foreground">
                    <Droplets className="size-3.5" aria-hidden="true" />
                    {step.times}
                  </span>
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-heading text-3xl font-extrabold text-foreground">
                      {step.name}
                    </h2>
                    <span
                      className="font-heading text-2xl text-primary/70"
                      lang="ar"
                      dir="rtl"
                    >
                      {step.arabic}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">
                    {step.meaning}
                  </p>

                  <div className="mt-5 rounded-2xl bg-secondary/50 p-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Footprints className="size-5" aria-hidden="true" />
                      <h3 className="font-heading text-base font-bold">
                        What to do
                      </h3>
                    </div>
                    <p className="mt-1 leading-relaxed text-foreground">
                      {step.whatToDo}
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl bg-accent/20 p-4">
                    <div className="flex items-center gap-2 text-accent-foreground">
                      <Lightbulb className="size-5" aria-hidden="true" />
                      <h3 className="font-heading text-base font-bold">
                        Little tip
                      </h3>
                    </div>
                    <p className="mt-1 leading-relaxed text-foreground">
                      {step.funTip}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <Button
                variant="ghost"
                size="lg"
                onClick={goBack}
                disabled={index === 0}
                className="h-14 rounded-full px-6 text-base font-bold disabled:opacity-40"
              >
                <ArrowLeft className="size-5" aria-hidden="true" />
                Back
              </Button>

              <Button
                size="lg"
                onClick={goNext}
                className="h-14 rounded-full px-8 text-base font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                {isLastStep ? (
                  <>
                    Finish
                    <Check className="size-5" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Next Step
                    <ArrowRight className="size-5" aria-hidden="true" />
                  </>
                )}
              </Button>
            </div>
          </section>
        )}

        {stage === 'finished' && (
          <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-5 py-12 text-center md:py-16">
            <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-[2rem] border-4 border-card bg-card shadow-xl">
              <Image
                src="/images/wudu-done.png"
                alt="A child standing fresh and clean with a soft glow and sparkles."
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 320px"
              />
            </div>
            <h1 className="text-balance font-heading text-4xl font-extrabold text-foreground">
              Masha{'\u02be'}Allah, you{'\u02bc'}re clean and ready!
            </h1>
            <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Your Wudu is complete. Now you{'\u02bc'}re fresh and ready to stand
              and pray your Salah.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="ghost"
                onClick={restart}
                className="h-14 rounded-full px-6 text-base font-bold"
              >
                <Repeat className="size-5" aria-hidden="true" />
                Do it again
              </Button>
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full px-8 text-base font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                <Link href="/">
                  Go to Salah
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-border bg-card/50">
        <p className="mx-auto max-w-5xl px-5 py-5 text-center text-sm text-muted-foreground">
          {'Made with love to help young hearts learn to pray. \u2728'}
        </p>
      </footer>
    </div>
  )
}
