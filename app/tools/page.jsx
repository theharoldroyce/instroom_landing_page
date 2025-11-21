"use client";

import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CheckCircle, Chrome, Calculator, Workflow } from "lucide-react";
import React from "react";
import FooterSection from "@/components/footer";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      <main className="mx-auto max-w-6xl px-4">
        {/* HERO */}

        <section className="h-screen flex flex-col items-center justify-center text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Work smarter with influencer tools built for speed
            </h1>

            <p className="text-base text-muted-foreground sm:text-lg">
              Everything you need to source creators, evaluate them, and manage
              campaigns in one simple workflow.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="/signup">Try Instroom free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#tools-overview">Explore all tools</Link>
              </Button>
            </div>

            <ul className="mt-4 inline-flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Find creators faster
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Evaluate rates and stats in seconds
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Manage all campaigns in one place
              </li>
            </ul>
          </div>
        </section>

        {/* TOOLS OVERVIEW */}
        <section
          id="tools-overview"
          className="space-y-6 border-t border-border/40 py-24 lg:py-32"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Three tools, one workflow
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Source, evaluate, and manage influencers with tools that work
              together.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Calculator className="mb-2 h-6 w-6" />
                <CardTitle className="text-base">
                  Rate Influencer Calculator
                </CardTitle>
                <CardDescription>
                  Estimate fair pricing based on real creator metrics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Chrome className="mb-2 h-6 w-6" />
                <CardTitle className="text-base">Chrome Extension</CardTitle>
                <CardDescription>
                  View stats and save influencers while you browse.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Workflow className="mb-2 h-6 w-6" />
                <CardTitle className="text-base">
                  Instroom Management Tool
                </CardTitle>
                <CardDescription>
                  A CRM for your influencer campaigns and creators.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* RATE INFLUENCER CALCULATOR */}
        <section
          id="rate-calculator"
          className="grid gap-10 border-t border-border/40 py-24 md:grid-cols-2 md:items-center lg:py-32"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Rate influencers fairly and confidently
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              The Instroom Rate Influencer Calculator helps you price creators
              based on platform, reach, engagement, and deliverables. No more
              guesswork when sending offers or planning budgets.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Estimate rates in seconds</li>
              <li>Compare creators across platforms</li>
              <li>Plan realistic campaign budgets</li>
              <li>Avoid overpaying or underpricing</li>
            </ul>
            <Button size="lg" asChild>
              <Link href="/tools/rate-influencer-calculator">
                Open calculator
              </Link>
            </Button>
          </div>

          {/* Calculator mockup */}
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="h-4 w-28 rounded bg-muted" />
              <div className="h-6 w-20 rounded bg-primary/10" />
            </div>
            <div className="space-y-3">
              <div className="h-10 rounded-lg bg-muted" />
              <div className="h-10 rounded-lg bg-muted" />
              <div className="h-10 rounded-lg bg-muted" />
              <div className="mt-4 h-10 rounded-lg bg-primary/80" />
            </div>
          </div>
        </section>

        {/* CHROME EXTENSION */}
        <section
          id="chrome-extension"
          className="grid gap-10 border-t border-border/40 py-24 md:grid-cols-2 md:items-center lg:py-32"
        >
          {/* Extension mockup */}
          <div className="order-2 rounded-2xl border bg-card p-4 shadow-sm md:order-1">
            <div className="mb-3 h-4 w-32 rounded bg-muted" />
            <div className="space-y-3">
              <div className="h-8 w-40 rounded bg-muted" />
              <div className="flex gap-3">
                <div className="h-6 w-20 rounded bg-muted" />
                <div className="h-6 w-16 rounded bg-muted" />
              </div>
              <div className="h-20 rounded-lg bg-muted" />
            </div>
          </div>

          <div className="order-1 space-y-4 md:order-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Instant creator insights in your browser
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              The Instroom Chrome Extension shows you engagement rates, audience
              quality, and estimated pricing while you browse Instagram, TikTok,
              and YouTube.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Check stats without leaving the platform</li>
              <li>Save influencers straight into Instroom</li>
              <li>Speed up your sourcing sessions</li>
              <li>Standardize how you evaluate creators</li>
            </ul>
            <Button size="lg" asChild>
              <Link href="/tools/chrome-extension">Add to Chrome</Link>
            </Button>
          </div>
        </section>

        {/* MANAGEMENT TOOL */}
        <section
          id="management-tool"
          className="border-t border-border/40 py-24 lg:py-32"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">
                Your full influencer management system
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Instroom replaces scattered spreadsheets with one clean
                dashboard. Track outreach, content, product seeding, affiliate
                links, and performance in one place.
              </p>
              <div className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                <div>Influencer lists and tags</div>
                <div>Outreach and status tracking</div>
                <div>Product seeding and shipping notes</div>
                <div>Content and UGC submissions</div>
                <div>Affiliate links and discount codes</div>
                <div>Performance and ROI overview</div>
              </div>
              <Button size="lg" asChild>
                <Link href="/signup">Get started with Instroom</Link>
              </Button>
            </div>

            {/* Dashboard mockup */}
            <div className="rounded-2xl border bg-card p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-5 w-24 rounded bg-muted" />
                <div className="h-8 w-24 rounded bg-muted" />
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-lg bg-muted" />
                  <div className="h-16 rounded-lg bg-muted" />
                  <div className="h-16 rounded-lg bg-muted" />
                </div>
                <div className="h-32 rounded-lg bg-muted" />
              </div>
            </div>
          </div>
        </section>

        {/* HOW THEY WORK TOGETHER */}
        <section className="space-y-6 border-t border-border/40 py-24 lg:py-32">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              A simple flow that connects everything
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Find creators, evaluate them, and manage the whole relationship in
              one system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">1. Find</CardTitle>
                <CardDescription>
                  Use the Chrome Extension to collect creators while you browse.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">2. Evaluate</CardTitle>
                <CardDescription>
                  Use the Rate Influencer Calculator and live stats to price and
                  qualify them.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">3. Manage</CardTitle>
                <CardDescription>
                  Run campaigns inside Instroom and keep every detail in one
                  place.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-border/40 py-24 lg:py-32">
          <div className="w-full rounded-2xl border bg-card px-6 py-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to simplify your influencer marketing workflow?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Try the calculator, extension, and management tool together and
              see how much time you save each week.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="/signup">Start free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/book-demo">Book a demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
