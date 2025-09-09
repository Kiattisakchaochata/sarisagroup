import type { NextRequest } from 'next/server'

export function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const body = `
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`.trim()

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}