import Image from 'next/image'
import { Droplets, MapPin, Shirt, Sparkles, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

export function Welcome({ onStart }: { onStart: () => void }) {
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
            Salah is the special way we talk to Allah every day. We will learn it
            one happy step at a time. Are you ready?
          </p>
          <Button
            onClick={onStart}
            size="lg"
            className="mt-7 h-14 rounded-full px-8 text-lg font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105"
          >
            <Play className="size-5 fill-current" aria-hidden="true" />
            Start Learning
          </Button>
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
