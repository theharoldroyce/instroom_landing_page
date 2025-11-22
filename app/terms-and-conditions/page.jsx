import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      <main className="mx-auto max-w-3xl px-4 py-24 lg:py-32">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground">
              Last Updated: November 22, 2025
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert mx-auto max-w-none space-y-6">
            <p>
              Welcome to Instroom.io. These Terms & Conditions (“Terms”) govern
              your access and use of Instroom.io (“Service,” “Platform,”
              “Website”). By using the Platform, you agree to these Terms. If
              you do not agree, do not use Instroom.io.
            </p>

            <div>
              <h2 className="text-xl font-semibold">1. Definitions</h2>
              <ul className="list-disc pl-5">
                <li>
                  <strong>“Instroom.io,” “we,” “us,” “our”</strong> – refers to
                  Instroom.io and its operators.
                </li>
                <li>
                  <strong>“User,” “you,” “your”</strong> – any individual or
                  organization accessing the Platform.
                </li>
                <li>
                  <strong>“Services”</strong> – influencer management,
                  list-building, tracking, reporting, and related SaaS tools.
                </li>
                <li>
                  <strong>“Content”</strong> – data, text, files, and materials
                  entered/uploaded by users.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">2. Eligibility</h2>
              <p>
                You must be at least 18 years old and legally allowed to enter
                into contracts. By using Instroom.io, you affirm that you meet
                these requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">3. Account Registration</h2>
              <p>When creating an account:</p>
              <ul className="list-disc pl-5">
                <li>You must provide accurate and complete information.</li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your login details.
                </li>
                <li>
                  You are responsible for all activity under your account.
                </li>
              </ul>
              <p>
                We may suspend or terminate accounts that violate these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">4. Acceptable Use</h2>
              <p>You agree NOT to:</p>
              <ul className="list-disc pl-5">
                <li>use the platform for unlawful purposes</li>
                <li>scrape data illegally or without consent</li>
                <li>reverse-engineer the platform</li>
                <li>upload harmful code or attempt unauthorized access</li>
                <li>violate privacy laws or intellectual property rights</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts engaged in
                abusive or suspicious activity.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">5. User Content</h2>
              <p>
                You retain ownership of the content you upload. However, you
                grant Instroom.io permission to process your content solely for
                providing the Service. We do not claim ownership of influencer
                information you store or upload.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">6. Intellectual Property</h2>
              <p>
                All platform features, design, trademarks, and software belong
                to Instroom.io. You may not copy, distribute, or reproduce any
                part of the platform without permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                7. Payments & Subscriptions (If Applicable)
              </h2>
              <ul className="list-disc pl-5">
                <li>Subscription fees are billed monthly or annually.</li>
                <li>Payments are non-refundable unless legally required.</li>
                <li>We may change pricing with prior notice.</li>
                <li>Failure to pay may result in account suspension.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">8. Termination</h2>
              <p>
                We may terminate access to Instroom.io for violation of these
                Terms, fraudulent activity, misuse of the platform, or
                non-payment. You may also delete your account at any time. Upon
                termination, we may retain minimal data for legal compliance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">9. Limitation of Liability</h2>
              <p>
                Instroom.io is provided “as is” without warranties. To the
                fullest extent allowed by law, we are not liable for data loss,
                downtime, or damages from using the platform. We do not
                guarantee 100% accuracy of influencer data or third-party APIs.
                You use the platform at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">10. Third-Party Services</h2>
              <p>
                Instroom.io may integrate with external tools (e.g., Google
                Sheets, social media APIs). We are not responsible for their
                policies, availability, or errors.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">11. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the Philippines, without
                regard to conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">12. Contact</h2>
              <p>
                For questions about these Terms:
                <br />
                Email: admin@instroom.io
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}