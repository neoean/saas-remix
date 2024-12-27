import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Pricing - ComicsAI" },
    { name: "description", content: "Choose the perfect plan for your creative needs" },
  ];
};

const tiers = [
  {
    name: 'Hobby',
    href: '#',
    priceMonthly: 0,
    description: 'Perfect for trying out our platform.',
    includedFeatures: [
      '10 AI-generated panels per month',
      'Basic art styles',
      'Standard resolution output',
      'Community support',
    ],
  },
  {
    name: 'Professional',
    href: '#',
    priceMonthly: 29,
    description: 'For serious comic creators and artists.',
    includedFeatures: [
      'Unlimited AI-generated panels',
      'Advanced art styles',
      'High-resolution output',
      'Priority support',
      'Custom character creation',
      'Scene composition tools',
    ],
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 99,
    description: 'For studios and professional teams.',
    includedFeatures: [
      'Everything in Professional',
      'Custom art style training',
      'API access',
      'Dedicated support',
      'Team collaboration tools',
      'Advanced export options',
      'Commercial usage rights',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <motion.h1
            className="text-5xl font-extrabold text-gray-900 sm:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pricing Plans
          </motion.h1>
          <motion.p
            className="mt-5 text-xl text-gray-500 sm:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the perfect plan for your creative journey
          </motion.p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full btn btn-primary"
                >
                  Get started
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What&apos;s included
                </h3>
                <ul className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
