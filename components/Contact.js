function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section id="contact" data-name="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="card-gradient p-6 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <i className="fas fa-envelope text-2xl gradient-text"></i>
                                    <div>
                                        <h3 className="text-white font-semibold">Email</h3>
                                        <p className="text-gray-300">karmansolen3110@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-gradient p-6 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <i className="fas fa-location-dot text-2xl gradient-text"></i>
                                    <div>
                                        <h3 className="text-white font-semibold">Location</h3>
                                        <p className="text-gray-300">Makati City, Metro Manila</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-gradient p-6 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <i className="fas fa-briefcase text-2xl gradient-text"></i>
                                    <div>
                                        <h3 className="text-white font-semibold">Employment</h3>
                                        <p className="text-gray-300">Available for Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
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
