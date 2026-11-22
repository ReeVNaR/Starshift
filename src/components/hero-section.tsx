"use client";

import { motion } from "framer-motion";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center pt-24 sm:pt-28 pb-8 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="container max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 w-full">

                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-6 sm:mb-8"
                >
                    Starshift Enterprise Group
                </motion.p>

                {/* Hero Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold font-heading text-white tracking-tight leading-[1.1] max-w-[720px]"
                >
                    Building the next generation of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 animate-gradient-text">
                        technology companies
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="mt-5 sm:mt-7 text-sm sm:text-base md:text-lg text-slate-400 max-w-xl leading-relaxed"
                >
                    We build, operate, and invest in independent technology businesses across commerce, automation, fintech, and enterprise software.
                </motion.p>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0"
                >
                    <SmoothScrollLink
                        href="#ventures"
                        className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-full transition-all duration-200 text-center shadow-[0_0_20px_rgba(0,191,255,0.2)] hover:shadow-[0_0_30px_rgba(0,191,255,0.4)]"
                    >
                        Explore Our Ventures
                    </SmoothScrollLink>

                    <SmoothScrollLink
                        href="#about"
                        className="w-full sm:w-auto px-7 py-3 text-sm font-medium text-slate-300 hover:text-white rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all duration-200 text-center"
                    >
                        About Starshift
                    </SmoothScrollLink>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}
