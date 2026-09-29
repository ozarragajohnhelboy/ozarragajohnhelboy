import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import { navLinks, personalInfo } from '../../data/site.js'
import ThemeToggle from '../ui/ThemeToggle.jsx'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brand-500 via-sky-400 to-amber-400"
    />
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/75'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-sky-400 font-mono text-sm font-bold text-white shadow-lg shadow-brand-500/30">
            JH
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-ink-900 dark:text-white">
              {personalInfo.firstName}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
              Developer
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-ink-200/70 bg-white/60 p-1 backdrop-blur-xl md:flex dark:border-white/10 dark:bg-white/5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'text-white'
                    : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-600 shadow-md shadow-brand-600/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  {link.label}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={personalInfo.resume}
            download
            className="hidden items-center gap-1.5 rounded-full bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 sm:inline-flex dark:bg-white dark:text-ink-900 dark:hover:bg-brand-500 dark:hover:text-white"
          >
            Resume
            <FiArrowUpRight size={15} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white/70 text-ink-700 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-ink-200"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {scrolled ? <ScrollProgress /> : null}

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="border-t border-ink-200/70 bg-white/95 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-ink-950/95"
          >
            <div className="container-page flex flex-col gap-1 py-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? 'bg-brand-600 text-white'
                        : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={personalInfo.resume}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-ink-200 px-4 py-3 text-base font-semibold text-ink-800 dark:border-white/10 dark:text-white"
              >
                Download Resume
                <FiArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
