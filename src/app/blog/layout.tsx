import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - SpringHealth Lab',
  description: 'Stay updated with the latest health tips, testing information, and medical insights from SpringHealth Lab.',
  openGraph: {
    title: 'Blog - SpringHealth Lab',
    description: 'Latest articles and health insights from SpringHealth Lab',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-16">
        {children}
      </main>
    </div>
  );
}
