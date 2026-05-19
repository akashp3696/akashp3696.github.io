import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akash Prajapat | Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Node.js, Flutter, and AI integration. Available for freelancing worldwide.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Node.js',
    'Flutter',
    'Freelance Developer India',
    'Mobile App Developer',
    'AI Developer',
  ],
  authors: [{ name: 'Akash Prajapat' }],
  openGraph: {
    title: 'Akash Prajapat | Full Stack Developer',
    description: 'Building scalable web & mobile apps. Available for freelance.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
