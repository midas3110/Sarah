function App() {
    return (
        <div data-name="app">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
