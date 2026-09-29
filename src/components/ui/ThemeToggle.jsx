import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import useTheme from '../../hooks/useTheme.js'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-ink-200 bg-white/70 text-ink-600 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-300 dark:hover:text-amber-300"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="grid place-items-center"
      >
        {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
      </motion.span>
    </button>
  )
}
