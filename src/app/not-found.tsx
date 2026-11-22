import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
            <div className="text-center max-w-md">
                <p className="text-7xl sm:text-8xl font-bold font-heading text-white mb-4">
                    404
                </p>
                <h1 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                    Page Not Found
                </h1>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Starshift</span>
                </Link>
            </div>
        </main>
    );
}
