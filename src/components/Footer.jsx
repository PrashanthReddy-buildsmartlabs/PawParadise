import { Link } from 'react-router-dom';
import { PawPrint, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-4 group inline-flex">
                            <PawPrint size={24} className="text-orange-500 group-hover:rotate-12 transition-transform" />
                            <span className="font-display font-bold text-xl text-white">PawParadise</span>
                        </Link>
                        <p className="text-sm text-slate-400 mb-6 max-w-sm">
                            Your one-stop destination for premium pet food, grooming, and supplies in Hyderabad. We care for your pets like family!
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/products" className="hover:text-orange-500 transition-colors">Products</Link></li>
                            <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
                            <li><Link to="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link></li>
                            <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>123 Pet Street, Banjara Hills</li>
                            <li>Hyderabad, Telangana 500034</li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Email: hello@pawparadise.in</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} PawParadise Pets Hyderabad. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
