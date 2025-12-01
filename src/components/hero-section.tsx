"use client";


import { motion } from "framer-motion";
import { GlowingButton } from "@/components/ui/glowing-button";
import { Mic, Settings, Globe, Zap, MessageSquare, BarChart } from "lucide-react";
import Link from "next/link";

import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading leading-[1.2] text-white">
                        Turn Your Website Into a <br />
                        <span className="text-primary drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">24/7 AI Sales & Support Assistant</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                        We build conversion-focused websites powered by AI voice agents and automations, so your business can greet, answer, and book customers on autopilot 24/7.
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Mic className="w-5 h-5 text-primary" />
                            <span className="font-medium">AI Voice Agent on Your Website</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Settings className="w-5 h-5 text-primary" />
                            <span className="font-medium">Workflow Automations with Starshift</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Globe className="w-5 h-5 text-primary" />
                            <span className="font-medium">Built for Modern Service Businesses</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <SmoothScrollLink href="#contact">
                            <GlowingButton className="px-8 py-6 text-base font-semibold">
                                Book a Free 15 Min Demo
                            </GlowingButton>
                        </SmoothScrollLink>
                        <SmoothScrollLink href="#pricing" className="px-8 py-3.5 text-base font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary/10 hover:scale-105 transition-all">
                            See Pricing
                        </SmoothScrollLink>
                    </div>
                </div>

                {/* Right Content (Waveform Visual) */}
                {/* Right Content (Cozy System Visual) */}
                <div className="relative h-[500px] w-full flex items-center justify-center">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />

                    {/* Connecting Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="currentColor" strokeWidth="2" className="text-primary" />
                        <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="2" className="text-primary" />
                        <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="2" className="text-primary" />
                        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="2" className="text-primary" />
                    </svg>

                    {/* Center Core */}
                    <motion.div
                        className="relative z-20 w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-md border border-primary/20 shadow-[0_0_50px_rgba(0,191,255,0.2)] cursor-pointer hover:bg-primary/20 transition-colors"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        onClick={() => {
                            const widget = document.querySelector("elevenlabs-convai");
                            const button = widget?.shadowRoot?.querySelector("button");
                            if (button) {
                                (button as HTMLElement).click();
                            }
                        }}
                    >
                        <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-20" />
                        <Mic className="w-12 h-12 text-primary" />
                    </motion.div>

                    {/* Floating Items - Distributed to fill space */}

                    {/* Top Left - Analytics */}
                    <motion.div
                        className="absolute top-[10%] left-[5%] md:left-[10%] p-4 rounded-2xl bg-background/40 border border-white/10 backdrop-blur-xl shadow-lg flex items-center gap-3 max-w-[200px]"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                    >
                        <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                            <BarChart className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Performance</p>
                            <p className="text-sm font-bold text-white">99.9% Accuracy</p>
                        </div>
                    </motion.div>

                    {/* Top Right - Availability */}
                    <motion.div
                        className="absolute top-[15%] right-[5%] md:right-[10%] p-4 rounded-2xl bg-background/40 border border-white/10 backdrop-blur-xl shadow-lg flex items-center gap-3 max-w-[200px]"
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                            <Globe className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Status</p>
                            <p className="text-sm font-bold text-white">Online 24/7</p>
                        </div>
                    </motion.div>

                    {/* Bottom Left - Automations */}
                    <motion.div
                        className="absolute bottom-[15%] left-[5%] md:left-[10%] p-4 rounded-2xl bg-background/40 border border-white/10 backdrop-blur-xl shadow-lg flex items-center gap-3 max-w-[200px]"
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                        <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                            <Settings className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Workflows</p>
                            <p className="text-sm font-bold text-white">Automated</p>
                        </div>
                    </motion.div>

                    {/* Bottom Right - Instant Reply */}
                    <motion.div
                        className="absolute bottom-[10%] right-[5%] md:right-[10%] p-4 rounded-2xl bg-background/40 border border-white/10 backdrop-blur-xl shadow-lg flex items-center gap-3 max-w-[200px]"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    >
                        <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Response</p>
                            <p className="text-sm font-bold text-white">Instant</p>
                        </div>
                    </motion.div>

                    {/* Extra Floating Element - Center Top */}
                    <motion.div
                        className="absolute top-[5%] left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary text-xs font-medium"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    >
                        AI Active
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
