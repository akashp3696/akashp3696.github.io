import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akash Prajapat | Full Stack Developer (React, Node.js, Java & React Native)',
  description:
    'Full Stack Developer with 5+ years in React and 3+ years in backend & performance optimization — building scalable web & mobile apps with Java (Spring Boot), the MERN stack, and React Native / Flutter.',
  keywords: [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Java Spring Boot Developer',
    'React Developer',
    'React Native Developer',
    'Flutter Developer',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Freelance Developer',
  ],
  authors: [{ name: 'Akash Prajapat' }],
  openGraph: {
    title: 'Akash Prajapat | Full Stack Developer (React, Node.js, Java & React Native)',
    description: 'Building scalable web & mobile apps with Java (Spring Boot), the MERN stack, and React Native / Flutter.',
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
