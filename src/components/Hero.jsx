import { ArrowRight, Download } from "lucide-react"

function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm mb-6 font-medium animate-pulse">
                    Available for Freelance Work
                </span>

                <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
                    Developing <br />
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-transparent bg-clip-text drop-shadow-sm">
                        Digital Excellence
                    </span>
                </h1>

                <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                    I am <span className="text-white font-medium">Ithayaraj Inpalagan</span>, a Full-Stack specialist transforming complex ideas into intuitive, high-performance web and mobile experiences.
                </p>

                <div className="flex justify-center items-center">
                    <a
                        href="/cv.pdf"
                        download="Ithayaraj_Inpalagan_CV.pdf"
                        className="group relative px-8 py-3 font-medium text-white transition-all duration-300"
                    >
                        <span className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-70 blur-sm group-hover:opacity-100 transition-opacity"></span>
                        <span className="relative flex items-center gap-2">
                            Download CV
                            <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
