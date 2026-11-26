"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ArrowUpRight,
    ShoppingBag,
    MessageSquare,
    Scissors,
    TrendingUp,
} from "lucide-react";

/* ─── Venture Data ─── */

export interface Venture {
    id: string;
    number: string;
    name: string;
    category: string;
    tagline: string;
    description: string;
    features: string[];
    url: string;
    displayUrl: string;
    accentColor: string;
    gradient: string;
    note?: string;
}

export const ventures: Venture[] = [
    {
        id: "tinvo",
        number: "01",
        name: "TINVO",
        category: "E-Commerce",
        tagline: "A modern D2C shopping experience.",
        description: "Direct-to-consumer tumbler brand with interactive 360° product discovery, real-time customization, and friction-free checkout.",
        features: [
            "360° interactive product viewer",
            "Real-time design customizer",
            "Frictionless checkout & payments",
            "Customer accounts & shipment tracking",
            "Automated returns & support portal",
        ],
        url: "https://tinvo.starshift.in",
        displayUrl: "tinvo.starshift.in",
        accentColor: "text-sky-600",
        gradient: "from-sky-500/10 via-cyan-500/5 to-transparent",
    },
    {
        id: "swas",
        number: "02",
        name: "SWAS",
        category: "SaaS / Automation",
        tagline: "Smarter WhatsApp communication for businesses.",
        description: "High-volume WhatsApp business communication platform for automated campaign scheduling, chatbot triage, and customer engagement.",
        features: [
            "Bulk multi-contact campaign broadcasting",
            "CSV, Excel & Google Sheets imports",
            "Automated chatbot & lead capture flows",
            "Quick replies & team inbox",
            "REST API integrations",
        ],
        url: "https://swas.starshift.in/app",
        displayUrl: "swas.starshift.in/app",
        accentColor: "text-emerald-600",
        gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    },
    {
        id: "dadashri",
        number: "03",
        name: "DADASHRI DESIGNERS",
        category: "Business Software",
        tagline: "Digitizing the traditional tailoring business.",
        description: "Specialized tailoring ERP that brings measurement records, garment orders, delivery timelines, and revenue analytics into one digital system.",
        features: [
            "Digital measurement vault with history",
            "End-to-end order & delivery tracking",
            "Customer profile & style archives",
            "Centralized sales & ledger",
            "SMS milestone notifications",
        ],
        url: "https://dadashri.vercel.app/dashboard",
        displayUrl: "dadashri.vercel.app",
        accentColor: "text-amber-600",
        gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    },
    {
        id: "starshift-algo",
        number: "04",
        name: "STARSHIFT ALGO",
        category: "FinTech",
        tagline: "Algorithmic trading powered by strategy and automation.",
        description: "Restricted-access algorithmic execution engine automating quantitative strategies with VWAP conditions and disciplined risk limits.",
        features: [
            "VWAP-based trading engine",
            "Continuous market signal surveillance",
            "Dynamic stop-loss & target management",
            "High-throughput broker API execution",
            "Multi-layer risk & capital safeguards",
        ],
        url: "https://algo.starshift.in/dashboard",
        displayUrl: "algo.starshift.in",
        accentColor: "text-blue-600",
        gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
        note: "Trading involves financial risk. Access is restricted to authorized users. Does not imply guaranteed returns.",
    },
];

/* ─── Mockup Components ─── */

