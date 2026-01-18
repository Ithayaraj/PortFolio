function About() {
    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative bg-slate-300 rounded-2xl p-2 md:p-4 rotate-3 transform transition hover:rotate-0 duration-300 border border-gray-700">
                            <img
                                src="/images/profile.jpg"
                                alt="Ithayaraj Inpalagan"
                                className="rounded-xl w-full object-cover shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-blue-500">About</span> Me
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            I am a detail-oriented web and mobile developer with a deep passion for building robust and scalable applications. My journey in tech has been fueled by a curiosity to solve complex problems and a desire to create seamless user experiences.
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            With expertise in the MERN stack (MongoDB, Express, React, Node.js) and React Native, I thrive in dynamic environments where innovation is key. Whether it's developing a marketplace app or a real-time tracking system, I bring dedication and technical prowess to every project.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                                <h3 className="text-2xl font-bold text-white mb-1">2+</h3>
                                <p className="text-gray-400 text-sm">Years Experience</p>
                            </div>
                            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                                <h3 className="text-2xl font-bold text-white mb-1">5+</h3>
                                <p className="text-gray-400 text-sm">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
