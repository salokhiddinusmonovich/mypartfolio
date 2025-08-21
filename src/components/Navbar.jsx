import { Terminal, Menu, X } from "lucide-react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gradient-to-b from-gray-900/30 to-gray-900/0 backdrop-blur-[2px] z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 sm:p-5 lg:p-6">
        <a
          href="#"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          <h1 className="text-lg sm:text-xl md:text-2xl font-mono font-bold">~/salo_kh</h1>
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-green-400 hover:text-green-300"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <a
            href="https://github.com/salokhiddinusmonovich"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://leetcode.com/u/usmonovsalokhiddin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <SiLeetcode size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/salokhiddin-usmonov-975735309/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <RiLinkedinBoxFill size={22} />
          </a>
          <a
            href="https://t.me/salo_kh1ddin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <FaTelegram size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-gray-900/95 border-t border-gray-800 overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3 sm:gap-4 p-4"
            >
              <a
                href="https://github.com/salokhiddinusmonovich"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors p-2 flex items-center gap-3"
              >
                <FaGithub size={24} />
                <span className="font-mono">GitHub</span>
              </a>
              <a
                href="https://leetcode.com/u/usmonovsalokhiddin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors p-2 flex items-center gap-3"
              >
                <SiLeetcode size={24} />
                <span className="font-mono">LeetCode</span>
              </a>
              <a
                href="https://www.linkedin.com/in/salokhiddin-usmonov-975735309/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors p-2 flex items-center gap-3"
              >
                <RiLinkedinBoxFill size={26} />
                <span className="font-mono">LinkedIn</span>
              </a>
              <a
                href="https://t.me/YOUR_CHANNEL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors p-2 flex items-center gap-3"
              >
                <FaTelegram size={24} />
                <span className="font-mono">Telegram</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
