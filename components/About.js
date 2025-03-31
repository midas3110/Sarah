function About() {
    const stats = [
        { value: "7+", label: "Years Experience" },
        { value: "30%", label: "Performance Boost" },
        { value: "35%", label: "User Engagement" },
        { value: "25%", label: "Error Reduction" }
    ];

    return (
        <section id="about" data-name="about" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        An innovative full-stack developer with a passion for creating visually stunning 
                        and user-centric web applications. Combining technical expertise with creative design 
                        to deliver exceptional digital experiences.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="card-gradient p-6 rounded-lg">
                                <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
                                <p className="text-gray-300">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
