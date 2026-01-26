export default function AboutHero() {
  return (
    <section>
      {/* Hero Image with Content */}
      <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px] ">
        {/* Background Image */}
        <img
          src="/images/about/About_Hero_Img.png"
          alt="About NEsigns"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="items-center" />

        {/* Content on Image */}
        <div className="absolute inset-0 flex justify-center items-center p-4">
          <div className=" items-center">
            <h2 className="text-sm  text-[var(--color-gradient)] mb-2 text-center">
              Home / About
            </h2>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
              ABOUT Us
            </h1>

            <p className="max-w-3xl text-sm md:text-lg text-gray-200 leading-6">
              Our top priority is customer satisfaction. We respect our clients'
          time and investment and work relentlessly to earn their trust. When
          you choose us, you'll experience hassle free, consistent,
          high-quality, and time saving services that truly put customers first.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
