import { useState, useEffect, useRef } from 'react';

/* ================= COUNTER HOOK ================= */
function useCounter(target, start, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = target / (duration / 20);

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);

    return () => {
      clearInterval(timer);
      setCount(0);
    };
  }, [target, duration, start]);

  return count;
}

/* ================= COMPONENT ================= */
export default function OurWork() {
  const [animate, setAnimate] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const yearCount = useCounter(25, startCount);
  const projectCount = useCounter(150, startCount);

  useEffect(() => {
    setAnimate(true);
  }, []);

  /* ===== OBSERVER ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        } else {
          setStartCount(false);
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
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
    >

      <div className="absolute top-20 sm:top-28 md:top-35 left-4 sm:left-6 md:left-8 w-16 sm:w-20 md:w-auto">
        <img src="/images/OurWork/Vector_Line.png" alt="" className="w-full h-auto" />
      </div>

      <div className="containers">

        <div className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-primary)] font-black tracking-wider ml-0 sm:ml-8 md:ml-12 lg:ml-18">
            OUR WORK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">

          {/* LEFT COLUMN */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6 sm:space-y-8">

            <div className={`transition-all duration-1000 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden group relative">
                <img
                  src="/images/OurWork/image_01.png"
                  alt="NE Signs Business Card"
                  className="w-full h-auto object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                />
                <img
                  src="/images/Hero/Img-4.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>

            {/* 25 YEARS */}
            <div className={`transition-all duration-1000 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex gap-3 sm:gap-4 md:gap-5 items-start justify-center md:justify-start">
                <h3 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
                  {yearCount}
                </h3>
                <div className="flex flex-col justify-start mt-1 sm:mt-0 sm:-mt-3">
                  <p
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white leading-tight ml-1 sm:ml-2 md:ml-3"
                    style={{ WebkitTextStroke: '1px rgba(139, 115, 85, 0.6)', color: 'transparent' }}
                  >
                    Y E A R
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[var(--color-primary)] font-black leading-tight whitespace-nowrap">
                    E X P E R I E N C E
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* MIDDLE COLUMN */}
          <div className="md:col-span-6 lg:col-span-3">
            <div className={`transition-all duration-1000 delay-600 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden group relative h-64 sm:h-80 md:h-full min-h-[300px]">
                <img
                  src="/images/OurWork/image_02.png"
                  alt="NE Signs Mug"
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                />
                <img
                  src="/images/Hero/Img-3.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-6 lg:col-span-4 space-y-8 text-center">

            {/* 150+ PROJECTS */}
            <div className={`transition-all duration-1000 delay-800 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--color-primary)] font-bold leading-none">
                {projectCount}+
              </h3>
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-wide mt-2">
                PROJECT DONE
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden group relative h-48 sm:h-64 md:h-full min-h-[200px]">
                <img
                  src="/images/OurWork/image_03.png"
                  alt="NE Signs Rollup Banner"
                  className="w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                />
                <img
                  src="/images/Hero/Img-5.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>

          </div>
        </div>

        <div className={`mt-8 sm:mt-10 md:mt-12 transition-all duration-1000 delay-1200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed text-center md:text-left">
            Over The Years, We've Turned Countless Ideas Into High-Quality Prints That Leave A Lasting Impression. From Small Personal Projects To Large Corporate Campaigns, Our Team Blends Creativity With Precision To Deliver Outstanding Results Every Time.
          </p>
        </div>

      </div>
    </section>
  );
}