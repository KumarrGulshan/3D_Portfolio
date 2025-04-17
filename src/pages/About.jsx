import { skills } from "../constant";

function About() {
  return (
    <section className="max-container px-4 py-6 sm:px-6 md:px-10 lg:px-16 xl:px-20 sm:py-10 md:py-14 lg:py-20 xl:py-24">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-2">
        Hello, I'm{" "}
        <span className="text-violet-600 drop-shadow">Gulshan</span>
      </h1>

      <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6">
        <p>
          Software Engineer based in India, specializing in technical education
          through hands-on learning and building applications.
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-violet-600 mb-4">
          My Skills
        </h2>
        <ul className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          <li className="bg-fuchsia-900 text-white rounded-lg px-4 py-2 md:px-6 md:py-3 hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer">
            App Development
          </li>
          <li className="bg-fuchsia-900 text-white rounded-lg px-4 py-2 md:px-6 md:py-3 hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer">
            Web Development
          </li>
          <li className="bg-fuchsia-900 text-white rounded-lg px-4 py-2 md:px-6 md:py-3 hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer">
            Photography
          </li>
        </ul>
      </div>

      <div className="py-10 mt-5 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-violet-600 mb-6">
          My Experiences
        </h3>
        <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {skills.map((skill) => (
            <div
              className="block-container w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default About;
