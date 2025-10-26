import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap, Cpu } from 'lucide-react'

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Built to cover your needs
          </h2>
          <p className="mt-4 text-muted-foreground">
            Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.
          </p>
        </div>

        {/* ✅ Single card container with 4 columns */}
        <Card className="mx-auto mt-10 grid max-w-6xl grid-cols-1 divide-y overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 shadow shadow-zinc-900/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          <FeatureBox
            icon={<Zap className="size-6" />}
            title="Customizable"
            description="Extensive customization options, allowing you to tailor every aspect to meet your specific needs."
          />
          <FeatureBox
            icon={<Settings2 className="size-6" />}
            title="You have full control"
            description="From design elements to functionality, you have complete control to create a unique and personalized experience."
          />
          <FeatureBox
            icon={<Sparkles className="size-6" />}
            title="Powered By AI"
            description="Elements to functionality, you have complete control to create a unique experience."
          />
          <FeatureBox
            icon={<Cpu className="size-6" />}
            title="Smart Automation"
            description="Automate repetitive workflows and save hours managing your influencer campaigns."
          />
        </Card>
      </div>
    </section>
  )
}

function FeatureBox({ icon, title, description }) {
  return (
    <div className="group px-6 py-10 text-center transition-colors duration-300 hover:bg-zinc-900/60">
      <CardHeader className="pb-3">
        <CardDecorator>{icon}</CardDecorator>
        <h3 className="mt-6 font-medium text-white">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="mt-3 text-sm text-zinc-400">{description}</p>
      </CardContent>
    </div>
  )
}

function CardDecorator({ children }) {
  return (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
      />
      <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t text-green-400">
        {children}
      </div>
    </div>
  )
}
