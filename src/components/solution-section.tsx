"use client";

import { motion } from "framer-motion";
import { Mic, Layout, Settings } from "lucide-react";

const pillars = [
    {
        icon: Mic,
        title: "AI Voice Concierge",
        color: "text-primary",
        points: [
            "A voice agent embedded on your website",
            "Greets visitors, answers FAQs, and captures leads",
            "Can ask questions, confirm details, and hand off to your team"
        ]
    },
    {
        icon: Layout,
        title: "Conversion-Optimized Website",
        color: "text-secondary",
        points: [
            "Clean, modern, mobile-first design",
            "Clear CTAs for booking, calling, or requesting a quote",
            "Structured to reduce drop-offs and increase actions"
        ]
    },
    {
        icon: Settings,
        title: "Automation Hub",
        color: "text-green-500",
        points: [
            "Every lead is pushed into your chosen tools",
            "Trigger follow-up emails or messages automatically",
            "Flexible workflows that grow with your business"
        ]
    }
];

export function SolutionSection() {
    return (
        <section className="py-24 bg-[#0A0E14] relative z-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Meet your AI-powered website + voice concierge
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We combine three powerful layers into one seamless experience:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${pillar.color}`}>
                                <pillar.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold mb-6 font-heading">{pillar.title}</h3>

                            <ul className="space-y-4">
                                {pillar.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
