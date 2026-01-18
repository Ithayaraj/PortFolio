import { Code2, Server, Brain, Wrench } from "lucide-react"
import {
    SiReact, SiTailwindcss, SiHtml5, SiCss3, SiJavascript,
    SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiMysql,
    SiPython, SiPandas, SiScikitlearn, SiStreamlit,
    SiGit, SiGithub, SiVercel, SiPostman, SiFigma,
    SiSpringboot
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { VscVscode } from "react-icons/vsc"
import { FaJava } from "react-icons/fa"

function Skills() {
    const skills = [
        {
            category: "Frontend",
            icon: <Code2 className="text-blue-500" size={24} />,
            items: [
                { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
                { name: "React Native", icon: <SiReact className="text-[#61DAFB]" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
                { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> }
            ]
        },
        {
            category: "Backend",
            icon: <Server className="text-purple-500" size={24} />,
            items: [
                { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
                { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
                { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
                { name: "REST API", icon: <TbApi className="text-blue-400" /> },
                { name: "Java", icon: <FaJava className="text-[#E76F00]" /> },
                { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> }
            ]
        },
        {
            category: "Data Science & ML",
            icon: <Brain className="text-pink-500" size={24} />,
            items: [
                { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
                { name: "Machine Learning", icon: <Brain size={14} className="text-pink-400" /> },
                { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
                { name: "Scikit-learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
                { name: "Streamlit", icon: <SiStreamlit className="text-[#FF4B4B]" /> }
            ]
        },
        {
            category: "Tools & DevOps",
            icon: <Wrench className="text-green-500" size={24} />,
            items: [
                { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
                { name: "GitHub", icon: <SiGithub className="text-white" /> },
                { name: "Vercel", icon: <SiVercel className="text-white" /> },
                { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
                { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
                { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> }
            ]
        },
    ]

    return (
        <section className="py-20 px-4 bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-blue-500">Arsenal</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of tools and technologies I use to build robust and scalable applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                            <div className="flex items-center gap-3 mb-6">
                                {skillGroup.icon}
                                <h3 className="text-xl font-bold text-blue-400 group-hover:text-white transition-colors">{skillGroup.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-default group/item"
                                    >
                                        <span className="scale-100 group-hover/item:scale-110 transition-transform">
                                            {skill.icon}
                                        </span>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
