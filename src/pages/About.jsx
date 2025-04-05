import { skills } from "../constant";

function About() {
  return (
    <section className="max-container ml-10">
      <h1 className="head-text text-white font-semibold ml-5">
        Hello, I'm{" "}
        <span
          className="text-3xl font-semibold text-violet-600
      drop-shadow"
        >
          Gulshan
        </span>
      </h1>

      <div className="mt-2 ml-5  text-white text-xl flex-col gap-3 ">
        <p>
          Software Engineer based in India, specializing in technical education
          through hands-on learning and building application.
        </p>
      </div>''
      <div className="flex flex-col ml-5 mt-10">
        <h1 className="font-bold text-2xl text-violet-600 mb-5">My Skills</h1>

        <ul className="flex gap-4 flex-wrap ">
          <li className="bg-fuchsia-900 text-white rounded-lg p-2 px-4 border-b-gray-500 hover:scale-90 transition-all duration-300 ease-in-out transform cursor-pointer">
            App Development
          </li>
          <li className="bg-fuchsia-900 text-white rounded-lg p-2 px-4 border-b-gray-500 hover:scale-90 transition-all duration-300 ease-in-out transform cursor-pointer">
            Web Development
          </li>
          <li className="bg-fuchsia-900 text-white rounded-lg p-2 px-4 border-b-gray-500 hover:scale-90 transition-all duration-300 ease-in-out transform cursor-pointer">
            Photography
          </li>
        </ul>
      </div>

      <div className="py-8 mt-60 flex text-violet-600 font-bold text-2xl flex-col">
        <h3 className="subhead-text  ml-5">My Experiences</h3>
        <div className="mt-10 flex flex-wrap gap-12 ">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
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
