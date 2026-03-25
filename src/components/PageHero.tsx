type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({
  badge,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="section pt-8 md:pt-10">
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="max-w-3xl">
          <span className="badge">{badge}</span>

          <h1 className="mt-4 text-4xl font-bold leading-tight title-gradient sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 rounded-[2rem] bg-yellow-400/10 blur-3xl"></div>

          <img
            src={image}
            alt={imageAlt}
            className="relative z-10 h-[260px] w-full max-w-[820px] rounded-[2rem] border border-white/10 object-cover shadow-2xl sm:h-[320px] lg:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}