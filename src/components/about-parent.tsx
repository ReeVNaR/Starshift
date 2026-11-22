"use client";

import { Cpu, TrendingUp, Rocket } from "lucide-react";

export function AboutParent() {
    const pillars = [
        {
            icon: Cpu,
            title: "Shared AI & Tech Infrastructure",
            description: "Every business under Starshift benefits from our proprietary conversational voice models, autonomous workflows, and high-performance cloud backbones.",
        },
        {
            icon: TrendingUp,
            title: "Long-Term Strategic Capital",
            description: "We deploy permanent capital with a multi-decade horizon, prioritizing cash-flow sustainability, operational discipline, and lasting market advantages.",
        },
        {
            icon: Rocket,
            title: "Venture Foundry & Incubation",
            description: "We conceptualize and launch high-conviction startups in-house, pairing technical operators with centralized resources to accelerate market dominance.",
        },
    ];

    return (
        <section id="about" className="relative pt-16 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/[0.06]">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container max-w-5xl mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
                        The Parent Enterprise
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-4">
                        How Starshift Operates
                    </h2>

                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                        We provide the institutional balance sheet, technical firepower, and operational framework so our independent businesses can move fast and lead their markets.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
                    {pillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className="relative rounded-2xl p-7 backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.2] transition-colors duration-200 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 mb-5">
                                        <Icon className="w-5 h-5" />
                                    </div>

                                    <h3 className="text-lg font-bold font-heading text-white mb-2">
                                        {pillar.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                                        {pillar.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
