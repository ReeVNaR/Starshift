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
        <section id="about" ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-slate-200/80 bg-white">
            <div className="container max-w-4xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-3">
                        About Starshift
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight mb-5">
                        How Starshift Operates
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        Starshift is the parent company behind an expanding portfolio of technology businesses. We provide capital, infrastructure, and operational support so our ventures can focus on building exceptional products and leading their markets.
                    </p>
                </motion.div>

                {/* Metric strip (White Theme) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)]"
                >
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="bg-white px-6 py-7 sm:py-8 text-center"
                        >
                            <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading mb-1">
                                {metric.value}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-500 font-medium">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
