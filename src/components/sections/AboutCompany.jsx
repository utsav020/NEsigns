import { ArrowDownRight } from 'lucide-react'

export default function AboutCompany() {
  return (
    <section className="relative  flex items-center overflow-hidden bg-gradient-to-bl from-black via-[#0b0b0b] to-[#2a1a00]">

      {/* LEFT DECORATIVE LINE */}
      <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 w-8 sm:w-12 md:w-16 xl:w-auto opacity-50 md:opacity-100">
        <img src="/images/Hero/DecorLine.png" alt="" className="w-full h-auto" />
      </div>

      {/* RIGHT CONTOUR GRAPHIC */}
      <div className="absolute -right-10 sm:-right-16 md:-right-20 wave-container opacity-30 sm:opacity-50 md:opacity-100">
        <img
          src="/images/Wave.png"
          alt=""
          className="wave-animation w-full h-auto"
        />
      </div>


      {/* CONTENT */}
      <div className="containers relative z-10">
        <div className="max-w-5xl mx-auto xl:ml-[640px] xl:mx-0 lg:pr-16">
          {/* Small label */}
          <div className="flex items-center justify-center xl:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm md:text-[15px] tracking-[0.2em] sm:tracking-[0.3em] text-[var(--color-gradient)] uppercase">
              ABOUT COMPANY
            </span>
            <span className="text-[var(--color-gradient)] text-base sm:text-lg arrow-bounce">
              <ArrowDownRight />
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-tight font-extrabold text-white mb-4 sm:mb-6 text-center xl:text-left px-4 lg:px-0">
            Customized Printing to
            <br />
            Achieve Your{" "}
            <span className="text-[var(--color-primary)]">Business Goals</span>
          </h1>

          {/* Description */}
          <p className="text-[#bdbdbd] text-sm sm:text-base md:text-[16px] leading-relaxed lg:ml-10 text-center xl:text-left px-4 lg:px-0">
            Proin efficitur, mWe create tailored printing solutions designed to make
            your brand stand out and your message clear. From eye-catching designs
            to premium materials, every print is crafted to support your marketing
            goals, engage your audience, and drive real results for your business.
            auris vel condimentum pulvinar, velit orci consectetur ligula, eget
            egestas magna mi ut arcu.
          </p>
        </div>
      </div>
    </section>
  );
}