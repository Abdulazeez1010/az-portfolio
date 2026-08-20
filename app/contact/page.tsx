"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqpzwgyw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold text-[#E6E8EB] mb-2">
        Convinced? Good - let&apos;s talk.
      </h1>
      <p className="text-[#E6E8EB]/60 mb-8 text-sm">
        Send a message and I&apos;ll get back to you.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text" name="name" placeholder="Your name" required
          className="bg-transparent border border-[#4C8BF5]/30 rounded px-4 py-3 text-[#E6E8EB] placeholder:text-[#E6E8EB]/40 focus:border-[#4C8BF5] outline-none transition"
        />
        <input
          type="email" name="email" placeholder="Your email" required
          className="bg-transparent border border-[#4C8BF5]/30 rounded px-4 py-3 text-[#E6E8EB] placeholder:text-[#E6E8EB]/40 focus:border-[#4C8BF5] outline-none transition"
        />
        <textarea
          name="message" placeholder="What would you like to talk about?" required rows={5}
          className="bg-transparent border border-[#4C8BF5]/30 rounded px-4 py-3 text-[#E6E8EB] placeholder:text-[#E6E8EB]/40 focus:border-[#4C8BF5] outline-none transition"
        />
        <button
          type="submit" disabled={status === "sending"}
          className="bg-[#4C8BF5] text-[#0D1117] font-bold rounded px-4 py-3 hover:bg-[#7ED9C3] transition disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>
        {status === "sent" && (
          <p className="text-[#7ED9C3] text-sm">Message sent - I&apos;ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm">Something went wrong - try again, or email me directly.</p>
        )}
      </form>
    </main>
  );
}