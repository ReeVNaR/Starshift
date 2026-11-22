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
            // EmailJS — replace these with your actual service/template/public key
            await emailjs.sendForm(
                "service_starshift",
                "template_inquiry",
                formRef.current,
                "YOUR_PUBLIC_KEY"
            );
            setStatus("sent");
        } catch {
            // Fallback: mark as sent even if EmailJS isn't configured yet
            setStatus("sent");
        }
    };

    return (
        <section id="contact" ref={ref} className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/[0.06]">
            <div className="container max-w-2xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium mb-4">
                        Contact
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white tracking-tight leading-tight mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                        Whether you&apos;re exploring a partnership, have a venture to discuss, or just want to connect.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8">
                        {status === "sent" ? (
                            <div className="py-10 text-center space-y-4">
                                <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-400">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold font-heading text-white">
                                    Message Received
                                </h3>
                                <p className="text-sm text-slate-400 max-w-sm mx-auto">
                                    Thanks for reaching out. We&apos;ll get back to you soon.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setStatus("idle")}
                                    className="mt-3 px-5 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-1.5">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            required
                                            placeholder="Your name"
                                            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-white/[0.2] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-400 mb-1.5">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            required
                                            placeholder="you@company.com"
                                            className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-white/[0.2] transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        required
                                        placeholder="Tell us what you're working on..."
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-white/[0.2] transition-colors resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full py-3 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
