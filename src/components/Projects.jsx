import { motion } from "framer-motion";
import { VscCode } from "react-icons/vsc";

const Projects = () => {
  return (
    <section id="projects" className="p-6 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">
        ls projects/
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[1, 2, 3].map((project) => (
          <motion.div
            key={project}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <VscCode className="text-green-400 mb-4" size={24} />
            <h3 className="text-xl font-bold font-mono">Project {project}</h3>
            <p className="text-gray-400 mt-2">
              A brief description of the project.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">
                React
              </span>
              <span className="bg-gray-700 px-2 py-1 rounded text-sm">
                Tailwind
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
