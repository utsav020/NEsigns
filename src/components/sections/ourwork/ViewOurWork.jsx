import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Printing',
    description: 'I have been a loyal customer of this auto parts.',
  },
  {
    id: '02',
    title: 'Signage',
    description: 'I have been a loyal customer of this auto parts.',
  },
  {
    id: '03',
    title: 'Direct Mailing',
    description: 'I have been a loyal customer of this auto parts.',
  },
  {
    id: '04',
    title: 'Web Designing',
    description: 'I have been a loyal customer of this auto parts.',
  },
  {
    id: '05',
    title: 'SEO',
    description: 'I have been a loyal customer of this auto parts.',
  },
];

export default function ServicesShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-black text-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
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
            We offer a complete range of printing solutions to meet every need – from business cards, 
            brochures, and banners to t-shirt prints, calendars, and custom canvas. Whether it's carryout 
            menus, carbonless forms, or simple copy services, our prints are sharp, vibrant, and tailored 
            to your vision, ensuring your brand stands out everywhere.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col items-center text-center cursor-pointer"
            >
              {/* Circular Background with Gradient Border */}
              <div className="relative w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 mb-6 sm:mb-8">
                {/* Gradient Ring - Visible only on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-full
                    transition-opacity duration-500 ease-out
                    ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                  `}
                  style={{
                    background: 'conic-gradient(from 45deg at 50% 50%, rgba(217, 119, 6, 0) 0deg, rgba(217, 119, 6, 0) 90deg, rgba(217, 119, 6, 0.9) 180deg, rgba(217, 119, 6, 0) 270deg)',
                    padding: '2px',
                  }}
                >
                  {/* Inner Circle */}
                  <div className="w-full h-full rounded-full bg-black" />
                </div>

                {/* Content Circle */}
                <div className="absolute inset-0 rounded-full bg-zinc-900/50 backdrop-blur-sm flex flex-col items-center justify-center p-6 sm:p-8 transition-all duration-500">
                  <span className="text-amber-500/60 text-xs sm:text-sm mb-2 font-light">
                    Service {service.id}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-center px-2">
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
  );
}