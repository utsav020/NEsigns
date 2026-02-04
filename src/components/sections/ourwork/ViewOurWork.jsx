import React, { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion} from "framer-motion";


const services = [
  {
    id: "01",
    title: "Printing",
    description: "I have been a loyal customer of this auto parts.",
  },
  {
    id: "02",
    title: "Signage",
    description: "I have been a loyal customer of this auto parts.",
  },
  {
    id: "03",
    title: "Direct Mailing",
    description: "I have been a loyal customer of this auto parts.",
  },
  {
    id: "04",
    title: "Web Designing",
    description: "I have been a loyal customer of this auto parts.",
  },
  {
    id: "05",
    title: "SEO",
    description: "I have been a loyal customer of this auto parts.",
  },
];

const cards = [
  {
    service: "Printing",
    category: "Printing",
    title: "NE SIGNS",
    subtitle: "Companies",
    image: "/images/Hero/Img-5.png", // Placeholder
  },
  {
    service: "Printing",
    category: "Brand, Photography",
    title: "CLASSIC CONCRETE",
    subtitle: "PLANTERS",
    image: "/images/OurWork/Img-01.png",
  },
  {
    service: "Printing",
    category: "Brand, Photography",
    title: "CLASSIC CONCRETE",
    subtitle: "PLANTERS",
    image: "/images/Hero/Img-1.png",
  },
  // Adding 3 more to make it a total of 6
  {
    service: "Printing",
    category: "Interior Design",
    title: "MODERN SPACES",
    subtitle: "Studio",
    image: "/images/OurWork/image_02.png",
  },
  {
    service: "Printing",
    category: "Signage",
    title: "DIGITAL DISPLAYS",
    subtitle: "Tech Hub",
    image: "/images/OurWork/Img-02.png",
  },
  {
    service: "Printing",
    category: "Exhibitions",
    title: "EVENT BOOTHS",
    subtitle: "Global Expo",
    image: "/images/Hero/Img-2.png",
  },

  {
    service: "Signage",
    category: "Signage",
    title: "DIGITAL DISPLAYS",
    subtitle: "Tech Hub",
    image: "/images/OurWork/image_03.png",
  },

  // DIRECT MAILING
  {
    service: "Direct Mailing",
    category: "Campaign",
    title: "MAIL BLAST",
    subtitle: "Marketing",
    image: "/images/OurWork/Img-03.png",
  },

  // WEB DESIGNING
  {
    service: "Web Designing",
    category: "UI / UX",
    title: "MODERN SPACES",
    subtitle: "Studio",
    image: "/images/Hero/Img-3.png",
  },

  // SEO
  {
    service: "SEO",
    category: "Optimization",
    title: "EVENT BOOTHS",
    subtitle: "Global Expo",
    image: "/images/Hero/Img-4.png",
  },
];

export default function ServicesShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeService, setActiveService] = useState("Printing");

  const filteredCards = cards.filter((card) => card.service === activeService);

  return (
    <>
      <section className="relative bg-black text-white py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="relative containers px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="text-amber-500 text-sm sm:text-base tracking-wider">
                VIEW OUR WORK
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 max-w-5xl">
              Get your Printing Product in Best Price.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-4xl leading-relaxed">
              We offer a complete range of printing solutions to meet every need
              - from business cards, brochures, and banners to t-shirt prints,
              calendars, and custom canvas. Whether it's carryout menus,
              carbonless forms, or simple copy services, our prints are sharp,
              vibrant, and tailored to your vision, ensuring your brand stands
              out everywhere.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveService(service.title)}
                className={`group relative flex flex-col items-center text-center cursor-pointer
    ${activeService === service.title ? "scale-[1.05]" : ""}
  `}
              >
                <div className="relative w-48 h-48 sm:w-52 sm:h-52 lg:w-50 lg:h-50 xl:w-60 xl:h-60 mb-6 sm:mb-8">
                  {/* Golden Arc Ring */}
                  <div
                    className={`
      absolute inset-0 rounded-full
      transition-all duration-700 ease-out
      ${hoveredIndex === index ? "rotate-180 opacity-100" : "rotate-0 opacity-70"}
    `}
                    style={{
                      background: `
        conic-gradient(
          from 220deg,
          transparent 0deg,
          transparent 260deg,
          rgba(217,119,6,0.9) 300deg,
          rgba(217,119,6,0.9) 330deg,
          transparent 360deg
        )
      `,
                      padding: "2px",
                      filter:
                        hoveredIndex === index
                          ? "drop-shadow(0 0 6px rgba(217,119,6,.6))"
                          : "none",
                    }}
                  >
                    {/* Inner cut */}
                    <div className="w-full h-full rounded-full bg-black" />
                  </div>

                  {/* Content Circle */}
                  <div
                    className="absolute inset-[2px] rounded-full bg-[var(--color-graybg)]
    flex flex-col items-center justify-center p-6 sm:p-8"
                  >
                    <span className="text-amber-500/60 text-xs sm:text-sm mb-2 font-light">
                      Service {service.id}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm text-center px-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      <section>
        <div className="bg-black text-white p-10 font-sans">
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCards.map((card, index) => (
              <div key={index} className="group cursor-pointer">
                {/* Image Container */}
                <div className="aspect-square overflow-hidden bg-gray-800 mb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content Area */}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">
                      {card.category}
                    </p>
                    <h3 className="text-xl font-bold uppercase tracking-tight leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-xl font-bold uppercase tracking-tight leading-none text-gray-200">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <motion.div className="w-10 h-10 flex items-center justify-center arrow-bounce">
                    <img src="/images/ArrowUpRight.png" alt="Arrow" />
                  </motion.div>
                </div>
                <motion.div className="border-t border-gray-800 mt-5" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
