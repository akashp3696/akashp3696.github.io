import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akash Prajapat | MERN Stack Developer',
  description:
    'Full Stack Developer specializing in the MERN stack — MongoDB, Express.js, React.js & Node.js.',
  keywords: [
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'Node.js',
    'MongoDB',
    'Express.js',
  ],
  authors: [{ name: 'Akash Prajapat' }],
  openGraph: {
    title: 'Akash Prajapat | MERN Stack Developer',
    description: 'Building scalable web apps with the MERN stack.',
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
