import { RevealOnScroll } from "./RevealOnScroll";


export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkills = ["Node.js", " Express.js", "Firebase", "MongoDB", "MySQL"];

  const otherSkills = ["Webpack", "React Testing Library", "Jest"];

  const versionControl = ["Git", " GitHub"]; 

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
     <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Version Control</h3>
                <div className="flex flex-wrap gap-2">
                  {versionControl.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> other</h3>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-5 flex space-x-10">
              <h3 className="text-xl font-bold mb-4  space-x-10"> 📩 Profile : </h3>
              {/* <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                <a href="https://github.com/SatputeShital" target="_blank" rel="noopener noreferrer">📂 GitHub</a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/shital-satpute-a93458354/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
                </li>
                <li>
                <a href="https://naukri.com/yourprofile" target="_blank" rel="noopener noreferrer">💼 Naukri</a>
                </li>
              </ul> */}
                 <a href="https://github.com/SatputeShital" target="_blank" rel="noopener noreferrer">📂 GitHub</a>
                 <a href="https://www.linkedin.com/in/shital-satpute-a93458354/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
                 <a href="https://naukri.com/yourprofile" target="_blank" rel="noopener noreferrer">💼 Naukri</a>
            </div>

         
        </div>
      </RevealOnScroll>
    </section>
  );
};