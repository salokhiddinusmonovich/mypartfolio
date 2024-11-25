import { motion, AnimatePresence } from "framer-motion";

const Notification = ({ message, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-8 left-8 z-50"
        >
          <div className="bg-gray-900 border border-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <div className="text-green-500 font-mono">&gt;</div>
            <p className="font-mono">{message}</p>
            <button
              onClick={onClose}
              className="ml-4 text-gray-400 hover:text-green-500 transition-colors"
            >
              <span className="font-mono">×</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification; 