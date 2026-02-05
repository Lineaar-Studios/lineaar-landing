"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border-b border-brand-ink/20 bg-transparent pb-2 text-base text-hero-text placeholder:text-brand-ink-light focus:border-brand-primary focus:outline-none"
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border-b border-brand-ink/20 bg-transparent pb-2 text-base text-hero-text placeholder:text-brand-ink-light focus:border-brand-primary focus:outline-none"
        />
      </div>

      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full border-b border-brand-ink/20 bg-transparent pb-2 text-base text-hero-text placeholder:text-brand-ink-light focus:border-brand-primary focus:outline-none"
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone no"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border-b border-brand-ink/20 bg-transparent pb-2 text-base text-hero-text placeholder:text-brand-ink-light focus:border-brand-primary focus:outline-none"
        />
      </div>

      <div className="relative">
        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          rows={6}
          required
          className="w-full resize-none border-b border-brand-ink/20 bg-transparent pb-2 text-base text-hero-text placeholder:text-brand-ink-light focus:border-brand-primary focus:outline-none"
        />
        <span className="absolute bottom-2 right-0 text-xs text-brand-ink-light">
          {formData.comment.length}
        </span>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-hero-bg px-6 py-3 text-base font-medium text-hero-text transition-colors hover:bg-hero-bg/90 md:w-auto"
      >
        Submit
      </button>
    </motion.form>
  );
}
