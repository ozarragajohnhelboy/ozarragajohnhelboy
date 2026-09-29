import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiLoader,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { PageHeader, Section } from '../components/ui/Section.jsx'
import { Icon } from '../lib/icons.jsx'
import { personalInfo, socials } from '../data/site.js'

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

const contactCards = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phoneHref}`,
  },
  { icon: FiMapPin, label: 'Location', value: personalInfo.location },
  { icon: FiClock, label: 'Availability', value: personalInfo.availability },
]

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell me your name.'
  if (!values.email.trim()) {
    errors.email = 'An email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'That email address looks incomplete.'
  }
  if (!values.subject.trim()) errors.subject = 'Add a short subject.'
  if (values.message.trim().length < 20) {
    errors.message = 'Please write at least 20 characters so I have some context.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const payload = await response.json().catch(() => ({}))

      if (!response.ok) throw new Error(payload.error || 'Message could not be sent.')

      setStatus('success')
      setFeedback(payload.message || 'Thanks for reaching out — I will reply shortly.')
      setValues(EMPTY_FORM)
    } catch (error) {
      setStatus('error')
      setFeedback(error.message)
    }
  }

  const mailtoFallback = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    values.subject || 'Portfolio enquiry',
  )}&body=${encodeURIComponent(values.message)}`

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with John Helboy Ozarraga about Python, Django, FastAPI or full stack development work."
      />

      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Send a message and I'll get back to you. I'm open to remote roles, freelance builds and technical collaborations."
      />

      <Section className="pb-28 pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal className="flex flex-col gap-4">
            {contactCards.map((card) => (
              <div key={card.label} className="surface surface-hover flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                  <card.icon size={19} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="mt-1 block break-words text-sm font-medium text-ink-800 transition hover:text-brand-600 dark:text-ink-100 dark:hover:text-brand-300"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-1 break-words text-sm font-medium text-ink-800 dark:text-ink-100">
                      {card.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="surface p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                Elsewhere
              </p>
              <div className="mt-3 flex items-center gap-2">
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
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="surface flex flex-col gap-5 p-7 sm:p-9">
              <div>
                <h2 className="text-xl sm:text-2xl">Send a message</h2>
                <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">
                  Fill in the form below and it lands straight in my inbox.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  value={values.name}
                  error={errors.name}
                  onChange={handleChange}
                  placeholder="Juan Dela Cruz"
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>

              <Field
                label="Subject"
                name="subject"
                value={values.subject}
                error={errors.subject}
                onChange={handleChange}
                placeholder="Project enquiry"
              />

              <Field
                label="Message"
                name="message"
                as="textarea"
                rows={6}
                value={values.message}
                error={errors.message}
                onChange={handleChange}
                placeholder="Tell me about the project, timeline and the stack you have in mind."
              />

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <FiLoader size={17} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <FiSend size={17} />
                      Send Message
                    </>
                  )}
                </button>
                <span className="text-xs text-ink-400">
                  Or email me directly at{' '}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-medium text-brand-600 dark:text-brand-300"
                  >
                    {personalInfo.email}
                  </a>
                </span>
              </div>

              <AnimatePresence>
                {feedback ? (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${
                      status === 'success'
                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                        : 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300'
                    }`}
                  >
                    {status === 'success' ? (
                      <FiCheckCircle size={18} className="mt-0.5 shrink-0" />
                    ) : (
                      <FiAlertCircle size={18} className="mt-0.5 shrink-0" />
                    )}
                    <span>
                      {feedback}
                      {status === 'error' ? (
                        <>
                          {' '}
                          <a href={mailtoFallback} className="font-semibold underline">
                            Open your mail app instead
                          </a>
                          .
                        </>
                      ) : null}
                    </span>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  )
}

function Field({ label, name, error, as = 'input', ...props }) {
  const Tag = as
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink-700 dark:text-ink-200">{label}</span>
      <Tag
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        className={`field ${error ? 'border-red-500/70 focus:border-red-500 focus:ring-red-500/15' : ''} ${
          as === 'textarea' ? 'resize-y' : ''
        }`}
        {...props}
      />
      {error ? <span className="text-xs font-medium text-red-500">{error}</span> : null}
    </label>
  )
}
