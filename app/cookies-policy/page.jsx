import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      <main className="mx-auto max-w-3xl px-4 py-24 lg:py-32">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cookies Policy
            </h1>
            <p className="text-muted-foreground">
              Last Updated: November 22, 2025
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert mx-auto max-w-none space-y-6">
            <p>
              Instroom.io uses cookies and similar technologies to enhance your
              experience. This Cookies Policy explains how and why cookies are
              used.
            </p>

            <div>
              <h2 className="text-xl font-semibold">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you
                visit a website. They help improve functionality and analyze
                performance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                2. Types of Cookies We Use
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  <strong>a. Essential Cookies:</strong> Required for the
                  platform to function (login, navigation, security).
                </li>
                <li>
                  <strong>b. Preference Cookies:</strong> Remember your
                  settings and preferences (UI layout, language).
                </li>
                <li>
                  <strong>c. Analytics Cookies:</strong> Help us understand how
                  users interact with the platform (page views, usage
                  patterns).
                </li>
                <li>
                  <strong>d. Third-Party Cookies:</strong> Used when interacting
                  with external tools (e.g., analytics, social media
                  integrations).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">3. Why We Use Cookies</h2>
              <p>
                We use cookies to enable core features, improve performance &
                reliability, personalize your experience, and analyze usage for
                service improvement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">4. Managing Cookies</h2>
              <p>
                You can disable cookies via your browser settings. However,
                disabling essential cookies may limit some features.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">5. Updates</h2>
              <p>
                We may update this Cookies Policy from time to time. Changes
                will be posted on this page.
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}