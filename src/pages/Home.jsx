import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, ShieldCheck } from 'lucide-react';
import PawReveal from '../components/PawReveal';

export default function Home() {
    const features = [
        { icon: <Star className="text-orange-500" size={32} />, title: "Premium Food" },
        { icon: <Heart className="text-orange-500" size={32} />, title: "Expert Grooming" },
        { icon: <ShieldCheck className="text-orange-500" size={32} />, title: "Vet Approved" },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>PawParadise | Home</title>
                <meta name="description" content="Premium Pet Food, Grooming & Supplies in Hyderabad" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-blue-50 py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-slate-800 leading-tight mb-6">
                                Premium Pet Care <br />
                                <span className="text-orange-500">Made Fun & Easy</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 max-w-xl">
                                Welcome to PawParadise Hyderabad! We provide everything your furry friends need, from premium nutrition to spa-like grooming.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/products">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 flex items-center space-x-2 hover:bg-orange-600 transition-colors"
                                    >
                                        <span>Shop Now</span>
                                        <ArrowRight size={20} />
                                    </motion.button>
                                </Link>
                                <Link to="/services">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-slate-700 px-8 py-3 rounded-full font-bold shadow-sm border border-slate-200 flex items-center space-x-2 hover:bg-slate-50 transition-colors"
                                    >
                                        <span>Our Services</span>
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <img
                                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800&h=800"
                                alt="Happy Dog"
                                className="relative z-10 rounded-full border-8 border-white shadow-2xl object-cover w-[500px] h-[500px] mx-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <PawReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4">Why Choose PawParadise?</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">We don't just sell pet products; we provide a lifestyle of care and happiness for your pets.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="bg-orange-50 p-8 rounded-3xl text-center flex flex-col items-center justify-center border border-orange-100"
                                >
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-orange-500">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-slate-800">{feature.title}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </PawReveal>
                </div>
            </section>
        </div>
    );
}
