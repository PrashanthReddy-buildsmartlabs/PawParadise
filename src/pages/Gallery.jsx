import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PawReveal from '../components/PawReveal';

export default function Gallery() {
    const images = [
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1537151608804-ea2f141471d2?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=600",
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <Helmet>
                <title>Gallery | PawParadise</title>
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PawReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-display font-extrabold text-slate-800 mb-4">Happy Pets Gallery</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto">Take a look at some of our adorable furry clients and grooming transformations!</p>
                    </div>
                </PawReveal>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, idx) => (
                        <PawReveal key={idx} delay={idx * 0.1}>
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="rounded-2xl overflow-hidden shadow-sm"
                            >
                                <img src={src} alt={`Pet ${idx + 1}`} className="w-full h-auto object-cover" />
                            </motion.div>
                        </PawReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
