import { promises as fs } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

const postsDirectory = path.join(process.cwd(), 'content/posts');

interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
}

export interface Post extends PostMeta {
  slug: string;
  content: string;
  mdxSource?: MDXRemoteSerializeResult;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    
    // Extract the front matter and content
    const contentMatch = fileContents.match(/---\n([\s\S]*?)\n---\n([\s\S]*)/);
    
    if (!contentMatch) {
      throw new Error('Invalid post format');
    }
    
    const frontMatter = contentMatch[1];
    const content = contentMatch[2].trim();
    
    // Parse front matter
    const meta: Partial<PostMeta> = {};
    frontMatter.split('\n').forEach(line => {
      const [key, ...value] = line.split(':');
      if (key && value) {
        const val = value.join(':').trim().replace(/^['"](.*)['"]$/, '$1');
        if (key === 'tags') {
          meta.tags = val.replace(/[\[\]']+/g, '').split(',').map(t => t.trim());
        } else if (key === 'date') {
          meta.date = val;
        } else if (key === 'title') {
          meta.title = val;
        } else if (key === 'excerpt') {
          meta.excerpt = val;
        } else if (key === 'coverImage') {
          meta.coverImage = val;
        }
      }
    });

    // Validate required fields
    if (!meta.title || !meta.date || !meta.excerpt) {
      throw new Error('Missing required fields in post frontmatter');
    }

    // Serialize the MDX content
    const mdxSource = await serialize(content);

    return {
      ...meta as PostMeta,
      slug: realSlug,
      content,
      mdxSource,
    };
  } catch (error) {
    console.error(`Error processing post ${slug}:`, error);
    throw error;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const files = await fs.readdir(postsDirectory);
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith('.mdx'))
        .map(async (file) => {
          try {
            const slug = file.replace(/\.mdx$/, '');
            return await getPostBySlug(slug);
          } catch (error) {
            console.error(`Error processing file ${file}:`, error);
            return null;
          }
        })
    );
    
    // Filter out any null posts and sort by date
    return posts
      .filter((post): post is Post => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}
