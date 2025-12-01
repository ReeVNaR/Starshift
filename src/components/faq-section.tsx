"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Do I need any technical knowledge to use this?",
        answer: "No. We set everything up for you. You get a simple way to view leads and, if needed, a short walkthrough on how to manage minor changes."
    },
    {
        question: "Can you integrate with tools I already use?",
        answer: "Yes. We can connect to many popular tools like Google Workspace, CRMs, email services, and messaging APIs, depending on your stack."
    },
    {
        question: "Will the AI agent say incorrect things?",
        answer: "We carefully configure and test the assistant based on your content, FAQs, and rules. You can always request adjustments as we observe real conversations."
    },
    {
        question: "How long does the setup take?",
        answer: "Typically, from initial consultation to going live takes 2-4 weeks, depending on the complexity of your automations and the amount of content we need to prepare."
    },
    {
        question: "What if I want to make changes after launch?",
        answer: "We provide ongoing support. You can request changes to flows, responses, integrations, and website content. We'll implement them and test before updating your live system."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We use industry-standard encryption, secure APIs, and follow best practices for data handling. You maintain full control over what data the AI collects and stores."
    }
];

export function FAQSection() {
    return (
        <section id="faq" className="py-24 bg-[#0A0E14] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Frequently asked questions
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-white/5 rounded-lg px-6">
                                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
