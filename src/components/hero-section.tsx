"use client";

import { motion } from "framer-motion";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";
import { ArrowDown, Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-24 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 overflow-hidden">
            {/* Cinematic Ambient Radial Depth */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[850px] h-[380px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none" />

            {/* Top Spacer for floating navbar balance */}
            <div className="h-2 sm:h-4 w-full" aria-hidden="true" />

            {/* Center Content: Main Headline, Subtitle, and CTAs */}
            <div className="container max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 w-full my-auto py-4">

                {/* Eyebrow Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-5 sm:mb-7 shadow-sm"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-300 font-medium">
                        Starshift Enterprise Group
                    </span>
                </motion.div>

                {/* Hero Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold font-heading text-white tracking-tight leading-[1.08] max-w-4xl"
                >
                    Building the next generation of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 animate-gradient-text inline-block">
                        technology companies
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="mt-5 sm:mt-7 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed font-normal px-2"
                >
                    We build, operate, and invest in independent technology businesses across commerce, automation, fintech, and enterprise software.
                </motion.p>

                {/* Dual Action CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto px-4 sm:px-0"
                >
                    <SmoothScrollLink
                        href="#ventures"
                        className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-full transition-all duration-200 text-center shadow-[0_0_25px_rgba(0,191,255,0.28)] hover:shadow-[0_0_35px_rgba(0,191,255,0.45)] hover:scale-[1.01]"
                    >
                        Explore Our Ventures
                    </SmoothScrollLink>

                    <SmoothScrollLink
                        href="#about"
                        className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-medium text-slate-300 hover:text-white rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-200 text-center"
                    >
                        About Starshift
                    </SmoothScrollLink>
                </motion.div>
            </div>

            {/* Bottom Anchor: Portfolio Quick Tags & Scroll Cue */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative z-10 w-full max-w-4xl mx-auto flex items-center justify-between pt-4 pb-2 border-t border-white/[0.05] text-xs text-slate-500"
            >
                {/* 4 Venture Indicators - Desktop / Tablet */}
                <div className="hidden sm:flex items-center gap-3 sm:gap-4 font-mono text-[10px] sm:text-[11px] text-slate-400">
                    <span className="text-slate-500">Portfolio:</span>
                    <SmoothScrollLink href="#ventures" className="hover:text-cyan-400 transition-colors">01 TINVO</SmoothScrollLink>
                    <span className="text-slate-700">•</span>
                    <SmoothScrollLink href="#ventures" className="hover:text-cyan-400 transition-colors">02 SWAS</SmoothScrollLink>
                    <span className="text-slate-700">•</span>
                    <SmoothScrollLink href="#ventures" className="hover:text-cyan-400 transition-colors">03 DADASHRI</SmoothScrollLink>
                    <span className="text-slate-700">•</span>
                    <SmoothScrollLink href="#ventures" className="hover:text-cyan-400 transition-colors">04 ALGO</SmoothScrollLink>
                </div>

                {/* Mobile Portfolio Indicator */}
                <div className="sm:hidden font-mono text-[11px] text-slate-400">
                    <span>4 Operating Ventures</span>
                </div>

                {/* Animated Scroll Down Indicator */}
                <SmoothScrollLink
                    href="#ventures"
                    className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white transition-colors group cursor-pointer pr-16 sm:pr-0"
                >
                    <span>Explore</span>
                    <motion.span
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                    </motion.span>
                </SmoothScrollLink>
            </motion.div>
        </section>
    );
}
