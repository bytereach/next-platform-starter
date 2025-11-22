export function About() {
    return (
        <section id="about" className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-950/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        About Bytereach
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Data-Driven. Results-Focused. Transparent.
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Bytereach Marketing Media, we believe in the power of strategic digital marketing to transform businesses. 
                            Our team combines creativity with analytics to deliver measurable results that drive real growth.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We're not just another marketing agency. We're your growth partner, committed to understanding your business, 
                            your goals, and your challenges. With a focus on ROI and long-term success, we build campaigns that deliver.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                            <div className="text-4xl mb-3">🎯</div>
                            <h4 className="text-xl font-bold text-white mb-2">ROI Focused</h4>
                            <p className="text-gray-300">Every campaign is designed to maximize your return on investment</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                            <div className="text-4xl mb-3">📊</div>
                            <h4 className="text-xl font-bold text-white mb-2">Data-Driven</h4>
                            <p className="text-gray-300">Decisions backed by analytics and performance metrics</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                            <div className="text-4xl mb-3">💡</div>
                            <h4 className="text-xl font-bold text-white mb-2">Creative</h4>
                            <p className="text-gray-300">Innovative strategies that make your brand stand out</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                            <div className="text-4xl mb-3">🤝</div>
                            <h4 className="text-xl font-bold text-white mb-2">Transparent</h4>
                            <p className="text-gray-300">Clear communication and honest reporting, always</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
