import { cn } from '@/lib/utils'
import type { Prayer, SalatStep } from '@/lib/salat-steps'

type StepProgressProps = {
  steps: SalatStep[]
  prayer: Prayer
  currentIndex: number
  onSelect: (index: number) => void
}

export function StepProgress({
  steps,
  prayer,
  currentIndex,
  onSelect,
}: StepProgressProps) {
  const percent = (currentIndex / (steps.length - 1)) * 100
  const currentRakah = steps[currentIndex]?.rakah ?? 1

  // The first step index for each rakah, so a chip can jump straight to it.
  const rakahStartIndex = (rakah: number) =>
    steps.findIndex((s) => s.rakah === rakah)

  return (
    <div className="w-full">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="font-heading text-sm font-bold text-foreground">
          {`${prayer.name} \u00b7 Step ${currentIndex + 1} of ${steps.length}`}
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
        aria-label={`Progress through ${prayer.name}`}
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Rakah map: one chip per rakah, so kids always know where they are */}
      <ol className="mt-4 flex flex-wrap items-center gap-2">
        {Array.from({ length: prayer.rakahs }, (_, i) => i + 1).map((rakah) => {
          const isCurrent = rakah === currentRakah
          const isDone = rakah < currentRakah
          return (
            <li key={rakah}>
              <button
                type="button"
                onClick={() => onSelect(rakahStartIndex(rakah))}
                aria-current={isCurrent ? 'step' : undefined}
                className={cn(
                  'rounded-full px-3.5 py-1.5 font-heading text-sm font-bold transition-all',
                  isCurrent &&
                    'scale-105 bg-primary text-primary-foreground shadow-md shadow-primary/30',
                  isDone && 'bg-primary/15 text-primary',
                  !isCurrent &&
                    !isDone &&
                    'bg-secondary text-muted-foreground hover:bg-secondary/70',
                )}
              >
                {`Rakah ${rakah}`}
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
