import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import Seo from '../components/ui/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Timeline from '../components/Timeline.jsx'
import { PageHeader, Section, SectionHeading } from '../components/ui/Section.jsx'
import { Icon } from '../lib/icons.jsx'
import { personalInfo, socials, values } from '../data/site.js'
import { skillGroups } from '../data/skills.js'
import { education } from '../data/experience.js'
import { yearRange } from '../lib/format.js'

const details = [
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phoneHref}`,
  },
  { icon: FiMapPin, label: 'Location', value: personalInfo.location },
]

const educationItems = education.map((item) => ({
  key: `${item.institution}-${item.degree}`,
  title: item.degree,
  subtitle: item.institution,
  period: yearRange(item.start, item.end),
  meta: item.field,
  summary: item.description,
  accent: false,
}))

export default function About() {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].id)
  const currentGroup = skillGroups.find((group) => group.id === activeGroup) ?? skillGroups[0]

  return (
    <>
      <Seo
        title="About"
        description="Get to know John Helboy Ozarraga — background, technical skills, certifications and the principles behind his work."
      />

      <PageHeader
        eyebrow="About Me"
        title="Engineer first, problem solver always"
        description="A closer look at my background, the stack I work in and what I care about when building software."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-start">
          <Reveal className="flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl">{personalInfo.title}</h2>
            {personalInfo.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-ink-500 dark:text-ink-400"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-2 grid gap-3 sm:grid-cols-3">
              {details.map((detail) => (
                <div key={detail.label} className="surface p-4">
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                    <detail.icon size={13} />
                    {detail.label}
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-2 block break-words text-sm font-medium text-ink-800 transition hover:text-brand-600 dark:text-ink-100 dark:hover:text-brand-300"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="mt-2 break-words text-sm font-medium text-ink-800 dark:text-ink-100">
                      {detail.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <Button href={personalInfo.resume} download>
                <FiDownload size={16} />
                Download Resume
              </Button>
              {socials.slice(0, 3).map((social) => (
                <Button key={social.label} href={social.href} variant="secondary">
                  <Icon name={social.icon} size={16} />
                  {social.label}
                </Button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] border border-brand-500/30" />
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.fullName}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-2xl shadow-ink-950/20"
            />
            <div className="surface mt-5 p-5">
              <p className="font-mono text-xs italic text-brand-600 dark:text-brand-300">
                “{personalInfo.quote}”
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white/40 dark:bg-white/[0.02]">
        <SectionHeading
          eyebrow="Technical Skills"
          title="The stack I build with"
          description="Grouped by where they sit in the stack, with the depth I bring to each."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {skillGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveGroup(group.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeGroup === group.id
                  ? 'border-brand-500 bg-brand-600 text-white shadow-md shadow-brand-600/25'
                  : 'border-ink-200 bg-white/60 text-ink-600 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300 dark:hover:text-white'
              }`}
            >
              <Icon name={group.icon} size={15} />
              {group.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentGroup.skills.map((skill, index) => (
            <motion.div
              key={`${currentGroup.id}-${skill.name}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
              className="surface p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-ink-800 dark:text-ink-100">
                  {skill.name}
                </span>
                <span className="font-mono text-xs text-ink-400">{skill.level}%</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-200 dark:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.04, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-600 to-sky-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What Drives Me"
          title="Principles behind the work"
          description="The values that shape how I write code and work with teams."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.07}>
              <div className="surface surface-hover h-full p-6 text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-sky-400/10 text-brand-600 dark:text-brand-300">
                  <Icon name={value.icon} size={21} />
                </span>
                <h3 className="mt-4 text-base">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white/40 pb-28 dark:bg-white/[0.02]">
        <SectionHeading
          eyebrow="Education"
          title="Academic background & certifications"
          description="A computer engineering foundation, backed by framework certifications from the DICT."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <Timeline items={educationItems} />
        </div>

        <Reveal delay={0.15} className="mt-14 flex flex-wrap justify-center gap-3">
          <Button to="/experience" size="lg">
            View Work Experience
            <FiArrowRight size={17} />
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Get In Touch
          </Button>
        </Reveal>
      </Section>
    </>
  )
}
