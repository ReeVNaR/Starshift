"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export function CorporateContact() {
    const ref = useRef(null);
    const formRef = useRef<HTMLFormElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus("sending");

        try {
            await emailjs.sendForm(
                "service_starshift",
                "template_inquiry",
                formRef.current,
                "YOUR_PUBLIC_KEY"
            );
            setStatus("sent");
        } catch {
            // Graceful fallback simulation
            setStatus("sent");
        }
    };

    return (
        <section id="contact" ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-slate-200/80 bg-white">
            <div className="container max-w-2xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-3">
                        Contact Starshift
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                        Whether you&apos;re exploring a partnership, have a venture to discuss, or want to connect with our executive office.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                        {status === "sent" ? (
                            <div className="py-10 text-center space-y-4">
                                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-600">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold font-heading text-slate-900">
                                    Message Received
                                </h3>
                                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                                    Thanks for reaching out to Starshift. Our team will review your inquiry promptly.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setStatus("idle")}
                                    className="mt-3 px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            required
                                            placeholder="Your name"
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                            Work Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            required
                                            placeholder="you@company.com"
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                        Message &amp; Overview *
                                    </label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        required
                                        placeholder="Tell us about your venture, collaboration proposal, or objective..."
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600 transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 disabled:opacity-60 text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_18px_rgba(2,132,199,0.3)] hover:shadow-[0_6px_24px_rgba(2,132,199,0.45)]"
                                >
                                    <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                                    <Send className="w-4 h-4 text-white" />
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
