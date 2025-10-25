"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Wifi, Zap, Loader, CalendarDays } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from '@/components/ui/logo';
import Service from '@/components/ui/service';
import Feature from '@/components/ui/feature';  


export default function Home() {
  const defaultIcon = <Wifi className="size-6" />;
  const btnWaitlist = {
    text: "Join the Waitlist",
    icon: <Loader className="ml-2 size-6" />,
    url: "https://instroom.io",
  };
  const btnBookdemo = {
    text: "Book a Demo",
    icon: <CalendarDays className="ml-2 size-6" />,
    url: "https://instroom.io",
  };
  const subheading = "Manage Influencers with Ease";
  const description =
    "Instroom simplifies influencer management, streamlining your campaigns and maximizing impact—all in one powerful platform.";
  const trustText = "Join leading teams — get on the waitlist today";
  const imageSrc =
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg";
  const imageAlt = "placeholder";

  // Animation phases:
  // 0: "Say Goodbye to Spreadsheets" visible, no strikethrough
  // 1: "Spreadsheets" strikethrough active
  // 2: Old heading fades out, new heading fades in
  // 3: "Hello to Instroom" visible, "Instroom" pops
  // 4: "Hello to Instroom" fades out, old heading fades in
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    let timers = [];

    const startPhase = (phase, delay) => {
      timers.push(setTimeout(() => setAnimationPhase(phase), delay));
    };

    const runCycle = () => {
      // Phase 0: Initial state (Say Goodbye to Spreadsheets visible)
      setAnimationPhase(0); // Ensure it's reset

      // Phase 1: Strikethrough "Spreadsheets"
      startPhase(1, 2000); // After 2s

      // Phase 2: Old heading fades out, new heading fades in
      startPhase(2, 2000 + 1000); // After 2s (initial) + 1s (strikethrough duration) = 3s

      // Phase 3: "Hello to Instroom" visible, "Instroom" pops
      startPhase(3, 3000 + 1000); // After 3s + 1s (fade duration) = 4s

      // Phase 4: "Hello to Instroom" fades out, old heading fades in
      startPhase(4, 4000 + 3000); // After 4s + 3s (display duration) = 7s

      // Restart cycle
      timers.push(setTimeout(runCycle, 7000 + 1000)); // After 7s + 1s (fade duration) = 8s, restart
    };

    runCycle(); // Start the first cycle

    return () => timers.forEach(clearTimeout); // Cleanup on unmount
  }, []);

  // Determine visibility and animation classes based on phase
  const isOldHeadingVisible =
    animationPhase === 0 || animationPhase === 1 || animationPhase === 4;
  const isNewHeadingVisible = animationPhase === 2 || animationPhase === 3;

  return (
    <section className="overflow-hidden py-32 flex items-center justify-center min-h-screen bg-black text-white">
      <div className="container">
        <div className="flex flex-col gap-8 items-center">
          <div className="relative flex flex-col gap-12">
            {/* Decorative rings */}
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute left-1/2 top-1/2 -z-10 mx-auto size-[800px] rounded-full border p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>

            {/* Icon */}
            <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
              {defaultIcon}
            </span>

            {/* SubHeading */}
            <h3 className="mx-auto max-w-fit text-balance text-center text-lg font-bold md:text-xl text-primary border-2 border-primary p-1 md:py-2 md:px-4 rounded-lg">
              {subheading}
            </h3>

            {/* Heading */}
            <div className="h-16 md:h-20 relative">
              {/* Old Heading */}
              <h2
                className={`mx-auto max-w-5xl text-center text-3xl font-medium md:text-6xl absolute w-full transition-opacity duration-500 whitespace-nowrap`}
                style={{ opacity: isOldHeadingVisible ? 1 : 0 }}
              >
                Say Goodbye to{" "}
                <span
                  className={`delayed-strikethrough ${
                    animationPhase === 1 ? "strikethrough-active" : ""
                  }`}
                >
                  Spreadsheets
                </span>
              </h2>

              {/* New Heading */}
              <h2
                className={`mx-auto max-w-5xl text-center text-3xl font-medium md:text-6xl absolute w-full transition-opacity duration-500 whitespace-nowrap`}
                style={{ opacity: isNewHeadingVisible ? 1 : 0 }}
              >
                Hello to{" "}
                <span
                  className={`inline-block font-bold text-primary ${
                    animationPhase === 3 ? "pop-in-active" : ""
                  }`}
                  style={{ animationDelay: "0.2s" }}
                >
                  Instroom
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mx-auto max-w-3xl text-center md:text-lg">
              {description}
            </p>

            {/* Button + Trust text */}
            <div className="flex flex-row items-center justify-center gap-3 pb-3 pt-3">
              <Button size="lg" asChild className="p-6">
                <a href={btnWaitlist.url}>
                  {btnWaitlist.text} {btnWaitlist.icon}
                </a>
              </Button>

              <Button size="lg" asChild className="p-6">
                <a href={btnBookdemo.url}>
                  {btnBookdemo.text} {btnBookdemo.icon}
                </a>
              </Button>
            </div>
          </div>
          {/* Image */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={600}
            className="mx-auto h-full max-h-[524px] w-full max-w-5xl rounded-2xl object-cover"
          />
          <Logo />
          <Service />
          <Feature />
        </div>
      </div>
    </section>
  );
}
