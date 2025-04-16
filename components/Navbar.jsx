import React from 'react'
import {motion} from 'framer-motion'

export default Navbar

function Navbar() {
    const links = [
        { name: "home", url: "/" },
        { name: "about", url: "/#about" },
        { name: "projects", url: "/#projects" },
        { name: "skills", url: "/#skills" },
        { name: "blog", url: "/blog" }
      ];  
    return (
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-lg shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center flex-col md:flex-row">
          <motion.h1 className="text-white text-2xl font-bold tracking-wide" whileHover={{ scale: 1.1 }}>
            Kushal's Portfolio
          </motion.h1>
          <ul className="flex space-x-10">
            {links.map((link, idx) => (
              <motion.li
                key={link}
                className="text-gray-300 text-md md:text-xl hover:text-white hover:font-bold capitalize transition duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, color: '#fff' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={link.url}>{link.name}</a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    );
  }