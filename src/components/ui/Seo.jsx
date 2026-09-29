import { useEffect } from 'react'

/** Keeps the document title and meta description in sync with the active page. */
export default function Seo({ title, description }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — John Helboy Ozarraga`
      : 'John Helboy Ozarraga — Python & Full Stack Developer'
    document.title = fullTitle

    if (!description) return
    const meta = document.querySelector('meta[name="description"]')
    const previous = meta?.getAttribute('content')
    meta?.setAttribute('content', description)

    return () => {
      if (meta && previous) meta.setAttribute('content', previous)
    }
  }, [title, description])

  return null
}
