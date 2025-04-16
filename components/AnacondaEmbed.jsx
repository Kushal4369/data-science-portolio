import { useEffect } from "react";
import { motion } from "framer-motion";

export default function AnacondaEmbed() {
  useEffect(() => {
    // Placeholder for Anaconda embed logic or iframe config
  }, []);

  return (
    <section id="anaconda" className="bg-gray-900 text-white px-6 py-20">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Try It Live – Anaconda Notebook
      </motion.h2>
      <motion.div
        className="w-full h-[600px] bg-black border border-gray-700 rounded-xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src="https://anaconda.cloud/embed" // Replace with actual embed link
          title="Anaconda Notebook"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allowFullScreen
        ></iframe>
      </motion.div>
    </section>
  );
}
