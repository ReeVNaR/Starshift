"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    ShoppingBag,
    MessageSquare,
    Scissors,
    TrendingUp,
    Shield,
    ExternalLink,
    CheckCircle2,
    Activity,
    SlidersHorizontal,
    Layers,
    Sparkles
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
        description: "TINVO is a direct-to-consumer tumbler brand with a dedicated digital store, featuring interactive 360° product discovery, real-time customization, and friction-free checkout.",
        positioning: "An end-to-end e-commerce experience built for a modern consumer brand.",
        features: [
            "360° interactive product viewer",
            "Real-time design & engraving customizer",
            "Frictionless checkout & payment routing",
            "Customer account & shipment tracking",
            "Automated return & support portal"
        ],
        url: "https://tinvo.starshift.in",
        displayUrl: "tinvo.starshift.in",
        accentColor: "text-sky-400",
        gradient: "from-sky-500/10 via-cyan-500/5 to-transparent",
    },
    {
        id: "swas",
        number: "02",
        name: "SWAS",
        category: "SaaS / Automation",
        tagline: "Smarter WhatsApp communication for businesses.",
        description: "SWAS (StarShift WA Sender) is a high-volume WhatsApp business communication platform engineered for automated campaign scheduling, chatbot triage, and high-delivery customer engagement.",
        positioning: "A business communication and workflow automation platform that helps organizations streamline customer engagement.",
        features: [
            "Bulk multi-contact campaign broadcasting",
            "CSV, Excel & Google Sheets database imports",
            "Automated chatbot logic & lead capture flows",
            "Instant team inbox & quick canned replies",
            "REST API integrations with external stacks"
        ],
        url: "https://swas.starshift.in/app",
        displayUrl: "swas.starshift.in/app",
        accentColor: "text-emerald-400",
        gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    },
    {
        id: "dadashri",
        number: "03",
        name: "DADASHRI DESIGNERS",
        category: "Business Software",
        tagline: "Digitizing the traditional tailoring business.",
        description: "Dadashri Designers is a specialized tailoring ERP and CRM suite that brings manual measurement books, garment order workflows, delivery timelines, and revenue analytics into one centralized digital system.",
        positioning: "A specialized business management solution that brings customer records, tailoring operations, and sales tracking into one organized system.",
        features: [
            "Digital measurement vault with version history",
            "End-to-end order progress & delivery tracking",
            "Customer profile & style preference archives",
            "Automated order milestone SMS alerts",
            "Centralized sales accounting & ledger"
        ],
        url: "https://dadashri.vercel.app/dashboard",
        displayUrl: "dadashri.vercel.app/dashboard",
        accentColor: "text-amber-400",
        gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    },
    {
        id: "starshift-algo",
        number: "04",
        name: "STARSHIFT ALGO",
        category: "FinTech",
        tagline: "Algorithmic trading powered by strategy and automation.",
        description: "StarShift Algo is an institutional-grade, restricted-access algorithmic execution engine that automates quantitative trading strategies based on VWAP conditions, disciplined risk limits, and sub-second broker APIs.",
        positioning: "A specialized algorithmic trading system built around systematic strategy execution and predefined risk parameters. Access is limited to authorized users.",
        features: [
            "Volume-Weighted Average Price (VWAP) engine",
            "Continuous market signal surveillance",
            "Predefined entry, target & dynamic stop-loss",
            "High-throughput broker API execution",
            "Multi-layer risk limits & capital safeguards"
        ],
        url: "https://algo.starshift.in/dashboard",
        displayUrl: "algo.starshift.in/dashboard",
        accentColor: "text-blue-400",
        gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
        note: "Trading involves financial risk. Access is strictly restricted to authorized clients. Does not imply guaranteed returns or profitability."
    }
];

