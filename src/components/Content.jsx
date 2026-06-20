const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10">
          Contact Me
        </h2>

        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg">

          <p className="text-gray-300 mb-6">
           I am passionate about building scalable backend systems and full-stack applications. I am currently seeking opportunities to contribute, learn, and grow in a challenging environment. I am always open to opportunities, collaborations, or any technical discussions.
          </p>

          <div className="space-y-4 text-lg">

            {/* Email */}
            <p>
              📧 Email:{" "}
              <a
                href="mailto:balamurugansekar222@gmail.com"
                className="text-blue-400 hover:underline"
              >
                balamurugansekar222@gmail.com
              </a>
            </p>

            {/* Phone */}
            <p>
              📞 Phone:{" "}
              <a
                href="tel:+917397184485"
                className="text-blue-400 hover:underline"
              >
                +917397184485
              </a>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;