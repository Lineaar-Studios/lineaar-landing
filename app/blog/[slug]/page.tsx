import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { newsItems } from "@/data/news";
import { BlogHero, BlogContent, MoreBlog } from "@/components/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return newsItems.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = newsItems.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.intro || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.intro || post.excerpt,
      images: post.featuredImage ? [post.featuredImage.url] : [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = newsItems.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = newsItems
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main>
        <BlogHero post={post} />
        <BlogContent post={post} />
        {otherPosts.length > 0 && <MoreBlog posts={otherPosts} />}
      </main>
      <Footer />
    </div>
  );
}
