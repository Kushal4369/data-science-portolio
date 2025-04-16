

"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import profilePic from "@/public/profile_photo.jpeg";
import AnacondaEmbed from "@/components/AnacondaEmbed";

const chartData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 800 },
  { month: "Mar", users: 700 },
  { month: "Apr", users: 1000 },
  { month: "May", users: 1200 },
  { month: "Jun", users: 1500 },
];

const blogPosts = [
  {
    title: "Building a Scalable ML Pipeline",
    summary: "Learn how to create a production-grade machine learning pipeline with modularity and automation.",
  },
  {
    title: "Top 5 Data Visualization Tools for 2025",
    summary: "Explore the most effective libraries for creating stunning, interactive visualizations.",
  },
];


export default function Portfolio() {
  useEffect(() => {
    document.title = "Data Science Engineer Portfolio";
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-4">
        <motion.div
          className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image src={profilePic} alt="Profile Picture" width={128} height={128} className="object-cover w-full h-full" />
        </motion.div>

        <motion.h1
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Kushal Sharma – Data Science Engineer
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 mb-8 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I build intelligent systems using data, ML, and AI to solve real-world problems. Let's turn data into impact.
        </motion.p>
        <motion.a
          href="#projects"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          View Projects
        </motion.a>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 bg-gray-900" id="projects">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[{
            title: "Customer Churn Prediction",
            desc: "Built a machine learning pipeline to predict customer churn with 92% accuracy using XGBoost and SHAP for interpretability."
          }, {
            title: "Real-Time Sentiment Analysis",
            desc: "Deployed a real-time Twitter sentiment analysis dashboard using NLP and Streamlit."
          }, {
            title: "Recommendation System",
            desc: "Developed a collaborative filtering-based recommendation engine for an e-commerce platform."
          }, {
            title: "Time Series Forecasting",
            desc: "Created ARIMA and LSTM models to forecast product demand for a retail chain."
          }].map((project, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-2xl border border-gray-700 hover:shadow-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto bg-gray-950" id="data-visualization">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Data Visualization
        </motion.h2>
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip contentStyle={{ backgroundColor: "#1F2937", borderColor: "#9333EA" }} />
              <Line type="monotone" dataKey="users" stroke="#9333EA" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="px-6 py-20 bg-gray-900 flex flex-col gap-10 items-center" id="blog">
        <motion.h2 className="text-3xl font-bold mb-12 text-center text-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>Blog</motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-indigo-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
              <p className="text-gray-400">{post.summary}</p>
            </motion.div>
            
            
          ))}
        </div>
        <motion.a
            href="/blog"
            className=" w-1/6 text-center inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            Read More
          </motion.a>
      </section>

      {/* Resume Section */}
      <section className="px-6 py-20 bg-gray-950" id="resume">
        <motion.h2 className="text-3xl font-bold mb-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>Resume</motion.h2>
        <div className="text-center">
          <motion.a
            href="/resume.pdf"
            download
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
          >
            Download Resume
          </motion.a>
        </div>
      </section>
      <section>
        <AnacondaEmbed/>
      </section>
    </div>
  );
}
