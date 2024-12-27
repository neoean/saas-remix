import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog - ComicsAI" },
    { name: "description", content: "Latest news, tutorials and insights about AI comic creation" },
  ];
};

const posts = [
  {
    id: 1,
    title: "Getting Started with ComicsAI",
    description: "Learn how to create your first AI-powered comic in just 5 minutes",
    date: "2024-01-15",
    category: "Tutorial",
    author: {
      name: "Sarah Chen",
      image: "https://placehold.co/100x100/png",
      role: "CEO & Founder",
    },
    readTime: "5 min read",
    image: "https://placehold.co/800x400/png",
  },
  {
    id: 2,
    title: "The Future of AI in Comic Creation",
    description: "Exploring how artificial intelligence is revolutionizing the comic industry",
    date: "2024-01-10",
    category: "Industry Insights",
    author: {
      name: "Mike Johnson",
      image: "https://placehold.co/100x100/png",
      role: "CTO",
    },
    readTime: "8 min read",
    image: "https://placehold.co/800x400/png",
  },
  {
    id: 3,
    title: "Advanced Comic Composition Tips",
    description: "Professional techniques for creating engaging comic layouts",
    date: "2024-01-05",
    category: "Tips & Tricks",
    author: {
      name: "Yuki Tanaka",
      image: "https://placehold.co/100x100/png",
      role: "Art Director",
    },
    readTime: "10 min read",
    image: "https://placehold.co/800x400/png",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Latest news, tutorials and insights about AI comic creation
          </p>
        </motion.div>

        {/* Featured post */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
            <div className="lg:grid lg:grid-cols-2">
              <div className="lg:col-start-2">
                <img
                  className="h-64 w-full object-cover lg:h-full"
                  src={posts[0].image}
                  alt={posts[0].title}
                />
              </div>
              <div className="p-8 lg:col-start-1 lg:row-start-1">
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {posts[0].category}
                  </span>
                  <span className="ml-4 text-sm text-gray-500">{posts[0].date}</span>
                </div>
                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                  <Link to={`/blog/${posts[0].id}`} className="hover:text-primary-600">
                    {posts[0].title}
                  </Link>
                </h2>
                <p className="mt-4 text-lg text-gray-500">{posts[0].description}</p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={posts[0].author.image}
                      alt={posts[0].author.name}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{posts[0].author.name}</p>
                    <p className="text-sm text-gray-500">{posts[0].author.role}</p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">{posts[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Post grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {post.category}
                    </span>
                    <span className="ml-4 text-sm text-gray-500">{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="block mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-primary-600">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.author.image}
                      alt={post.author.name}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">{post.author.role}</p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter signup */}
        <motion.div
          className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                Get the latest updates about AI comic creation delivered to your inbox
              </p>
            </div>
            <form className="mt-8 sm:flex justify-center">
              <input
                type="email"
                className="block w-full sm:max-w-xs px-4 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 sm:mt-0 sm:ml-3 btn btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
