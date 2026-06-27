import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-slate-100 mb-12">
          Professional Experience
        </h2>

        <div className="bg-slate-800 hover:bg-slate-700 shadow-lg rounded-xl p-8 border-l-4 border-cyan-500">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center">

            <div>
              <h3 className="text-2xl font-semibold text-slate-100">
                Software Engineer
              </h3>

              <p className="text-lg text-cyan-600 font-medium mt-1">
                Tata Consultancy Services (TCS)
              </p>
            </div>

            <span className="text-slate-100 mt-2 md:mt-0">
              June 2025 – Present
            </span>

          </div>

          <ul className="mt-6 space-y-3 text-slate-100 list-disc list-inside leading-relaxed">
            <li>
              Developed and maintained enterprise web applications using Java,
              Spring Boot, React, and MySQL.
            </li>

            <li>
              Built secure RESTful APIs for document management and business
              workflows.
            </li>

            <li>
              Integrated AWS S3 for secure document storage and retrieval.
            </li>

            <li>
              Implemented robust exception handling and validation to improve
              application reliability.
            </li>

            <li>
              Collaborated with cross-functional teams using Agile/Scrum
              methodology.
            </li>

            <li>
              Participated in code reviews, debugging, testing, and deployment
              activities.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default Experience;