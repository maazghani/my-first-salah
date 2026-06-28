import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const baloo = Baloo_2({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})
const nunito = Nunito({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'My First Salah — Learn to Pray, Step by Step',
  description:
    'A friendly, colorful guide that teaches kids how to pray Salah, one gentle step at a time.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#179299' },
    { media: '(prefers-color-scheme: dark)', color: '#303446' },
  ],
}

const themeInitScript = `
(() => {
  try {
    const storageKey = 'my-first-salah-theme';
    const storedTheme = window.localStorage.getItem(storageKey);
    const useFrappe = storedTheme === 'frappe';
    document.documentElement.classList.toggle('dark', useFrappe);
    document.documentElement.dataset.theme = useFrappe ? 'frappe' : 'latte';
  } catch {
    document.documentElement.dataset.theme = 'latte';
  }
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${nunito.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
