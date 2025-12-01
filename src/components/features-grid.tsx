"use client";

import { motion } from "framer-motion";
import { Mic, MessageSquare, UserPlus, Database, Share2, LayoutTemplate, ShieldCheck, Rocket } from "lucide-react";

const features = [
    {
        title: "24/7 AI Receptionist",
        description: "Always available to welcome visitors, answer questions, and collect details.",
        icon: Mic,
        size: "large",
        color: "text-primary"
    },
    {
        title: "Natural Voice Interactions",
        description: "Human-like voice powered by advanced text-to-speech.",
        icon: MessageSquare,
        size: "small",
        color: "text-primary"
    },
    {
        title: "Lead & Booking Capture",
        description: "Collects name, contact, and intent instantly.",
        icon: UserPlus,
        size: "small",
        color: "text-secondary"
    },
    {
        title: "Centralised Lead Log",
        description: "Track every interaction in a simple dashboard.",
        icon: Database,
        size: "large",
        color: "text-green-500"
    },
    {
        title: "Seamless Integrations",
        description: "Connect to Google Sheets, Gmail, CRMs, messaging APIs, and more.",
        icon: Share2,
        size: "large",
        color: "text-green-500"
    },
    {
        title: "Works With New or Existing Sites",
        description: "We can build a new site or integrate into your current one.",
        icon: LayoutTemplate,
        size: "small",
        color: "text-primary"
    },
    {
        title: "Secure & Configurable",
        description: "You control what the AI can and can't say.",
        icon: ShieldCheck,
        size: "small",
        color: "text-secondary"
    },
    {
        title: "Done-For-You Setup",
        description: "We handle the tech; you get a ready-to-use system.",
        icon: Rocket,
        size: "large",
        color: "text-primary"
    }
];

export function FeaturesGrid() {
    return (
        <section id="features" className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Everything you need to turn <br />
                        visitors into customers
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className={`
                p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 group
                ${feature.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}
              `}
                        >
                            <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${feature.color}`}>
                                <feature.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold mb-2 font-heading">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
