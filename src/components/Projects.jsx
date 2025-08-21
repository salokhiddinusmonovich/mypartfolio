import { motion } from "framer-motion";
import { VscCode, VscTerminal } from "react-icons/vsc";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Telegram Registration Bot Template (Python + PostgreSQL CRM)",
      description:
        "A modular Telegram bot built in Python for user registration and CRM management. It uses a custom PostgreSQL database schema (written from scratch) to store user profiles, contact info, and activity data. Ideal for small businesses, online services, or MVPs that need quick onboarding and structured user tracking.",
      technologies: ["Python", "Aigoram", "SQLAlchemy", "Git"],
      github:
        "https://github.com/salokhiddinusmonovich/register-login-template-telegram_bot",
      website: "",
    },
    {
      title: "Virtual Social Network with Pinterest Parser and Real-time Chat",
      description:
        "A full-featured social networking platform built with Django and Docker. It includes real-time chat via WebSockets, content parsing from Pinterest, and background task processing for email notifications.",
      technologies: [
        "Python",
        "Django",
        "Docker",
        "Nginx",
        "Git",
        "CI/CD",
        "Celery",
        "Redis",
        "Websocket",
        "beautifulsoup4",
        "PostgreSQL",
      ],
      github: "The source code is private and cannot be shared. ",
      website: "http://37.221.193.231/",
    },
  ];

  return (
    <section id="projects" className="p-6 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">
        ls projects/
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors w-full max-w-md"
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
              <h3 className="text-lg md:text-xl font-bold font-mono mb-2">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs md:text-sm bg-gray-800 text-green-400 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Back-end Developer",
      company: "NAPA Automotive",
      period: "07/2024 – 12/2024",
      description:
        "Worked on a large-scale logistics project focused on real-time truck tracking, driver data updates, and automated notifications. Developed scalable backend services and optimized data flows for reporting (IFTA, FMCSA).",
      responsibilities: [
        "Developed and optimized Django-based backend to manage real-time data updates",
        "Implemented a notification system to alert drivers about important updates",
        "Built features for transportation and logistics reporting",
        "Used WebSockets for real-time communication",
        "Configured Nginx for load balancing and as a reverse proxy",
        "Integrated Docker, Redis, and Celery for performance and async tasks",
        "Implemented logging for monitoring and debugging",
      ],
    },
  ];

  return (
    <section id="experience" className="p-6 mt-20 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">
        ls experience/
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <VscTerminal className="text-green-400" size={20} />
              <h3 className="text-lg md:text-xl font-bold font-mono">
                {exp.role} | {exp.company}
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              {exp.description}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ✅ Оба компонента экспортируем как именованные
export { Projects, Experience };
