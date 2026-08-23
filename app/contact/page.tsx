"use client";

import { useState } from "react";
import Nav from "../components/Nav";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  
  
  async function handleSubmit(
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) {
      setStatus("error");
      setErrorMsg("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email so I can reply.");
      return;
    }

    if (!message) {
      setStatus("error");
      setErrorMsg("Please add a message before sending.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch("https://formspree.io/f/mqpzwgyw", {
        method: form.method,
        body: data,
        headers: { 
          Accept: "application/json"
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("sent");
      form.reset();

    } catch {
      setStatus("error");
      setErrorMsg("Couldn't reach the server - check your connection and try again.");
    }
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6">
      <Nav />

      <div className="mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-md flex-col justify-center px-6 py-16">
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
          // noValidate
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
      </div>
    </main>
  );
}