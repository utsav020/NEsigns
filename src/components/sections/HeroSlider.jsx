import { useState, useEffect } from "react";

const slides = [
    { id: 0, image: "/images/Hero/Img-1.png", title: "BRANDED DOOR HANGERS" },
    { id: 1, image: "/images/Hero/Img-2.png", title: "PREMIUM BUSINESS CARDS" },
    { id: 2, image: "/images/Hero/Img-3.png", title: "METROPOLITAN MAGAZINE" },
];

const animationCSS = `

@keyframes frontImageExit {
  0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
  60% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
  70% { transform: translateY(5px) translateX(0) rotate(0deg); opacity: 1; }
  100% { transform: translateX(13px) translateY(8px) rotate(15deg); opacity: 1; }
}

.animate-drop-new {
  animation: frontImageExit 1s ease-in-out forwards;
  transform-origin: top right;
}

.animate-exit-front {
  animation: frontImageExit 1s ease-in-out forwards;
  transform-origin: top right;
}
`;

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [animate] = useState(true);

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = animationCSS;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const getNextSlide = () => {
        return (currentSlide + 1) % slides.length;
    };

    const handleNext = () => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrentSlide(getNextSlide());
            setAnimating(false);
        }, 1000);
    };

    const handlePrev = () => {
        if (animating) return;
        setAnimating(true);
        setTimeout(() => {
            setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
            setAnimating(false);
        }, 1000);
    };

    useEffect(() => {
        const interval = setInterval(() => handleNext(), 1000);
        return () => clearInterval(interval);
    }, [currentSlide, animating]);

    return (
        <section className="flex flex-col xl:flex-row xl:gap-20 gap-0 items-center xl:mt-15 mt-25 px-4">
            {/* LEFT SLIDER */}
            <div className="xl:w-2/3 w-full relative">
                <div
                    className={`transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                        }`}
                >
                    <div className="relative xl:h-[500px] lg:h-[450px] md:h-[400px] h-[350px] flex items-center justify-center" style={{ perspective: '1500px' }}>

                        {/* NEXT CARD (Behind - always visible) */}
                        <div
                            className="absolute inset-0"
                            style={{ zIndex: 1 }}
                        >
                            <div className="relative w-full h-full overflow-hidden shadow-2xl">
                                <img
                                    src={slides[getNextSlide()].image}
                                    alt={slides[getNextSlide()].title}
                                    className="w-full h-full object-cover brightness-50"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            </div>
                        </div>

                        {/* CURRENT CARD (Front - with clip animation) */}
                        <div
                            key={currentSlide}
                            className={`absolute inset-0 ${animating ? 'animate-exit-front' : 'animate-drop-new'}`}
                            style={{ zIndex: 2 }}
                        >
                            <div className="relative w-full h-full overflow-hidden shadow-2xl">
                                <img
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            </div>
                        </div>

                        {/* IMAGE LABEL - Static, stays in place */}
                        <div className="absolute bottom-20 left-8 px-6 py-4 z-50">
                            <p className="text-[var(--color-gradient)] text-xs tracking-widest mb-2">
                                I N D U C T I O N
                            </p>
                            <h3 className="text-[var(--color-primary)] md:text-3xl text-2xl font-bold mb-4">
                                PRINT ON PRODUCT
                            </h3>
                            <div className="w-auto h-px bg-gradient-to-r from-[var(--color-gradient)] to-transparent" />
                        </div>

                        {/* NAV BUTTONS */}
                        <div className="absolute bottom-8 left-10 flex gap-3 z-50">
                            <button
                                onClick={handlePrev}
                                disabled={animating}
                                className="w-12 h-12 bg-black text-2xl font-bold hover:bg-yellow-600 transition-all shadow-lg hover:scale-110"
                            >
                                ←
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={animating}
                                className="w-12 h-12 bg-yellow-500 text-2xl font-bold hover:bg-yellow-600 transition-all shadow-lg hover:scale-110"
                            >
                                →
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="xl:w-1/3 w-full p-4 xl:mt-0 mb-15 mt-5">
                <div className="mb-4 xl:block hidden">
                    <img src="/images/Hero/DecorLine.png" alt="" />
                </div>

                <div className="">
                    <p className="text-gray-400 text-sm italic mb-6 leading-relaxed">
                        Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec odio orci.
                    </p>

                    <div className="w-full h-px bg-gradient-to-r from-yellow-500 to-transparent mb-4" />

                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-white to-yellow-600 flex items-center 
                        justify-center text-white font-bold">

                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">
                                Eleanor Pena
                            </p>
                            <p className="text-gray-500 text-xs">
                                Product Designer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}