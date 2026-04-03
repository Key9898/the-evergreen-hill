import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from '@sentry/react'
import './index.css'
import './i18n/index'
import App from './App.tsx'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  enabled: !!import.meta.env.VITE_SENTRY_DSN,
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 0.2,
})

try {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} catch (err) {
  Sentry.captureException(err)
  const msg = err instanceof Error ? err.message : String(err)
  document.getElementById('root')!.innerHTML = `
    <div style="font-family:sans-serif;padding:2rem;max-width:600px;margin:4rem auto;border:1px solid #e5e7eb;border-radius:8px;">
      <h2 style="color:#dc2626;margin-bottom:1rem;">Configuration Error</h2>
      <p style="color:#374151;line-height:1.6;">${msg}</p>
    </div>
  `
}
