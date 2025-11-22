export function Results() {
    const caseStudies = [
        {
            client: 'E-Commerce Fashion Brand',
            challenge: 'Low online sales and poor website conversion',
            solution: 'Complete website redesign + Meta Ads campaign',
            results: [
                { metric: 'Sales Increase', value: '285%', icon: '📈' },
                { metric: 'Conversion Rate', value: '4.2%', icon: '🎯' },
                { metric: 'ROAS', value: '6.8x', icon: '💰' }
            ]
        },
        {
            client: 'B2B SaaS Company',
            challenge: 'High cost per acquisition, low lead quality',
            solution: 'Google Ads optimization + Landing page redesign',
            results: [
                { metric: 'Lead Quality', value: '+180%', icon: '⭐' },
                { metric: 'CPA Reduction', value: '-65%', icon: '📉' },
                { metric: 'Demo Bookings', value: '+320%', icon: '📅' }
            ]
        },
        {
            client: 'Local Restaurant Chain',
            challenge: 'Low brand awareness and foot traffic',
            solution: 'Social media management + Video marketing',
            results: [
                { metric: 'Engagement', value: '+450%', icon: '💬' },
                { metric: 'Followers', value: '25K+', icon: '👥' },
                { metric: 'Store Visits', value: '+95%', icon: '🏪' }
            ]
        }
    ];

    return (
        <section id="results" className="py-24 px-6 bg-gradient-to-b from-blue-950/30 to-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Proven Results
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Real businesses. Real growth. Real results.
                    </p>
                </div>

                <div className="space-y-12">
                    {caseStudies.map((study, index) => (
                        <div 
                            key={index}
                            className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
                        >
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 space-y-4">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {study.client}
                                    </h3>
                                    
                                    <div>
                                        <div className="text-sm font-semibold text-blue-400 mb-2">THE CHALLENGE</div>
                                        <p className="text-gray-300">{study.challenge}</p>
                                    </div>
                                    
                                    <div>
                                        <div className="text-sm font-semibold text-purple-400 mb-2">OUR SOLUTION</div>
                                        <p className="text-gray-300">{study.solution}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="text-sm font-semibold text-green-400 mb-2">THE RESULTS</div>
                                    {study.results.map((result, idx) => (
                                        <div 
                                            key={idx}
                                            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-400/30"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{result.icon}</span>
                                                <div>
                                                    <div className="text-2xl font-bold text-white">{result.value}</div>
                                                    <div className="text-sm text-gray-300">{result.metric}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
