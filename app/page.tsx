export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-[#E6E8EB] mb-4">
        Abdulazeez Alani
      </h1>
      <p className="max-w-xl text-lg text-[#E6E8EB]/80 mb-2">
        What design approved is what ships — pixel for pixel, not close enough.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="https://www.linkedin.com/in/abdulazeez-alani-3624901a0" target="_blank" 
           className="text-[#4C8BF5] hover:text-[#7ED9C3]">
          LinkedIn
        </a>
        <a href="https://github.com/Abdulazeez1010" target="_blank" 
           className="text-[#4C8BF5] hover:text-[#7ED9C3]">
          GitHub
        </a>
        <a href="/cv.pdf" target="_blank" 
           className="text-[#4C8BF5] hover:text-[#7ED9C3]">
          CV
        </a>
        <a href="https://calendly.com/alani-abdulazeez-akinpelumi/30min" target="_blank" 
           className="text-[#4C8BF5] hover:text-[#7ED9C3]">
          Book a Call
        </a>
      </div>
    </main>
  );
}