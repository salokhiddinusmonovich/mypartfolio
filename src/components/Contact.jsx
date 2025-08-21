import { FaGithub } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact" className="p-6 bg-transparent">
      {/* Resume Button */}
      <div className="mt-10 text-center">
        <a
          href="/UsmonovSalokhiddin.pdf" // положи файл в папку public/
          download
          className="inline-block bg-green-500 text-black px-5 py-2 rounded-md font-mono font-semibold hover:bg-green-400 transition-colors"
        >
          ./download --cv
        </a>
      </div>
    </section>
  );
};

export default Contact;
