import { marqueeSkills } from '../data/skills.js'

export default function SkillMarquee() {
  const track = [...marqueeSkills, ...marqueeSkills]

  return (
    <div className="mask-fade-x relative w-full overflow-hidden py-2">
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {track.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="whitespace-nowrap rounded-full border border-ink-200/80 bg-white/70 px-4 py-2 font-mono text-xs font-medium text-ink-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-ink-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
