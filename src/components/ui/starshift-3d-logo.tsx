"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Starshift3DLogo() {
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse parallax tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const x = (e.clientX - rect.left) / width - 0.5;
        const y = (e.clientY - rect.top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center justify-center select-none perspective-[1000px] w-full max-w-[130px] sm:max-w-[200px] md:max-w-[280px] lg:max-w-[420px] aspect-square mx-auto lg:mx-0"
        >
            {/* Ambient Multi-Layer Backlight Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute inset-8 bg-sky-400/15 blur-[50px] rounded-full pointer-events-none" />

            {/* Subtle Futuristic Geometric Orbit Rings */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 sm:inset-4 rounded-full border border-cyan-400/10 pointer-events-none"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 sm:inset-12 rounded-full border border-white/[0.05] border-dashed pointer-events-none"
            />

            {/* 3D Floating Prism Container */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    y: [-8, 8, -8],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative z-10 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
                {/* 3D Starshift Logo Mark from 1024x1024 asset */}
                <div className="relative w-[72%] h-[72%] drop-shadow-[0_0_35px_rgba(0,191,255,0.4)] transition-transform duration-300 group-hover:scale-105">
                    <Image
                        src="/favicon.png"
                        alt="Starshift 3D Emblem"
                        fill
                        priority
                        className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                    />
                </div>

                {/* Specular Hologram Sheen */}
                <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-cyan-400/0 via-cyan-400/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floor Shadow for 3D Grounding */}
            <motion.div
                animate={{
                    scale: [0.85, 1.05, 0.85],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -bottom-4 w-44 h-8 bg-cyan-500/20 blur-[20px] rounded-full pointer-events-none"
            />
        </div>
    );
}
