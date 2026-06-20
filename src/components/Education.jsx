import { FaGraduationCap, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 ml-4 md:ml-10 space-y-12">

          {/* College */}
          <div className="relative pl-10">

            <div className="absolute -left-6 top-2 bg-blue-500 p-3 rounded-full shadow-lg">
              <FaGraduationCap />
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold">
                MCA-Master Of Computer Applications. (MCA) (Distance Education)                                 
              </h3>
              <p className="text-gray-300 mt-1">
               University of Madras, Chennai
              </p>
              <p className="text-gray-400 text-sm mt-1">
                2025 - Present
              </p>
            </div>
          </div>

          {/* 12th */}
          <div className="relative pl-10">

            <div className="absolute -left-6 top-2 bg-green-500 p-3 rounded-full shadow-lg">
              <FaGraduationCap />
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-gray-300 mt-1">
                Vellore Institute of Technology - VIT University 
              </p>
              <p className="text-gray-400 text-sm mt-1">
                2021 - 2024 , CGPA : 8.20 
              </p>
            </div>
          </div>

          
          <div className="relative pl-10">

            <div className="absolute -left-6 top-2 bg-purple-500 p-3 rounded-full shadow-lg">
              <FaSchool />
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold">
                 HSC-Higher Secondary Education
              </h3>
              <p className="text-gray-300 mt-1">
                The Namakkal Teachers Vidhyashram Matric Higher Secondary School.                   
              </p>
              <p className="text-gray-400 text-sm mt-1">
                2019 - 2021 , PERCENTAGE - 87% 
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;