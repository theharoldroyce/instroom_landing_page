import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-16 md:py-32">
      <div
        aria-hidden
        className="bg-primary/5 absolute inset-0 -z-10 size-full rounded-3xl [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-balance text-4xl font-bold lg:text-5xl">
          Ready to Simplify Your Campaigns?
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-xl">
          Join the waitlist today and be among the first to experience Instroom.
        </p>

        <form className="mx-auto mt-10 w-full max-w-md lg:mt-12">
          <div className="relative flex items-center rounded-full border border-muted bg-background shadow-sm focus-within:ring-2 focus-within:ring-muted/70 px-4 py-1.5">
            <Mail className="text-muted-foreground mr-2 size-5" />
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent py-2 text-sm focus:outline-none"
            />
            <Button
              aria-label="Join the Waitlist"
              className="ml-2 rounded-full bg-green-600 text-white hover:bg-green-700 px-5"
            >
              <span className="hidden md:block">Join the Waitlist</span>
              <SendHorizonal className="block md:hidden size-5" strokeWidth={2} />
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
