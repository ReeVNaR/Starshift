"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring } from "framer-motion";

import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";

export function Navbar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-white/10"
        >
            <div className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                {/* Logo Only - No Text */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-[180px] h-10">
                        <Image
                            src="/logo.png"
                            alt="Starshift Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Centered Links */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <SmoothScrollLink href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</SmoothScrollLink>
                    <SmoothScrollLink href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</SmoothScrollLink>
                    <SmoothScrollLink href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How It Works</SmoothScrollLink>
                    <SmoothScrollLink href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">FAQ</SmoothScrollLink>
                </div>

                <div className="flex items-center gap-4">
                    <Button asChild className="bg-primary hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] hover:scale-105 transition-all text-white rounded-full px-6 font-semibold">
                        <SmoothScrollLink href="#contact">
                            Book a Demo
                        </SmoothScrollLink>
                    </Button>
                </div>
            </div>

            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left opacity-50"
                style={{ scaleX }}
            />
        </motion.nav>
    );
}
