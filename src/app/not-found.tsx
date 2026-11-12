import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-teal-deep">
          404 · Page not found
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          This page isn&apos;t on the governed path.
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Return to the SourceWorx home page or explore solutions by pillar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            <span>Back to Home</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            <span>See all solutions</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

