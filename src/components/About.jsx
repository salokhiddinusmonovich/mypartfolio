import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="p-6 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">
        cat about.py
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-8">
          <motion.img
            src="./Profile.jpeg"
            alt="Atharva Aher"
            className="w-48 h-48 rounded-full border-4 border-green-500 flex-shrink-0 object-cover"
            whileHover={{ scale: 1.1 }}
          />
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 w-full">
            <p className="text-lg leading-relaxed font-mono">
              <span className="text-purple-400">class</span>{" "}
              <span className="text-yellow-400">Developer</span>:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">
                def
              </span>{" "}
              <span className="text-green-400">__init__</span>(self):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name ={" "}
              <span className="text-orange-400">"Atharva Aher"</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.role ={" "}
              <span className="text-orange-400">
                "Aspiring Software Engineer"
              </span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.languages = [
              <span className="text-orange-400">"Python"</span>,{" "}
              <span className="text-orange-400">"C++"</span>,{" "}
              <span className="text-orange-400">"Javascript"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.libraries =
              [<span className="text-orange-400">"Pytorch"</span>,{" "}
              <span className="text-orange-400">"Tensorflow"</span>,{" "}
              <span className="text-orange-400">"Flask"</span>,{" "}
              <span className="text-orange-400">"Scikit-Learn"</span>,{" "}
              <span className="text-orange-400">"React.js"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.tools =
              [<span className="text-orange-400">"Git"</span>,{" "}
              <span className="text-orange-400">"GitHub"</span>,{" "}
              <span className="text-orange-400">"Docker"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.interests = [
              <span className="text-orange-400">"Machine Learning"</span>,{" "}
              <span className="text-orange-400">"Artificial Intelligence"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.status ={" "}
              <span className="text-orange-400">"Always learning"</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
