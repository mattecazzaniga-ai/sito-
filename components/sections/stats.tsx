import { Reveal } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { impactStats } from "@/lib/content";

export function Stats() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <dd className="font-display text-5xl font-bold text-white sm:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-2 font-display text-xs font-medium uppercase tracking-[0.15em] text-white/50 sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
