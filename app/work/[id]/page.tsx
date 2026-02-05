import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { works } from "@/data/works";
import { WorkHero } from "@/components/work/work-hero";
import { WorkMetadata } from "@/components/work/work-metadata";
import { WorkImages } from "@/components/work/work-images";
import { WorkContent } from "@/components/work/work-content";
import { MoreWork } from "@/components/work/more-work";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const work = works.find((w) => w.id === id);

  if (!work) {
    return {
      title: "Work Not Found",
    };
  }

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      images: [work.imageUrl],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);

  if (!work) {
    notFound();
  }

  const otherWorks = works.filter((w) => w.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main>
        <WorkHero work={work} />
        <section className="bg-[#F5F5F5] py-10 md:py-8">
          <div className="mx-auto max-w-[1300px] px-3">
            <WorkMetadata work={work} />
            <WorkImages images={work.images} />
            <WorkContent work={work} />
          </div>
        </section>
        {otherWorks.length > 0 && <MoreWork works={otherWorks} />}
      </main>
      <Footer />
    </div>
  );
}
