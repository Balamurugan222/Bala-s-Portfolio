const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Left Side */}
          <div className="md:w-1/2">
            <img
              src="https://media.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif"
              alt="Balamurugan"
              className="w-80 rounded-2xl shadow-lg mx-auto"
            />
          </div>

          {/* Right Side */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              Software Engineer & Backend Java Developer
            </h3>

            <p className="text-gray-300 leading-8">
              I am a Software Engineer with experience in designing and
              developing web applications using Java, Spring Boot,
              React, and MySQL. I enjoy building scalable backend
              systems, creating RESTful APIs, and developing
              user-friendly interfaces.
            </p>

            <p className="text-gray-300 leading-8 mt-4">
             Currently, I am working at TCS, continuously enhancing my skills in Spring Boot, Microservices, React, and RESTful API development. I am passionate about learning new technologies and building scalable, real-world software solutions that solve business problems effectively.
            </p>

            <a
               href="https://drive.google.com/file/d/1cJ9FtqqzlmSLbEo62iLIl__0sShHbSwL/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition"
            >
            Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;