function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav data-name="navbar" className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold gradient-text">Mid@s</a>
                    
                    <div className="hidden md:flex space-x-8">
                        <a href="#about" className="nav-link text-gray-300 hover:text-white">About</a>
                        <a href="#skills" className="nav-link text-gray-300 hover:text-white">Skills</a>
                        <a href="#projects" className="nav-link text-gray-300 hover:text-white">Projects</a>
                        <a href="#experience" className="nav-link text-gray-300 hover:text-white">Experience</a>
                        <a href="#contact" className="nav-link text-gray-300 hover:text-white">Contact</a>
                    </div>

                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-300 hover:text-white"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden pt-4">
                        <div className="flex flex-col space-y-4">
                            <a href="#about" className="text-gray-300 hover:text-white">About</a>
                            <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
                            <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
                            <a href="#experience" className="text-gray-300 hover:text-white">Experience</a>
                            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
