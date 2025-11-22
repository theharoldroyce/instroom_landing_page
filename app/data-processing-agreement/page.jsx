import { HeroHeader } from "@/components/header";
import FooterSection from "@/components/footer";

export default function DataProcessingAgreementPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      <main className="mx-auto max-w-3xl px-4 py-24 lg:py-32">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Data Processing Agreement (DPA)
            </h1>
            <p className="text-muted-foreground">
              Last Updated: November 22, 2025
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert mx-auto max-w-none space-y-6">
            <p>
              This Data Processing Agreement (“Agreement”) forms part of the
              Terms & Conditions for users of Instroom.io. It governs how
              Instroom.io processes personal data on your behalf in compliance
              with the Data Privacy Act of 2012 (Philippines) and general
              international data protection standards.
            </p>

            <div>
              <h2 className="text-xl font-semibold">1. Definitions</h2>
              <ul className="list-disc pl-5">
                <li>
                  <strong>“Controller”</strong> – You (the user) who determines
                  the purpose of processing.
                </li>
                <li>
                  <strong>“Processor”</strong> – Instroom.io, which processes
                  data on your behalf.
                </li>
                <li>
                  <strong>“Personal Data”</strong> – Any information relating
                  to an identified or identifiable individual.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">2. Purpose of Processing</h2>
              <p>
                Instroom.io processes personal data solely for providing
                influencer management tools, storing influencer lists and
                analytics, enabling features such as tracking and reporting, and
                customer support and troubleshooting. We do not process data
                beyond what is required for the service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                3. Obligations of Instroom.io (Processor)
              </h2>
              <p>Instroom.io agrees to:</p>
              <ul className="list-disc pl-5">
                <li>process data only under the Controller’s instructions</li>
                <li>keep all personal data confidential</li>
                <li>
                  implement technical and organizational security measures
                </li>
                <li>
                  notify the Controller of any data breach within a reasonable
                  timeframe
                </li>
                <li>
                  assist in fulfilling data subjects' rights (access,
                  correction, deletion)
                </li>
                <li>
                  delete or return data upon termination, unless retention is
                  required by law
                </li>
                <li>
                  ensure all staff handling data are bound to confidentiality
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                4. Obligations of the User (Controller)
              </h2>
              <p>The user agrees to:</p>
              <ul className="list-disc pl-5">
                <li>collect and upload only lawful data</li>
                <li>ensure data subjects have given proper consent</li>
                <li>comply with all applicable privacy laws</li>
                <li>
                  safeguard login credentials and limit unauthorized access
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">5. Sub-Processors</h2>
              <p>
                Instroom.io may use verified third-party providers such as
                hosting providers, analytics services, and cloud storage. All
                sub-processors must meet similar security standards. A list of
                sub-processors can be provided upon request.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                6. International Data Transfers
              </h2>
              <p>
                If data is transferred internationally, Instroom.io ensures
                secure transmission and compliance with local and international
                data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">7. Security Measures</h2>
              <p>
                Instroom.io uses industry-standard protection including
                encryption where applicable, secure hosting, firewalls and
                intrusion detection, and regular audits.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                8. Data Breach Notification
              </h2>
              <p>
                In the event of a breach affecting your data, we will notify you
                as soon as reasonably possible and provide details about the
                scope, impact, and mitigation steps.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">9. Termination</h2>
              <p>
                Upon termination of your Instroom.io account, personal data
                will be securely deleted or returned to you upon request, unless
                retention is required for legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">10. Contact Information</h2>
              <p>
                Instroom.io Data Privacy Officer
                <br />
                Email: hello@instroom.io
                <br />
                Philippines
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}