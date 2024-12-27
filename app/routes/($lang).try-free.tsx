import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Try Free - ComicsAI" },
    { name: "description", content: "Try ComicsAI for free and create your first anime comic" },
  ];
};

export default function TryFreePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Try ComicsAI for Free
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Create your first anime comic in minutes
          </p>
        </motion.div>

        <motion.div
          className="mt-12 bg-white rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="px-6 py-8 sm:p-10">
            <div className="space-y-6">
              <div>
                <label htmlFor="story" className="block text-sm font-medium text-gray-700">
                  Your Story
                </label>
                <div className="mt-1">
                  <textarea
                    id="story"
                    name="story"
                    rows={4}
                    className="shadow-sm block w-full focus:ring-primary-500 focus:border-primary-500 sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Describe your story scene here..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="style" className="block text-sm font-medium text-gray-700">
                  Art Style
                </label>
                <select
                  id="style"
                  name="style"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                >
                  <option>Modern Anime</option>
                  <option>Classic Manga</option>
                  <option>Chibi Style</option>
                  <option>Watercolor Anime</option>
                </select>
              </div>

              <div>
                <label htmlFor="panels" className="block text-sm font-medium text-gray-700">
                  Number of Panels
                </label>
                <select
                  id="panels"
                  name="panels"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                >
                  <option>1 Panel</option>
                  <option>2 Panels</option>
                  <option>3 Panels</option>
                  <option>4 Panels</option>
                </select>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    Generate Comic
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 bg-white rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="px-6 py-8 sm:p-10">
            <h3 className="text-lg font-medium text-gray-900">Preview</h3>
            <div className="mt-4 aspect-[16/9] bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Your generated comic will appear here</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
