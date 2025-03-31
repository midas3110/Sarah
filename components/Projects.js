function Projects() {
    const projects = [
        {
            title: "Forclassmates",
            description: "We have a true educational revolution here.",
            image: "assets/forclassmates.png",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            type: "Website"
        },
        {
            title: "BIGCOMMERCE",
            description: "It's your future. Shape it on your terms",
            image: "assets/bigcommerce.png",
            tech: ["Vue.js", "Node.js", "Express", "MongoDB"],
            type: "Website"
        },
        {
            title: "VENSURA",
            description: "Event Liability & Event Cancellation Insurance.",
            image: "assets/vensura.png",
            tech: ["Angular", "Node.js", "Express", "MongoDB"],
            type: "Website"
        },
        {
            title: "Dofus game add-on",
            description: "Comprehensive event insurance platform with modern UI/UX design.",
            image: "assets/game.jpg",
            tech: ["Unity", "Java", "C#, Figma"],
            type: "Web app"
        },
        {
            title: "SALON BOOKING",
            description: "The best app design.",
            image: "assets/salon.jpg",
            tech: ["Figma"],
            type: "Mobile app"
        }
    ];

    return (
        <section id="projects" data-name="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            data-name={`project-${index}`}
                            className="project-card rounded-lg overflow-hidden bg-gray-800"
                        >
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-86 object-cover"
                            />
                            <div className="p-6">
                                <span className="text-sm text-indigo-400">{project.type}</span>
                                <h3 className="text-xl font-semibold text-white mt-2 mb-3">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="skill-pill"
                                        >
                                            {tech}
                                        </span>
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
