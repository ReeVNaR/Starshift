"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    LayoutGrid,
    Orbit,
    MoveHorizontal
} from "lucide-react";

export interface Venture {
    id: string;
    number: string;
    name: string;
    category: string;
    tagline: string;
    description: string;
    positioning: string;
    features: string[];
    url: string;
    displayUrl: string;
    note?: string;
}

export const ventures: Venture[] = [
    {
        id: "tinvo",
        number: "01",
        name: "TINVO",
        category: "E-Commerce",
        tagline: "A modern D2C shopping experience.",
        description: "Direct-to-consumer tumbler brand with a dedicated digital store, product discovery, and custom 360° ordering.",
        positioning: "An end-to-end e-commerce experience built for a modern consumer brand.",
        features: [
            "Product catalogue & 360° view",
            "Real-time design customization",
            "Seamless cart & order tracking"
        ],
        url: "https://tinvo.starshift.in",
        displayUrl: "tinvo.starshift.in"
    },
    {
        id: "swas",
        number: "02",
        name: "SWAS",
        category: "SaaS / Automation",
        tagline: "Smarter WhatsApp communication.",
        description: "WhatsApp business automation platform simplifying bulk messaging, campaign management, and customer lead triage.",
        positioning: "A business communication and workflow automation platform that helps organizations streamline customer engagement.",
        features: [
            "Bulk campaign scheduling & broadcasts",
            "Automated chatbots & lead capture",
            "CRM & external API integrations"
        ],
        url: "https://swas.starshift.in/app",
        displayUrl: "swas.starshift.in/app"
    },
    {
        id: "dadashri",
        number: "03",
        name: "DADASHRI DESIGNERS",
        category: "Business Software",
        tagline: "Digitizing tailoring business.",
        description: "Centralized tailor management system organizing customer measurements, order lifecycles, and sales records.",
        positioning: "A specialized business management solution that brings customer records, tailoring operations, and sales tracking into one organized system.",
        features: [
            "Digital measurement record vault",
            "Order status & delivery tracking",
            "Centralized sales management"
        ],
        url: "https://dadashri.vercel.app/dashboard",
        displayUrl: "dadashri.vercel.app"
    },
    {
        id: "starshift-algo",
        number: "04",
        name: "STARSHIFT ALGO",
        category: "FinTech",
        tagline: "Algorithmic trading & automation.",
        description: "Restricted-access algorithmic trading system automating strategies with predefined market conditions and risk rules.",
        positioning: "A specialized algorithmic trading system built around systematic strategy execution and predefined risk parameters.",
        features: [
            "VWAP-based strategy execution",
            "Real-time automated signal monitoring",
            "Predefined entry, target & stop-loss"
        ],
        url: "https://algo.starshift.in/dashboard",
        displayUrl: "algo.starshift.in",
        note: "Financial risk applies. Restricted access."
    }
];

