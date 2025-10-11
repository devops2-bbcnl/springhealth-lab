import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { getAllPosts, type Post } from '@/lib/posts';

const posts = [
  {
    id: 1,
    title: 'Understanding Your Blood Test Results',
    href: '/blog/understanding-blood-tests',
    description: 'Learn how to interpret common blood test results and what they mean for your health.',
    date: 'Oct 5, 2025',
    datetime: '2025-10-05',
    readTime: '5 min read',
    category: { name: 'Health Tips', href: '/blog/category/health-tips' },
  },
  {
    id: 2,
    title: 'The Importance of Regular Health Check-ups',
    href: '/blog/importance-of-checkups',
    description: 'Discover why regular health screenings are crucial for early detection and prevention of diseases.',
    date: 'Sep 28, 2025',
    datetime: '2025-09-28',
    readTime: '4 min read',
    category: { name: 'Preventive Care', href: '/blog/category/preventive-care' },
  },
  {
    id: 3,
    title: 'Advances in Diagnostic Testing',
    href: '/blog/diagnostic-testing-advances',
    description: 'Explore the latest technological advancements in medical diagnostic testing and how they benefit patients.',
    date: 'Sep 15, 2025',
    datetime: '2025-09-15',
    readTime: '6 min read',
    category: { name: 'Technology', href: '/blog/category/technology' },
  },
];

export default async function BlogPage() {
  const posts = await getAllPosts();

  // Helper function to calculate reading time
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Blog
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Stay updated with the latest health tips, testing information, and medical insights.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => {
            const postDate = new Date(post.date);
            const formattedDate = postDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
            
            return (
              <div key={post.slug} className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {post.coverImage && (
                  <div className="h-48 bg-gray-200">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    {post.tags && post.tags.length > 0 && (
                      <p className="text-sm font-medium text-indigo-600">
                        <Link href={`/blog/tag/${post.tags[0].toLowerCase()}`} className="hover:underline">
                          {post.tags[0]}
                        </Link>
                      </p>
                    )}
                    <Link href={`/blog/${post.slug}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.date}>
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {formattedDate}
                        </div>
                      </time>
                      <span aria-hidden="true"> &middot; </span>
                      <span className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {calculateReadTime(post.content)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
