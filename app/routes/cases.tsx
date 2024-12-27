import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Cases - ComicsAI" },
    { name: "description", content: "Explore amazing comics created with ComicsAI" },
  ];
};

const cases = [
  {
    title: "The Last Guardian",
    description: "A touching story about friendship and loyalty",
    image: "https://placehold.co/600x400/png",
    author: "Sarah Chen",
    style: "Modern Anime",
  },
  {
    title: "Cyber Dreams",
    description: "A cyberpunk adventure in Neo Tokyo",
    image: "https://placehold.co/600x400/png",
    author: "Mike Johnson",
    style: "Sci-fi Manga",
  },
  {
    title: "Forest Spirit",
    description: "A mystical tale of nature and magic",
    image: "https://placehold.co/600x400/png",
    author: "Yuki Tanaka",
    style: "Watercolor Anime",
  },
  {
    title: "Urban Tales",
    description: "Slice of life stories in the big city",
    image: "https://placehold.co/600x400/png",
    author: "Alex Wong",
    style: "Classic Manga",
  },
  {
    title: "Dragon's Quest",
    description: "An epic fantasy adventure",
    image: "https://placehold.co/600x400/png",
    author: "Emma Davis",
    style: "Fantasy Anime",
  },
  {
    title: "School Days",
    description: "Heartwarming high school memories",
    image: "https://placehold.co/600x400/png",
    author: "Liam Parker",
    style: "Chibi Style",
  },
];

export default function CasesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Featured Comics
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Explore amazing comics created by our community
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-500">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.author}</p>
                    <p className="text-sm text-gray-500">{item.style}</p>
                  </div>
                  <button className="btn btn-outline">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="btn btn-primary">
            Load More
          </button>
        </motion.div>
      </div>
    </div>
  );
}
