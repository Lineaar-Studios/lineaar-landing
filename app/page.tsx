import { FAQSection } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { NewsSection } from "@/components/news";
import { Services } from "@/components/services";
import { StatsSection } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Works } from "@/components/work";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground ">
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Testimonials />
        <StatsSection />
        <FAQSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
