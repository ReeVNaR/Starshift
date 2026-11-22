import Image from "next/image";
import Link from "next/link";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";
import { Twitter, Linkedin, Github, Globe, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#070A10] border-t border-white/[0.08] pt-16 sm:pt-20 pb-12">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

                    {/* Column 1: Brand (5 cols) */}
                    <div className="lg:col-span-5 space-y-5">
                        <Link href="/" className="inline-block">
                            <div className="relative w-[150px] h-9">
                                <Image
                                    src="/logo.png"
                                    alt="Starshift Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                            Starshift is the parent company and operational venture studio powering an expanding family of autonomous technology, software infrastructure, and modern commerce startups.
                        </p>
                    </div>

                    {/* Column 2: Ecosystem (2 cols) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Portfolio</h4>
                        <div className="flex flex-col gap-2.5 text-sm text-slate-400">
                            <SmoothScrollLink href="#ventures" className="hover:text-cyan-400 transition-colors">All Ventures</SmoothScrollLink>
                            <SmoothScrollLink href="#ventures" className="hover:text-cyan-400 transition-colors">AI &amp; Autonomous Tech</SmoothScrollLink>
                            <SmoothScrollLink href="#ventures" className="hover:text-cyan-400 transition-colors">Enterprise SaaS</SmoothScrollLink>
                            <SmoothScrollLink href="#ventures" className="hover:text-cyan-400 transition-colors">Venture Studio</SmoothScrollLink>
                        </div>
                    </div>

                    {/* Column 3: Group Model (2 cols) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Holding Group</h4>
                        <div className="flex flex-col gap-2.5 text-sm text-slate-400">
                            <SmoothScrollLink href="#model" className="hover:text-cyan-400 transition-colors">Operating Model</SmoothScrollLink>
                            <SmoothScrollLink href="#sectors" className="hover:text-cyan-400 transition-colors">Strategic Sectors</SmoothScrollLink>
                            <SmoothScrollLink href="#vision" className="hover:text-cyan-400 transition-colors">Group Philosophy</SmoothScrollLink>
                            <SmoothScrollLink href="#contact" className="hover:text-cyan-400 transition-colors">Corporate Governance</SmoothScrollLink>
                        </div>
                    </div>

                    {/* Column 4: Engagement & Legal (3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Engagement</h4>
                        <div className="flex flex-col gap-2.5 text-sm text-slate-400">
                            <SmoothScrollLink href="#contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                                <span>Pitch a Startup</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                            </SmoothScrollLink>
                            <SmoothScrollLink href="#contact" className="hover:text-cyan-400 transition-colors">Strategic Partnerships</SmoothScrollLink>
                            <SmoothScrollLink href="#contact" className="hover:text-cyan-400 transition-colors">Investor Relations</SmoothScrollLink>
                        </div>
                        <div className="flex items-center gap-4 pt-3 text-slate-400">
                            <Link href="#" className="hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="hover:text-cyan-400 transition-colors" aria-label="Twitter">
                                <Twitter className="w-4 h-4" />
                            </Link>
                            <Link href="#" className="hover:text-cyan-400 transition-colors" aria-label="Global">
                                <Globe className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                    <p>
                        © {new Date().getFullYear()} Starshift Enterprise Group. All rights reserved. Operating as a diversified parent holding enterprise and venture studio.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="hover:text-slate-300 cursor-pointer">Privacy Framework</span>
                        <span className="hover:text-slate-300 cursor-pointer">Governance</span>
                        <span className="hover:text-slate-300 cursor-pointer">Ethics &amp; AI Safety</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