export function VenturesPortfolio() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [viewMode, setViewMode] = useState<"ring" | "grid">("ring");
    const [radius, setRadius] = useState(220);
    const [cardWidth, setCardWidth] = useState(270);
    const isDraggingRef = useRef(false);

    const count = ventures.length;
    const angleStep = 360 / count; // 90 degrees

    // Ultra-smooth spring physics for that satisfying glide feel
    const rotation = useMotionValue(0);
    const smoothRotation = useSpring(rotation, {
        stiffness: 140,
        damping: 24,
        mass: 0.6,
    });

    // Proportional barrel geometry to ensure compact, perfect fit on all screens
    useEffect(() => {
        const updateDimensions = () => {
            const w = window.innerWidth;
            if (w < 400) {
                // Ultra-small mobile
                setRadius(140);
                setCardWidth(220);
            } else if (w < 640) {
                // Mobile
                setRadius(165);
                setCardWidth(240);
            } else if (w < 1024) {
                // Tablet
                setRadius(200);
                setCardWidth(260);
            } else {
                // Desktop
                setRadius(240);
                setCardWidth(280);
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // Rotate to exact index with shortest angular distance
    const rotateToIndex = (targetIndex: number) => {
        setActiveIndex(targetIndex);
        const currentRot = rotation.get();
        const currentTargetDeg = -targetIndex * angleStep;
        
        const diff = (currentTargetDeg - currentRot) % 360;
        const normalizedDiff = diff > 180 ? diff - 360 : diff < -180 ? diff + 360 : diff;
        rotation.set(currentRot + normalizedDiff);
    };

    const nextVenture = () => {
        rotateToIndex((activeIndex + 1) % count);
    };

    const prevVenture = () => {
        rotateToIndex((activeIndex - 1 + count) % count);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (viewMode !== "ring") return;
            if (e.key === "ArrowRight") nextVenture();
            if (e.key === "ArrowLeft") prevVenture();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [viewMode, activeIndex]);

    return (
        <section id="ventures" className="relative pt-14 sm:pt-16 pb-16 sm:pb-20 px-3 sm:px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/[0.06]">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[550px] h-[320px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="container max-w-5xl mx-auto relative z-10 w-full">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 sm:mb-8">
                    <div className="text-center sm:text-left">
                        <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-1">
                            Portfolio &amp; Subsidiaries
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                            Our Businesses &amp; Startups
                        </h2>
                    </div>

                    {/* View Switcher */}
                    <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                        <button
                            type="button"
                            onClick={() => setViewMode("ring")}
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                                viewMode === "ring"
                                    ? "bg-primary text-white"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            <Orbit className="w-3.5 h-3.5" />
                            <span>Barrel 3D</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setViewMode("grid")}
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                                viewMode === "grid"
                                    ? "bg-primary text-white"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            <LayoutGrid className="w-3.5 h-3.5" />
                            <span>Grid</span>
                        </button>
                    </div>
                </div>

                {/* 3D Motion Barrel Carousel View */}
                {viewMode === "ring" ? (
                    <div className="relative w-full flex flex-col items-center">

                        {/* 3D Barrel Stage */}
                        <div
                            className="relative w-full h-[370px] sm:h-[400px] flex items-center justify-center select-none overflow-hidden"
                            style={{
                                perspective: "1100px",
                            }}
                        >
                            {/* Motion Drag Handler Container */}
                            <motion.div
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0}
                                onDragStart={() => {
                                    isDraggingRef.current = true;
                                }}
                                onDrag={(e, info) => {
                                    const current = rotation.get();
                                    rotation.set(current + info.delta.x * 0.4);
                                }}
                                onDragEnd={(e, info) => {
                                    setTimeout(() => {
                                        isDraggingRef.current = false;
                                    }, 100);

                                    // Satisfying velocity flick & magnetic snap to nearest 90-deg card
                                    const current = rotation.get();
                                    const flickBonus = info.velocity.x * 0.06;
                                    const targetVal = current + flickBonus;

                                    const snapped = Math.round(targetVal / angleStep) * angleStep;
                                    rotation.set(snapped);

                                    const idx = ((-Math.round(snapped / angleStep) % count) + count) % count;
                                    setActiveIndex(idx);
                                }}
                                className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                {/* Continuous Rotating Cylinder */}
                                <motion.div
                                    className="relative w-full h-full flex items-center justify-center pointer-events-none"
                                    style={{
                                        rotateY: smoothRotation,
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {ventures.map((venture, index) => {
                                        const itemAngle = index * angleStep;
                                        const isCurrent = index === activeIndex;

                                        return (
                                            <div
                                                key={venture.id}
                                                onClick={(e) => {
                                                    if (!isDraggingRef.current && !isCurrent) {
                                                        e.stopPropagation();
                                                        rotateToIndex(index);
                                                    }
                                                }}
                                                style={{
                                                    width: `${cardWidth}px`,
                                                    height: "310px",
                                                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                                                    transformStyle: "preserve-3d",
                                                }}
                                                className={`absolute pointer-events-auto rounded-2xl p-5 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between ${
                                                    isCurrent
                                                        ? "bg-[#0E1526]/95 border border-cyan-400/40 shadow-[0_15px_40px_rgba(0,191,255,0.2)] opacity-100 scale-100 z-30"
                                                        : "bg-[#0A0E1A]/70 border border-white/[0.06] opacity-35 hover:opacity-75 scale-90 z-10 cursor-pointer"
                                                }`}
                                            >
                                                <div>
                                                    {/* Card Header */}
                                                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.06]">
                                                        <span className="text-[11px] font-mono text-slate-500">
                                                            {venture.number}
                                                        </span>
                                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                                                            {venture.category}
                                                        </span>
                                                    </div>

                                                    {/* Title & Tagline */}
                                                    <div className="mb-2">
                                                        <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight leading-tight">
                                                            {venture.name}
                                                        </h3>
                                                        <p className="text-xs text-cyan-400 font-medium mt-0.5">
                                                            {venture.tagline}
                                                        </p>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-xs text-slate-300 leading-relaxed font-normal mb-3 line-clamp-2">
                                                        {venture.description}
                                                    </p>

                                                    {/* Highlights */}
                                                    <div className="space-y-1 mb-2">
                                                        {venture.features.slice(0, 3).map((feat, idx) => (
                                                            <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                                                                <span className="text-cyan-400/80 mt-0.5">•</span>
                                                                <span className="leading-snug truncate">{feat}</span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Note */}
                                                    {venture.note && (
                                                        <p className="text-[10px] text-slate-500 mt-1 line-clamp-1">
                                                            {venture.note}
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Launch Link */}
                                                <div className="pt-2.5 border-t border-white/[0.06]">
                                                    <a
                                                        href={venture.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => {
                                                            if (isDraggingRef.current) {
                                                                e.preventDefault();
                                                                return;
                                                            }
                                                            if (!isCurrent) {
                                                                e.preventDefault();
                                                                rotateToIndex(index);
                                                            }
                                                        }}
                                                        className={`w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl border text-xs font-medium transition-colors ${
                                                            isCurrent
                                                                ? "bg-white/[0.05] hover:bg-white/[0.1] border-cyan-400/30 text-white cursor-pointer"
                                                                : "bg-white/[0.02] border-white/[0.04] text-slate-400 pointer-events-none"
                                                        }`}
                                                    >
                                                        <span className="font-mono text-[11px] text-slate-300 truncate mr-2">
                                                            {venture.displayUrl}
                                                        </span>
                                                        <span className="inline-flex items-center gap-1 text-cyan-400 font-semibold text-xs flex-shrink-0">
                                                            <span>Launch</span>
                                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Interactive Controls */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-3 sm:mt-5 w-full">
                            {/* Drag Hint */}
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium select-none">
                                <MoveHorizontal className="w-3.5 h-3.5 text-cyan-400/80 animate-pulse" />
                                <span>Drag horizontally to spin the barrel</span>
                            </div>

                            {/* Stepper Buttons */}
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={prevVenture}
                                    aria-label="Previous Venture"
                                    className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>

                                <button
                                    type="button"
                                    onClick={nextVenture}
                                    aria-label="Next Venture"
                                    className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Venture Pills */}
                            <div className="flex items-center gap-1.5">
                                {ventures.map((v, i) => (
                                    <button
                                        key={v.id}
                                        type="button"
                                        onClick={() => rotateToIndex(i)}
                                        className={`px-2.5 py-1 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                                            i === activeIndex
                                                ? "bg-primary text-white shadow-[0_0_12px_rgba(0,191,255,0.4)]"
                                                : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06]"
                                        }`}
                                    >
                                        <span>{v.number}</span>
                                        <span className="hidden sm:inline ml-1 opacity-80">{v.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                ) : (
                    /* 2x2 Minimalist Grid View */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        {ventures.map((venture) => (
                            <div
                                key={venture.id}
                                className="relative rounded-2xl p-5 sm:p-6 backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] transition-colors duration-200 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                                        <span className="text-xs font-mono font-medium text-slate-500">
                                            {venture.number}
                                        </span>
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                                            {venture.category}
                                        </span>
                                    </div>

                                    <div className="mb-2.5">
                                        <h3 className="text-xl font-bold font-heading text-white tracking-tight">
                                            {venture.name}
                                        </h3>
                                        <p className="text-xs text-cyan-400 font-medium mt-0.5">
                                            {venture.tagline}
                                        </p>
                                    </div>

                                    <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                                        {venture.description}
                                    </p>

                                    <div className="mb-4 space-y-1">
                                        {venture.features.map((feat, idx) => (
                                            <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-400">
                                                <span className="text-cyan-400/70 select-none mt-0.5">•</span>
                                                <span className="leading-snug">{feat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {venture.note && (
                                        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[10px] text-slate-500 leading-relaxed mb-4">
                                            {venture.note}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-3 border-t border-white/[0.06]">
                                    <a
                                        href={venture.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.15] text-xs font-medium text-slate-200 hover:text-white transition-colors group cursor-pointer"
                                    >
                                        <span className="font-mono text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                                            {venture.displayUrl}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-cyan-400 text-xs font-semibold">
                                            <span>Launch</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
