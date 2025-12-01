"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GlowingButton } from "@/components/ui/glowing-button";
import { CheckCircle2, ChevronDown } from "lucide-react";

export function ContactSection() {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);

        if (!form.current) return;

        emailjs.sendForm(
            "service_hs9cygc",
            "template_d3pcgsp",
            form.current,
            "KClTvP1Joaazrsm6s" // Public Key
        )
            .then((result) => {
                console.log(result.text);
                setStatus("Success! We'll be in touch shortly.");
                form.current?.reset();
            }, (error) => {
                console.log(error.text);
                setStatus("Something went wrong. Please try again.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <section id="contact" className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Ready to turn your website into a <br />
                        24/7 AI sales machine?
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">

                    {/* Left: Form */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Name</label>
                                    <input name="user_name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Business Name</label>
                                    <input name="business_name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors" placeholder="Acme Inc." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">City</label>
                                <input name="city" type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors" placeholder="New York" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Phone / Email</label>
                                <input name="contact_info" type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Interested in?</label>
                                <div className="relative">
                                    <select name="interest" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors appearance-none cursor-pointer">
                                        <option value="Website Only" className="bg-[#0A0E14] text-white">Website Only</option>
                                        <option value="AI Voice Concierge" className="bg-[#0A0E14] text-white">AI Voice Concierge</option>
                                        <option value="Full Package" className="bg-[#0A0E14] text-white">Full Package</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                </div>
                            </div>

                            <GlowingButton tag="button" type="submit" className="w-full justify-center mt-4" disabled={isLoading}>
                                {isLoading ? "Sending..." : "Get Free Demo"}
                            </GlowingButton>
                            {status && <p className={`text-center text-sm ${status.includes("Success") ? "text-green-500" : "text-red-500"}`}>{status}</p>}
                        </form>
                    </div>

                    {/* Right: Benefits */}
                    <div className="space-y-8 pt-8">
                        <h3 className="text-2xl font-bold font-heading">What happens next?</h3>
                        <div className="space-y-6">
                            {[
                                "See exactly how the AI voice concierge works for your business",
                                "Get a custom quote based on your needs",
                                "Understand the full implementation timeline"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="text-lg text-muted-foreground pt-1">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
