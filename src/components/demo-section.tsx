"use client";

import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";
import { GlowingButton } from "@/components/ui/glowing-button";

export function DemoSection() {
    return (
        <section className="py-24 bg-[#0A0E14] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        See the Magic in Action
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Demo Visual/Button */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
                            <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,191,255,0.4)] cursor-pointer hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-white fill-current ml-1" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Watch 1-Min Demo</h3>
                            <p className="text-muted-foreground mb-8">See how the AI handles a real customer call.</p>

                            <GlowingButton
                                className="w-full justify-center text-lg py-6"
                                onClick={() => {
                                    const widget = document.querySelector("elevenlabs-convai");
                                    const button = widget?.shadowRoot?.querySelector("button");
                                    if (button) {
                                        (button as HTMLElement).click();
                                    }
                                }}
                            >
                                Try Live Demo
                            </GlowingButton>
                        </div>
                    </div>

                    {/* Right: Explanation */}
                    <div className="space-y-8">
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Hear how your AI voice concierge greets visitors, answers their questions, and captures leads all in real time.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Natural, conversational interactions",
                                "Instant lead capture and routing",
                                "Seamless handoff to your team"
                            ].map((point, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-lg font-medium">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
