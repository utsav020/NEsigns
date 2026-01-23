import { useState, useEffect } from 'react';
import { ArrowDownRight } from 'lucide-react';

export default function PortfolioSection() {
    const [animate, setAnimate] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const portfolioItems = [
        {
            id: 1,
            image: '/images/Hero/Img-1.png',
            hoverImage: '/images/Hero/Img-4.png',
            brand: 'Brand . Name',
            title: 'BROCHURES PRINTING',
            size: 'normal'
        },
        {
            id: 2,
            image: '/images/Hero/Img-2.png',
            hoverImage: '/images/Hero/Img-3.png',
            brand: 'Brand . Name',
            title: 'BUSINESS CARDS',
            size: 'large'
        },
        {
            id: 3,
            image: '/images/Hero/Img-3.png',
            hoverImage: '/images/Hero/Img-5.png',
            brand: 'Brand . Name',
            title: 'DOOR HANGERS',
            size: 'large'
        },
        {
            id: 4,
            image: '/images/Hero/Img-4.png',
            hoverImage: '/images/Hero/Img-1.png',
            brand: 'Brand . Name',
            title: 'MAGAZINES PRINTING',
            size: 'normal'
        },
    ];

    return (
        <section className="relative md:py-10 sm:py-5 py-0 overflow-hidden">
            {/* Header */}
            <div
                className={`container transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                    }`}
            >
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-yellow-500 text-sm tracking-widest">
                        PORTFOLIO
                    </span>
                    <span className="text-yellow-500 text-lg arrow-bounce">
                        <ArrowDownRight />
                    </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xlfont-bold text-white leading-tight">
                    Our latest Awesome
                    <br />
                    Designs
                </h2>
            </div>

            <div className="containers">
                {/* Grid - Asymmetric Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Item 1 - Normal Size */}
                        <div
                            className={`group cursor-arrow transition-all duration-1000 xl:mb-35 lg:mb-20 md:mb-15  mb-10 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                }`}
                            style={{ transitionDelay: '200ms' }}
                            onMouseEnter={() => setHoveredCard(1)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative overflow-hidden aspect-[16/11]">
                                <img
                                    src={hoveredCard === 1 ? portfolioItems[0].hoverImage : portfolioItems[0].image}
                                    alt={portfolioItems[0].title}
                                    className="w-full h-full object-cover transition-opacity duration-300"
                                />
                            </div>

                            <div className="mt-10">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <p className="text-gray-400 text-xs mb-1">
                                            {portfolioItems[0].brand}
                                        </p>
                                        <h3 className="text-white text-xl font-bold">
                                            {portfolioItems[0].title}
                                        </h3>
                                    </div>

                                    <div
                                        className="w-10 h-10 flex items-center justify-center transition-all duration-300 arrow-bounce"
                                    >
                                        <img src="/portfolio/ArrowUpRight.png" alt="Bounce ArrowDownRight" />
                                    </div>
                                </div>
                                <div className="border-t border-gray-800"></div>
                            </div>
                        </div>

                        {/* Item 3 - Large Size */}
                        <div
                            className={`group cursor-arrow transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                }`}
                            style={{ transitionDelay: '600ms' }}
                            onMouseEnter={() => setHoveredCard(3)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative overflow-hidden aspect-[16/13]">
                                <img
                                    src={hoveredCard === 3 ? portfolioItems[2].hoverImage : portfolioItems[2].image}
                                    alt={portfolioItems[2].title}
                                    className="w-full h-full object-cover transition-opacity duration-300"
                                />
                            </div>

                            <div className="mt-10">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <p className="text-gray-400 text-xs mb-1">
                                            {portfolioItems[2].brand}
                                        </p>
                                        <h3 className="text-white text-xl font-bold">
                                            {portfolioItems[2].title}
                                        </h3>
                                    </div>

                                    <div
                                        className="w-10 h-10 flex items-center justify-center transition-all duration-300 arrow-bounce"
                                    >
                                        <img src="/portfolio/ArrowUpRight.png" alt="Bounce ArrowDownRight" />
                                    </div>
                                </div>
                                <div className="border-t border-gray-800"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 mb-10">
                        {/* Item 2 - Large Size */}
                        <div
                            className={`group cursor-arrow transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                }`}
                            style={{ transitionDelay: '400ms' }}
                            onMouseEnter={() => setHoveredCard(2)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative overflow-hidden aspect-[16/13]">
                                <img
                                    src={hoveredCard === 2 ? portfolioItems[1].hoverImage : portfolioItems[1].image}
                                    alt={portfolioItems[1].title}
                                    className="w-full h-full object-cover transition-opacity duration-300"
                                />
                            </div>

                            <div className="mt-10 mb-8">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <p className="text-gray-400 text-xs mb-1">
                                            {portfolioItems[1].brand}
                                        </p>
                                        <h3 className="text-white text-xl font-bold">
                                            {portfolioItems[1].title}
                                        </h3>
                                    </div>

                                    <div
                                        className="w-10 h-10 flex items-center justify-center transition-all duration-300 arrow-bounce"
                                    >
                                        <img src="/portfolio/ArrowUpRight.png" alt="Bounce ArrowDownRight" />
                                    </div>
                                </div>
                                <div className="border-t border-gray-800"></div>
                            </div>
                        </div>

                        {/* Item 4 - Normal Size */}
                        <div
                            className={`group cursor-arrow transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                }`}
                            style={{ transitionDelay: '800ms' }}
                            onMouseEnter={() => setHoveredCard(4)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="relative overflow-hidden aspect-[16/11]">
                                <img
                                    src={hoveredCard === 4 ? portfolioItems[3].hoverImage : portfolioItems[3].image}
                                    alt={portfolioItems[3].title}
                                    className="w-full h-full object-cover transition-opacity duration-300"
                                />
                            </div>

                            <div className="mt-10">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <p className="text-gray-400 text-xs mb-1">
                                            {portfolioItems[3].brand}
                                        </p>
                                        <h3 className="text-white text-xl font-bold">
                                            {portfolioItems[3].title}
                                        </h3>
                                    </div>

                                    <div
                                        className="w-10 h-10 flex items-center justify-center transition-all duration-300 arrow-bounce"
                                    >
                                        <img src="/portfolio/ArrowUpRight.png" alt="Bounce ArrowDownRight" />
                                    </div>
                                </div>
                                <div className="border-t border-gray-800"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mb-5 md:mt-5 mt-0">
                    <button className="group flex items-center gap-3 px-8 py-4 border-1 border-[var(--color-muted)] rounded-full text-[var(--color-gradient)] ">
                        <span>See all projects</span>
                        <span className="text-[var(--color-tertiary) arrow-bounce ]">
                            <ArrowDownRight />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}