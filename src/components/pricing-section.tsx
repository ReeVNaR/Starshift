"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowingButton } from "@/components/ui/glowing-button";

const plans = [
    {
        name: "Website Only",
        price: "$2,500",
        subtext: "one-time",
        description: "For businesses that need a solid online presence.",
        features: [
            "Modern, responsive website",
            "Conversion-focused layout & copy",
            "Basic contact / inquiry form",
            "On-page SEO basics",
            "1–2 rounds of revisions"
        ],
        cta: "Get Website",
        popular: false
    },
    {
        name: "Website + AI Voice Concierge",
        price: "$3,500",
        subtext: "setup + $199/mo",
        description: "Most popular – turn your site into a real assistant.",
        features: [
            "Everything in Website Only",
            "AI voice agent on your website",
            "Custom FAQ + service training",
            "Lead capture and notifications",
            "Integration with Google Sheets / email",
            "Launch support + tweaks"
        ],
        cta: "Book a Demo",
        popular: true
    },
    {
        name: "Custom Automation",
        price: "Custom",
        subtext: "contact for details",
        description: "For teams that want deeper workflows.",
        features: [
            "Custom advanced automations",
            "Multi-step flows (booking, etc.)",
            "Integration with CRMs & APIs",
            "Priority support and consultation",
            "Dedicated account manager"
        ],
        cta: "Talk to Us",
        popular: false
    }
];

export function PricingSection() {
    return (
        <section id="pricing" className="py-24 bg-[#0A0E14] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Plans for where your business is today
                    </h2>
                    <p className="text-muted-foreground">
                        Choose the plan that fits your needs. All plans include a free 15-minute consultation.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-3xl border ${plan.popular
                                ? "bg-white/10 border-primary shadow-[0_0_40px_rgba(0,191,255,0.15)] scale-105 z-10"
                                : "bg-white/5 border-white/10"
                                } backdrop-blur-md flex flex-col h-full`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                {plan.popular && <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Best Value</span>}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                                    <span className="text-sm text-muted-foreground">{plan.subtext}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-green-500" />
                                        </div>
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {plan.popular ? (
                                <GlowingButton className="w-full justify-center">{plan.cta}</GlowingButton>
                            ) : (
                                <Button variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white py-6 transition-all">
                                    {plan.cta}
                                </Button>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
