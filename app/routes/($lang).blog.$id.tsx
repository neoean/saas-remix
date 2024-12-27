import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog Post - ComicsAI" },
    { name: "description", content: "Read our latest blog post about AI comic creation" },
  ];
};

// This would typically come from a database
const posts = {
  "1": {
    id: 1,
    title: "Getting Started with ComicsAI",
    description: "Learn how to create your first AI-powered comic in just 5 minutes",
    date: "2024-01-15",
    category: "Tutorial",
    author: {
      name: "Sarah Chen",
      image: "https://placehold.co/100x100/png",
      role: "CEO & Founder",
      bio: "Former manga artist with 10+ years of experience in the industry.",
    },
    readTime: "5 min read",
    image: "https://placehold.co/1200x600/png",
    content: `
      <h2>Introduction</h2>
      <p>Creating comics has never been easier with the power of AI. In this tutorial, we'll walk you through the process of creating your first comic using ComicsAI.</p>

      <h2>Getting Started</h2>
      <p>First, you'll need to sign up for a ComicsAI account. Once you're logged in, you'll be presented with our intuitive comic creation interface.</p>

      <h2>Step 1: Writing Your Story</h2>
      <p>Begin by writing a brief description of your scene. Our AI understands natural language, so you can write something like: "A young samurai standing on a cliff, overlooking a futuristic city at sunset."</p>

      <h2>Step 2: Choosing Your Style</h2>
      <p>ComicsAI offers various anime and manga styles. You can choose from classic manga, modern anime, watercolor, or chibi styles. Each style gives your comic a unique look and feel.</p>

      <h2>Step 3: Generating Your Comic</h2>
      <p>Click the "Generate" button and watch as our AI brings your story to life. The process typically takes less than a minute, and you'll see your comic panel appear before your eyes.</p>

      <h2>Advanced Tips</h2>
      <ul>
        <li>Use specific descriptions for better results</li>
        <li>Experiment with different styles</li>
        <li>Try multiple variations of the same scene</li>
        <li>Save your favorite settings as presets</li>
      </ul>

      <h2>Conclusion</h2>
      <p>With ComicsAI, you don't need years of art training to create beautiful comics. Our AI-powered platform makes it possible for anyone to bring their stories to life in stunning anime style.</p>
    `,
  },
};

export async function loader({ params }: LoaderFunctionArgs) {
  const post = posts[params.id as keyof typeof posts];
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ post });
}

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <div className="bg-gray-50 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-4">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            {post.description}
          </p>
        </motion.header>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            src={post.image}
            alt={post.title}
          />
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center space-x-4">
            <img
              className="h-12 w-12 rounded-full"
              src={post.author.image}
              alt={post.author.name}
            />
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
              <p className="text-sm text-gray-500">{post.author.role}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 prose prose-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <motion.div
          className="mt-16 border-t border-gray-200 pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900">About the Author</h2>
          <div className="mt-4 flex items-center">
            <img
              className="h-16 w-16 rounded-full"
              src={post.author.image}
              alt={post.author.name}
            />
            <div className="ml-4">
              <p className="text-lg font-medium text-gray-900">{post.author.name}</p>
              <p className="text-base text-gray-500">{post.author.role}</p>
              <p className="mt-1 text-base text-gray-500">{post.author.bio}</p>
            </div>
          </div>
        </motion.div>

        {/* Share buttons */}
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <button className="btn btn-outline">
            Share on Twitter
          </button>
          <button className="btn btn-outline">
            Share on Facebook
          </button>
          <button className="btn btn-outline">
            Share on LinkedIn
          </button>
        </motion.div>
      </article>
    </div>
  );
}
