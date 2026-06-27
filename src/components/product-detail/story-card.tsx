import { Artwork } from "@/lib/data";

interface StoryCardProps {
  art: Artwork;
}

export default function StoryCard({ art }: StoryCardProps) {
  return (
    <div className="relative p-2">
      <div className="absolute inset-0 bg-white/40 -rotate-1 rounded-3xl backdrop-blur-sm" />
      <div className="relative content-card-bg p-8 rounded-3xl sketch-border">
        <span
          className="material-symbols-outlined text-4xl text-primary mb-4"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          format_quote
        </span>
        <h2 className="font-headline text-[32px] leading-[1.3] font-bold text-on-surface mb-4">
          Câu chuyện đằng sau bức tranh
        </h2>
        <div className="space-y-4 text-on-surface-variant leading-relaxed">
          <p className="font-body text-base">
            {art.artistStory}
          </p>
          <p className="font-body text-base">
            {art.description}
          </p>
        </div>

        {/* Donor Count */}
        <div className="mt-8 pt-6 border-t-2 border-dashed border-outline-variant flex items-center justify-between">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-fixed" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary-fixed" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-tertiary-fixed" />
          </div>
          <span className="text-sm font-semibold text-on-surface-variant">
            {art.donorCount} người đã quyên góp giúp đỡ {art.artistName}
          </span>
        </div>
      </div>
    </div>
  );
}
