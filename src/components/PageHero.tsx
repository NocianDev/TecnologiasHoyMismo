import type { ReactNode } from "react";

type PageHeroProps = {
  badge: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt?: string;
};

export default function PageHero({
  badge,
  title,
  description,
  image,
  imageAlt,
}: PageHeroProps) {
  const isYoutube =
    image.includes("youtube.com") || image.includes("youtu.be");

  const getYoutubeEmbed = (url: string) => {
    const id = url.includes("youtu.be/")
      ? url.split("youtu.be/")[1]
      : url.split("v=")[1]?.split("&")[0];

    return `https://www.youtube.com/embed/${id}?controls=1`;
  };

  return (
    <section className="section pt-12">
      <div className="grid items-center gap-10 md:grid-cols-2">
        
        {/* TEXTO */}
        <div>
          <span className="mb-4 inline-block rounded-full bg-yellow-400/10 px-4 py-1 text-sm font-semibold text-yellow-400">
            {badge}
          </span>

          <h1 className="text-4xl font-bold leading-tight text-yellow-400 sm:text-5xl lg:text-6xl">
  {title}
</h1>

          <p className="text-white/80 text-lg">
            {description}
          </p>
        </div>

        {/* MEDIA */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px]">
          
          {isYoutube ? (
            <div className="relative h-full w-full">
              <iframe
                src={getYoutubeEmbed(image)}
                className="h-full w-full rounded-2xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />

              {/* overlay pro */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/30" />
            </div>
          ) : (
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover rounded-2xl"
            />
          )}

        </div>
      </div>
    </section>
  );
}