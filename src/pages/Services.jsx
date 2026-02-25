import { Helmet } from 'react-helmet-async';
import PawReveal from '../components/PawReveal';
import ServiceCard from '../components/ServiceCard';
import { Scissors, Home, Stethoscope } from 'lucide-react';

export default function Services() {
    const services = [
        {
            id: 1,
            icon: Scissors,
            title: "Pet Grooming",
            price: "500",
            description: "Professional grooming services to keep your pet looking and feeling their absolute best.",
            features: ["Bath & Blowdry", "Nail Clipping", "Ear Cleaning", "Styling & Shaping"]
        },
        {
            id: 2,
            icon: Home,
            title: "Boarding & Daycare",
            price: "800",
            description: "A safe, fun, and loving environment for your pets when you are away from home.",
            features: ["24/7 Supervision", "Play Sessions", "Regular Updates", "Acclimatized Rooms"]
        },
        {
            id: 3,
            icon: Stethoscope,
            title: "Vet Consultation",
            price: "400",
            description: "Basic health checkups and expert veterinary advice for your pet's well-being.",
            features: ["General Checkup", "Vaccination Advice", "Dietary Planning", "Tick/Flea Check"]
        }
    ];

    return (
        <div className="min-h-screen bg-white py-12">
            <Helmet>
                <title>Services | PawParadise</title>
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PawReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-display font-extrabold text-slate-800 mb-4">Our Services</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto">From professional grooming to reliable boarding, we offer everything your pet needs.</p>
                    </div>
                </PawReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <PawReveal key={service.id} delay={idx * 0.1}>
                            <ServiceCard {...service} />
                        </PawReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
