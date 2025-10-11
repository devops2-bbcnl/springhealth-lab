import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SpringQuest Health Management Ltd - Trusted Medical Laboratory Services',
  description: 'Accurate and reliable medical laboratory testing services. Book your appointment online today.',
  keywords: ['medical lab', 'blood tests', 'health screening', 'laboratory services', 'medical testing'],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1e40af',
  colorScheme: 'light',
  manifest: '/favicons/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicons/safari-pinned-tab.svg',
        color: '#1e40af',
      },
    ],
  },
  other: {
    'msapplication-TileColor': '#1e40af',
    'msapplication-config': '/favicons/browserconfig.xml',
    'theme-color': '#1e40af',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://springhealthlabs.com',
    title: 'SpringQuest Health Management Ltd - Trusted Medical Laboratory Services',
    description: 'Accurate and reliable medical laboratory testing services. Book your appointment online today.',
    siteName: 'SpringQuest Health Management Ltd',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'SpringQuest Health Management Ltd Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpringQuest Health Management Ltd - Trusted Medical Laboratory Services',
    description: 'Accurate and reliable medical laboratory testing services. Book your appointment online today.',
    creator: '@springhealthlabs',
    images: ['/images/logo.png'],
  },
  appleWebApp: {
    title: 'SpringQuest Health',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/favicons/apple-touch-icon.png',
      {
        url: '/favicons/apple-touch-icon.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
