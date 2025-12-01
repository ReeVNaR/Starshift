"use client";

export function OverviewSection() {
    return (
        <section className="py-20 bg-background relative z-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-8">
                    Websites that don't just look good, <br className="hidden md:block" />
                    they talk, guide, and convert.
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    We combine a modern, high-converting website with an AI voice concierge and smart automations. Your visitors can speak with your business in real time, get answers instantly, and share their details while every lead is automatically captured and routed to your tools.
                </p>
            </div>
        </section>
    );
}
