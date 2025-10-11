import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: `${post.title} | SpringHealth Lab Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.coverImage ? [post.coverImage] : [],
      },
    };
  } catch (error) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = await getPostBySlug(params.slug);
  } catch (error) {
    notFound();
  }

  const postDate = new Date(post.date);
  const formattedDate = postDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Calculate reading time
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <article className="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
          
          <div className="mt-6 flex items-center text-sm text-gray-500">
            <time dateTime={post.date} className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1.5" />
              {formattedDate}
            </time>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1.5" />
              {calculateReadTime(post.content)}
            </span>
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link 
                  key={tag} 
                  href={`/blog/tag/${tag.toLowerCase()}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>

        {post.coverImage && (
          <div className="mb-10 rounded-lg overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto max-h-96 object-cover"
            />
          </div>
        )}

        <div className="prose prose-indigo prose-lg max-w-none">
          {/* @ts-ignore */}
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
