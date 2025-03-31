function Skills() {
    const skills = [
        {
            category: "Front-end",
            items: ["HTML5", "CSS3", "JavaScript", "React.js", "Angular", "Vue.js"],
            icon: "fa-code"
        },
        {
            category: "Back-end",
            items: ["Node.js", "Express.js", "PHP", "MySQL", "MongoDB"],
            icon: "fa-server"
        },
        {
            category: "UI/UX Design",
            items: ["Figma", "Adobe XD", "Sketch", "Responsive Design"],
            icon: "fa-palette"
        },
        {
            category: "Game Development",
            items: ["Unity", "C#", "Java", "2D/3D Design"],
            icon: "fa-gamepad"
        },
        {
            category: "CSS Frameworks",
            items: ["Bootstrap", "Tailwind CSS", "SASS/SCSS"],
            icon: "fa-brush"
        },
        {
            category: "Tools & Others",
            items: ["Git", "Webpack", "npm", "VS Code"],
            icon: "fa-wrench"
        }
    ];

    return (
        <section id="skills" data-name="skills" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div 
                            key={index}
                            data-name={`skill-${index}`}
                            className="card-gradient p-6 rounded-lg transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <i className={`fas ${skill.icon} text-2xl gradient-text mr-3`}></i>
                                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, itemIndex) => (
                                    <span 
                                        key={itemIndex}
                                        className="skill-pill"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
