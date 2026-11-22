import Image from "next/image";
import Link from "next/link";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";

export function Footer() {
    return (
        <footer className="bg-[#070A10] border-t border-white/[0.06] pt-14 sm:pt-16 pb-10">
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
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                            Parent company and venture studio behind an expanding family of technology businesses.
                        </p>
                    </div>

                    {/* Portfolio */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Portfolio</h4>
                        <div className="flex flex-col gap-2 text-sm text-slate-400">
                            <a href="https://tinvo.starshift.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tinvo</a>
                            <a href="https://swas.starshift.in/app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SWAS</a>
                            <a href="https://dadashri.vercel.app/dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dadashri Designers</a>
                            <a href="https://algo.starshift.in/dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Starshift Algo</a>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Company</h4>
                        <div className="flex flex-col gap-2 text-sm text-slate-400">
                            <SmoothScrollLink href="#about" className="hover:text-white transition-colors">About</SmoothScrollLink>
                            <SmoothScrollLink href="#ventures" className="hover:text-white transition-colors">Ventures</SmoothScrollLink>
                            <SmoothScrollLink href="#contact" className="hover:text-white transition-colors">Contact</SmoothScrollLink>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Reach Us</h4>
                        <div className="flex flex-col gap-2 text-sm text-slate-400">
                            <SmoothScrollLink href="#contact" className="hover:text-white transition-colors">
                                Get in Touch
                            </SmoothScrollLink>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                    <p>
                        © {new Date().getFullYear()} Starshift Enterprise Group. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
