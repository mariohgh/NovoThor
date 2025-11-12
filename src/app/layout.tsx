import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NovoTHOR: Full Body Red Light Therapy Bed',
  description: 'NovoTHOR Red Light Therapy Bed: Reduce your pain, improve your health, and increase your performance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/eei4oga.css" />
      </head>
      <body className="bg-novothor-dark text-white">{children}</body>
    </html>
  )
}
