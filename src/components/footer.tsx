import Image from "next/image";
import Link from "next/link";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";

export function Footer() {
    return (
        <footer className="bg-[#F8FAFC] border-t border-slate-200/80 pt-14 sm:pt-16 pb-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

                    {/* Brand */}
                    <div className="lg:col-span-5 space-y-4">
                        <Link href="/" className="inline-block">
                            <div className="relative w-[140px] h-8">
                                <Image
                                    src="/logo.png"
                                    alt="Starshift Logo"
                                    fill
                                    className="invert object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
                            Parent company and venture studio behind an expanding family of autonomous technology, infrastructure, and commerce startups.
                        </p>
                    </div>

                    {/* Portfolio */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Portfolio</h4>
                        <div className="flex flex-col gap-2 text-sm text-slate-600">
                            <a href="https://tinvo.starshift.in" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 transition-colors">01 TINVO</a>
                            <a href="https://swas.starshift.in/app" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 transition-colors">02 SWAS</a>
                            <a href="https://dadashri.vercel.app/dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 transition-colors">03 Dadashri Designers</a>
                            <a href="https://algo.starshift.in/dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 transition-colors">04 Starshift Algo</a>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Company</h4>
                        <div className="flex flex-col gap-2 text-sm text-slate-600">
                            <SmoothScrollLink href="#about" className="hover:text-cyan-600 transition-colors">About</SmoothScrollLink>
                            <SmoothScrollLink href="#ventures" className="hover:text-cyan-600 transition-colors">Ventures</SmoothScrollLink>
                            <SmoothScrollLink href="#contact" className="hover:text-cyan-600 transition-colors">Contact</SmoothScrollLink>
                        </div>
                    </div>

                    {/* Reach Us */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Reach Us</h4>
                        <div className="flex flex-col gap-2 text-sm text-slate-600">
                            <SmoothScrollLink href="#contact" className="hover:text-cyan-600 transition-colors">
                                Get in Touch ↗
                            </SmoothScrollLink>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                    <p>
                        © {new Date().getFullYear()} Starshift Enterprise Group. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