function TinvoMockup() {
    const [color, setColor] = useState<"cyan" | "dark" | "frost">("cyan");

    const cfg = {
        cyan: { grad: "from-cyan-400 via-sky-600 to-slate-950", border: "border-cyan-400/50", label: "Cyan Edition" },
        dark: { grad: "from-zinc-500 via-zinc-800 to-black", border: "border-zinc-500/40", label: "Obsidian" },
        frost: { grad: "from-white via-slate-300 to-slate-600", border: "border-white/60", label: "Frost" },
    }[color];

    return (
        <div className="w-full h-44 rounded-xl bg-[#090D16] border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex items-center justify-between text-xs border-b border-white/[0.08] pb-2">
                <span className="font-mono text-slate-400 flex items-center gap-1.5">
                    <ShoppingBag className="w-3 h-3 text-sky-400" />
                    <span>tinvo.store</span>
                </span>
                <span className="text-[10px] uppercase font-semibold text-sky-400/90">360° Studio</span>
            </div>

            <div className="flex items-center justify-between py-2">
                <div className="space-y-0.5">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Stainless Tumbler 750ml</p>
                    <p className="text-sm font-semibold text-white">{cfg.label}</p>
                    <p className="text-[11px] text-sky-400">In Stock</p>
                </div>
                <motion.div
                    key={color}
                    initial={{ scale: 0.92, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`w-9 h-[72px] rounded-lg bg-gradient-to-b ${cfg.grad} border ${cfg.border} flex items-center justify-center shadow-lg`}
                >
                    <span className={`text-[8px] font-mono font-bold tracking-wider rotate-90 select-none ${color === "frost" ? "text-slate-900" : "text-white"}`}>
                        TINVO
                    </span>
                </motion.div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-white/[0.08]">
                {(["cyan", "dark", "frost"] as const).map((c) => (
                    <button
                        key={c}
                        type="button"
                        onClick={() => setColor(c)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                            c === "cyan" ? "bg-cyan-400" : c === "dark" ? "bg-zinc-600" : "bg-slate-200"
                        } ${color === c ? "ring-[1.5px] ring-white scale-110" : "opacity-40 hover:opacity-70"}`}
                    />
                ))}
            </div>
        </div>
    );
}

function SwasMockup() {
    return (
        <div className="w-full h-44 rounded-xl bg-[#061410] border border-emerald-500/20 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex items-center justify-between text-xs border-b border-emerald-500/15 pb-2">
                <span className="font-mono text-emerald-400 flex items-center gap-1.5 font-medium">
                    <MessageSquare className="w-3 h-3 text-emerald-400" />
                    <span>SWAS Engine</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Connected</span>
            </div>

            <div className="space-y-1.5 py-1 text-xs">
                <div className="bg-emerald-950/60 border border-emerald-500/20 rounded-lg p-2 max-w-[85%]">
                    <p className="text-[10px] text-emerald-400 font-medium mb-0.5">Campaign: Festive Broadcast</p>
                    <p className="text-[11px] text-slate-200">Hi Alex! Your VIP access link is ready.</p>
                </div>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-2 max-w-[78%] ml-auto text-right">
                    <p className="text-[11px] text-slate-200">Awesome! Just completed checkout.</p>
                    <span className="text-[9px] text-emerald-400 font-mono">✓✓ Delivered</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-emerald-500/15 text-[10px] text-slate-400">
                <span>2,480 / 2,500 sent</span>
                <span className="text-emerald-400 font-mono font-semibold">99.2%</span>
            </div>
        </div>
    );
}

function DadashriMockup() {
    return (
        <div className="w-full h-44 rounded-xl bg-[#140F08] border border-amber-500/20 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex items-center justify-between text-xs border-b border-amber-500/15 pb-2">
                <span className="font-mono text-amber-400 flex items-center gap-1.5 font-medium">
                    <Scissors className="w-3 h-3 text-amber-400" />
                    <span>Tailor Suite</span>
                </span>
                <span className="text-[10px] text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">Order #DD-492</span>
            </div>

            <div className="py-1">
                <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-white text-[11px]">Vikram K. Singhania</span>
                    <span className="text-[9px] text-amber-400 font-medium bg-amber-500/15 px-1.5 py-0.5 rounded border border-amber-500/30">In Stitching</span>
                </div>
                <div className="grid grid-cols-4 gap-1 p-2 rounded-lg bg-black/40 border border-amber-500/15 text-center text-[10px]">
                    {[
                        ["Chest", "41.5\""],
                        ["Waist", "35.0\""],
                        ["Length", "30.5\""],
                        ["Sleeve", "25.2\""],
                    ].map(([label, val]) => (
                        <div key={label}>
                            <span className="text-slate-400 block text-[9px]">{label}</span>
                            <span className="font-mono font-semibold text-slate-200">{val}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-amber-500/15 text-[10px] text-slate-400">
                <span>3-Piece Tuxedo</span>
                <span className="text-amber-400 font-semibold">Nov 28</span>
            </div>
        </div>
    );
}

function AlgoMockup() {
    return (
        <div className="w-full h-44 rounded-xl bg-[#080E1A] border border-blue-500/20 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex items-center justify-between text-xs border-b border-blue-500/15 pb-2">
                <span className="font-mono text-blue-400 flex items-center gap-1.5 font-medium">
                    <TrendingUp className="w-3 h-3 text-blue-400" />
                    <span>VWAP Engine</span>
                </span>
                <span className="text-[10px] text-blue-400 font-semibold bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">Running</span>
            </div>

            <div className="py-1">
                <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono font-semibold text-white text-[11px]">NIFTY_FUT 24,480.50</span>
                    <span className="font-mono text-[9px] text-emerald-400 font-semibold">+0.65%</span>
                </div>
                <div className="h-12 w-full">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 280 46">
                        <line x1="0" y1="12" x2="280" y2="12" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />
                        <line x1="0" y1="34" x2="280" y2="34" stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />
                        <path d="M 0 30 Q 70 26, 140 22 T 280 16" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
                        <path d="M 0 36 L 40 32 L 80 38 L 120 26 L 160 28 L 200 16 L 240 20 L 280 12" fill="none" stroke="#34d399" strokeWidth="2" />
                        <circle cx="280" cy="12" r="3" fill="#34d399" />
                    </svg>
                </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-blue-500/15 text-[10px] text-slate-400">
                <span className="font-mono">LONG <span className="text-emerald-400 font-semibold">(VWAP Cross)</span></span>
                <span className="font-mono">8ms</span>
            </div>
        </div>
    );
}

const mockupMap: Record<string, React.ComponentType> = {
    tinvo: TinvoMockup,
    swas: SwasMockup,
    dadashri: DadashriMockup,
    "starshift-algo": AlgoMockup,
};

/* ─── Venture Card (White Theme) ─── */

function VentureCard({ venture, index }: { venture: Venture; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const Mockup = mockupMap[venture.id];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-white border border-slate-200/90 hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden group shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]"
        >
            {/* Subtle ambient gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${venture.gradient} pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10 flex flex-col h-full">
                {/* Meta bar */}
                <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-slate-400 font-semibold">{venture.number}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/80">
                        {venture.category}
                    </span>
                </div>

                {/* Mockup Container */}
                {Mockup && (
                    <div className="mb-5">
                        <Mockup />
                    </div>
                )}

                {/* Title & tagline */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 tracking-tight mb-1">
                    {venture.name}
                </h3>
                <p className={`text-xs font-semibold mb-3 ${venture.accentColor}`}>
                    {venture.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 font-normal">
                    {venture.description}
                </p>

                {/* Features */}
                <div className="mb-4 space-y-1">
                    {venture.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                            <span className="text-slate-400 mt-0.5">•</span>
                            <span className="leading-snug">{feat}</span>
                        </div>
                    ))}
                </div>

                {/* Risk disclosure */}
                {venture.note && (
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[10px] text-slate-500 leading-relaxed mb-4">
                        {venture.note}
                    </div>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Bottom bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] text-slate-500 font-medium truncate">
                        {venture.displayUrl}
                    </span>
                    <a
                        href={venture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-sky-600 hover:text-white text-slate-800 border border-slate-200 hover:border-sky-600 text-xs font-semibold transition-all duration-200 cursor-pointer flex-shrink-0 shadow-sm"
                    >
                        <span>Visit</span>
                        <ArrowUpRight className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Section (White Theme) ─── */

export function VenturesPortfolio() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

    return (
        <section id="ventures" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-slate-200/80 bg-[#FAFAFC]">
            <div className="container max-w-6xl mx-auto relative z-10 w-full">

                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-3">
                        Portfolio &amp; Operating Companies
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
                        Our Ventures
                    </h2>
                </motion.div>

                {/* 2×2 Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                    {ventures.map((venture, index) => (
                        <VentureCard key={venture.id} venture={venture} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
