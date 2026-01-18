import { Menu, X, Github, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            // Handle background change
            setScrolled(window.scrollY > 20)

            // Handle active section detection
            const sections = ["home", "about", "projects", "contact"]
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top >= -100 && rect.top <= 300
                }
                return false
            })

            if (current) setActiveSection(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "py-2 bg-gray-900/80 backdrop-blur-lg border-b border-white/5" : "py-4 bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Port.</span>
                    <span className="text-white">Folio</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative group ${activeSection === link.href.substring(1)
                                        ? "text-white bg-white/10"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                    {activeSection === link.href.substring(1) && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Ithayaraj" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/ithayaraj-inpalagan-b226b93a5/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-400 hover:text-white transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-xl md:hidden transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-3xl font-bold transition-all ${activeSection === link.href.substring(1) ? "text-blue-500 scale-110" : "text-gray-500"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-8 mt-4">
                        <a href="https://github.com/Ithayaraj" target="_blank" rel="noreferrer" className="text-white group">
                            <Github size={32} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://www.linkedin.com/in/ithayaraj-inpalagan-b226b93a5/" target="_blank" rel="noreferrer" className="text-white group">
                            <Linkedin size={32} className="group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
