import type { Metadata } from 'next'
import { Header } from '@/components/header'
import './globals.css'
import { Saira } from 'next/font/google'

const saira = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
