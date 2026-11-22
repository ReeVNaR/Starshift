"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
                {/* Single Sleek Floating Glass Bar */}
                <nav
                    className={`w-full h-13 sm:h-15 md:h-16 rounded-full transition-all duration-300 flex items-center justify-between px-3.5 sm:px-5 md:px-7 backdrop-blur-2xl border ${
                        scrolled
                            ? "bg-[#0B0F17]/90 border-white/[0.12] shadow-2xl"
                            : "bg-[#0E1424]/80 border-white/[0.08] shadow-lg"
                    }`}
                >
                    {/* Left: Starshift Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group flex-shrink-0"
                        onClick={closeMobileMenu}
                    >
                        <div className="relative w-[115px] sm:w-[135px] md:w-[145px] h-7 sm:h-8 md:h-9 transition-transform duration-200 group-hover:opacity-90">
                            <Image
                                src="/logo.png"
                                alt="Starshift Logo"
                                fill
                                className="object-contain object-left"
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
                                className="text-[13px] font-medium text-slate-300 hover:text-white transition-colors tracking-tight"
                            >
                                {link.label}
                            </SmoothScrollLink>
                        ))}
                    </div>

                    {/* Right: Contact CTA & Mobile Toggle */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <Button
                            asChild
                            className="bg-primary hover:bg-primary/90 text-white rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-colors"
                        >
                            <SmoothScrollLink href="#contact" className="flex items-center gap-1 sm:gap-1.5">
                                <span>Get in Touch</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200 hidden xs:inline-block" />
                            </SmoothScrollLink>
                        </Button>

                        {/* Mobile Hamburger Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle navigation menu"
                            className="md:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-4 h-4 text-cyan-400" />
                            ) : (
                                <Menu className="w-4 h-4 text-slate-200" />
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
                            className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl bg-[#0B0F17]/95 backdrop-blur-2xl border border-white/[0.12] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden max-h-[calc(100vh-80px)] overflow-y-auto"
                        >
                            <div className="space-y-1">
                                {navLinks.map((link) => (
                                    <SmoothScrollLink
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.06] transition-all"
                                    >
                                        <span>{link.label}</span>
                                        <ArrowUpRight className="w-4 h-4 text-cyan-400/70" />
                                    </SmoothScrollLink>
                                ))}
                            </div>

                            <div className="pt-3 mt-2 border-t border-white/[0.08]">
                                <Button
                                    asChild
                                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-2.5 font-semibold text-sm shadow-[0_0_20px_rgba(0,191,255,0.4)] border border-cyan-400/30"
                                >
                                    <SmoothScrollLink href="#contact" onClick={closeMobileMenu} className="flex items-center justify-center gap-2">
                                        <span>Get in Touch</span>
                                        <ArrowUpRight className="w-4 h-4 text-cyan-200" />
                                    </SmoothScrollLink>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
