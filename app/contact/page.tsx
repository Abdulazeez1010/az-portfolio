"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    if (!name || name.trim().length === 0) {
      setStatus("error");
      setErrorMsg("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email so I can reply.");
      return;
    }

    if (!message || message.trim().length === 0) {
      setStatus("error");
      setErrorMsg("Please add a message before sending.");
      return;
    }

    setStatus("sending");

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
        setErrorMsg("Something went wrong on my end - try again, or email me directly.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Couldn't reach the server - check your connection and try again.");
    }
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6">
      <nav className="absolute top-6 left-6 text-sm">
        <Link href="/" className="text-[#E6E8EB]/70 hover:text-[#4C8BF5] transition">
          ← Home
        </Link>
      </nav>
      <h1 className="text-3xl font-bold text-[#E6E8EB] mb-2">
        Convinced? Good - let&apos;s talk.
      </h1>
      <p className="text-[#E6E8EB]/60 mb-8 text-sm">
        Send a message and I&apos;ll get back to you.
      </p>
      <form
        action="https://formspree.io/f/mqpzwgyw"
        method="POST"
        onSubmit={handleSubmit}
        noValidate
        className="w-full max-w-md flex flex-col gap-4"
      >
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
          <p role="alert" className="text-[#7ED9C3] text-sm">
            Thanks - I&apos;ll be in touch.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="text-red-400 text-sm">
            {errorMsg}
          </p>
        )}
      </form>
    </main>
  );
}