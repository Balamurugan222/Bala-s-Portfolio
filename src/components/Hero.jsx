import React from 'react'
import Bala from '../assets/images/Bala Profile images.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-slate-100 to-slate-900 px-4 sm:px-6 py-10"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-slate-900 text-base sm:text-lg">
            Hello, I'm
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-2">
            S. Balamurugan
          </h1>

          <h2 className="text-xl sm:text-2xl mt-3 text-slate-900">
            Software Engineer
          </h2>

          <p className="mt-5 text-slate-900 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Passionate Software Engineer focused on building scalable web
            applications and delivering efficient solutions through modern
            technologies.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-slate-900 text-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Bala}
            alt="Profile"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 object-cover rounded-full shadow-xl border-4 border-white"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero