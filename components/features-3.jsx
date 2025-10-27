import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { UserPlus, MessageSquare, Handshake, BarChart3 } from 'lucide-react'

export default function Features() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            How Instroom Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Simplify influencer marketing with a streamlined, step-by-step workflow built for clarity and results.
          </p>
        </div>

        {/* ✅ Single card container with 4 columns */}
        <Card className="mx-auto mt-10 grid max-w-6xl grid-cols-1 divide-y overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 shadow shadow-zinc-900/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          <FeatureBox
            icon={<UserPlus className="size-6" />}
            title="Add Influencers"
            description="Import influencers from any platform or in bulk. Manage all your contacts in one place—no emails required."
          />
          <FeatureBox
            icon={<MessageSquare className="size-6" />}
            title="Track Outreach"
            description="Stay on top of every conversation. See who’s been contacted, who replied, and who’s in negotiation—all in one view."
          />
          <FeatureBox
            icon={<Handshake className="size-6" />}
            title="Manage Collabs"
            description="Track collaboration stages effortlessly—product sent, content posted, feedback received, and affiliate performance monitored."
          />
          <FeatureBox
            icon={<BarChart3 className="size-6" />}
            title="Measure Results"
            description="Get clear insights into traffic, sales, and engagement. Identify your top performers and refine future campaigns for maximum ROI."
          />
        </Card>
      </div>
    </section>
  )
}

function FeatureBox({ icon, title, description }) {
  return (
    <div className="group px-6 py-10 text-center transition-colors duration-300 hover:bg-primary/30">
      <CardHeader className="pb-3">
        <CardDecorator>{icon}</CardDecorator>
        <h3 className="mt-6 font-medium text-white">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="mt-3 text-sm text-zinc-400 group-hover:text-white/70">{description}</p>
      </CardContent>
    </div>
  )
}

function CardDecorator({ children }) {
  return (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-70"
      />
      <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t text-green-400 group-hover:bg-primary-foreground/10 group-hover:text-white">
        {children}
      </div>
    </div>
  )
}
