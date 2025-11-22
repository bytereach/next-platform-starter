'use client';

import { useState } from 'react';

export function Portfolio() {
    const [activeTab, setActiveTab] = useState('all');

    const categories = [
        { id: 'all', label: 'All Work' },
        { id: 'design', label: 'Designs' },
        { id: 'ads', label: 'Ad Campaigns' },
        { id: 'websites', label: 'Websites' }
    ];

    const portfolioItems = [
        { id: 1, category: 'design', title: 'Brand Identity Design', description: 'Complete brand redesign for e-commerce startup' },
        { id: 2, category: 'ads', title: 'Meta Ads Campaign', description: '300% ROI increase for retail client' },
        { id: 3, category: 'websites', title: 'E-Commerce Platform', description: 'Full-stack online store with payment integration' },
        { id: 4, category: 'design', title: 'Social Media Graphics', description: 'Monthly content package for B2B company' },
        { id: 5, category: 'ads', title: 'Google Ads Strategy', description: '5x conversion rate improvement' },
        { id: 6, category: 'websites', title: 'Corporate Website', description: 'Modern, responsive site for professional services' },
        { id: 7, category: 'design', title: 'Marketing Materials', description: 'Complete collateral suite for product launch' },
        { id: 8, category: 'ads', title: 'Video Ad Campaign', description: 'Multi-platform video advertising strategy' }
    ];

    const filteredItems = activeTab === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === activeTab);

    return (
        <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-950/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Our Portfolio
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore our work and see the results we've delivered for our clients
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                activeTab === category.id
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                <div className="text-6xl opacity-50">📸</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
