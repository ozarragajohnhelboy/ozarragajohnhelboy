import Reveal from './ui/Reveal.jsx'

export default function Timeline({ items }) {
  return (
    <ol className="relative flex flex-col gap-8 border-l border-ink-200 pl-8 dark:border-white/10 sm:pl-10">
      {items.map((item, index) => (
        <Reveal as="li" key={item.key} delay={index * 0.06} className="relative">
          <span
            className={`absolute -left-[41px] top-1.5 grid h-4 w-4 place-items-center rounded-full ring-4 ring-ink-50 dark:ring-ink-950 sm:-left-[49px] ${
              item.accent ? 'bg-brand-500' : 'bg-ink-300 dark:bg-ink-700'
            }`}
          >
            {item.accent ? (
              <span className="h-4 w-4 animate-ping rounded-full bg-brand-500/60" />
            ) : null}
          </span>

          <div className="surface surface-hover p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg leading-snug">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                  {item.subtitle}
                </p>
              </div>
              <div className="flex flex-col items-start gap-1 sm:items-end">
                <span className="chip">{item.period}</span>
                {item.meta ? (
                  <span className="text-xs text-ink-400">{item.meta}</span>
                ) : null}
              </div>
            </div>

            {item.summary ? (
              <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                {item.summary}
              </p>
            ) : null}

            {item.highlights?.length ? (
              <ul className="mt-4 flex flex-col gap-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/70" />
                    {highlight}
                  </li>
                ))}
              </ul>
            ) : null}

            {item.tech?.length ? (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
