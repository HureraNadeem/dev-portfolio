import type { Metadata } from 'next'
import NotFoundView from '@/features/not-found/not-found-view'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return <NotFoundView />
}
