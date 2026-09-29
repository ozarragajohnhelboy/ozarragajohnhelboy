import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiLock } from 'react-icons/fi'
import { projectTypeLabels } from '../data/projects.js'
import { formatMonth } from '../lib/format.js'

export default function ProjectCard({ project }) {
  const {
    title,
    shortDescription,
    type,
    tech,
    image,
    gallery,
    demoUrl,
    githubUrl,
    featured,
    date,
  } = project

  const shots = gallery?.length ? gallery : [image]
  const [shotIndex, setShotIndex] = useState(0)
  const activeShot = shots[shotIndex] ?? image

  return (
    <article className="surface surface-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-100 dark:bg-ink-900">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeShot}
            src={activeShot}
            alt={`${title} screenshot`}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

        {shots.length > 1 ? (
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-ink-950/60 px-2 py-1.5 backdrop-blur">
            {shots.map((shot, index) => (
              <button
                key={shot}
                type="button"
                onClick={() => setShotIndex(index)}
                aria-label={`Show screenshot ${index + 1} of ${title}`}
                aria-current={index === shotIndex}
                className={`h-1.5 rounded-full transition-all ${
                  index === shotIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/45 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center gap-2 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-ink-900 transition hover:bg-brand-500 hover:text-white"
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur">
              <FiLock size={14} />
              Private Deployment
            </span>
          )}
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white hover:text-ink-900"
            >
              <FiGithub size={14} />
              Code
            </a>
          ) : null}
        </div>

        {featured ? (
          <span className="absolute left-4 top-4 rounded-full bg-amber-400/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-900">
            Featured
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-brand-600 dark:text-brand-300">
            {projectTypeLabels[type]}
          </span>
          <span className="font-mono text-[11px] text-ink-400">{formatMonth(date)}</span>
        </div>

        <h3 className="text-lg leading-snug">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {tech.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
