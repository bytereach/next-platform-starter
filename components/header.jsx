'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
    { linkText: 'Home', href: '#home' },
    { linkText: 'About', href: '#about' },
    { linkText: 'Services', href: '#services' },
    { linkText: 'Portfolio', href: '#portfolio' },
    { linkText: 'Results', href: '#results' },
    { linkText: 'Testimonials', href: '#testimonials' },
    { linkText: 'Contact', href: '#contact' }
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'shadow-lg shadow-[rgba(0,0,0,0.15)]' : ''
        }`} style={{ backgroundColor: '#064B59' }}>
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="#home" className="flex items-center space-x-2 no-underline hover:opacity-90 transition-opacity">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl" style={{ backgroundColor: '#E6FF2B', color: '#064B59' }}>
                        B
                    </div>
                    <span className="text-xl font-bold" style={{ color: '#F0FFF2' }}>Bytereach</span>
                </Link>
                
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link 
                                href={item.href} 
                                className="px-4 py-2 no-underline rounded-lg transition-all duration-200 font-medium hover:underline"
                                style={{ color: '#F0FFF2' }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#E6FF2B';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = '#F0FFF2';
                                }}
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link 
                    href="#contact" 
                    className="px-6 py-3 font-bold rounded-lg no-underline transition-all duration-300 hover:shadow-[0_0_20px_rgba(230,255,43,0.5)]"
                    style={{ backgroundColor: '#E6FF2B', color: '#064B59' }}
                >
                    Book a Call
                </Link>
            </nav>
        </header>
    );
}
