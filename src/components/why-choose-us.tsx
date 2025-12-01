"use client";

import { motion } from "framer-motion";
import { Zap, Target, Wrench, Users } from "lucide-react";

const reasons = [
    {
        icon: Zap,
        title: "Automation-First Mindset",
        description: "We don't just build pages, we design systems around your business.",
        color: "text-primary"
    },
    {
        icon: Target,
        title: "Focused on Conversions",
        description: "Every section exists to get visitors to call, book, or request a quote.",
        color: "text-secondary"
    },
    {
        icon: Wrench,
        title: "Built on Proven Tools",
        description: "AI voice + advanced workflows that are robust and flexible.",
        color: "text-green-500"
    },
    {
        icon: Users,
        title: "Collaborative Process",
        description: "You review flows, messages, and website content before we go live.",
        color: "text-primary"
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Why teams work with us
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${reason.color}`}>
                                <reason.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-lg font-bold mb-2 font-heading">{reason.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
