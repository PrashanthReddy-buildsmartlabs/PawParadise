import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, price, features }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden group h-full flex flex-col"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Icon size={28} />
            </div>

            <h3 className="font-display text-xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">{description}</p>

            <div className="mb-6">
                <span className="text-2xl font-bold text-blue-600">₹{price}</span>
                <span className="text-slate-500 text-sm">/session</span>
            </div>

            <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 shrink-0"></div>
                        {feature}
                    </li>
                ))}
            </ul>

            <button className="w-full mt-auto border-2 border-orange-100 bg-orange-50 hover:bg-orange-500 hover:text-white transition-all text-orange-600 font-semibold py-2.5 rounded-xl">
                Book Appointment
            </button>
        </motion.div>
    );
};

export default ServiceCard;