// Interactive UI Mockup for TINVO (E-Commerce)
function TinvoMockup() {
    const [selectedColor, setSelectedColor] = useState<"cyan" | "obsidian" | "frost">("cyan");

    const colorConfigs = {
        cyan: {
            name: "Cyan Edition",
            gradient: "from-cyan-400 via-sky-600 to-slate-950",
            border: "border-cyan-400/60",
            glow: "shadow-[0_0_22px_rgba(6,182,212,0.35)]",
            text: "text-cyan-300",
            textColor: "text-cyan-200"
        },
        obsidian: {
            name: "Obsidian Stealth",
            gradient: "from-zinc-500 via-zinc-800 to-black",
            border: "border-zinc-500/50",
            glow: "shadow-[0_0_22px_rgba(113,113,122,0.3)]",
            text: "text-zinc-300",
            textColor: "text-zinc-200"
        },
        frost: {
            name: "Frost Silver",
            gradient: "from-white via-slate-300 to-slate-600",
            border: "border-white/70",
            glow: "shadow-[0_0_22px_rgba(255,255,255,0.3)]",
            text: "text-slate-100",
            textColor: "text-slate-900"
        }
    };

    const current = colorConfigs[selectedColor];

    return (
        <div className="w-full h-48 sm:h-52 rounded-xl bg-[#090D16] border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden relative">
            <div className="flex items-center justify-between text-xs border-b border-white/[0.06] pb-2">
                <span className="font-mono text-slate-400 flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-sky-400" />
                    <span>tinvo.store/customize</span>
                </span>
                <span className="text-[10px] uppercase font-semibold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
                    360° Studio
                </span>
            </div>

            <div className="flex items-center justify-between py-2">
                <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Stainless Tumbler 750ml
                    </span>
                    <p className="text-sm font-bold text-white transition-all duration-200">{current.name}</p>
                    <p className="text-xs text-sky-400 font-medium">In Stock • Fast Shipping</p>
                </div>

                {/* Simulated 3D Tumbler Graphic with interactive color */}
                <div className="relative flex items-center justify-center w-20 h-24">
                    <motion.div
                        key={selectedColor}
                        initial={{ scale: 0.9, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className={`w-10 h-20 rounded-xl bg-gradient-to-b ${current.gradient} border ${current.border} ${current.glow} flex items-center justify-center transition-all duration-300`}
                    >
                        <span className={`text-[9px] font-mono font-bold tracking-wider rotate-90 select-none ${selectedColor === "frost" ? "text-slate-900" : "text-white"}`}>
                            TINVO
                        </span>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400">Finish:</span>
                    <div className="flex items-center gap-1.5">
                        <button
                            type="button"
                            onClick={() => setSelectedColor("cyan")}
                            title="Cyan Edition"
                            className={`w-3.5 h-3.5 rounded-full bg-cyan-400 transition-all cursor-pointer ${selectedColor === "cyan" ? "ring-2 ring-white scale-110" : "opacity-50 hover:opacity-80"}`}
                        />
                        <button
                            type="button"
                            onClick={() => setSelectedColor("obsidian")}
                            title="Obsidian Stealth"
                            className={`w-3.5 h-3.5 rounded-full bg-zinc-700 transition-all cursor-pointer ${selectedColor === "obsidian" ? "ring-2 ring-white scale-110" : "opacity-50 hover:opacity-80"}`}
                        />
                        <button
                            type="button"
                            onClick={() => setSelectedColor("frost")}
                            title="Frost Silver"
                            className={`w-3.5 h-3.5 rounded-full bg-slate-200 transition-all cursor-pointer ${selectedColor === "frost" ? "ring-2 ring-white scale-110" : "opacity-50 hover:opacity-80"}`}
                        />
                    </div>
                </div>
                <span className="text-[11px] font-mono text-slate-300 bg-white/[0.04] px-2 py-0.5 rounded-lg border border-white/[0.06]">
                    Cart Checkout Active
                </span>
            </div>
        </div>
    );
}

// Interactive UI Mockup for SWAS (WhatsApp Automation)
function SwasMockup() {
    const [activeCampaign, setActiveCampaign] = useState<"festive" | "cart">("festive");

    return (
        <div className="w-full h-48 sm:h-52 rounded-xl bg-[#08120F] border border-emerald-500/20 p-4 flex flex-col justify-between overflow-hidden relative">
            <div className="flex items-center justify-between text-xs border-b border-emerald-500/15 pb-2">
                <span className="font-mono text-emerald-300 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SWAS Automation Engine</span>
                </span>
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>WhatsApp Connected</span>
                </span>
            </div>

            {/* Campaign Selector / Chat preview */}
            <div className="space-y-1.5 py-1 text-xs">
                {activeCampaign === "festive" ? (
                    <>
                        <div className="bg-emerald-950/60 border border-emerald-500/20 rounded-xl p-2 max-w-[85%] text-slate-300">
                            <p className="text-[10px] text-emerald-400 font-semibold mb-0.5">Campaign: Festive Broadcast #2</p>
                            <p className="text-[11px] text-slate-200">Hi Alex! Your personalized VIP access link is ready.</p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-2 max-w-[80%] ml-auto text-slate-300 text-right">
                            <p className="text-[11px] text-slate-200">Awesome! Just completed checkout.</p>
                            <span className="text-[9px] text-emerald-400 font-mono">✓✓ Delivered</span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-emerald-950/60 border border-emerald-500/20 rounded-xl p-2 max-w-[85%] text-slate-300">
                            <p className="text-[10px] text-emerald-400 font-semibold mb-0.5">Automated Recovery Bot</p>
                            <p className="text-[11px] text-slate-200">Hey Sarah! You left 1 tumbler in cart. Use code STAR10.</p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-2 max-w-[80%] ml-auto text-slate-300 text-right">
                            <p className="text-[11px] text-slate-200">Order confirmed. Thanks!</p>
                            <span className="text-[9px] text-emerald-400 font-mono">✓✓ Recovered</span>
                        </div>
                    </>
                )}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-emerald-500/15 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                    <button
                        type="button"
                        onClick={() => setActiveCampaign("festive")}
                        className={`text-[10px] px-2 py-0.5 rounded cursor-pointer transition-colors ${activeCampaign === "festive" ? "bg-emerald-500/20 text-emerald-300 font-medium" : "text-slate-500 hover:text-slate-300"}`}
                    >
                        Broadcast
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveCampaign("cart")}
                        className={`text-[10px] px-2 py-0.5 rounded cursor-pointer transition-colors ${activeCampaign === "cart" ? "bg-emerald-500/20 text-emerald-300 font-medium" : "text-slate-500 hover:text-slate-300"}`}
                    >
                        Auto-Recovery
                    </button>
                </div>
                <span className="text-emerald-400 font-medium font-mono text-[10px]">99.2% Delivery</span>
            </div>
        </div>
    );
}

// Interactive UI Mockup for DADASHRI DESIGNERS (Business Software)
function DadashriMockup() {
    const [selectedOrder, setSelectedOrder] = useState<"vikram" | "aarav">("vikram");

    const orders = {
        vikram: {
            id: "#DD-492",
            client: "Vikram K. Singhania",
            garment: "3-Piece Tuxedo",
            status: "In Stitching",
            delivery: "Nov 28",
            measurements: { chest: "41.5\"", waist: "35.0\"", length: "30.5\"", sleeve: "25.2\"" }
        },
        aarav: {
            id: "#DD-518",
            client: "Aarav M. Mehta",
            garment: "Royal Bandhgala",
            status: "Cutting Phase",
            delivery: "Dec 04",
            measurements: { chest: "39.0\"", waist: "32.5\"", length: "29.0\"", sleeve: "24.5\"" }
        }
    };

    const current = orders[selectedOrder];

    return (
        <div className="w-full h-48 sm:h-52 rounded-xl bg-[#120F09] border border-amber-500/20 p-4 flex flex-col justify-between overflow-hidden relative">
            <div className="flex items-center justify-between text-xs border-b border-amber-500/15 pb-2">
                <span className="font-mono text-amber-300 flex items-center gap-1.5">
                    <Scissors className="w-3.5 h-3.5 text-amber-400" />
                    <span>Dadashri Tailor Suite</span>
                </span>
                <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                    Order {current.id}
                </span>
            </div>

            <div className="py-1">
                <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-white truncate max-w-[180px]">{current.client}</span>
                    <span className="text-[10px] text-amber-400 font-medium bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {current.status}
                    </span>
                </div>
                {/* Measurement matrix */}
                <div className="grid grid-cols-4 gap-1.5 p-2 rounded-lg bg-black/40 border border-amber-500/15 text-center text-[10px]">
                    <div>
                        <span className="text-slate-500 block">Chest</span>
                        <span className="font-mono font-semibold text-slate-200">{current.measurements.chest}</span>
                    </div>
                    <div>
                        <span className="text-slate-500 block">Waist</span>
                        <span className="font-mono font-semibold text-slate-200">{current.measurements.waist}</span>
                    </div>
                    <div>
                        <span className="text-slate-500 block">Length</span>
                        <span className="font-mono font-semibold text-slate-200">{current.measurements.length}</span>
                    </div>
                    <div>
                        <span className="text-slate-500 block">Sleeve</span>
                        <span className="font-mono font-semibold text-slate-200">{current.measurements.sleeve}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-amber-500/15 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                    <button
                        type="button"
                        onClick={() => setSelectedOrder("vikram")}
                        className={`text-[10px] px-2 py-0.5 rounded cursor-pointer transition-colors ${selectedOrder === "vikram" ? "bg-amber-500/20 text-amber-300 font-medium" : "text-slate-500 hover:text-slate-300"}`}
                    >
                        Tuxedo
                    </button>
                    <button
                        type="button"
                        onClick={() => setSelectedOrder("aarav")}
                        className={`text-[10px] px-2 py-0.5 rounded cursor-pointer transition-colors ${selectedOrder === "aarav" ? "bg-amber-500/20 text-amber-300 font-medium" : "text-slate-500 hover:text-slate-300"}`}
                    >
                        Bandhgala
                    </button>
                </div>
                <span className="text-amber-400 font-medium">Delivery: {current.delivery}</span>
            </div>
        </div>
    );
}

// Interactive UI Mockup for STARSHIFT ALGO (FinTech)
function AlgoMockup() {
    const [timeframe, setTimeframe] = useState<"1M" | "5M" | "15M">("1M");

    const tfData = {
        "1M": {
            symbol: "NIFTY_FUT 24,480.50",
            pct: "+0.65%",
            signal: "LONG (VWAP Cross)",
            latency: "8ms",
            path: "M 0 38 L 40 34 L 80 40 L 120 28 L 160 30 L 200 18 L 240 22 L 280 14",
            endY: 14
        },
        "5M": {
            symbol: "BANKNIFTY 52,190.20",
            pct: "+1.12%",
            signal: "ACCUMULATE (Trendline)",
            latency: "6ms",
            path: "M 0 42 L 50 36 L 90 28 L 140 32 L 190 22 L 230 18 L 280 10",
            endY: 10
        },
        "15M": {
            symbol: "SENSEX 80,310.00",
            pct: "+0.44%",
            signal: "VWAP SUPPORT HELD",
            latency: "9ms",
            path: "M 0 30 L 60 35 L 110 32 L 160 20 L 210 24 L 250 16 L 280 12",
            endY: 12
        }
    };

    const current = tfData[timeframe];

    return (
        <div className="w-full h-48 sm:h-52 rounded-xl bg-[#090D18] border border-blue-500/20 p-4 flex flex-col justify-between overflow-hidden relative">
            <div className="flex items-center justify-between text-xs border-b border-blue-500/15 pb-2">
                <span className="font-mono text-blue-300 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                    <span>VWAP Execution Node</span>
                </span>
                <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Strategy Running</span>
                </span>
            </div>

            {/* Simulated Live SVG Candlestick & VWAP Chart */}
            <div className="py-1">
                <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono font-semibold text-white">{current.symbol}</span>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        {current.pct} (VWAP Support)
                    </span>
                </div>
                <div className="h-14 w-full flex items-center">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 280 50">
                        {/* Grid lines */}
                        <line x1="0" y1="12" x2="280" y2="12" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" />
                        <line x1="0" y1="35" x2="280" y2="35" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" />

                        {/* VWAP Baseline (Blue) */}
                        <path
                            d="M 0 32 Q 70 28, 140 24 T 280 18"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="1.5"
                            strokeDasharray="4 2"
                        />

                        {/* Price Action Line (Emerald Green) */}
                        <path
                            d={current.path}
                            fill="none"
                            stroke="#34d399"
                            strokeWidth="2"
                        />

                        {/* Signal Dot */}
                        <circle cx="280" cy={current.endY} r="3" fill="#34d399" />
                    </svg>
                </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-blue-500/15 text-[10px] sm:text-[11px] text-slate-400">
                <div className="flex items-center gap-1">
                    {(["1M", "5M", "15M"] as const).map((tf) => (
                        <button
                            key={tf}
                            type="button"
                            onClick={() => setTimeframe(tf)}
                            className={`px-1.5 py-0.5 rounded text-[10px] font-mono cursor-pointer transition-colors ${timeframe === tf ? "bg-blue-500/20 text-blue-300 font-semibold" : "text-slate-500 hover:text-slate-300"}`}
                        >
                            {tf}
                        </button>
                    ))}
                </div>
                <span className="font-mono text-slate-400">Latency: <strong className="text-blue-400">{current.latency}</strong></span>
            </div>
        </div>
    );
}

export function VenturesPortfolio() {
    const [activeTab, setActiveTab] = useState<string>("all");
    const [expandedCard, setExpandedCard] = useState<string | null>(null);

    const filteredVentures = activeTab === "all"
        ? ventures
        : ventures.filter(v => v.id === activeTab);

    return (
        <section id="ventures" className="relative pt-16 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/[0.06]">
            {/* Ambient Background Gradient Lighting */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[750px] h-[400px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="container max-w-6xl mx-auto relative z-10 w-full">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 sm:mb-16">
                    <div className="text-center sm:text-left max-w-xl">
                        <p className="text-[11px] sm:text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">
                            Portfolio &amp; Operating Companies
                        </p>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
                            Ventures Under Starshift
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal leading-relaxed">
                            Independent technology brands, transactional platforms, and digital software suites engineered for market leadership.
                        </p>
                    </div>

                    {/* Interactive Filter Pills */}
                    <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md overflow-x-auto sm:overflow-visible max-w-full no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <button
                            type="button"
                            onClick={() => setActiveTab("all")}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                                activeTab === "all"
                                    ? "bg-primary text-white shadow-[0_0_15px_rgba(0,191,255,0.35)]"
                                    : "text-slate-400 hover:text-white"
                            }`}
                        >
                            All Ventures (4)
                        </button>
                        {ventures.map((v) => (
                            <button
                                key={v.id}
                                type="button"
                                onClick={() => setActiveTab(v.id)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                                    activeTab === v.id
                                        ? "bg-primary text-white shadow-[0_0_15px_rgba(0,191,255,0.35)]"
                                        : "text-slate-400 hover:text-white"
                                }`}
                            >
                                {v.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Revamped 2x2 Bento Matrix Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredVentures.map((venture, index) => {
                            const isExpanded = expandedCard === venture.id;

                            return (
                                <motion.div
                                    key={venture.id}
                                    layout
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-2xl bg-[#0B0F17]/90 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl group"
                                >
                                    {/* Subtle Ambient Card Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${venture.gradient} pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

                                    <div className="relative z-10">
                                        {/* Card Top Meta Bar */}
                                        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                                            <span className="font-mono text-xs text-slate-500 font-semibold">
                                                {venture.number}
                                            </span>
                                            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                                                {venture.category}
                                            </span>
                                        </div>

                                        {/* Visual Product UI Mockup */}
                                        <div className="mb-6">
                                            {venture.id === "tinvo" && <TinvoMockup />}
                                            {venture.id === "swas" && <SwasMockup />}
                                            {venture.id === "dadashri" && <DadashriMockup />}
                                            {venture.id === "starshift-algo" && <AlgoMockup />}
                                        </div>

                                        {/* Venture Title & Tagline */}
                                        <div className="mb-3">
                                            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
                                                {venture.name}
                                            </h3>
                                            <p className={`text-xs sm:text-sm font-medium mt-1 ${venture.accentColor}`}>
                                                {venture.tagline}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                                            {venture.description}
                                        </p>

                                        {/* Key Capabilities */}
                                        <div className="mb-5 space-y-2">
                                            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                                <span>Core Platform Capabilities</span>
                                                <button
                                                    type="button"
                                                    onClick={() => setExpandedCard(isExpanded ? null : venture.id)}
                                                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-[10px] cursor-pointer"
                                                >
                                                    {isExpanded ? "Collapse" : "View All"}
                                                </button>
                                            </div>

                                            <div className="grid grid-cols-1 gap-1.5">
                                                {(isExpanded ? venture.features : venture.features.slice(0, 3)).map((feat, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                                                        <span className="text-cyan-400/80 mt-0.5">•</span>
                                                        <span className="leading-snug">{feat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Financial Risk Disclosure (for Algo) */}
                                        {venture.note && (
                                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[10px] sm:text-[11px] text-slate-400 leading-relaxed mb-5">
                                                <span className="font-semibold text-slate-300 block mb-0.5">Risk Disclosure:</span>
                                                {venture.note}
                                            </div>
                                        )}
                                    </div>

                                    {/* Bottom Launch Bar */}
                                    <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                                        <div className="font-mono text-xs text-slate-400 truncate">
                                            Live: <span className="text-slate-200 font-medium">{venture.displayUrl}</span>
                                        </div>

                                        <a
                                            href={venture.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-primary text-white border border-white/[0.1] hover:border-cyan-400/40 text-xs font-semibold transition-all duration-200 group/btn cursor-pointer flex-shrink-0"
                                        >
                                            <span>Launch Platform</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:text-white transition-colors" />
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
