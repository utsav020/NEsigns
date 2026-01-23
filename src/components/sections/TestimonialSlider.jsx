import { useState, useEffect, useRef } from 'react';

export default function TestimonialSlider() {
    const testimonials = [
        {
            id: 1,
            image: '/images/Testimonial/Img_01.png',
            name: 'Elisa Grant',
            position: 'Legacy Solutions Engineer',
            text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            rating: 5
        },
        {
            id: 2,
            image: '/images/Testimonial/Img_02.png',
            name: 'John Anderson',
            position: 'Product Designer',
            text: 'Outstanding service and exceptional quality! The team went above and beyond to deliver results that exceeded our expectations.',
            rating: 5
        },
        {
            id: 3,
            image: '/images/Testimonial/Img_03.png',
            name: 'Sarah Mitchell',
            position: 'Marketing Director',
            text: 'Professional, creative, and reliable. Working with this team has been an absolute pleasure from start to finish.',
            rating: 5
        },
        {
            id: 4,
            image: '/images/Testimonial/Img_04.png',
            name: 'Michael Chen',
            position: 'CEO & Founder',
            text: 'Incredible attention to detail and dedication to excellence. Highly recommend their services to anyone looking for quality.',
            rating: 5
        }
    ];

    const [loopSlides, setLoopSlides] = useState([]);
    const [index, setIndex] = useState(1);
    const [transition, setTransition] = useState(true);
    const intervalRef = useRef(null);

    // Setup loop slides (add first at end, last at beginning)
    useEffect(() => {
        setLoopSlides([
            testimonials[testimonials.length - 1],
            ...testimonials,
            testimonials[0]
        ]);
        setIndex(1);
    }, []);

    // Auto slide
    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            setTransition(true);
            setIndex((prev) => prev + 1);
        }, 4000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, []);

    // Infinite loop reset
    useEffect(() => {
        if (!loopSlides.length) return;

        if (index === testimonials.length + 1) {
            setTimeout(() => {
                setTransition(false);
                setIndex(1);
            }, 800);
        }

        if (index === 0) {
            setTimeout(() => {
                setTransition(false);
                setIndex(testimonials.length);
            }, 800);
        }
    }, [index, loopSlides.length]);

    const nextSlide = () => {
        setTransition(true);
        setIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setTransition(true);
        setIndex((prev) => prev - 1);
    };

    const renderTestimonialCard = (testimonial, idx) => (
        <div key={idx} className="w-full flex-shrink-0">
            <div className="flex items-center justify-center px-4 sm:px-6 md:px-10">
                {/* Combined Card with Image and Content */}
                <div className="relative flex flex-col md:flex-row items-center max-w-5xl w-full mt-10">
                    {/* Person Image - Overlapping */}
                    <div className="relative z-20 mb-4 md:mb-0">
                        <div className="w-48 h-64 sm:w-56 sm:h-80 md:w-64 md:h-96 rounded-xl overflow-hidden bg-gray-700 shadow-2xl mx-auto">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Testimonial Card - Overlapped by Image */}
                    <div className="relative md:-ml-16 z-10 w-full">
                        {/* Content */}
                        <div className="relative border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 md:pl-24 bg-black">
                            {/* Stars */}
                            <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-6 justify-center md:justify-start">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-center md:text-left">
                                {testimonial.text}
                            </p>

                            {/* Author Info */}
                            <div className="text-center md:text-left">
                                <h4 className="text-white text-lg sm:text-xl font-bold mb-1">
                                    {testimonial.name}
                                </h4>
                                <p className="text-gray-400 text-xs sm:text-sm">
                                    {testimonial.position}
                                </p>
                            </div>
                        </div>

                        {/* Gray Background Bar Behind Content - Hidden on mobile */}
                        <div className="hidden md:block absolute left-1/4 w-40 h-10 bg-gray-800 bg-opacity-30 rounded-b-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="relative flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
            {/* Left Quote */}
            <div className="absolute top-5 left-4 sm:left-10 md:left-20 lg:left-30">
                <div className="opacity-20 sm:opacity-30">
                    <svg width="60" height="50" viewBox="0 0 120 100" fill="none" className="sm:w-24 sm:h-20 md:w-32 md:h-26 lg:w-[120px] lg:h-[100px]">
                        <path d="M0 80 L0 0 L50 0 L20 80 Z" fill="#6B7280" />
                        <path d="M60 80 L60 0 L110 0 L80 80 Z" fill="#6B7280" />
                    </svg>
                </div>
            </div>

            {/* Right Quote */}
            <div className="absolute bottom-5 right-4 sm:right-10 md:right-20 lg:right-30">
                <div className="opacity-20 sm:opacity-30">
                    <svg width="60" height="50" viewBox="0 0 120 100" fill="none" transform="rotate(180)" className="sm:w-24 sm:h-20 md:w-32 md:h-26 lg:w-[120px] lg:h-[100px]">
                        <path d="M0 80 L0 0 L50 0 L20 80 Z" fill="#6B7280" />
                        <path d="M60 80 L60 0 L110 0 L80 80 Z" fill="#6B7280" />
                    </svg>
                </div>
            </div>

            <div className="container bg-gradient-to-tr from-black via-black to-[#503d1c] py-12 sm:py-16 md:py-20 items-center">
                {/* Main Slider Container */}
                <div className="relative overflow-hidden w-full">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${index * 100}%)`,
                            transition: transition ? 'transform 0.8s ease-in-out' : 'none',
                        }}
                    >
                        {loopSlides.map((testimonial, idx) => 
                            renderTestimonialCard(testimonial, idx)
                        )}
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 sm:gap-3 mt-10 sm:mt-12 md:mt-16">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setTransition(true);
                                setIndex(i + 1);
                            }}
                            className={`transition-all duration-300 rounded-full ${
                                i === (index - 1 + testimonials.length) % testimonials.length
                                    ? 'bg-yellow-500 w-3 h-3'
                                    : 'bg-gray-600 w-3 h-3 hover:bg-gray-500'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}