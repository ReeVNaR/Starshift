"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery & Content",
        description: "We learn about your business, services, FAQs, pricing, and branding, and decide what your AI assistant should handle.",
        color: "text-primary"
    },
    {
        number: "02",
        title: "Build & Connect",
        description: "We design your website (or integrate into your existing one), set up the AI voice agent, and connect advanced automations.",
        color: "text-secondary"
    },
    {
        number: "03",
        title: "Launch & Optimize",
        description: "We go live, test with real visitors, and refine flows and responses based on real conversations and leads.",
        color: "text-green-500"
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        From idea to AI-powered website <br />
                        in 3 simple steps
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pt-8 text-center group"
                        >
                            {/* Number Node */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-background rounded-full flex items-center justify-center border-4 border-background z-10">
                                <span className={`text-5xl font-bold font-heading ${step.color}`}>{step.number}</span>
                            </div>

                            <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                                <h3 className="text-xl font-bold mb-4 font-heading">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
