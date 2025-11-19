export function Testimonials() {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, Fashion Boutique',
            image: '👩‍💼',
            quote: 'Bytereach transformed our online presence completely. Our sales tripled in just 3 months, and their team was with us every step of the way. Highly recommended!',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Founder, Tech Startup',
            image: '👨‍💻',
            quote: 'The ROI we got from their Google Ads campaign was incredible. They really understand how to target the right audience and optimize for conversions.',
            rating: 5
        },
        {
            name: 'Emily Rodriguez',
            role: 'Marketing Director, Restaurant Group',
            image: '👩‍🍳',
            quote: 'Their social media management is top-notch. We went from zero engagement to thousands of followers, and foot traffic to our locations increased by 95%.',
            rating: 5
        },
        {
            name: 'David Kumar',
            role: 'Owner, E-Commerce Store',
            image: '👨‍💼',
            quote: 'Professional, responsive, and results-driven. The website they built for us is beautiful and converts like crazy. Worth every penny!',
            rating: 5
        },
        {
            name: 'Lisa Thompson',
            role: 'COO, B2B Services',
            image: '👩‍💼',
            quote: 'Finally found a marketing agency that actually delivers on their promises. Our lead quality improved dramatically, and costs went down.',
            rating: 5
        },
        {
            name: 'James Wilson',
            role: 'Entrepreneur',
            image: '👨‍🚀',
            quote: 'Bytereach is more than an agency - they are true partners in growth. Their strategic approach and creativity have been game-changing for our business.',
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-950/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        What Our Clients Say
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Don't just take our word for it - hear from the businesses we've helped grow
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl">
                                    {testimonial.image}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                                ))}
                            </div>

                            <p className="text-gray-300 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
