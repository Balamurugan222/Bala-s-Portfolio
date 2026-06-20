import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "STUDENT SENTIMENTAL ANALYSIS",
      description: "Student sentiment feedback is gathered through Google Forms, capturing students' emotions and levels of    satisfaction with their educational experiences. Analyzing this data enables educational institutions to enhance teaching methods and communication practices",
      tech: "Python, Django, MySQL, REST API",
      link: "#",
      github: "https://github.com/Balamurugan222/Student-sentiment-analysis.git",
    },
    {
      title: "ONLINE TAXI BOOKING SYSTEM",
      description:" This project is a basic console application that enables passengers to book taxis seamlessly. It leverages core Object-Oriented Programming (OOP) principles such as classes, objects, inheritance, and polymorphism to efficiently manage taxis, drivers, and booking operations.",
      tech: "Java, OOPs,MySQL",
      link: "#",
      github: "https://github.com/Balamurugan222/Taxi-Booking-System-Built-with-Java-OOP-.git",
    },
    {
      title: "React Portfolio Website",
      description:
        "Personal portfolio website built using React and Tailwind CSS with responsive UI design.",
      tech: "React, Tailwind CSS, JavaScript",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="bg-slate-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-6 mb-4">
                {project.description}
              </p>

              <p className="text-blue-400 text-sm mb-4">
                {project.tech}
              </p>

              {/* <a
                href={project.link}
                className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm inline-block"
              >
                View Project
              </a> */}
              {/* GitHub Icon Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition"
              >
                <FaGithub size={18} />
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;