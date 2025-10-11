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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a202c' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://springhealthlabs.com',
    title: 'SpringQuest Health Management Ltd - Trusted Medical Laboratory Services',
    description: 'Accurate and reliable medical laboratory testing services. Book your appointment online today.',
    siteName: 'SpringQuest Health Management Ltd',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpringQuest Health Management Ltd - Trusted Medical Laboratory Services',
    description: 'Accurate and reliable medical laboratory testing services. Book your appointment online today.',
    creator: '@springhealthlabs',
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
