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
  Calculator,
  Instagram,
  Eye,
  LineChart,
  DollarSign,
  Users,
  BadgeCheck,
  Briefcase,
  User,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { useRef } from "react";
import FooterSection from "@/components/footer";

export default function InfluencerRateCalculatorPage() {
  const calculatorRef = useRef(null);

  const scrollToCalculator = () => {
    if (calculatorRef.current) {
      calculatorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      <main className="mx-auto max-w-6xl px-4">
        {/* HERO */}
        <section className="h-screen flex flex-col items-center justify-center text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Know exactly what to pay influencers
            </h1>

            <p className="text-base text-muted-foreground sm:text-lg md:px-6">
              No guesswork. Get a fair, performance-based rate in seconds. Built
              for brands, creators, and agencies.
            </p>

            <div className="mt-4 flex justify-center gap-3">
              <Button size="lg" onClick={scrollToCalculator}>
                Open Calculator
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Fair rate estimates
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Based on real views
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Ready for negotiations
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="space-y-6 border-t border-border/40 py-24 text-center lg:py-32">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Pricing creators shouldn’t feel like guessing.
            </h2>
            <p className="text-lg text-muted-foreground">
              Instroom calculates a realistic rate using performance data, not
              vibes.
            </p>
            <p className="text-base text-muted-foreground md:text-lg">
              Enter a username, set your CPV, and get a suggested rate
              instantly.
            </p>
          </div>
        </section>

        {/* CALCULATOR (below hero) */}
        <section ref={calculatorRef} className="border-t border-border/40 py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <Card className="rounded-2xl border bg-card/80 shadow-sm">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl sm:text-3xl">
                  Calculate a fair influencer rate
                </CardTitle>
                <CardDescription className="text-base">
                  Pull recent views and get a suggested rate based on your CPV.
                </CardDescription>
              </CardHeader>

              <div className="px-6 pb-6">
                {/* Inputs row */}
                <div className="grid gap-3 md:grid-cols-[1fr_180px_auto] md:items-end">
                  <div className="space-y-2">
                    <Label htmlFor="username">Instagram username</Label>
                    <div className="relative">
                      <Instagram className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="username"
                        placeholder="Enter Instagram username"
                        className="pl-9 h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cpv">
                      CPV{" "}
                      <span className="text-muted-foreground">
                        (recommended: 10)
                      </span>
                    </Label>
                    <Input
                      id="cpv"
                      type="number"
                      defaultValue={10}
                      min={0}
                      className="h-11"
                    />
                  </div>

                  <Button size="lg" className="h-11 px-8">
                    Calculate Rate
                  </Button>
                </div>

                {/* Results */}
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <Card className="rounded-xl border shadow-none">
                    <CardHeader className="space-y-1 text-center">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Total Views (Last 8 Videos)
                      </CardTitle>
                      <div className="text-2xl font-semibold">0</div>
                    </CardHeader>
                  </Card>

                  <Card className="rounded-xl border shadow-none">
                    <CardHeader className="space-y-1 text-center">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Average Views per Video
                      </CardTitle>
                      <div className="text-2xl font-semibold">0</div>
                    </CardHeader>
                  </Card>

                  <Card className="rounded-xl border shadow-none">
                    <CardHeader className="space-y-1 text-center">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        Suggested Influencer Rate
                      </CardTitle>
                      <div className="text-2xl font-semibold">$0</div>
                    </CardHeader>
                  </Card>
                </div>

                {/* Microcopy */}
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Rates are estimates based on publicly available data and your
                  CPV setting.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="space-y-6 border-t border-border/40 bg-muted/40 py-24 lg:py-32 px-6 rounded-2xl">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Why this matters
            </h2>
            <ul className="inline-block space-y-2 text-left text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Creators don’t follow standard rates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Brands often overpay based on follower count
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Performance varies widely by niche
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Negotiations are harder without data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Budget waste happens when pricing is unclear
              </li>
            </ul>
            <p className="pt-4 text-lg font-semibold">
              Instroom gives you a clear, justifiable rate you can trust.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="space-y-8 border-t border-border/40 py-24 lg:py-32">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Features that make pricing easy
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Check className="h-5 w-5 text-primary" />
                  Performance-based estimates
                </CardTitle>
                <CardDescription>
                  Rates come from real views, not follower count alone.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Check className="h-5 w-5 text-primary" />
                  Simple CPV control
                </CardTitle>
                <CardDescription>
                  Adjust CPV to match your niche and budget.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Check className="h-5 w-5 text-primary" />
                  Instant results
                </CardTitle>
                <CardDescription>
                  Get total views, averages, and a suggested rate in one click.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-border/40 py-24 lg:py-32">
          <div className="w-full rounded-2xl border bg-card px-6 py-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">
              Start pricing influencers accurately
            </h2>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Get fair rates. Make better decisions. All in one click.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button size="lg" onClick={scrollToCalculator}>
                Open Calculator
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
