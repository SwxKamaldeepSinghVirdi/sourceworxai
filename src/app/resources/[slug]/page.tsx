import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LAUNCH_ARTICLES } from "@/data/site-content";
import { ClosingCta } from "@/components/ClosingCta";

export function generateStaticParams() {
  return LAUNCH_ARTICLES.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = LAUNCH_ARTICLES.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article Not Found | SourceWorx" };
  }
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword],
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = LAUNCH_ARTICLES.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <article className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-teal-deep hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Resources</span>
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500">
            <span className="rounded bg-teal-tint px-2 py-0.5 font-bold uppercase text-teal-deep">
              {post.type}
            </span>
            <span>By {post.byline}</span>
            <span>·</span>
            <span>{post.publishedLabel}</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg font-medium text-slate-600">
            {post.summary}
          </p>

          <div className="mt-8 space-y-6 border-t border-slate-200 pt-8 text-base leading-relaxed text-slate-700 sm:text-lg">
            {post.paragraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}

            {post.bulletPoints && (
              <ol className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
                {post.bulletPoints.map((bp, idx) => (
                  <li key={bp.heading} className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-teal-deep">
                      0{idx + 1}
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-ink">
                        {bp.heading}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{bp.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <Link
              href={post.ctaHref}
              className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
            >
              <span>{post.ctaLabel}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      <ClosingCta />
    </div>
  );
}

