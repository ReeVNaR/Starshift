"use client";

import { motion } from "framer-motion";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";
import { Starshift3DLogo } from "@/components/ui/starshift-3d-logo";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 lg:px-24 pt-16 sm:pt-24 md:pt-28 pb-4 sm:pb-8 overflow-hidden bg-white">
            {/* Cinematic Ambient Radial Depth (Cyan/Sky on Light Background) */}
            <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[850px] h-[400px] bg-cyan-500/[0.08] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-sky-500/[0.03] to-transparent pointer-events-none" />

            {/* Top Spacer for floating navbar balance */}
            <div className="h-1 sm:h-2 w-full" aria-hidden="true" />

            {/* Two-Column Hero Stage: 3D Logo on Left, Typography & Actions on Right */}
            <div className="container max-w-6xl mx-auto relative z-10 w-full my-auto py-1 sm:py-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-10 items-center">

                    {/* Left Column: 3D Starshift Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -25 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="lg:col-span-5 flex items-center justify-center order-1"
                    >
                        <Starshift3DLogo />
                    </motion.div>

                    {/* Right Column: Hero Headline, Subtitle, and CTAs */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2">

                        {/* Eyebrow Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 backdrop-blur-md mb-4 sm:mb-5 shadow-sm"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-600 font-medium">
                                Starshift Enterprise Group
                            </span>
                        </motion.div>

                        {/* Hero Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-2xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold font-heading text-slate-900 tracking-tight leading-[1.08] max-w-2xl"
                        >
                            Building the next generation of{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 animate-gradient-text inline-block">
                                technology companies
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-slate-600 max-w-xl leading-relaxed font-normal"
                        >
                            We build, operate, and invest in independent technology businesses across commerce, automation, fintech, and enterprise software.
                        </motion.p>

                        {/* Dual Action CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto"
                        >
                            <SmoothScrollLink
                                href="#ventures"
                                className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 rounded-full transition-all duration-200 text-center shadow-[0_4px_20px_rgba(2,132,199,0.35)] hover:shadow-[0_6px_25px_rgba(2,132,199,0.45)] hover:scale-[1.01] cursor-pointer"
                            >
                                Explore Our Ventures
                            </SmoothScrollLink>

                            <SmoothScrollLink
                                href="#about"
                                className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base font-medium text-slate-700 hover:text-slate-950 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 shadow-sm transition-all duration-200 text-center cursor-pointer"
                            >
                                About Starshift
                            </SmoothScrollLink>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Anchor: Portfolio Quick Tags & Scroll Cue */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-between pt-4 pb-2 border-t border-slate-200/80 text-xs text-slate-500"
            >
                {/* 4 Venture Indicators - Desktop / Tablet */}
                <div className="hidden sm:flex items-center gap-3 sm:gap-4 font-mono text-[10px] sm:text-[11px] text-slate-600">
                    <span className="text-slate-400">Portfolio:</span>
                    <SmoothScrollLink href="#ventures" className="hover:text-cyan-600 transition-colors">01 TINVO</SmoothScrollLink>
                    <span className="text-slate-300">•</span>
                    <SmoothScrollLink href="#ventures" className="hover:text-cyan-600 transition-colors">02 SWAS</SmoothScrollLink>
                    <span className="text-slate-300">•</span>
                    <SmoothScrollLink href="#ventures" className="hover:text-cyan-600 transition-colors">03 DADASHRI</SmoothScrollLink>
                    <span className="text-slate-300">•</span>
                    <SmoothScrollLink href="#ventures" className="hover:text-cyan-600 transition-colors">04 ALGO</SmoothScrollLink>
                </div>

                {/* Mobile Portfolio Indicator */}
                <div className="sm:hidden font-mono text-[11px] text-slate-600">
                    <span>4 Operating Ventures</span>
                </div>

                {/* Animated Scroll Down Indicator */}
                <SmoothScrollLink
                    href="#ventures"
                    className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-slate-900 transition-colors group cursor-pointer pr-16 sm:pr-0"
                >
                    <span>Explore</span>
                    <motion.span
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-3.5 h-3.5 text-cyan-600 group-hover:translate-y-0.5 transition-transform" />
                    </motion.span>
                </SmoothScrollLink>
            </motion.div>
        </section>
    );
}
