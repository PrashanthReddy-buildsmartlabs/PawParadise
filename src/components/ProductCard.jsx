import { motion } from 'framer-motion';

const ProductCard = ({ image, title, category, price }) => {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group flex flex-col h-full cursor-pointer"
        >
            <div className="relative h-48 overflow-hidden bg-slate-50 p-6 flex items-center justify-center">
                <motion.img
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={image}
                    alt={title}
                    className="object-contain h-full w-full drop-shadow-md"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-orange-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {category}
                </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-display font-semibold text-lg text-slate-800 mb-1">{title}</h3>
                <p className="text-orange-500 font-bold mb-4 mt-auto text-xl">₹{price}</p>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors font-medium py-2 rounded-xl text-sm"
                >
                    Inquire Now
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ProductCard;
