import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "About - ComicsAI" },
    { name: "description", content: "Learn more about ComicsAI and our mission" },
  ];
};

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    image: 'https://placehold.co/400x400/png',
    bio: 'Former manga artist with 10+ years of experience in the industry.',
  },
  {
    name: 'Mike Johnson',
    role: 'CTO',
    image: 'https://placehold.co/400x400/png',
    bio: 'AI researcher specializing in computer vision and generative models.',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Art Director',
    image: 'https://placehold.co/400x400/png',
    bio: 'Award-winning anime character designer and illustrator.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero section */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About ComicsAI
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            We&apos;re on a mission to democratize comic creation and empower storytellers worldwide
          </p>
        </motion.div>
      </div>

      {/* Mission section */}
      <motion.div
        className="relative py-16 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              ComicsAI was founded with a simple but powerful idea: to make comic creation accessible to everyone.
              We believe that every story deserves to be told, and our AI technology makes it possible for anyone
              to bring their stories to life in beautiful anime-style comics.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Team section */}
      <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We&apos;re a passionate team of artists, engineers, and storytellers
            </p>
          </motion.div>

          <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
              >
                <div className="aspect-w-3 aspect-h-3">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
                  <p className="text-base text-primary-600">{member.role}</p>
                  <p className="mt-3 text-base text-gray-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact section */}
      <motion.div
        className="bg-white py-24 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-500">
            Have questions? We&apos;d love to hear from you.
          </p>
          <div className="mt-8">
            <a
              href="mailto:contact@comicsai.com"
              className="btn btn-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
