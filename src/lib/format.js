const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

/** Formats a `YYYY-MM` string as `Mon YYYY`. */
export function formatMonth(value) {
  if (!value) return ''
  const [year, month] = value.split('-')
  return `${MONTHS[Number(month) - 1]} ${year}`
}

export function formatRange(start, end, isCurrent = false) {
  const from = formatMonth(start)
  const to = isCurrent || !end ? 'Present' : formatMonth(end)
  return `${from} — ${to}`
}

export function yearRange(start, end) {
  const from = start?.split('-')[0]
  const to = end?.split('-')[0]
  if (!to || from === to) return from ?? ''
  return `${from} — ${to}`
}

/** Total months between two `YYYY-MM` values, rounded up to whole years. */
export function yearsSince(start) {
  const [year, month] = start.split('-').map(Number)
  const now = new Date()
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month)
  return Math.max(1, Math.floor(months / 12))
}
