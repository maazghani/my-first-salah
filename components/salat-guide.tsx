'use client'

import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Moon, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { buildSalatSteps, type Prayer } from '@/lib/salat-steps'
import { Welcome } from '@/components/welcome'
import { StepProgress } from '@/components/step-progress'
import { LessonStep } from '@/components/lesson-step'
import { Finished } from '@/components/finished'

type Stage = 'welcome' | 'lesson' | 'finished'

export function SalatGuide() {
  const [stage, setStage] = useState<Stage>('welcome')
  const [prayer, setPrayer] = useState<Prayer | null>(null)
  const [index, setIndex] = useState(0)

  const steps = useMemo(
    () => (prayer ? buildSalatSteps(prayer) : []),
    [prayer],
  )

  const isLastStep = index === steps.length - 1

  function startPrayer(chosen: Prayer) {
    setPrayer(chosen)
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
    setIndex((i) => Math.min(i + 1, steps.length - 1))
  }

  function goBack() {
    setIndex((i) => Math.max(i - 1, 0))
  }

  function chooseAnother() {
    setPrayer(null)
    setIndex(0)
    setStage('welcome')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border bg-card/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Moon className="size-5 fill-current" aria-hidden="true" />
            </span>
            <span className="font-heading text-xl font-extrabold text-foreground">
              My First Salah
            </span>
          </div>
          {stage === 'lesson' && prayer && (
            <button
              type="button"
              onClick={chooseAnother}
              className="rounded-full px-3 py-1.5 text-sm font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Change prayer
            </button>
          )}
        </div>
      </header>

      <main className="flex-1">
        {stage === 'welcome' && <Welcome onSelectPrayer={startPrayer} />}

        {stage === 'lesson' && prayer && (
          <section className="mx-auto max-w-4xl px-5 py-8 md:py-10">
            <StepProgress
              steps={steps}
              prayer={prayer}
              currentIndex={index}
              onSelect={setIndex}
            />

            <div className="mt-8 rounded-[2rem] border border-border bg-card p-5 shadow-sm sm:p-8">
              <LessonStep step={steps[index]} />
            </div>

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

        {stage === 'finished' && prayer && (
          <Finished
            steps={steps}
            prayer={prayer}
            onRestart={() => startPrayer(prayer)}
            onChooseAnother={chooseAnother}
          />
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
