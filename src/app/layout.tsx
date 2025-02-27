import { type Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { Caprasimo } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { FreeTrialBanner } from '@/components/FreeTrial'

import '@/styles/tailwind.css'

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['400', '500', '600', '700', '800', '900']
})

const caprasimo = Caprasimo({ 
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Kimberly\'s Journey',
    default:
      'Kimberly\'s Journey',
  },
  description:
    "Join me for yummy food inspiration & meal plans or get in touch if you need any travel or Disney related advice",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lexend.variable} h-full antialiased bg-zinc-950`} suppressHydrationWarning>
      <body className="flex min-h-screen bg-zinc-950">
        <Providers>
          <div className="flex w-full">
            <Layout>
              <div className="flex flex-col min-h-screen">
                {children}
              </div>
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
