import { FaGithub } from 'react-icons/fa';
import { RiLinkedinBoxFill } from 'react-icons/ri';

export default function Contact() {
  return (
    <section id="contact" className="p-6 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">./contact --send</h2>
      <form className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg border border-gray-700">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-green-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-green-500 focus:outline-none"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-green-500 focus:outline-none"
          rows={4}
        />
        <button className="w-full bg-green-500 text-black p-2 rounded-md font-mono hover:bg-green-400 transition-colors">
          Execute
        </button>
      </form>
      <div className="flex justify-center mt-8 gap-6">
        <a href="https://github.com" className="text-gray-400 hover:text-green-400 transition-colors">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com" className="text-gray-400 hover:text-green-400 transition-colors">
          <RiLinkedinBoxFill size={26} />
        </a>
      </div>
    </section>
  );
} 