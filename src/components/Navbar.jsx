import { Terminal } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiLinkedinBoxFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gradient-to-b from-gray-900/30 to-gray-900/0 backdrop-blur-[2px] z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <a
          href="#"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          <h1 className="text-2xl font-mono font-bold">~/portfolio</h1>
        </a>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Atharva0045"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://leetcode.com/u/eQF0zkNYmu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <SiLeetcode size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/atharva045"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <RiLinkedinBoxFill size={22} />
          </a>
          <a
            href="https://instagram.com/atharva045"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://github.com/Atharva0045/personal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <Terminal size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
