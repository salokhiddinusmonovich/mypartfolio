import { motion } from "framer-motion";
import { VscCode } from "react-icons/vsc";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "News Headline Analyzer",
      description: "Web Application for sentiment analysis using Flask and TensorFlow",
      technologies: ["Python", "TensorFlow", "Scikit-Learn", "Flask", "HTML", "CSS", "Git"],
      github: "https://github.com/yourusername/news-headline-analyzer",
      website: "https://sentiment-analysis-nn.koyeb.app/" // Leave empty if no website yet
    },
    {
      title: "AQI Prediction Web Application",
      description: "Web Application for predicting air quality using Machine Learning.",
      technologies: ["Python", "Scikit-Learn", "Flask", "HTML", "CSS", "JavaScript", "Git"],
      github: "https://github.com/yourusername/aqi-prediction",
      website: ""
    }
  ];

  return (
    <section id="projects" className="p-6 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">
        ls projects/
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-start mb-4">
              <VscCode className="text-green-400" size={24} />
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  title="View Source Code"
                >
                  <FaGithub size={20} />
                </a>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    title="View Live Demo"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-xl font-bold font-mono">{project.title}</h3>
            <p className="text-gray-400 mt-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="bg-gray-700 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
