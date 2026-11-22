"use client";

import { motion } from "framer-motion";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";

export function HeroSection() {
    return (
        <section className="relative min-h-[65vh] sm:min-h-[75vh] flex flex-col justify-center items-center pt-28 sm:pt-36 md:pt-40 pb-14 sm:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 w-full">

                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[11px] sm:text-xs md:text-[13px] uppercase tracking-widest text-slate-400 font-semibold mb-5 sm:mb-7"
                >
                    Starshift Enterprise Group
                </motion.p>

                {/* Hero Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white tracking-tight leading-[1.15] max-w-3xl"
                >
                    The Parent Company Behind{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                        Next-Gen Startups &amp; Businesses
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed font-normal px-2"
                >
                    Starshift builds, operates, and backs an expanding ecosystem of independent technology companies, digital platforms, and modern enterprise solutions.
                </motion.p>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0"
                >
                    <SmoothScrollLink
                        href="#ventures"
                        className="w-full sm:w-auto px-7 py-3 text-sm sm:text-base font-semibold text-white bg-primary hover:bg-primary/90 rounded-full transition-all duration-200 text-center shadow-[0_0_20px_rgba(0,191,255,0.25)] hover:shadow-[0_0_30px_rgba(0,191,255,0.45)] hover:scale-[1.02]"
                    >
                        Explore Our Ventures
                    </SmoothScrollLink>

                    <SmoothScrollLink
                        href="#about"
                        className="w-full sm:w-auto px-7 py-3 text-sm sm:text-base font-medium text-slate-300 hover:text-white rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-200 text-center"
                    >
                        About Starshift
                    </SmoothScrollLink>
                </motion.div>

            </div>
        </section>
    );
}
