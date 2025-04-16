// Blog List Page: app/blog/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // TEMPORARY MOCK DATA UNTIL BACKEND IS READY
    const Posts = [{
      id: 1,
        title: "Understanding Regression Algorithms",
        slug: "understanding-regression-algorithms",
        summary: "An in-depth look at linear, ridge, and lasso regression.",
        date: "2025-04-01",
        content:"Regression is a fundamental concept in data science."
       
    },
    {
        id: 1,
          title: "Understanding Regression Algorithms",
          slug: "understanding-regression-algorithms",
          summary: "An in-depth look at linear, ridge, and lasso regression.",
          date: "2025-04-01",
          content:"Regression is a fundamental concept in data science."
    
   
        
      }]
  
    // Use the mock post
    setPosts(Posts);
  }, []);
  

  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blog
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-pink-700 transition duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}> 
              <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-300">{post.summary}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
