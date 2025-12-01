"use client";

import { motion } from "framer-motion";
import { GlowingButton } from "@/components/ui/glowing-button";
import { ArrowRight } from "lucide-react";
import { HeroMascot } from "@/components/hero-mascot";
import Link from "next/link";

export function CTASection() {
    return (
        <section id="cta" className="py-24 relative z-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                            Ready to Shift <br />
                            <span className="text-primary drop-shadow-[0_0_30px_rgba(0,191,255,0.6)]">Your Stars?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Let's talk about how AI can transform your business from a local player into a galactic force.
                        </p>
                        <Link href="#contact">
                            <GlowingButton className="text-xl px-10 py-6">
                                Schedule a Free Consultation <ArrowRight className="w-6 h-6 ml-2" />
                            </GlowingButton>
                        </Link>
                    </div>

                    {/* Sparky Pointing (Reusing HeroMascot but positioned differently or we can just use it as is for now) */}
                    <div className="relative w-full max-w-md lg:max-w-lg">
                        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl -z-10" />
                        <HeroMascot />
                    </div>

                </div>
            </div>
        </section>
    );
}
