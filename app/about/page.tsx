import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const stats = [
  { label: "Years of experience", value: "10+" },
  { label: "Successful projects", value: "200+" },
  { label: "Client satisfaction rate", value: "95%" },
];

const values = [
  {
    title: "Innovative solutions",
    description:
      "We design thoughtful, strategic experiences that untangle complexity and create momentum for your brand.",
  },
  {
    title: "Collaborative partnership",
    description:
      "We work alongside your team as long-term partners, not just vendors, to build clarity and trust.",
  },
  {
    title: "Strong integrity",
    description:
      "We say what we mean, follow through on commitments, and communicate with honesty and transparency.",
  },
  {
    title: "Unwavering excellence",
    description:
      "From first workshop to final handoff, we obsess over details to deliver work that lasts.",
  },
];

const team = [
  {
    name: "Skye Peters",
    role: "Creative Director",
    imageUrl:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=400&h=400&fit=crop",
  },
  {
    name: "Naima Haby",
    role: "Brand Strategist",
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    name: "Winston Hansen",
    role: "Design Lead",
    imageUrl:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=400&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-foreground">
      <Header />
      <main className="pb-16 md:pb-20">
        {/* Hero */}
        <section className="py-6 md:py-8" aria-labelledby="about-heading">
          <div className="mx-auto max-w-[1300px] px-3">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start mt-2">
              <div>
                <h1
                  id="about-heading"
                  className="font-title text-3xl font-semibold text-hero-text md:text-4xl"
                >
                  About us
                </h1>
              </div>
              <div>
                <p className="text-base text-brand-ink-light md:text-lg">
                  We are a studio designed to deliver calming, intentional solutions
                  that bring order to complex digital experiences.
                </p>
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl bg-hero-bg">
              <Image
                src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?w=1400&h=700&fit=crop"
                alt="Team collaborating in a calm studio environment"
                width={1400}
                height={700}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 1300px"
                priority
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 md:py-12">
          <div className="mx-auto max-w-[1300px] px-3">
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="font-title text-3xl font-semibold text-hero-text md:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-brand-ink-light md:text-base">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="py-6 md:py-10">
          <div className="mx-auto max-w-[1300px] px-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-hero-bg text-xs">
                ✺
              </span>
              <h2 className="font-title text-2xl font-semibold text-hero-text md:text-3xl">
                The power of our core values
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <h3 className="font-title text-lg font-semibold text-hero-text">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-ink-light">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Story section */}
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-[1300px] px-3">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <h2 className="font-title text-2xl font-semibold text-hero-text md:text-3xl">
                  Our journey, mission, and commitment to excellence
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-ink md:text-base">
                  Lineaar was founded on a simple principle: structure creates
                  trust. We partner with institutions, teams, and founders who
                  operate in complex environments and need brands that feel calm,
                  clear, and intentional.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-brand-ink md:text-base">
                  From research and brand systems to digital experiences, we
                  combine rigorous thinking with warm, human design. Every
                  engagement is an opportunity to remove noise, align teams, and
                  build the kind of quiet confidence that lasts.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl bg-hero-bg">
                <Image
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&h=900&fit=crop"
                  alt="Designer working in a bright studio"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-[1300px] px-3">
            <h2 className="text-center font-title text-2xl font-semibold text-hero-text md:text-3xl">
              Our team
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="overflow-hidden rounded-2xl bg-hero-bg">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-64 w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <h3 className="mt-4 font-title text-lg font-semibold text-hero-text">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand-ink-light">
                    {member.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

