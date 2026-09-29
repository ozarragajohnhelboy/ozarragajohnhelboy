import { Link } from 'react-router-dom'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { navLinks, personalInfo, socials } from '../../data/site.js'
import { Icon } from '../../lib/icons.jsx'

const focusAreas = [
  'Python · Django · FastAPI',
  'React.js · React Native',
  'PostgreSQL · MySQL',
  'AWS · Docker · CI/CD',
]

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-ink-200/70 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/60">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold text-ink-900 dark:text-white">
              {personalInfo.fullName}
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              {personalInfo.title} building scalable web applications, REST APIs and
              cloud-deployed systems.
            </p>
            <p className="font-mono text-xs italic text-brand-600 dark:text-brand-300">
              “{personalInfo.quote}”
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-400">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-ink-600 transition hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-400">
              Focus Areas
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-ink-600 dark:text-ink-400">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-400">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-ink-600 transition hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300"
                >
                  <FiMail size={15} />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phoneHref}`}
                  className="inline-flex items-center gap-2 text-ink-600 transition hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300"
                >
                  <FiPhone size={15} />
                  {personalInfo.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-ink-600 dark:text-ink-400">
                <FiMapPin size={15} />
                {personalInfo.location}
              </li>
            </ul>

            <div className="mt-1 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-500 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-ink-400 dark:hover:border-brand-400/60 dark:hover:text-brand-300"
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-200/70 pt-6 text-xs text-ink-400 sm:flex-row dark:border-white/10">
          <p>
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </p>
          <p className="font-mono">Built with React, Vite &amp; Tailwind · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
