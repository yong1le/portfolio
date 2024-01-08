import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const font = Montserrat({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata: Metadata = {
  title: 'Yong Le He',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white text-black`}>{children}</body>
    </html>
  )
}
