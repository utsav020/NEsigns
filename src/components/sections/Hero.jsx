import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  /* ===== SCROLL OBSERVER ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false); // reset when out of view
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
   <section
        ref={sectionRef}
        className="relative bg-gradient-to-tr from-black via-black to-[#75561f] overflow-hidden 
        px-4 sm:py-10 py-5"
      >
        {/* Left Star Decoration */}
        <div className="absolute hero-star">
          <div>
            <img src="/images/Hero/Hero_Star.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Main Content Container */}
        <div className="container py-10 relative z-10 mt-5 md:mt-10 lg:mt-10 mb-5 sm:mb-10 md:mb-20 lg:mb-35">
          <div className=" max-w-full  xl:max-w-5xl ">
            <div>
              {/* Heading */}
              <h1
                data-aos="zoom-out-right"
                data-aos-delay="0"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight"
              >
                PRICE <span className="text-yellow-500">GUARANTEE</span>
              </h1>

              {/* Outlined Text */}
              <h2
                data-aos="zoom-in-left"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight"
                style={{
                  WebkitTextStroke: '1px white',
                  color: 'transparent',
                  textShadow: 'none'
                }}
              >
                FOR ALL OF OUR SERVICES
              </h2>

              {/* Description Text */}
              <p
                data-aos="fade-up"
                className="text-white text-xs sm:text-sm md:text-base lg:text-sm leading-relaxed tracking-wide 
                max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl"
              >
                WE PLACE A GREAT VALUE ON THE CALIBER OF{' '}
                <span className="text-yellow-500 font-bold">OUR GOODS</span>. NE SIGNS BLENDS QUICK TURNAROUND TIME WITH A KEEN EYE TOWARDS{' '}
                <span className="text-yellow-500 font-bold">QUALITY</span>. FOR{' '}
                <span className="text-yellow-500 font-bold">COMPANIES</span> OF ALL SIZES, WE ARE COMMITTED TO OFFERING{' '}
                <span className="text-yellow-500 font-bold">PREMIUM</span> PRINTING, GRAPHIC DESIGN, AND SIGNAGE{' '}
                <span className="text-yellow-500 font-bold">SOLUTIONS</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Top Right Decorative Shapes */}
        <div className="absolute hero-black-ring">
          <div className="transition-all duration-900 delay-100">
            <img
              src="/images/Hero/Hero_BlackRing.png"
              alt=""
              className="w-full h-full object-contain rotate-slow "
            />
          </div>
        </div>

        {/* Yellow Lines */}
        <div className="absolute hero-yellow-lines transition-all duration-300 animate-pulse">
          <div>
            <img
              src="/images/Hero/Yellow_3line.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Top Right Abstract White Shape */}
        <div className="absolute hero-white-shape xl:block hidden">
          <div>
            <img
              src="/images/Hero/White_Shap.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
  );
}
