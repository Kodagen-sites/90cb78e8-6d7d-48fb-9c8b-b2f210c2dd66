import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * ServiceCard — CV-warm-image. Image-led card on a cream surface: a tall
 * photo with a slow ken-burns zoom on hover, navy title plate beneath, and
 * a hairline highlight list. Server component (no client state).
 */
export type ServiceCardProps = {
  name: string;
  slug: string;
  description: string;
  image: string;
  highlights?: string[];
};

export default function ServiceCard({ name, slug, description, image, highlights }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-surface/40 shadow-[0_1px_2px_rgba(14,28,51,0.04)] transition-all duration-500 hover:border-ink/20 hover:shadow-[0_24px_60px_-28px_rgba(14,28,51,0.45)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-contrast/55 via-transparent to-transparent" />
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">{name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{description}</p>

        {highlights && highlights.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {highlights.slice(0, 4).map((h) => (
              <li
                key={h}
                className="rounded-full border border-ink/12 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-ink/55"
              >
                {h}
              </li>
            ))}
          </ul>
        )}

        <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary transition-gap">
          Explore
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
