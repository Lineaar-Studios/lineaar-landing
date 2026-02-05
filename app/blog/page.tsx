import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { newsItems } from "@/data/news";
import { BlogCard } from "@/components/blog";

export default function BlogPage() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main>
        <section className="py-6 max-w-[1300px] mx-auto px-3">
          <div className="mx-auto px-3 py-16 md:py-24 border-b border-brand-surface bg-hero-bg rounded-2xl">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-title text-4xl font-semibold leading-tight tracking-tight text-hero-text md:text-5xl">
                Our blog
              </h1>
              <p className="mt-4 text-sm text-brand-ink-light md:text-base">
                Latest insights and updates from our team.
              </p>
            </div>
          </div>
        </section>

        <section
          className="bg-[#F5F5F5] py-6 md:py-12"
          aria-label="Blog posts"
        >
          <div className="mx-auto max-w-[1300px] px-3">
            <ul
              className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12"
              role="list"
            >
              {newsItems.map((post) => (
                <li key={post.id}>
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
