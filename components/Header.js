function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header data-name="header" className="bg-white shadow-sm fixed w-full top-0 z-50">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div data-name="logo" className="text-2xl font-bold text-gray-800">
                        AI Portfolio<span className="text-indigo-600">Gen</span>
                    </div>
                    
                    <div className="hidden md:flex space-x-6">
                        <a data-name="nav-features" href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
                        <a data-name="nav-use-cases" href="#use-cases" className="text-gray-600 hover:text-indigo-600">Use Cases</a>
                        <a data-name="nav-how-it-works" href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How It Works</a>
                        <a data-name="nav-testimonials" href="#testimonials" className="text-gray-600 hover:text-indigo-600">Testimonials</a>
                        <a data-name="nav-faq" href="#faq" className="text-gray-600 hover:text-indigo-600">FAQ</a>
                    </div>

                    <a 
                        href="https://app.trickle.so" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        data-name="get-started-btn" 
                        className="hidden md:block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
                    >
                        Get Started
                    </a>

                    <button 
                        data-name="mobile-menu-btn"
                        className="md:hidden text-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>

                {isMenuOpen && (
                    <div data-name="mobile-menu" className="md:hidden mt-4 pb-4">
                        <a href="#features" className="block py-2 text-gray-600 hover:text-indigo-600">Features</a>
                        <a href="#use-cases" className="block py-2 text-gray-600 hover:text-indigo-600">Use Cases</a>
                        <a href="#how-it-works" className="block py-2 text-gray-600 hover:text-indigo-600">How It Works</a>
                        <a href="#testimonials" className="block py-2 text-gray-600 hover:text-indigo-600">Testimonials</a>
                        <a href="#faq" className="block py-2 text-gray-600 hover:text-indigo-600">FAQ</a>
                        <a 
                            href="https://app.trickle.so" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 block w-full bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 text-center"
                        >
                            Get Started
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}
