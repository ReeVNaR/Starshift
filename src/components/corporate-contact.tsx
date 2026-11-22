"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Building2,
    Send,
    CheckCircle2,
    ShieldCheck,
    Mail
} from "lucide-react";

export function CorporateContact() {
    const [submitted, setSubmitted] = useState(false);
    const [inquiryType, setInquiryType] = useState("Venture Incubation");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact" className="relative pt-16 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/[0.06]">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />

            <div className="container max-w-5xl mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
                        Executive Inquiries
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-4">
                        Connect with the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                            Starshift Group
                        </span>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                        Whether you are a founder seeking venture backing, an enterprise seeking strategic collaboration, or exploring corporate partnerships.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Corporate Info Cards */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08]">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-cyan-400 mb-3">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <h4 className="text-base font-semibold text-white mb-1">Starshift Enterprise Group</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Parent holding group, venture studio, and core autonomous architecture labs.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08]">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-primary mb-3">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h4 className="text-base font-semibold text-white mb-1">Direct &amp; Confidential</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                All founder pitches, corporate acquisition discussions, and strategic inquiries are reviewed directly under standard NDA.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08]">
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-purple-400 mb-3">
                                <Mail className="w-5 h-5" />
                            </div>
                            <h4 className="text-base font-semibold text-white mb-1">Corporate Channel</h4>
                            <p className="text-xs text-slate-300 font-mono">
                                partners@starshift.ai
                            </p>
                            <p className="text-[11px] text-slate-500 mt-1">
                                Executive office response within 24 business hours.
                            </p>
                        </div>
                    </div>

                    {/* Right: Executive Inquiry Form */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl backdrop-blur-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8">
                            {submitted ? (
                                <div className="py-12 text-center space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-400">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-heading text-white">Inquiry Received</h3>
                                    <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                                        Thank you for reaching out to Starshift Enterprise Group. Our corporate office has received your message and will review it promptly.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setSubmitted(false)}
                                        className="mt-4 px-6 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors"
                                    >
                                        Send Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                                            Nature of Inquiry
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                                            {[
                                                "Venture Incubation",
                                                "Strategic Partnership",
                                                "Portfolio Synergy",
                                                "Capital & Investment",
                                                "Enterprise Pilot",
                                                "General Corporate",
                                            ].map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setInquiryType(type)}
                                                    className={`px-2.5 sm:px-3 py-2 rounded-xl text-[11px] sm:text-xs font-medium transition-colors text-left truncate cursor-pointer ${
                                                        inquiryType === type
                                                            ? "bg-primary text-white"
                                                            : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06]"
                                                    }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Elena Vance"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-base sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                                Work Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="elena@enterprise.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-base sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                            Organization / Startup Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your venture, startup, or company"
                                            value={formData.organization}
                                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-base sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                            Brief Overview / Inquiries *
                                        </label>
                                        <textarea
                                            rows={4}
                                            required
                                            placeholder="Tell us about your venture, collaboration proposal, or partnership objective..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-base sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60 transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <span>Submit Executive Inquiry</span>
                                        <Send className="w-4 h-4 text-cyan-200" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
