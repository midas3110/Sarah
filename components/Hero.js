function Hero() {
    return (
        <section data-name="hero" className="hero-gradient min-h-screen flex items-center pt-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-7xl font-bold text-white slide-up">
                            Creative <span className="gradient-text">Developer</span>
                        </h1>
                        <p className="text-xl text-gray-300 slide-up delayed-1">
                            Transforming ideas into elegant digital experiences. Specializing in full-stack development,
                            creative design, and game development.
                        </p>
                        <div className="flex space-x-4 slide-up delayed-2">
                            <a 
                                href="#projects" 
                                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
                            >
                                View Work
                            </a>
                            <a 
                                href="#contact" 
                                className="px-8 py-3 border border-indigo-500 text-indigo-500 rounded-full font-semibold hover:bg-indigo-500/10 transition-colors"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="float">
                            <img 
                                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb" 
                                alt="Creative Development Visual" 
                                className="rounded-lg shadow-2xl glow"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-gray-900 p-4 rounded-lg card-gradient">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full glow-pulse"></div>
                                <span className="text-white">Available for Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
