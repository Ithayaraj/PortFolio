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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer active:scale-[0.98]"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image || `https://placehold.co/600x400/1e293b/475569?text=${encodeURIComponent(project.title)}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                            </div>

                            <div className="p-5 md:p-6">
                                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed h-10">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.slice(0, 3).map((t, index) => (
                                        <span key={index} className="text-[10px] md:text-xs font-medium px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-[10px] md:text-xs font-medium px-2 py-1 bg-gray-700/50 text-gray-400 rounded-md">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
                                    <span className="text-xs text-blue-400 font-medium group-hover:underline">View Details</span>
                                    <div className="ml-auto flex gap-3 text-gray-400">
                                        <Github size={16} className="hover:text-white" />
                                        {project.demo && project.demo !== "#" && <ExternalLink size={16} className="hover:text-white" />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal / Drawer */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-end md:items-center justify-center p-0 md:p-4 transition-all duration-300"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-gray-900 w-full max-w-4xl max-h-[92vh] md:max-h-[90vh] overflow-y-auto rounded-t-3xl md:rounded-3xl border-t md:border border-gray-800 shadow-2xl animate-in slide-in-from-bottom duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Mobile Handle */}
                        <div className="w-12 h-1 bg-gray-700 rounded-full mx-auto my-3 md:hidden"></div>

                        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 px-6 py-4 md:py-5 flex items-center justify-between z-10">
                            <h2 className="text-xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 md:p-8 space-y-8">
                            {selectedProject.image && (
                                <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-auto object-cover max-h-[300px] md:max-h-[450px]"
                                    />
                                </div>
                            )}

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 space-y-4">
                                    <h3 className="text-lg font-bold text-blue-400 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                                        About Project
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-purple-400 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700 text-sm font-medium"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-800">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all font-semibold border border-gray-700"
                                >
                                    <Github size={20} /> View Source
                                </a>
                                {selectedProject.demo && selectedProject.demo !== "#" && (
                                    <a
                                        href={selectedProject.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl transition-all font-semibold shadow-lg shadow-blue-900/20"
                                    >
                                        <ExternalLink size={20} /> Live Demo
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
