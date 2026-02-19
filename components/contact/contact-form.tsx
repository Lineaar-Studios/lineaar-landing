"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "47cbd678-fe39-4395-9da4-3d0966fd701f",
          ...formData,
          from_name: "Lineaar Studios Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          comment: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
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
          disabled={status === "loading"}
          className="w-full border-b border-brand-ink/20 bg-transparent pb-2 text-base text-hero-text placeholder:text-brand-ink-light focus:border-brand-primary focus:outline-none disabled:opacity-50"
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
          disabled={status === "loading"}
          className="w-full border-b border-brand-ink/20 bg-transparent pb-2 text-base text-hero-text placeholder:text-brand-ink-light focus:border-brand-primary focus:outline-none disabled:opacity-50"
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
          disabled={status === "loading"}
          className="w-full border-b border-brand-ink/20 bg-transparent pb-2 text-base text-hero-text placeholder:text-brand-ink-light focus:border-brand-primary focus:outline-none disabled:opacity-50"
        />
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone no"
          value={formData.phone}
          onChange={handleChange}
          disabled={status === "loading"}
          className="w-full border-b border-brand-ink/20 bg-transparent pb-2 text-base text-hero-text placeholder:text-brand-ink-light focus:border-brand-primary focus:outline-none disabled:opacity-50"
        />
      </div>

      <div className="relative">
        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          disabled={status === "loading"}
          rows={6}
          required
          className="w-full resize-none border-b border-brand-ink/20 bg-transparent pb-2 text-base text-hero-text placeholder:text-brand-ink-light focus:border-brand-primary focus:outline-none disabled:opacity-50"
        />
        <span className="absolute bottom-2 right-0 text-xs text-brand-ink-light">
          {formData.comment.length}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-hero-bg px-6 py-3 text-base font-medium text-hero-text transition-colors hover:bg-hero-bg/90 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </button>

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm text-green-500"
          >
            <CheckCircle2 className="h-4 w-4" />
            Message sent successfully!
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm text-red-500"
          >
            <AlertCircle className="h-4 w-4" />
            Something went wrong. Please try again.
          </motion.div>
        )}
      </div>
    </motion.form>
  );
}
