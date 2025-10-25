export default function Logos8({
  title = "Trusted by these companies",
  subtitle = "Used by the world's leading companies",
  logos = [
    {
      name: "Blush",
      logo: "/logos/Blush.png",
      className: "h-48 w-auto ",
    },
    {
      name: "Crafthub",
      logo: "/logos/Crafthub.png",
      className: "h-48 w-auto ",
    },
    {
      name: "Kook",
      logo: "/logos/Kook.png",
      className: "h-48 w-auto ",
    },
    {
      name: "Morecore",
      logo: "/logos/Morecore.png",
      className: "h-48 w-auto ",
    },
    {
      name: "Muse",
      logo: "/logos/Muse.png",
      className: "h-48 w-auto ",
    },
    {
      name: "Naturecure",
      logo: "/logos/Naturecure.png",
      className: "h-48 w-auto ",
    },
  ],
}) {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-bold text-primary">{title}</h2>
          <p className="text-muted-foreground mt-1">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.logo}
                alt={`${logo.name} logo`}
                width={109}
                height={48}
                className={logo.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
