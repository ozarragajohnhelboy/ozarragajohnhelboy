import { FiArrowLeft, FiFolder } from 'react-icons/fi'
import Seo from '../components/ui/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />

      <section className="relative flex min-h-[80vh] items-center overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" />
        <div className="container-page relative">
          <Reveal className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
            <span className="font-mono text-7xl font-bold text-gradient sm:text-8xl">404</span>
            <h1 className="text-3xl sm:text-4xl">This page went missing</h1>
            <p className="text-base leading-relaxed text-ink-500 dark:text-ink-400">
              The link may be outdated or the page was moved. Let&apos;s get you back to
              something useful.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button to="/" size="lg">
                <FiArrowLeft size={17} />
                Back Home
              </Button>
              <Button to="/projects" variant="secondary" size="lg">
                <FiFolder size={17} />
                Browse Projects
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
