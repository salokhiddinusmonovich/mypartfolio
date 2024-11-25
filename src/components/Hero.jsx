import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/90 via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-mono font-extrabold">
          <span className="text-green-400">&gt; </span>
          Hi, I'm Atharva Aher
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-mono text-gray-400">
          $ whoami
          <br />
          &gt; Aspiring Software Engineer
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-green-500 px-6 py-2 rounded-md text-black font-mono hover:bg-green-400 transition-colors"
          >
            ./view-projects
          </a>
          <a
            href="#contact"
            className="border border-green-500 px-6 py-2 rounded-md font-mono text-green-500 hover:bg-green-500 hover:text-black transition-colors"
          >
            ./contact
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
