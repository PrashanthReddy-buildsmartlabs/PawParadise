import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import emailjs from '@emailjs/browser';
import PawReveal from '../components/PawReveal';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        petType: '',
        service: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // In a real app, you would configure EmailJS with real IDs
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', petType: '', service: '', phone: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <Helmet>
                <title>Contact Us | PawParadise</title>
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PawReveal>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-display font-extrabold text-slate-800 mb-4">Get in Touch</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto">Book an appointment, ask about a product, or just say hello!</p>
                    </div>
                </PawReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    {/* Contact Info & Map */}
                    <div className="p-8 lg:p-12 bg-orange-50/50">
                        <h2 className="text-2xl font-display font-bold text-slate-800 mb-6">Contact Information</h2>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start">
                                <MapPin className="text-orange-500 mt-1 mr-4 shrink-0" />
                                <p className="text-slate-600">123 Pet Street, Banjara Hills<br />Hyderabad, Telangana 500034</p>
                            </div>
                            <div className="flex items-center">
                                <Phone className="text-orange-500 mr-4 shrink-0" />
                                <p className="text-slate-600">+91 98765 43210</p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="text-orange-500 mr-4 shrink-0" />
                                <p className="text-slate-600">hello@pawparadise.in</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors"
                            >
                                <MessageCircle size={20} />
                                <span>WhatsApp Us</span>
                            </a>
                        </div>

                        <div className="w-full h-64 rounded-2xl overflow-hidden shadow-inner bg-slate-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121852.12879574519!2d78.363942!3d17.4121531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-8 lg:p-12">
                        <h2 className="text-2xl font-display font-bold text-slate-800 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                        placeholder="+91..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Pet Type</label>
                                    <select
                                        name="petType"
                                        value={formData.petType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                                    >
                                        <option value="">Select Pet</option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="bird">Bird</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                                >
                                    <option value="">General Inquiry</option>
                                    <option value="grooming">Grooming</option>
                                    <option value="boarding">Boarding/Daycare</option>
                                    <option value="products">Product Availability</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-70"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium">
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
