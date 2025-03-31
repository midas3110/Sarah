function Experience() {
    const experiences = [
        {
            role: "Full Stack Developer",
            company: "BlastAsia",
            location: "Makati City, Metro Manila",
            period: "October 2021 - September 2023",
            achievements: [
                "Created responsive web designs using React.js increasing user engagement by 35%",
                "Optimized application performance and scalability",
                "Reduced user errors by 25% through improved interface design",
                "Collaborated with cross-functional teams for requirement implementation"
            ]
        },
        {
            role: "Front-end Developer",
            company: "InnoJam",
            location: "Makati City, Metro Manila",
            period: "March 2017 - September 2021",
            achievements: [
                "Improved site loading time by 30% through optimization",
                "Designed and implemented user interfaces for multiple projects",
                "Created style guides and component libraries",
                "Collaborated with UX/UI designers on wireframe implementation"
            ]
        },
        {
            role: "Game Developer",
            company: "Self-Employed",
            location: "Remote",
            period: "September 2024 - Present",
            achievements: [
                "Developing 2D/3D games using Unity and C#",
                "Creating multi-user add-ons for existing games",
                "Conducting intensive self-study in game development",
                "Implementing interactive design principles in game UI"
            ]
        }
    ];

    return (
        <section id="experience" data-name="experience" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    Work <span className="gradient-text">Experience</span>
                </h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index}
                            data-name={`experience-${index}`}
                            className="card-gradient p-6 rounded-lg"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                                    <p className="text-indigo-400">{exp.company} - {exp.location}</p>
                                </div>
                                <span className="text-gray-400">{exp.period}</span>
                            </div>
                            <ul className="space-y-2">
                                {exp.achievements.map((achievement, achievementIndex) => (
                                    <li 
                                        key={achievementIndex}
                                        className="flex items-start text-gray-300"
                                    >
                                        <i className="fas fa-check-circle text-indigo-400 mt-1 mr-2"></i>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
