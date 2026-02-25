import { motion } from 'framer-motion';
import { PawPrint } from 'lucide-react';

const PawReveal = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
            className="relative"
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: delay + 0.3 }}
                className="absolute -top-4 -left-4 text-orange-500 z-0 pointer-events-none"
            >
                <PawPrint size={40} className="rotate-[-20deg]" />
            </motion.div>
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </motion.div>
    );
};

export default PawReveal;
