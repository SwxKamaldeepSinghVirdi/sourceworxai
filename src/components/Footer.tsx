import React from "react";
import Link from "next/link";
import { SourceWorxLogo } from "./BrandMarks";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-6">
            <Link href="/" aria-label="SourceWorx AI home">
              <SourceWorxLogo variant="dark" className="h-8 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              The 360° AI company, built on one governed foundation.
            </p>
            <p className="mt-4 font-mono text-xs font-bold tracking-wide text-teal">
              Where enterprise AI works.
            </p>
          </div>

          {/* Company links */}
          <div className="lg:col-span-6 lg:flex lg:justify-end">
            <div className="w-full max-w-sm">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
                <li>
                  <Link
                    href="/solutions"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    All solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Platform
                  </Link>
                </li>
                <li>
                  <Link
                    href="/platform#partners"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Request a briefing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-slate-400">
          <p>
            © 2026 SourceWorx AI · The 360° AI company · Where enterprise AI works · Built in India, for the enterprise everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}

