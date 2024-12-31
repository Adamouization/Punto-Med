import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import { GoogleAnalytics } from '@next/third-parties/google'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Punto Med - %s',
    default: 'Punto Med S.A.M.',
  },
  description: 'Punto Med: Innovating home appliances since 1984. Explore our legacy of quality, global partnerships, and cutting-edge solutions for manufacturers worldwide.',
  keywords: ['Punto Med', 'home appliances', 'manufacturing', 'gas cookers', 'refrigerators', 'washing machines', 'assembly lines', 'global partnerships', 'premium components'],
  authors: [{ name: 'Punto Med S.A.M.' }],
  creator: 'Punto Med S.A.M.',
  metadataBase: new URL('https://puntomed.com/'),
  openGraph: {
    type: 'website',
    locale: 'en',
    title: 'Punto Med S.A.M. – Innovators in Home Appliances',
    description: 'Punto Med: Innovating home appliances since 1984. Explore our legacy of quality, global partnerships, and cutting-edge solutions for manufacturers worldwide.',
    siteName: 'Punto Med S.A.M.',
    images: [{
      url: '/opengraph.png',
      width: 1200,
      height: 630,
      alt: 'Punto Med S.A.M. image showing a Refrigerator, a washing machine, a gas cooker and a fridge.',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punto Med S.A.M. – Innovators in Home Appliances',
    description: 'Punto Med: Innovating home appliances since 1984. Explore our legacy of quality, global partnerships, and cutting-edge solutions for manufacturers worldwide.',
    images: ['/opengraph.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',  // Android
  icons: {
    // Apple Touch Icons
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'uO-GuYM3wzqs-M1MD0Wik8ucAMx7uGZFJCtkVvhI_6A',
  },
  appleWebApp: {
    capable: true,
    title: 'Punto Med S.A.M.',
    statusBarStyle: 'black-translucent',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
      <GoogleAnalytics gaId="G-T881Q1ZE99" />
    </html>
  )
}
