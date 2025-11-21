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
import {
  Check,
  CheckCircle,
  Users,
  BarChart,
  Heart,
  MessageSquare,
  PlayCircle,
  MapPin,
  CreditCard,
} from "lucide-react";
import React from "react";
import FooterSection from "@/components/footer";

export default function ChromeExtensionPage() {
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

            <p className="text-base text-muted-foreground sm:text-lg md:px-6">
              Everything you need to source creators, evaluate them, and manage
              campaigns in one simple workflow.
            </p>

            <div className="mt-4 flex justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="#">Add to Chrome</Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Find creators faster
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Evaluate rates and stats in seconds
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Manage all campaigns in one place
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="space-y-6 border-t border-border/40 py-24 text-center lg:py-32">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              The Instroom Chrome Extension helps you evaluate influencers in
              seconds.
            </h2>
            <p className="text-lg text-muted-foreground">
              No switching tabs. No typing usernames. No manual checking.
            </p>
            <p className="text-base text-muted-foreground md:text-lg">
              Just click the extension — and get real data directly on
              Instagram, TikTok, or YouTube profiles.
            </p>
          </div>
        </section>

        {/* WHAT THE EXTENSION SHOWS */}
        <section className="grid gap-10 border-t border-border/40 py-24 md:grid-cols-2 md:items-center lg:py-32">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              The sidebar instantly displays:
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <span className="font-semibold text-foreground">
                    Followers:
                  </span>{" "}
                  Total number of followers — updated in real time.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <BarChart className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <span className="font-semibold text-foreground">
                    Engagement Rate:
                  </span>{" "}
                  Automatically calculated using the formula: Total Interactions
                  ÷ Followers × 100
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <span className="font-semibold text-foreground">
                    Average Likes:
                  </span>{" "}
                  Shows how many likes their recent posts typically get.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <span className="font-semibold text-foreground">
                    Average Comments:
                  </span>{" "}
                  Quickly see if their audience is active and real.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PlayCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <span className="font-semibold text-foreground">
                    Average Video Views:
                  </span>{" "}
                  Useful for checking true reach, not just follower count.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <span className="font-semibold text-foreground">
                    Location:
                  </span>{" "}
                  Detects the influencer’s primary location.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CreditCard className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <span className="font-semibold text-foreground">
                    Remaining Credits:
                  </span>{" "}
                  Shows how many profile checks you have left.
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <div className="mb-3 h-4 w-32 rounded bg-muted" />
            <div className="space-y-3">
              <div className="h-8 w-40 rounded bg-muted" />
              <div className="flex gap-3">
                <div className="h-6 w-20 rounded bg-muted" />
                <div className="h-6 w-16 rounded bg-muted" />
              </div>
              <div className="h-40 rounded-lg bg-muted" />
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="space-y-6 border-t border-border/40 bg-muted/40 py-24 lg:py-32 px-6 rounded-2xl">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Your extension solves the biggest sourcing problems:
            </h2>
            <ul className="inline-block space-y-2 text-left text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Hard to calculate real engagement manually
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Takes too long to check stats one by one
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Many creators inflate follower count
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Not all creators actually reach their audience
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Brands need fast evaluation to avoid wasting budget
              </li>
            </ul>
            <p className="pt-4 text-lg font-semibold">
              This extension gives your team speed + accuracy.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="space-y-8 border-t border-border/40 py-24 lg:py-32"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Features that speed up your workflow
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Check className="h-5 w-5 text-primary" />
                  One-click analysis
                </CardTitle>
                <CardDescription>
                  The extension opens a clean sidebar with everything you need.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Check className="h-5 w-5 text-primary" />
                  Works directly on Instagram
                </CardTitle>
                <CardDescription>
                  No copy-pasting usernames into external tools.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Check className="h-5 w-5 text-primary" />
                  Real-time data
                </CardTitle>
                <CardDescription>
                  Instant averages for likes, comments and video views.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Check className="h-5 w-5 text-primary" />
                  Engagement quality check
                </CardTitle>
                <CardDescription>
                  Quickly see if a creator’s engagement is healthy or low.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Check className="h-5 w-5 text-primary" />
                  Location detection
                </CardTitle>
                <CardDescription>
                  Perfect for geo-targeted campaigns.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Check className="h-5 w-5 text-primary" />
                  Save time by skipping fake influencers
                </CardTitle>
                <CardDescription>
                  Low likes? Low comments? You’ll see the truth instantly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* USE CASES */}
        <section className="space-y-8 border-t border-border/40 py-24 lg:py-32">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Who is this for?
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">For agencies</CardTitle>
                <CardDescription>
                  Review dozens of influencers quickly during sourcing.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">For brands</CardTitle>
                <CardDescription>
                  Check if a creator is worth gifting, affiliating, or paying.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">For freelancers</CardTitle>
                <CardDescription>
                  Create better influencer lists with reliable data.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">For creators</CardTitle>
                <CardDescription>
                  Understand your own analytics and benchmark your growth.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="grid gap-10 border-t border-border/40 py-24 md:grid-cols-2 md:items-center lg:py-32">
          <div className="order-2 md:order-1 rounded-2xl border bg-card p-4 shadow-sm">
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
          <div className="order-1 md:order-2 space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Benefits</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Saves hours every week
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Avoids low-quality influencers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Makes list building faster
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Helps you choose creators based on performance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Boosts campaign ROI
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Perfect for large influencers lists
              </li>
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-border/40 py-24 lg:py-32">
          <div className="w-full rounded-2xl border bg-card px-6 py-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">
              Start Evaluating Influencers 10× Faster
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Get instant data. Make smarter decisions. All in one click.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="#">Add Instroom to Chrome</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
