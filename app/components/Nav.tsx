"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" aria-label="Abdulazeez Alani home" className="shrink-0">
        <Image
          src="/icon.svg"
          alt=""
          width={48}
          height={48}
          priority
          className="h-12 w-12 md:h-16 md:w-16"
        />
      </Link>

      <nav
        aria-label="Primary navigation"
        className="flex items-center gap-1 rounded border border-[#E6E8EB]/10 bg-[#0D1117]/55 p-1 text-sm text-[#E6E8EB]/65 backdrop-blur"
      >
        {links.map((link) => {
          const isActive = isActivePath(pathname, link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "rounded px-3 py-2 font-bold text-[#4C8BF5]"
                  : "rounded px-3 py-2 transition hover:bg-[#E6E8EB]/5 hover:text-[#7ED9C3]"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}