import { Terminal } from 'lucide-react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { RiLinkedinBoxFill } from 'react-icons/ri';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gradient-to-b from-gray-900/30 to-gray-900/0 backdrop-blur-[2px] z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <h1 className="text-2xl font-mono font-bold text-green-400">~/portfolio</h1>
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://leetcode.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <SiLeetcode size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <RiLinkedinBoxFill size={22} />
          </a>
          <a 
            href="https://instagram.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <Terminal className="text-green-400" size={20} />
        </div>
      </div>
    </nav>
  );
} 