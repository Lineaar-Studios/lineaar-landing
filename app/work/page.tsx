import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WorksGrid } from "@/components/work/works-grid";

export default function WorkPage() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main>
        <section className="py-6 md:py-8 max-w-[1300px] mx-auto px-3">
          <div className="mx-auto  px-3 py-16 md:py-24 border-b border-brand-surface bg-hero-bg rounded-2xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
                Our work
              </p>
              <h1 className="mt-4 font-title text-4xl font-semibold leading-tight tracking-tight text-hero-text md:text-5xl">
                Explore our portfolio of creative, impactful solutions.
              </h1>
              <p className="mt-4 text-sm text-brand-ink-light md:text-base">
                A curated selection of recent projects where we&apos;ve helped
                teams bring structure, clarity, and calm to complex digital
                products.
              </p>
            </div>
          </div>
        </section>

        <section
          id="work-grid"
          className="bg-[#F5F5F5] py-10 md:py-16"
          aria-label="Work portfolio"
        >
          <div className="mx-auto max-w-[1300px] px-3">
            <WorksGrid />
            {/* <div className="mt-12 flex justify-center">
              <Link
                href="#work-grid"
                className="rounded-full bg-brand-surface px-8 py-3 text-sm font-semibold text-brand-primary shadow-sm transition-colors hover:bg-white"
              >
                Load more
              </Link>
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

