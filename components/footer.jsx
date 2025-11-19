import Link from 'next/link';

export function Footer() {
    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Results', href: '#results' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        { icon: '📘', label: 'Facebook', href: '#' },
        { icon: '📷', label: 'Instagram', href: '#' },
        { icon: '🐦', label: 'Twitter', href: '#' },
        { icon: '💼', label: 'LinkedIn', href: '#' }
    ];

    return (
        <footer className="bg-gradient-to-b from-blue-950/50 to-blue-950 pt-16 pb-8 px-6 mt-24 border-t border-blue-500/20">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                                B
                            </div>
                            <span className="text-2xl font-bold text-white">Bytereach</span>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            A results-focused digital marketing agency delivering growth through strategy, creativity & performance.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-lg flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-blue-400 transition-colors no-underline"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <a href="mailto:bytereach@gmail.com" className="hover:text-blue-400 transition-colors no-underline">
                                    bytereach@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919199877599" className="hover:text-blue-400 transition-colors no-underline">
                                    +91 9199877599
                                </a>
                            </li>
                            <li className="text-sm">
                                Available 24/7
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-blue-500/20 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Bytereach Marketing Media. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
