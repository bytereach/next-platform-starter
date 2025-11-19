export function Services() {
    const services = [
        {
            icon: '🌐',
            title: 'Web Development',
            description: 'Custom, responsive websites that convert visitors into customers with cutting-edge technology and design.'
        },
        {
            icon: '📱',
            title: 'Meta Ads',
            description: 'Targeted Facebook and Instagram campaigns that reach your ideal audience and drive measurable results.'
        },
        {
            icon: '🔍',
            title: 'Google Ads',
            description: 'Strategic PPC campaigns that put your business at the top of search results and maximize ROI.'
        },
        {
            icon: '📈',
            title: 'SEO',
            description: 'Boost your organic rankings and visibility with data-driven SEO strategies that deliver long-term growth.'
        },
        {
            icon: '🎬',
            title: 'Video Editing',
            description: 'Professional video content that engages, entertains, and converts your target audience.'
        },
        {
            icon: '🎨',
            title: 'Graphic Designing',
            description: 'Eye-catching visuals and brand assets that make your business stand out from the competition.'
        },
        {
            icon: '💬',
            title: 'Social Media Optimization',
            description: 'Build and engage your community across all social platforms with strategic content and management.'
        },
        {
            icon: '🚀',
            title: 'Digital Marketing',
            description: 'Full-stack digital marketing solutions that integrate all channels for maximum business growth.'
        }
    ];

    return (
        <section id="services" className="py-24 px-6 bg-gradient-to-b from-blue-950/30 to-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Our Services
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive digital marketing solutions tailored to your business goals
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300 hover:border-blue-400/50"
                        >
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
