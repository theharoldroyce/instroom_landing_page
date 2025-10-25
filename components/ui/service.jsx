"use client";

import { Check, Code, Cog, PenTool, Shrub, X } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Our Solution",
      description:
        "Instroom gives you a smarter, more organized way to track, manage, and scale your influencer marketing effortlessly.",
      items: [
        "One dashboard to manage all your influencer campaigns",
        "Track outreach, responses, and influencer performance effortlessly.",
        "No more manual updates—stay on top of every campaign.",
        "Collaborate with your team in real-time.",
      ],
    },
    {
      title: "Challenges You Face",
      description:
        "Managing influencers shouldn’t feel like a constant struggle, but outdated methods make it harder than it needs to be.",
      items: [
        "Overwhelmed with spreadsheets and missing data?",
        "Difficulty tracking multiple influencer campaigns?",
        " Losing track of outreach, follow-ups, and campaign results?",
        "Paying for expensive influencer CRMs with features you don’t even use?",
      ],
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Header */}
          {/* <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl">
              We craft digital experiences that captivate and convert, bringing
              your vision to life.
            </p>
          </div> */}

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-center">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-2">
                      {index === 0 ? (
                        <Check className="mt-1 size-4 flex-shrink-0 text-primary" />
                      ) : (
                        <X className="mt-1 size-4 flex-shrink-0 text-destructive" />
                      )}
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
