import { Helmet } from 'react-helmet-async';
import PawReveal from '../components/PawReveal';

export default function About() {
    return (
        <div className="min-h-screen bg-white py-12">
            <Helmet>
                <title>About Us | PawParadise</title>
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <PawReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-display font-extrabold text-slate-800 mb-4">Our Story</h1>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
                    </div>

                    <div className="prose prose-lg text-slate-600 mx-auto mb-16 text-center">
                        <p className="mb-6">
                            Founded in the heart of Hyderabad, <strong>PawParadise</strong> started with a simple belief: our pets deserve the absolute best. What began as a small grooming salon has blossomed into a comprehensive pet care paradise.
                        </p>
                        <p className="mb-6">
                            We are a team of passionate animal lovers, certified groomers, and pet care experts. Every dog and cat that walks through our doors is treated with the same love and care as our own pets. Our shelves are stocked only with products we've vetted and trust.
                        </p>
                        <p>
                            Whether you're looking for specialized dietary food, a plush new bed, or a full spa day for your golden retriever, we've got you covered. Welcome to our family!
                        </p>
                    </div>
                </PawReveal>

                <PawReveal delay={0.2}>
                    <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 text-center">
                        <h2 className="text-2xl font-display font-bold text-slate-800 mb-4">Pet Care Tips Blog</h2>
                        <p className="text-slate-600 mb-6 font-medium">Coming Soon!</p>
                        <p className="text-slate-600 mb-6">Stay tuned! We are launching our monthly pet care blog very soon. Get expert advice on nutrition, training, and seasonal pet care specifically tailored for local weather.</p>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </PawReveal>
            </div>
        </div>
    );
}
