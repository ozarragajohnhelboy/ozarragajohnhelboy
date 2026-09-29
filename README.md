# John Helboy Ozarraga — Portfolio

A React portfolio site for John Helboy Ozarraga, Python and full stack developer. Built as a
static single-page app so it deploys to Vercel with no database or server to maintain.

**Live site:** https://dev-ozarraga.online

## Stack

| Area | Choice |
| --- | --- |
| Framework | React 18 + Vite |
| Routing | React Router (client-side) |
| Styling | Tailwind CSS with a custom design system |
| Animation | Framer Motion |
| Icons | react-icons (Feather) |
| Contact form | Vercel serverless function + Resend |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Project structure

```
api/contact.js          Vercel serverless function for the contact form
public/                 Static assets (project screenshots, profile photo, resume)
src/data/               All site content — edit these to update the portfolio
src/components/         Layout, UI primitives and feature components
src/pages/              Home, About, Projects, Experience, Contact, 404
```

All content lives in `src/data/`, so updating the portfolio means editing plain JavaScript
objects rather than touching components:

- `site.js` — personal info, social links, navigation, values, services
- `projects.js` — project entries and their type filters
- `experience.js` — work history and education
- `skills.js` — skill groups and proficiency levels

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel auto-detects Vite. The settings in `vercel.json` handle the build command, output
   directory and the SPA rewrite that keeps client-side routes working on refresh.
4. Deploy.

### Contact form email (optional)

The form works without configuration — it just tells the visitor to email directly and offers a
mail-app fallback. To receive messages as email, add these environment variables in
**Vercel → Settings → Environment Variables**:

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | Inbox that receives the messages |
| `CONTACT_FROM_EMAIL` | Sender address on a domain verified in Resend |

See `.env.example` for a template.

---

_“Code with clarity, build with purpose.”_
