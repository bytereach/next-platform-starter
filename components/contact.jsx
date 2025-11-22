'use client';

import { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        business: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 px-6 bg-gradient-to-b from-blue-950/30 to-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Let's Grow Together
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to transform your digital presence? Get in touch with us today
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                                        📧
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1">Email</div>
                                        <a href="mailto:bytereach@gmail.com" className="text-white text-lg hover:text-blue-400 transition-colors">
                                            bytereach@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                                        📱
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1">Phone / WhatsApp</div>
                                        <a href="tel:+919199877599" className="text-white text-lg hover:text-blue-400 transition-colors">
                                            +91 9199877599
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                                        ⏰
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-1">Business Hours</div>
                                        <div className="text-white text-lg">24/7 Support Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-white mb-4">Why Choose Bytereach?</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <span className="text-green-400">✓</span>
                                    <span>Proven track record of success</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-400">✓</span>
                                    <span>Transparent pricing & reporting</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-400">✓</span>
                                    <span>Dedicated account manager</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-green-400">✓</span>
                                    <span>ROI-focused strategies</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 p-8 rounded-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="business" className="block text-sm font-semibold text-white mb-2">
                                    Business Name
                                </label>
                                <input
                                    type="text"
                                    id="business"
                                    name="business"
                                    value={formData.business}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                    placeholder="Your Company"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                    placeholder="+91 9999999999"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                                    Service Required *
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                                >
                                    <option value="">Select a service</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="meta-ads">Meta Ads</option>
                                    <option value="google-ads">Google Ads</option>
                                    <option value="seo">SEO</option>
                                    <option value="video-editing">Video Editing</option>
                                    <option value="graphic-design">Graphic Design</option>
                                    <option value="social-media">Social Media Optimization</option>
                                    <option value="digital-marketing">Full Digital Marketing</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
