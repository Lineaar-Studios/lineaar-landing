"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import type { NewsItem, ContentBlock } from "@/data/news";

type BlogContentProps = {
  post: NewsItem;
};

export function BlogContent({ post }: BlogContentProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "paragraph":
        return (
          <motion.p
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-base leading-relaxed text-brand-ink md:text-lg"
          >
            {block.content}
          </motion.p>
        );
      case "heading":
        const HeadingTag = block.level === 2 ? "h2" : "h3";
        return (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-8 md:mt-10"
          >
            {HeadingTag === "h2" ? (
              <h2 className="font-title text-xl font-semibold text-hero-text md:text-2xl">
                {block.content}
              </h2>
            ) : (
              <h3 className="font-title text-xl font-semibold text-hero-text md:text-2xl">
                {block.content}
              </h3>
            )}
          </motion.div>
        );
      case "list":
        return (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-4"
          >
            {block.ordered ? (
              <ol className="ml-6 space-y-2 text-base leading-relaxed text-brand-ink md:text-lg">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul className="ml-6 space-y-2 text-base leading-relaxed text-brand-ink md:text-lg">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </motion.div>
        );
      case "quote":
        return (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="my-8 rounded-lg bg-green-100 px-6 py-8 text-center md:my-10"
          >
            <p className="text-base font-medium leading-relaxed text-brand-ink md:text-lg">
              &ldquo;{block.content}&rdquo;
            </p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px 0px" });

  return (
    <section className="bg-[#F5F5F5] py-8 md:py-12">
      <div className="mx-auto max-w-[1300px] px-3">
        {post.featuredImage && (
          <motion.div
            ref={imageRef}
            initial={{ y: 20, opacity: 0 }}
            animate={imageInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8 overflow-hidden rounded-lg md:mb-10"
          >
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover md:mx-auto md:max-w-4xl"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </motion.div>
        )}
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mx-auto max-w-3xl space-y-6"
        >
          {post.content?.map((block, index) => renderContentBlock(block, index))}
        </motion.div>
      </div>
    </section>
  );
}
