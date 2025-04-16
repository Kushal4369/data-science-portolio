// Blog Detail Page: app/blog/[slug]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function BlogDetailPage() {
  
  
  const defaultPost ={
    title: "Mock Blog Post Title",
    slug: "mock-blog-post-title",
    date: "2025-04-15",
    content: `# Hello from Markdown

This is a *mock* blog post while we wait for the backend.

\`\`\`python
def hello():
    print("Hello, data world!")
\`\`\`

- Point 1
- Point 2

    `
  }
  const [post, setPost] = useState(defaultPost);
  // const { slug } = useParams();

  useEffect(() => {
    // TEMPORARY MOCK DATA UNTIL BACKEND IS READY
    const mockPost = {
      title: "Mock Blog Post Title",
      slug: "mock-blog-post-title",
      date: "2025-04-15",
      content: `# Hello from Markdown
  
  This is a *mock* blog post while we wait for the backend.
  
  \`\`\`python
  def hello():
      print("Hello, data world!")
  \`\`\`
  
  - Point 1
  - Point 2
  
      `
    };
  
    // Use the mock post
    setPost(mockPost);
  }, []);

  if (!post) return <div className="text-center py-20 text-white">Loading...</div>;

  return (
    <div className="bg-black text-white min-h-screen px-6 py-20 flex flex-col gap-8 items-center">
      <motion.h1
        className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {post.title}
      </motion.h1>
      <p className="text-center text-gray-400 mb-8">{post.date}</p>
      <p className="text-center text-gray-400 mb-8">{post.slug}</p>


      <motion.article
        className="prose lg:prose-xl prose-invert max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </motion.article>
      <div className="bg-gray-800 w-52 md:w-1/3 text-green-400 font-mono text-sm p-4  srounded-md shadow-inner overflow-auto whitespace-pre-wrap">
      <pre>Hello Code</pre>
    </div>
    <iframe src="/117a174defa442f8bb23eac28002b818.html" height={600} width={350} />

    </div>
  );
}
