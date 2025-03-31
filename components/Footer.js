function Footer() {
    return (
        <footer data-name="footer" className="bg-gray-900 py-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-white mb-4 md:mb-0">
                        <span className="gradient-text font-bold text-xl">Karman Solen</span>
                        <p className="text-gray-400 mt-2">Creative Full Stack Developer</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400 text-sm">
                    © 2024 Karman Solen. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
