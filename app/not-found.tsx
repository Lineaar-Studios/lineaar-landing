import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main className="flex min-h-[calc(100vh-4rem)] flex-col">
        {/* 404 Section */}
        <section className="flex flex-1 items-center justify-center px-3 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-title text-7xl font-bold leading-none text-hero-text md:text-8xl lg:text-9xl">
              404
            </h1>
            <h2 className="mt-4 font-title text-3xl font-semibold text-hero-text md:text-4xl">
              Page not found
            </h2>
            <p className="mt-4 text-base text-brand-ink-light md:text-lg">
              The page you&apos;re searching for either no longer exists or has
              been relocated.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-hero-bg px-6 py-3 text-base font-medium text-hero-text transition-colors hover:bg-hero-bg/80"
            >
              Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
