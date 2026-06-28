import Image from 'next/image'
import {
  Droplets,
  MapPin,
  Shirt,
  Sparkles,
  Sunrise,
  Sun,
  CloudSun,
  Sunset,
  Moon,
  ChevronRight,
} from 'lucide-react'
import { prayers, type Prayer } from '@/lib/salat-steps'

const checklist = [
  {
    icon: Droplets,
    title: 'Make Wudu',
    text: 'Wash up so you are fresh and clean.',
  },
  {
    icon: Shirt,
    title: 'Wear Clean Clothes',
    text: 'Cover up nicely and tidy.',
  },
  {
    icon: MapPin,
    title: 'Face the Qiblah',
    text: 'Point yourself toward the Kaaba.',
  },
]

const prayerIcons = {
  sunrise: Sunrise,
  sun: Sun,
  'cloud-sun': CloudSun,
  sunset: Sunset,
  moon: Moon,
} as const

export function Welcome({
  onSelectPrayer,
}: {
  onSelectPrayer: (prayer: Prayer) => void
}) {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-5 py-10 md:py-16">
      <div className="grid w-full items-center gap-8 md:grid-cols-2 md:gap-10">
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
            {'Let\u02bcs learn together'}
          </span>
          <h1 className="mt-4 text-balance font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            {'My First '}
            <span className="text-primary">Salah</span>
          </h1>
          <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Salah is the special way we talk to Allah every day. Pick the prayer
            you want to learn, and we will walk through every rakah together.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] border-4 border-card bg-card shadow-xl">
            <Image
              src="/images/hero-mosque.png"
              alt="A cozy prayer corner with a teal prayer mat, an arch with a crescent moon and star, and a small plant."
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 384px"
            />
          </div>
        </div>
      </div>

      {/* Prayer picker */}
      <div className="w-full rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
        <h2 className="text-center font-heading text-2xl font-extrabold text-foreground">
          Which prayer are you learning?
        </h2>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Tap a prayer to begin. Each one has its own number of rakahs.
        </p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {prayers.map((prayer) => {
            const Icon = prayerIcons[prayer.icon]
            return (
              <li key={prayer.id}>
                <button
                  type="button"
                  onClick={() => onSelectPrayer(prayer)}
                  className="group flex h-full w-full flex-col items-start gap-3 rounded-3xl border-2 border-border bg-secondary/40 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span
                      className="font-heading text-2xl text-primary/70"
                      lang="ar"
                      dir="rtl"
                    >
                      {prayer.arabic}
                    </span>
                  </div>
                  <div>
                    <span className="font-heading text-xl font-extrabold text-foreground">
                      {prayer.name}
                    </span>
                    <span className="ml-2 text-sm font-semibold text-muted-foreground">
                      {prayer.time}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {prayer.blurb}
                  </p>
                  <div className="mt-auto flex w-full items-center justify-between pt-2">
                    <span className="rounded-full bg-accent/40 px-3 py-1 text-xs font-bold text-accent-foreground">
                      {`${prayer.rakahs} rakahs`}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-bold text-primary">
                      Start
                      <ChevronRight
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Pre-prayer checklist */}
      <div className="w-full rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
        <h2 className="text-center font-heading text-xl font-bold text-foreground">
          Three things to do before we start
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {checklist.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-3xl bg-secondary/60 p-5 text-center"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="size-7" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-bold text-foreground">
                {item.title}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
