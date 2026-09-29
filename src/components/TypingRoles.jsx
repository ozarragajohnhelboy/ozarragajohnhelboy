import { useEffect, useState } from 'react'

const TYPE_SPEED = 65
const DELETE_SPEED = 35
const HOLD_DURATION = 1800

/** Cycles through a list of roles with a typewriter effect. */
export default function TypingRoles({ roles }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index % roles.length]

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), HOLD_DURATION)
      return () => clearTimeout(hold)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((value) => (value + 1) % roles.length)
      return undefined
    }

    const timer = setTimeout(
      () => {
        setText((value) =>
          deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1),
        )
      },
      deleting ? DELETE_SPEED : TYPE_SPEED,
    )

    return () => clearTimeout(timer)
  }, [text, deleting, index, roles])

  return (
    <span className="inline-flex items-baseline">
      <span className="text-gradient">{text}</span>
      <span className="ml-1 inline-block h-[1em] w-[3px] animate-caret bg-brand-500" />
    </span>
  )
}
