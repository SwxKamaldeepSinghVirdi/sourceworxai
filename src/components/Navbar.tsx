"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  RoomOSLockup,
  ZTDLogo,
  SingularityMark,
} from "./BrandMarks";
import { StatusChip } from "./StatusChip";
import { GROWTH_SOLUTIONS } from "@/data/solutions";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Platform", href: "/platform" },
  { label: "Security", href: "/security" },
  { label: "Resources", href: "/resources" },
];

export function Navbar() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (
        megaContainerRef.current &&
        !megaContainerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCEFED] bg-white text-ink">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center py-1 focus-visible:outline-2 focus-visible:outline-[#0D8A7B]"
          aria-label="SourceWorx AI home"
        >
          <Image
            src="/logo.png"
            alt="SourceWorx AI"
            width={280}
            height={72}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
              pathname === "/"
                ? "bg-[#E5F7FA] font-semibold text-ink"
                : "font-medium text-ink hover:bg-[#F0FAFC] hover:text-[#0B7A6E]"
            }`}
          >
            Home
          </Link>

          {/* What we do mega menu trigger */}
          <div
            ref={megaContainerRef}
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMegaOpen((prev) => !prev)}
              aria-expanded={megaOpen}
              aria-controls="what-we-do-mega-menu"
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors ${
                megaOpen ||
                pathname.startsWith("/growth") ||
                pathname.startsWith("/productivity") ||
                pathname.startsWith("/governance")
                  ? "bg-[#E5F7FA] font-semibold text-ink"
                  : "font-medium text-ink hover:bg-[#F0FAFC] hover:text-[#0B7A6E]"
              }`}
            >
              <span>What we do</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-150 ${
                  megaOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  id="what-we-do-mega-menu"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="fixed inset-x-0 top-16 z-50 border-b border-slate-200 bg-white text-ink shadow-xl"
                >
                  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-3 lg:px-8">
                    {/* Column 1: GrowthWorx */}
                    <div className="border-t-2 border-teal pt-4">
                      <Link
                        href="/growth"
                        className="group block"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-teal-deep">
                            01 · GrowthWorx · AI for Growth
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 text-teal-deep transition-transform group-hover:translate-x-0.5" />
                        </div>
                        <p className="mt-1 text-xs text-slate-600">
                          Industry AI applications that win revenue.
                        </p>
                      </Link>
                      <ul className="mt-4 space-y-2">
                        {GROWTH_SOLUTIONS.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={`/solutions/${item.slug}`}
                              className="flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-slate-50"
                            >
                              <span className="font-medium text-ink">
                                {item.name}
                              </span>
                              <StatusChip status={item.status} compact />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: FlowWorx */}
                    <div className="border-t-2 border-flow pt-4">
                      <Link href="/productivity" className="group block">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-flow-deep">
                            02 · FlowWorx · AI for Productivity
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 text-flow-deep transition-transform group-hover:translate-x-0.5" />
                        </div>
                        <p className="mt-1 text-xs text-slate-600">
                          Platforms that make delivery faster and sharper.
                        </p>
                      </Link>
                      <div className="mt-4 space-y-3">
                        <Link
                          href="/solutions/roomos"
                          className="block rounded-lg border border-slate-200 p-3 transition-colors hover:border-flow hover:bg-flow-tint/40"
                        >
                          <RoomOSLockup variant="light" className="text-sm" />
                          <p className="mt-1 text-xs text-slate-600">
                            The room that thinks, speaks, decides and acts.
                          </p>
                        </Link>
                        <Link
                          href="/solutions/ztd"
                          className="block rounded-lg border border-slate-200 p-3 transition-colors hover:border-flow hover:bg-flow-tint/40"
                        >
                          <ZTDLogo variant="light" compact />
                          <p className="mt-1.5 text-xs text-slate-600">
                            Deploy and migrate enterprise platforms with AI, inside your SI practice.
                          </p>
                        </Link>
                      </div>
                    </div>

                    {/* Column 3: TrustWorx */}
                    <div className="border-t-2 border-trust pt-4">
                      <Link href="/governance" className="group block">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-trust-deep">
                            03 · TrustWorx · AI Governance
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 text-trust-deep transition-transform group-hover:translate-x-0.5" />
                        </div>
                        <p className="mt-1 text-xs text-slate-600">
                          Every model and agent visible, controlled and provable.
                        </p>
                      </Link>
                      <div className="mt-4 space-y-3">
                        <Link
                          href="/solutions/singularity"
                          className="block rounded-lg border border-slate-200 p-3 transition-colors hover:border-trust hover:bg-trust-tint/40"
                        >
                          <SingularityMark variant="light" compact />
                          <p className="mt-1.5 text-xs text-slate-600">
                            Map, sense, direct, prove and evolve every model, agent and tool.
                          </p>
                        </Link>
                        <Link
                          href="/security"
                          className="flex items-start gap-2.5 rounded-lg border border-slate-200 p-3 transition-colors hover:border-trust hover:bg-trust-tint/40"
                        >
                          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-trust-deep" />
                          <div>
                            <span className="block text-sm font-semibold text-ink">
                              Security and trust
                            </span>
                            <span className="mt-0.5 block text-xs text-slate-600">
                              Least access, in-path policy and evidence by default.
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.slice(1).map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active
                    ? "bg-[#E5F7FA] font-semibold text-ink"
                    : "font-medium text-ink hover:bg-[#F0FAFC] hover:text-[#0B7A6E]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#009990] to-[#00746B] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#00857A]/20 transition-all hover:from-[#00857D] hover:to-[#00635B]"
          >
            <span>Request a briefing</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-full p-2 text-ink hover:bg-[#F0FAFC] hover:text-[#0B7A6E] lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[#DCEFED] bg-white text-ink lg:hidden"
          >
            <div className="max-h-[calc(100vh-4rem)] space-y-6 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link
                  href="/"
                  className="rounded-lg border border-[#DCEFED] px-3 py-2 font-medium text-ink hover:bg-[#F4FBFA]"
                >
                  Home
                </Link>
                <Link
                  href="/solutions"
                  className="rounded-lg border border-[#DCEFED] px-3 py-2 font-medium text-ink hover:bg-[#F4FBFA]"
                >
                  Solutions
                </Link>
                <Link
                  href="/platform"
                  className="rounded-lg border border-[#DCEFED] px-3 py-2 font-medium text-ink hover:bg-[#F4FBFA]"
                >
                  Platform
                </Link>
                <Link
                  href="/security"
                  className="rounded-lg border border-[#DCEFED] px-3 py-2 font-medium text-ink hover:bg-[#F4FBFA]"
                >
                  Security
                </Link>
                <Link
                  href="/resources"
                  className="rounded-lg border border-[#DCEFED] px-3 py-2 font-medium text-ink hover:bg-[#F4FBFA]"
                >
                  Resources
                </Link>
                <Link
                  href="/about"
                  className="rounded-lg border border-[#DCEFED] px-3 py-2 font-medium text-ink hover:bg-[#F4FBFA]"
                >
                  About
                </Link>
              </div>

              {/* Three labelled groups */}
              <div className="space-y-5">
                <div className="border-l-2 border-teal pl-3">
                  <Link
                    href="/growth"
                    className="block font-mono text-xs font-bold uppercase tracking-wider text-teal-deep"
                  >
                    GrowthWorx · AI for Growth
                  </Link>
                  <ul className="mt-2 space-y-1.5">
                    {GROWTH_SOLUTIONS.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/solutions/${item.slug}`}
                          className="flex items-center justify-between py-1 text-sm text-slate-700 hover:text-ink"
                        >
                          <span>{item.name}</span>
                          <span className="font-mono text-[10px] text-slate-500">
                            {item.status}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-2 border-flow pl-3">
                  <Link
                    href="/productivity"
                    className="block font-mono text-xs font-bold uppercase tracking-wider text-flow-deep"
                  >
                    FlowWorx · AI for Productivity
                  </Link>
                  <ul className="mt-2 space-y-1.5">
                    <li>
                      <Link
                        href="/solutions/roomos"
                        className="block py-1 text-sm text-slate-700 hover:text-ink"
                      >
                        RoomOS AI
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/ztd"
                        className="block py-1 text-sm text-slate-700 hover:text-ink"
                      >
                        ZTD · Zero Touch Deployment
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-trust pl-3">
                  <Link
                    href="/governance"
                    className="block font-mono text-xs font-bold uppercase tracking-wider text-trust-deep"
                  >
                    TrustWorx · AI Governance
                  </Link>
                  <ul className="mt-2 space-y-1.5">
                    <li>
                      <Link
                        href="/solutions/singularity"
                        className="block py-1 text-sm text-slate-700 hover:text-ink"
                      >
                        Singularity
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/security"
                        className="block py-1 text-sm text-slate-700 hover:text-ink"
                      >
                        Security and trust
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#009990] to-[#00746B] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#00857A]/20 transition-all hover:from-[#00857D] hover:to-[#00635B]"
              >
                <span>Request a briefing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

