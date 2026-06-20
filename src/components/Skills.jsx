import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaCogs,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava className="text-orange-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "Microservices", icon: <FaCogs className="text-blue-400" /> },
    { name: "REST API", icon: <SiPostman className="text-orange-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind CSS",icon: <SiTailwindcss className="text-cyan-400" />},
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section id="skills" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-slate-800 hover:bg-slate-700 transition p-6 rounded-xl shadow-lg"
            >
              <div className="text-3xl">
                {skill.icon}
              </div>
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;  