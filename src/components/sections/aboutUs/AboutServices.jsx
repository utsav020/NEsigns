import React from "react";
import { ArrowRight, ArrowDownRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { left: "PRINTING PRODUCTS", right: "DIRECT MAILING" },
    { left: "SIGNAGE", right: "WEB DESIGNING" },
    { left: "WALL & STREET SIGNS", right: "SEO" },
    { left: "AWNING & CANOPY", right: "MOBILE APPS" },
  ];

  return (
    <div className="bg-gradient-to-r from-[var(--color-background)] via-black to-black py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
      <div className="container ">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 md:mb-10">
          {/* Left Side - Images */}
          <div className="space-y-4 sm:space-y-6 mt-0 sm:mt-6 lg:mt-10">
            {/* Coffee Card Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden ml-0 sm:ml-12 md:ml-16 lg:ml-20">
              <img
                src="/images/about/Img_02.png"
                alt="Coffee"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Printer Image with Bulb + Button overlay */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              {/* Printer Image */}
              <div className="ml-0 sm:ml-12 md:ml-16 lg:ml-20 rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src="/images/about/Img_01.png"
                  alt="Printer"
                  className="w-full h-auto object-cover sm:block hidden"
                />
                {/* image display on small screen */}
                <img 
                src="/images/about/Img_04.png" 
                alt="" 
                className="w-full h-50 object-cover sm:hidden block"
                />
              </div>

              {/* Bottom Left - Light Bulb */}
              <div className="buld-img absolute top-1/2 left-0 rounded-xl sm:rounded-2xl overflow-hidden
              w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-50 lg:h-50 xl:w-60 xl:h-60 
              ">
                <img
                  src="/images/about/Img_03.png"
                  alt="Light Bulb"
                  className="w-full h-full object-cover sm:block hidden"
                />
              </div>

              {/* Bottom Right - Get in Touch Button */}
              <div className="sm:absolute bottom-2 right-2 sm:bottom-3 sm:right-3 lg:bottom-4 lg:right-4  md:bottom-0 md:-right-4
              justify-self-center mt-5">
                <button
                  className="group flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3
                  border border-[var(--color-muted)] rounded-full text-xs sm:text-sm"
                >
                  <span className="text-[var(--color-gradient)]">Get in Touch</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Services */}
          <div className="md:mt-10 lg:mt-0 mt-10">
            {/* Header */}
            <div className="mb-8 sm:mb-20 md:mb-10 xl:mb-12">
              <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6 text-[var(--color-gradient)]" >
                <span className="text-xs tracking-widest uppercase">
                  Our Services
                </span>
                <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="text-[var(--color-gradient)]">High-Quality</span> Services
                <br />
                You Can Count On
              </h2>
            </div>

            {/* Services List */}
            <div className="space-y-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:py-3 md:py-3 xl:py-6"
                >
                  <div className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide">
                    {service.left}
                    <div 
                      className="w-full h-px mt-3 sm:mt-4"
                      style={{
                        background: 'linear-gradient(to right, var(--color-gradient, #10b981), transparent)'
                      }}
                    />
                  </div>
                  
                  <div className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide">
                    {service.right}
                    <div 
                      className="w-full h-px mt-3 sm:mt-4"
                      style={{
                        background: 'linear-gradient(to right, var(--color-gradient, #10b981), transparent)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}