import React from "react";
import { motion } from "framer-motion";

export default function SEOHeroSection() {

  const services = [
    { id: 1, title: "Keyword", subtitle: "Research" },
    { id: 2, title: "Technical SEO", subtitle: "" },
    { id: 3, title: "Local SEO", subtitle: "" },
    { id: 4, title: "Website SEO Audit", subtitle: "" },
    { id: 5, title: "E-commerce SEO", subtitle: "" },
    { id: 6, title: "On-Page SEO", subtitle: "" },
    { id: 7, title: "Off-Page SEO", subtitle: "" },
    { id: 8, title: "Content SEO", subtitle: "" },
    { id: 9, title: "SaaS SEO", subtitle: "" },
  ];
  return (
    <>
      <section className="relative overflow-hidden py-10">
        <div className="relative containers ">
          <div className="flex items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex  gap-2 ">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-0.5 rounded">
                  NEW
                </span>
                <span className="text-sm text-gray-300">
                  Latest integration just arrived
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-white font-bold tracking-tight leading-[1.1]
              text-3xl md:text-4xl xl:text-5xl"
              >
                Elevate your SEO to boost visibility and drive organic growth.
              </h1>

              {/* Subheading */}
              <p className="text-gray-400 text-lg leading-relaxed">
                Elevate your site's visibility effortlessly with AI, where smart
                technology meets user-friendly SEO tools.
              </p>

              {/* Email */}
              <div className="flex gap-0 max-w-md">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-5 py-2 rounded-lg border border-white/30 text-white placeholder-gray-500 focus:outline-none focus:border-neutral-700"
                />
                <button className="px-6 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition text-sm">
                  Join waitlist
                </button>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <div className="relative hidden lg:flex justify-end">
              <img
                src="/images/seo/SEO_Hero_Image.png"
                alt="SEO cubes"
                className="w-[520px] xl:w-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" py-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              {/* Service Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-center justify-center"
              >
                {/* Animated Dashed Border */}
                <div className="relative w-48 h-48 border boder-white flex items-center justify-center">
                  {/* Rotating dashed border container */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 200 200"
                      fill="none"
                    >
                      <rect
                        x="50"
                        y="50"
                        width="100"
                        height="100"
                        transform="rotate(45 100 100)"
                        stroke="white"
                        strokeWidth="1"
                        strokeDasharray="8 8"
                        fill="none"
                        opacity="0.3"
                      />
                    </svg>
                  </motion.div>

                  {/* Inner diamond card */}
                  <div className="relative w-36 h-36 bg-neutral-900 rotate-45 overflow-hidden border border-neutral-800">
                    <div className="absolute inset-0 -rotate-45 flex flex-col items-center justify-center p-4">
                      <h3 className="text-base font-medium text-white text-center">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className="text-sm text-gray-400 text-center">
                          {service.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Arrow between items (except after last item in each row) */}
              {index % 5 !== 4 && index !== services.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="hidden lg:flex items-center justify-center"
                >
                  <svg
                    width="40"
                    height="24"
                    viewBox="0 0 40 24"
                    fill="none"
                    className="text-blue-500"
                  >
                    <motion.path
                      d="M0 12H38M38 12L30 4M38 12L30 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile arrows (vertical) */}
        <style jsx>{`
          @media (max-width: 1024px) {
            .grid > div:nth-child(3n) {
              margin-bottom: 2rem;
            }
          }
        `}</style>
      </div>
    </div>
      </section>

    </>
  );
}
