import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { SalatStep } from '@/lib/salat-steps'

type StepProgressProps = {
  steps: SalatStep[]
  currentIndex: number
  onSelect: (index: number) => void
}

export function StepProgress({
  steps,
  currentIndex,
  onSelect,
}: StepProgressProps) {
  const percent = (currentIndex / (steps.length - 1)) * 100

  return (
    <div className="w-full">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-heading text-sm font-bold text-foreground">
          {`Step ${currentIndex + 1} of ${steps.length}`}
        </p>
        <p className="text-sm font-semibold text-muted-foreground">
          {`${Math.round(percent)}% done`}
        </p>
      </div>

      <div
        className="relative h-3 w-full rounded-full bg-secondary"
        role="progressbar"
        aria-valuenow={currentIndex + 1}
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-label="Prayer progress"
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      <ol className="mt-4 flex items-center justify-between gap-1">
        {steps.map((step, index) => {
          const isDone = index < currentIndex
          const isCurrent = index === currentIndex
          return (
            <li key={step.id} className="flex flex-1 justify-center">
              <button
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`Go to step ${index + 1}: ${step.name}`}
                aria-current={isCurrent ? 'step' : undefined}
                className={cn(
                  'flex size-9 items-center justify-center rounded-full text-sm font-bold transition-all sm:size-10',
                  isCurrent &&
                    'scale-110 bg-primary text-primary-foreground shadow-md shadow-primary/30 ring-4 ring-primary/15',
                  isDone && 'bg-primary/15 text-primary',
                  !isCurrent &&
                    !isDone &&
                    'bg-secondary text-muted-foreground hover:bg-secondary/70',
                )}
              >
                {isDone ? (
                  <Check className="size-4" aria-hidden="true" />
                ) : (
                  index + 1
                )}
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
