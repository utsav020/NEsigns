import React, { useState } from 'react';

const ServiceSlider = () => {
  const [activeCategory, setActiveCategory] = useState('signage');

  const menuItems = [
    { id: 'signage', label: 'Signage' },
    { id: 'printing', label: 'Printing' },
    { id: 'mailing', label: 'Direct Mailing' },
    { id: 'web', label: 'Web Designing' },
    { id: 'seo', label: 'SEO' }
  ];

  const imageData = {
    signage: [
      { url: "/images/service/ServiceSlider_01.png", alt: "Signage 1", position: { top: "5%", left: "5%", rotation: -4 } },
      { url: "/images/service/ServiceSlider_02.png", alt: "Signage 2", position: { top: "20%", right: "5%", rotation: 5 } },
      { url: "/images/service/ServiceSlider_03.png", alt: "Signage 3", position: { top: "50%", left: "10%", rotation: 6 } },
    ],
    printing: [
      { url: "/images/service/ServiceSlider_04.png", alt: "Printing 1", position: { top: "5%", left: "5%", rotation: -4 } },
      { url: "/images/service/ServiceSlider_05.png", alt: "Printing 2", position: { top: "20%", right: "5%", rotation: 5 } },
      { url: "/images/service/ServiceSlider_06.png", alt: "Printing 3", position: { top: "50%", left: "10%", rotation: 6 } },
    ],
    mailing: [
      { url: "/images/service/ServiceSlider_07.png", alt: "Mailing 1", position: { top: "5%", left: "5%", rotation: -4 } },
      { url: "/images/service/ServiceSlider_08.png", alt: "Mailing 2", position: { top: "20%", right: "5%", rotation: 5 } },
      { url: "/images/service/ServiceSlider_09.png", alt: "Mailing 3", position: { top: "50%", left: "10%", rotation: 6 } },
    ],
    web: [
      { url: "/images/service/ServiceSlider_10.png", alt: "Web 1", position: { top: "5%", left: "5%", rotation: -4 } },
      { url: "/images/service/ServiceSlider_11.png", alt: "Web 2", position: { top: "20%", right: "5%", rotation: 5 } },
      { url: "/images/service/ServiceSlider_12.png", alt: "Web 3", position: { top: "50%", left: "10%", rotation: 6 } },
    ],
    seo: [
      { url: "/images/service/ServiceSlider_13.png", alt: "SEO 1", position: { top: "5%", left: "5%", rotation: -4 } },
      { url: "/images/service/ServiceSlider_14.png", alt: "SEO 2", position: { top: "20%", right: "5%", rotation: 5 } },
      { url: "/images/service/ServiceSlider_15.png", alt: "SEO 3", position: { top: "50%", left: "10%", rotation: 6 } },
    ],
  };

  return (
    <div className="w-full overflow-hidden ">
      <style jsx>{`
        @keyframes slideUpOut {
          from { transform: translateY(0) rotate(var(--rotation)); opacity: 1; }
          to { transform: translateY(-120%) rotate(var(--rotation)); opacity: 0; }
        }
        @keyframes slideUpIn {
          from { transform: translateY(120%) rotate(var(--rotation)); opacity: 0; }
          to { transform: translateY(0) rotate(var(--rotation)); opacity: 1; }
        }
        .slide-up-out { animation: slideUpOut 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
        .slide-up-in { animation: slideUpIn 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
      `}</style>
      
      <div className="flex flex-col md:flex-row container mx-auto px-6 md:h-200 sm:h-300 h-250">
        
        {/* Menu Section - Same layout, responsive text sizes */}
        <nav className="w-full md:w-[40%] flex flex-col md:justify-center 
         py-12 lg:py-10 space-y-6 md:space-y-12 lg:space-y-10 z-20">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCategory(item.id)}
              className={`
                text-left py-2 text-3xl sm:text-4xl lg:text-5xl font-bold uppercase
                transition-all duration-300 ease-out
                ${activeCategory === item.id 
                  ? 'text-white translate-x-4' 
                  : 'text-zinc-700 hover:text-zinc-500'}
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Images Section - Maintained scatter design */}
        <div className="flex-1 relative min-h-[500px]">
          {Object.keys(imageData).map((category) => (
            <div
              key={category}
              className={`absolute inset-0 ${activeCategory === category ? 'z-10' : 'z-0 pointer-events-none'}`}
            >
              {imageData[category].map((image, index) => (
                <div
                  key={`${category}-${index}`}
                  className={`
                    absolute 
                    w-45 h-45
                    sm:w-64 sm:h-64 lg:w-72 lg:h-69
                    ${activeCategory === category ? 'slide-up-in' : 'slide-up-out'}
                  `}
                  style={{
                    top: image.position.top,
                    left: image.position.left,
                    right: image.position.right,
                    bottom: image.position.bottom,
                    '--rotation': `${image.position.rotation}deg`,
                    animationDelay: `${index * 100}ms`,
                    transform: `rotate(${image.position.rotation}deg)`
                  }}
                >
                  <div className="hover:scale-105 transition-transform duration-300 ">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full "
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ServiceSlider;