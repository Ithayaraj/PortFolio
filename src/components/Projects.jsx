import projects from "../data/projects"
import { Github, ExternalLink, X } from "lucide-react"
import { useState } from "react"

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-blue-500">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on, ranging from mobile apps to web platforms.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image || `https://placehold.co/600x400/1e293b/475569?text=${encodeURIComponent(project.title)}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.slice(0, 3).map((t, index) => (
                                        <span key={index} className="text-xs font-medium px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs font-medium px-2 py-1 bg-gray-700 text-gray-400 rounded-full">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                    {project.demo && project.demo !== "#" && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors ml-auto"
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between z-10">
                            <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="p-2 hover:bg-gray-800 rounded-lg transition"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {selectedProject.image && (
                                <div className="rounded-xl overflow-hidden border border-gray-700">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            )}

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-blue-400">About This Project</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {selectedProject.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 text-blue-400">Technologies Used</h3>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.tech.map((t, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition font-medium"
                                >
                                    <Github size={20} /> View Source Code
                                </a>
                                {selectedProject.demo && selectedProject.demo !== "#" && (
                                    <a
                                        href={selectedProject.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition font-medium"
                                    >
                                        <ExternalLink size={20} /> View Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Projects
