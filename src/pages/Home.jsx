import { motion } from 'framer-motion'
import {
  FiArrowRight,
  FiAward,
  FiCalendar,
  FiDownload,
  FiFolder,
  FiMapPin,
} from 'react-icons/fi'
import Seo from '../components/ui/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { Section, SectionHeading } from '../components/ui/Section.jsx'
import TypingRoles from '../components/TypingRoles.jsx'
import SkillMarquee from '../components/SkillMarquee.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { Icon } from '../lib/icons.jsx'
import { personalInfo, services, socials } from '../data/site.js'
import { featuredProjects, projects } from '../data/projects.js'
import { experiences } from '../data/experience.js'
import { allSkills } from '../data/skills.js'
import { formatRange } from '../lib/format.js'

const latestRole = experiences.find((item) => item.current) ?? experiences[0]

const stats = [
  { value: '5', label: 'Years of experience' },
  { value: `${projects.length}`, label: 'Projects delivered' },
  { value: `${allSkills.length}+`, label: 'Technologies used' },
  { value: '2', label: 'DICT certifications' },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Python & Full Stack Developer"
        description="John Helboy Ozarraga builds scalable web applications and REST APIs with Django, Flask and FastAPI, plus React, React Native and AWS."
      />

      <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-70" />

        <div className="container-page relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col gap-7">
              <Reveal>
                <span className="eyebrow">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {personalInfo.availability}
                </span>
              </Reveal>

              <Reveal delay={0.05} className="flex flex-col gap-3">
                <p className="font-mono text-sm text-ink-500 dark:text-ink-400">
                  Hello, I&apos;m
                </p>
                <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl">
                  {personalInfo.fullName}
                </h1>
                <p className="min-h-[2.2rem] text-xl font-semibold sm:text-2xl">
                  <TypingRoles roles={personalInfo.roles} />
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg dark:text-ink-400">
                  {personalInfo.tagline}
                </p>
              </Reveal>

              <Reveal delay={0.15} className="flex flex-wrap items-center gap-3">
                <Button to="/projects" size="lg">
                  View My Work
                  <FiArrowRight size={17} />
                </Button>
                <Button href={personalInfo.resume} variant="secondary" size="lg" download>
                  <FiDownload size={17} />
                  Download Resume
                </Button>
              </Reveal>

              <Reveal delay={0.2} className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer noopener"
                      aria-label={social.label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 text-ink-500 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-ink-400 dark:hover:border-brand-400/60 dark:hover:text-brand-300"
                    >
                      <Icon name={social.icon} size={17} />
                    </a>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
                  <FiMapPin size={15} />
                  {personalInfo.location}
                </span>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-500/35 via-sky-400/20 to-amber-300/25 blur-2xl" />
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="surface relative overflow-hidden rounded-[2rem] p-3"
              >
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-ink-950/70 p-4 backdrop-blur-xl">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-300">
                    {latestRole.current ? 'Currently' : 'Latest role'}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {latestRole.position}
                  </p>
                  <p className="text-xs text-ink-300">
                    {latestRole.company} · {latestRole.location}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="mt-16">
            <SkillMarquee />
          </Reveal>

          <Reveal delay={0.3} className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="surface p-5 text-center sm:p-6">
                <p className="text-3xl font-bold text-gradient sm:text-4xl">{stat.value}</p>
                <p className="mt-1.5 text-xs leading-snug text-ink-500 sm:text-sm dark:text-ink-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="What I Do"
          title="Services built around production software"
          description="From API design to cloud deployment, I cover the full path from idea to a running, maintainable system."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <div className="surface surface-hover h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                  <Icon name={service.icon} size={20} />
                </span>
                <h3 className="mt-4 text-lg">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white/40 dark:bg-white/[0.02]">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects I'm proud of"
          description="A selection of systems I designed and shipped, covering government services, church and school operations, and AI-assisted tooling."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Button to="/projects" variant="secondary" size="lg">
            <FiFolder size={17} />
            View All {projects.length} Projects
          </Button>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow={latestRole.current ? 'Current Role' : 'Latest Role'}
            title={
              latestRole.current ? "What I'm working on right now" : 'Where I worked most recently'
            }
            description="The newest role on my resume. The full timeline is on the experience page."
          />

          <Reveal delay={0.1}>
            <div className="surface relative overflow-hidden p-7">
              {latestRole.current ? (
                <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Present
                </span>
              ) : null}

              <h3 className="max-w-[70%] text-xl">{latestRole.position}</h3>
              <p className="mt-1.5 font-medium text-brand-600 dark:text-brand-300">
                {latestRole.company}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-500 dark:text-ink-400">
                <span className="inline-flex items-center gap-1.5">
                  <FiCalendar size={13} />
                  {formatRange(latestRole.start, latestRole.end, latestRole.current)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FiMapPin size={13} />
                  {latestRole.location}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                {latestRole.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {latestRole.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <Button to="/experience" variant="ghost" size="sm" className="px-0">
                  <FiAward size={15} />
                  See full experience
                  <FiArrowRight size={15} />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pb-28">
        <Reveal className="surface relative overflow-hidden px-6 py-14 text-center sm:px-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[110px]" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <span className="eyebrow">Let&apos;s Build</span>
            <h2 className="text-3xl leading-tight sm:text-4xl">
              Ready to start your next project?
            </h2>
            <p className="text-base leading-relaxed text-ink-500 dark:text-ink-400">
              Tell me what you&apos;re building and I&apos;ll help you turn it into a reliable,
              well-tested product.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Button to="/contact" size="lg">
                Let&apos;s Collaborate
                <FiArrowRight size={17} />
              </Button>
              <Button to="/about" variant="secondary" size="lg">
                More About Me
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
