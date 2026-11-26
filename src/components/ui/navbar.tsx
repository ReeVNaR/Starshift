"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setScrolled(latest > 20);
        });
    }, [scrollY]);

    const navLinks = [
        { label: "Ventures", href: "#ventures" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ];

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
            <div className="relative w-full max-w-4xl pointer-events-auto">
                {/* Single Sleek Floating Glass Bar (Light Theme) */}
                <nav
                    className={`w-full h-13 sm:h-15 md:h-16 rounded-full transition-all duration-300 flex items-center justify-between px-3.5 sm:px-5 md:px-7 backdrop-blur-2xl border ${
                        scrolled
                            ? "bg-white/90 border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                            : "bg-white/75 border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                    }`}
                >
                    {/* Left: Starshift Logo (Inverted for Crisp White Theme) */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group flex-shrink-0"
                        onClick={closeMobileMenu}
                    >
                        <div className="relative w-[115px] sm:w-[135px] md:w-[145px] h-7 sm:h-8 md:h-9 transition-transform duration-200 group-hover:opacity-85">
                            <Image
                                src="/logo.png"
                                alt="Starshift Logo"
                                fill
                                className="invert object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Center: Minimalist Nav Links (Desktop) */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <SmoothScrollLink
                                key={link.href}
                                href={link.href}
                                className="text-[13px] font-medium text-slate-600 hover:text-slate-950 transition-colors tracking-tight"
                            >
                                {link.label}
                            </SmoothScrollLink>
                        ))}
                    </div>

                    {/* Right: Contact CTA & Mobile Toggle */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <SmoothScrollLink
                            href="#contact"
                            className="bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-white rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1 sm:gap-1.5 shadow-[0_3px_14px_rgba(2,132,199,0.35)] cursor-pointer"
                        >
                            <span>Get in Touch</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-white hidden xs:inline-block" />
                        </SmoothScrollLink>

                        {/* Mobile Hamburger Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle navigation menu"
                            className="md:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-4 h-4 text-cyan-600" />
                            ) : (
                                <Menu className="w-4 h-4 text-slate-700" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown Drawer */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: -6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: -6 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden max-h-[calc(100vh-80px)] overflow-y-auto"
                        >
                            <div className="space-y-1">
                                {navLinks.map((link) => (
                                    <SmoothScrollLink
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-all"
                                    >
                                        <span>{link.label}</span>
                                        <ArrowUpRight className="w-4 h-4 text-cyan-600" />
                                    </SmoothScrollLink>
                                ))}
                            </div>

                            <div className="pt-3 mt-2 border-t border-slate-100">
                                <SmoothScrollLink
                                    href="#contact"
                                    onClick={closeMobileMenu}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-white rounded-xl py-2.5 font-semibold text-sm shadow-[0_4px_16px_rgba(2,132,199,0.35)] flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>Get in Touch</span>
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </SmoothScrollLink>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
