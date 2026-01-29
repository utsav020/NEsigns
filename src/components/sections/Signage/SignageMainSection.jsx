import React from 'react';

const SignageMainSection = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-yellow-600"></div>
            <span className="text-yellow-600 uppercase tracking-widest text-sm font-semibold">
              Signage
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Get your Business Signage <br /> 
            <span className="text-gray-100">in Best Price.</span>
          </h2>

          <div className="space-y-4 max-w-xl text-gray-400 leading-relaxed">
            <p>
              Get high-quality business signage designed to attract attention and
              build trust. We offer durable, visually striking signs at the best prices,
              tailored to fit your brand and business needs.
            </p>
            <p>
              Make your business stand out with affordable, eye-catching
              signage. From design to installation, we deliver quality signs that fit
              your budget without compromising on style.
            </p>
          </div>
        </div>

        {/* Right Images Container */}
        <div className="relative flex justify-center lg:justify-end items-center h-[500px] md:h-[600px]">
          
          {/* Circular Badge - Top center of images */}
          <div className="absolute top-0 right-1/4 z-30 animate-spin-slow">
            <img 
              src="/images/Signage_Circuler_Ring.png" // Use the circular text badge here
              alt="Design Studio Award" 
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>

          {/* Left Image (alo) */}
          <div className="relative z-10 w-1/2 md:w-56 aspect-[3/4] shadow-2xl transform -translate-x-4 lg:-translate-x-12 translate-y-[-20px]">
            <img 
              src="/images/Signage_02.png" 
              alt="Backlit signage"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image (Hello Gorgeous) */}
          <div className="relative z-20 w-1/2 md:w-56 aspect-[3/5] shadow-2xl translate-y-[20px]">
            <img 
              src="/images/Signage_01.png" 
              alt="Neon signage"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-600/10 blur-[100px] rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default SignageMainSection;