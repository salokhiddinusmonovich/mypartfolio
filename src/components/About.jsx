import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';

export default function About() {
  return (
    <section id="about" className="p-6 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">cat about.py</h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-8">
          <motion.img
            src={profileImg}
            alt="Atharva Aher"
            className="w-48 h-48 rounded-full border-4 border-green-500 flex-shrink-0 object-cover"
            whileHover={{ scale: 1.1 }}
          />
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 w-full">
            <p className="text-lg leading-relaxed font-mono">
              <span className="text-purple-400">class</span>{' '}
              <span className="text-yellow-400">Developer</span>:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">def</span>{' '}
              <span className="text-green-400">__init__</span>(self):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="text-orange-400">"Atharva Aher"</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.role = <span className="text-orange-400">"Software Engineer"</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.skills = [<span className="text-orange-400">"Python"</span>, <span className="text-orange-400">"React"</span>, <span className="text-orange-400">"Node.js"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.interests = [<span className="text-orange-400">"Web Development"</span>, <span className="text-orange-400">"AI/ML"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.status = <span className="text-orange-400">"Always learning"</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 