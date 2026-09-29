import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowRight, FiGithub } from 'react-icons/fi'
import Seo from '../components/ui/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { PageHeader, Section } from '../components/ui/Section.jsx'
import { projectTypes, projects } from '../data/projects.js'
import { socials } from '../data/site.js'

const githubUrl = socials.find((social) => social.icon === 'github')?.href

export default function Projects() {
  const [activeType, setActiveType] = useState('all')

  const counts = useMemo(() => {
    return projectTypes.reduce((acc, type) => {
      acc[type.id] =
        type.id === 'all'
          ? projects.length
          : projects.filter((project) => project.type === type.id).length
      return acc
    }, {})
  }, [])

  const visibleTypes = projectTypes.filter((type) => counts[type.id] > 0)

  const filtered = useMemo(
    () =>
      activeType === 'all'
        ? projects
        : projects.filter((project) => project.type === activeType),
    [activeType],
  )

  return (
    <>
      <Seo
        title="Projects"
        description="Selected projects by John Helboy Ozarraga — barangay, church, school and ministry management systems, AI chatbots and job platforms."
      />

      <PageHeader
        eyebrow="Portfolio"
        title="Systems I've designed and shipped"
        description="Government services, church and school operations, AI tooling and career platforms — built with Python, PHP and modern JavaScript."
      />

      <Section className="pb-28 pt-12">
        <Reveal className="flex flex-wrap justify-center gap-2">
          {visibleTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => setActiveType(type.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeType === type.id
                  ? 'border-brand-500 bg-brand-600 text-white shadow-md shadow-brand-600/25'
                  : 'border-ink-200 bg-white/60 text-ink-600 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300 dark:hover:text-white'
              }`}
            >
              {type.label}
              <span
                className={`font-mono text-[11px] ${
                  activeType === type.id ? 'text-white/70' : 'text-ink-400'
                }`}
              >
                {counts[type.id]}
              </span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1} className="surface mt-16 flex flex-col items-center gap-5 p-10 text-center">
          <h2 className="text-2xl sm:text-3xl">More code on GitHub</h2>
          <p className="max-w-xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            Some deployments are private client systems. The public repositories, experiments and
            work in progress all live on my GitHub profile.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={githubUrl} size="lg">
              <FiGithub size={17} />
              Visit GitHub
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Discuss a Project
              <FiArrowRight size={17} />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
