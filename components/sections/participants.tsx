import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { participants, participantsContent, type Participant } from "@/lib/content";

export function Participants() {
  return (
    <section id="aziende" className="section-y bg-white">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow={participantsContent.eyebrow}
          title={participantsContent.title}
          description={participantsContent.description}
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {participants.map((participant, index) => (
            <Reveal key={participant.name} delay={index * 0.03}>
              <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-3xl border border-neutral-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-green/30 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.2)]">
                <ParticipantMark participant={participant} />
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                  {participant.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Marquee className="py-2" durationSeconds={36}>
            {participants.map((participant) => (
              <div
                key={`marquee-${participant.name}`}
                className="flex shrink-0 items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-2.5"
              >
                <ParticipantMark participant={participant} size="sm" />
                <span className="font-display text-sm font-medium uppercase tracking-wide text-neutral-700">
                  {participant.name}
                </span>
              </div>
            ))}
          </Marquee>
        </Reveal>
      </div>
    </section>
  );
}

function ParticipantMark({ participant, size = "md" }: { participant: Participant; size?: "sm" | "md" }) {
  if (participant.logo) {
    return (
      <span
        className={size === "md" ? "relative h-14 w-28" : "relative h-6 w-16"}
        aria-hidden="true"
      >
        <Image
          src={participant.logo}
          alt=""
          fill
          sizes={size === "md" ? "112px" : "64px"}
          className="object-contain"
        />
      </span>
    );
  }

  const initial = participant.name.trim().charAt(0).toUpperCase() || "?";
  return (
    <span
      className={
        size === "md"
          ? "flex h-14 w-14 items-center justify-center rounded-xl bg-ink font-display text-xl font-bold text-white"
          : "flex h-7 w-7 items-center justify-center rounded-xl bg-ink font-display text-xs font-bold text-white"
      }
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}
