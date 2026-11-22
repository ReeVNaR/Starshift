"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutParent() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const metrics = [
        { value: "4", label: "Active Ventures" },
        { value: "5", label: "Industry Verticals" },
        { value: "Full-Stack", label: "Technology Group" },
    ];

    return (
        <section id="about" ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/[0.06]">
            <div className="container max-w-4xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-4">
                        About
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-5">
                        How Starshift Operates
                    </h2>

                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        Starshift is the parent company behind an expanding portfolio of technology businesses. We provide capital, infrastructure, and operational support so our ventures can focus on building exceptional products and leading their markets.
                    </p>
                </motion.div>

                {/* Metric strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.04]"
                >
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="bg-[#0B0F17] px-6 py-7 sm:py-8 text-center"
                        >
                            <p className="text-2xl sm:text-3xl font-bold text-white font-heading mb-1">
                                {metric.value}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-400">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
