import Reveal from './Reveal.jsx'

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="text-3xl leading-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-base leading-relaxed text-ink-500 dark:text-ink-400">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}

export function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="relative overflow-hidden pb-4 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="text-4xl leading-[1.1] sm:text-5xl">{title}</h1>
          {description ? (
            <p className="text-lg leading-relaxed text-ink-500 dark:text-ink-400">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </header>
  )
}
