import Link from "next/link";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";
import { Twitter, Linkedin, Github, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#050709] border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <span className="text-2xl font-bold font-heading tracking-wide text-white">Starshift</span>
                        <p className="text-sm text-muted-foreground">
                            Making the future less robotic, more remarkable.
                        </p>
                    </div>

                    {/* Column 2: Product */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Product</h4>
                        <div className="flex flex-col gap-2">
                            <SmoothScrollLink href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</SmoothScrollLink>
                            <SmoothScrollLink href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</SmoothScrollLink>
                            <SmoothScrollLink href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</SmoothScrollLink>
                        </div>
                    </div>

                    {/* Column 3: Company */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Company</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                            <SmoothScrollLink href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</SmoothScrollLink>
                        </div>
                    </div>

                    {/* Column 4: Legal & Social */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Legal</h4>
                        <div className="flex flex-col gap-2">
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                        </div>
                        <div className="flex items-center gap-4 pt-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-sm text-muted-foreground">
                        © 2024 Starshift AI Agency. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
