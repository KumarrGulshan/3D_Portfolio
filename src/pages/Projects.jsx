import { Link } from "react-router-dom";
import { projects } from "../constant";
import { arrow } from "../assets/icon";

const Projects = () => {
  return (
    <section className="px-4 sm:px-10 py-10 max-w-full md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      <h1 className="text-white text-2xl sm:text-3xl font-bold">
        My{" "}
        <span className="text-indigo-600 drop-shadow text-3xl sm:text-4xl font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-white mt-4 text-base leading-relaxed max-w-3xl">
        I’ve built a simple yet clean portfolio using HTML, CSS, and JavaScript,
        along with React-based mini-projects like a background changer and password generator.
        I'm also skilled in Java development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 text-indigo-600">
        {projects.map((project) => (
          <div className="w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col text-indigo-500 mt-2">
              <h4 className="text-xl font-semibold">{project.name}</h4>
              <p className="text-white text-sm">{project.description}</p>
              <div className="flex items-center gap-2 mt-1">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 text-sm"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


