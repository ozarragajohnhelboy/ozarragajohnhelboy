import { FiArrowRight, FiDownload } from 'react-icons/fi'
import Seo from '../components/ui/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Timeline from '../components/Timeline.jsx'
import { PageHeader, Section, SectionHeading } from '../components/ui/Section.jsx'
import { education, experiences } from '../data/experience.js'
import { personalInfo } from '../data/site.js'
import { formatRange, yearRange } from '../lib/format.js'

const experienceItems = experiences.map((item) => ({
  key: `${item.company}-${item.position}`,
  title: item.position,
  subtitle: item.company,
  period: formatRange(item.start, item.end, item.current),
  meta: item.location,
  summary: item.summary,
  highlights: item.highlights,
  tech: item.tech,
  accent: item.current,
}))

const educationItems = education.map((item) => ({
  key: `${item.institution}-${item.degree}`,
  title: item.degree,
  subtitle: item.institution,
  period: yearRange(item.start, item.end),
  meta: item.field,
  summary: item.description,
  accent: false,
}))

export default function Experience() {
  return (
    <>
      <Seo
        title="Experience"
        description="Work history of John Helboy Ozarraga as a Python and Django developer across product teams and local government."
      />

      <PageHeader
        eyebrow="Career Path"
        title="Where I've worked and what I built"
        description="Python and Django work across an AI training platform, music education, and municipal public-service apps."
      />

      <Section className="pt-12">
        <SectionHeading
          align="left"
          eyebrow="Work Experience"
          title="Professional timeline"
          description="Remote product work and local government systems, from the newest role backward."
        />
        <div className="mt-12">
          <Timeline items={experienceItems} />
        </div>
      </Section>

      <Section className="bg-white/40 dark:bg-white/[0.02]">
        <SectionHeading
          align="left"
          eyebrow="Education"
          title="Degree & certifications"
          description="Computer engineering foundation plus DICT framework certifications."
        />
        <div className="mt-12">
          <Timeline items={educationItems} />
        </div>
      </Section>

      <Section className="pb-28">
        <Reveal className="surface flex flex-col items-center gap-5 p-10 text-center">
          <h2 className="text-2xl sm:text-3xl">Want the full details?</h2>
          <p className="max-w-xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            Grab my resume for the complete breakdown, or reach out and I&apos;ll walk you through
            the projects most relevant to your team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={personalInfo.resume} size="lg" download>
              <FiDownload size={17} />
              Download Resume
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Me
              <FiArrowRight size={17} />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
