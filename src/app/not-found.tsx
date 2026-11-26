import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 px-4">
            <div className="text-center max-w-md">
                <p className="text-7xl sm:text-8xl font-bold font-heading text-slate-900 mb-4">
                    404
                </p>
                <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                    Page Not Found
                </h1>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 text-white text-sm font-semibold transition-all shadow-[0_4px_16px_rgba(2,132,199,0.3)]"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Starshift</span>
                </Link>
            </div>
        </main>
    );
}
