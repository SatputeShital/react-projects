import { RevealOnScroll } from "./RevealOnScroll";

export const EducationExperience = () => {
  return (
    <section
      id="eduexp"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Education & Experience
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Graduated with a strong foundation in computer applications,
              specializing in web development and modern frontend technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> Master of Computer Application </strong> <br />
                    -K K Wagh Engineering College, Pune University
                    <br />
                    (2015-2018)
                  </li>
                  <li>
                    <strong> Bachelor of Computer Application </strong> -
                    Women’s College, SNDT University (2011-2014)
                  </li>
                  {/* <li>
                  Relevant Coursework: Data Structures, Web Development, Animation...
                </li> */}
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      {" "}
                      React Developer at SKY IT SOLUTIONS (2022-Present){" "}
                    </h4>
                    <p>
                      - Developed and deployed highly performant frontend web
                      applications in React.
                    </p>
                  </div>

                  {/* <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at DEF Startups (2019){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
