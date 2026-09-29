const MAX_LENGTHS = { name: 120, email: 160, subject: 200, message: 4000 }

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function validate(body) {
  const fields = {}
  for (const key of Object.keys(MAX_LENGTHS)) {
    const value = typeof body?.[key] === 'string' ? body[key].trim() : ''
    if (!value) return { error: `The "${key}" field is required.` }
    if (value.length > MAX_LENGTHS[key]) {
      return { error: `The "${key}" field is too long.` }
    }
    fields[key] = value
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email)) {
    return { error: 'Please provide a valid email address.' }
  }

  return { fields }
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const body =
    typeof request.body === 'string' ? safeParse(request.body) : (request.body ?? {})

  const { error, fields } = validate(body)
  if (error) return response.status(400).json({ error })

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !to || !from) {
    return response.status(503).json({
      error: 'The contact service is not configured yet, so the message was not sent.',
    })
  }

  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: fields.email,
        subject: `Portfolio contact: ${fields.subject}`,
        html: `
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(fields.subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(fields.message).replace(/\n/g, '<br />')}</p>
        `,
      }),
    })

    if (!result.ok) {
      const detail = await result.text()
      console.error('Resend request failed:', result.status, detail)
      return response.status(502).json({ error: 'The email provider rejected the message.' })
    }

    return response.status(200).json({
      message: 'Thanks for reaching out — your message is on its way. I will reply shortly.',
    })
  } catch (cause) {
    console.error('Contact handler failed:', cause)
    return response.status(500).json({ error: 'Something went wrong while sending.' })
  }
}

function safeParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return {}
  }
}
