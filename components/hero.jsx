'use client';

import Link from 'next/link';

export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <div className="relative">
                    <div className="absolute inset-0 blur-3xl opacity-30">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply animate-pulse"></div>
                        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply animate-pulse delay-75"></div>
                    </div>
                    
                    <div className="relative z-10">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent animate-fade-in">
                            Your Success Partner
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                            A results-focused digital marketing agency delivering growth through strategy, creativity & performance
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link 
                                href="#contact" 
                                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg no-underline hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 text-lg min-w-64"
                            >
                                Book a Strategy Call
                            </Link>
                            <Link 
                                href="#results" 
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg no-underline hover:bg-white/20 hover:shadow-xl transition-all duration-300 text-lg min-w-64"
                            >
                                See Results
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                        <div className="text-gray-300">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
                        <div className="text-gray-300">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">5X</div>
                        <div className="text-gray-300">Average ROI</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                        <div className="text-gray-300">Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
