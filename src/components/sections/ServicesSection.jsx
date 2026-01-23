import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const services = [
        {
            id: 1,
            number: '01',
            title: 'PRINT ON PRODUCT',
            subtitle: 'Customize Print',
            description: 'High-Quality Customized Printing Solutions To Showcase Your Brand On Every Product'
        },
        {
            id: 2,
            number: '02',
            title: 'DIRECT MAILING',
            subtitle: 'Marketing',
            description: 'Targeted Direct Mailing Solutions That Deliver Your Message Directly Into The Hands Of Customers'
        },
        {
            id: 3,
            number: '03',
            title: 'SIGNAGE PRINTING',
            subtitle: 'Visible Your Business',
            description: 'High-Impact Signage Printing Solutions Designed To Enhance Visibility And Strengthen Your Brand Presence'
        },
        {
            id: 4,
            number: '04',
            title: 'WEBSITE DESIGN',
            subtitle: 'Grow Online',
            description: 'Creative Website Design Solutions Crafted To Enhance User Experience And Grow Your Business Online'
        },
        {
            id: 5,
            number: '05',
            title: 'SEO SERVICES',
            subtitle: 'Optimize Your Business Online',
            description: 'Data-Driven SEO Services Designed To Improve Search Visibility And Drive Consistent Organic Traffic Growth'
        }
    ];

    return (
        <section className="relative bg-gradient-to-tl from-black via-[#0b0b0b] to-[#2a1a00] px-4 py-8 
        overflow-hidden">

            {/* Background container */}
            <div className="absolute inset-0">
                <div className="containers  px-8 h-full">
                    <div className="bg-[#1A1717]  h-full shadow-2xl"></div>
                </div>
            </div>

            <div className="relative z-10 container">

                {/* Header Section */}
                <div
                    className={`flex flex-col items-center
                         mb-10 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                        }`}
                >
                    <div className="flex items-center justify-center gap-6 leading-none">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text:6xl font-bold text-white">
                            Look at
                        </h2>
                        <div className="w-50 h-15 bg-gray-300 rounded-full md:block hidden"></div>
                    </div>

                    <div className="flex items-center justify-center gap-6 md:ml-25 ml-0">
                        <div className="md:w-20 w-15 md:h-20 h-15 bg-[var(--color-gradient)] rounded-full flex items-center justify-center ">
                            <img src="/images/WhiteArrow.png" alt="" />
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text:6xl font-bold text-white">
                            our Services
                        </h2>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="group relative border border-gray-700 p-6 h-full hover:border-[var(--color-gradient)] transition-all duration-300 cursor-pointer">

                                {/* Top Content */}
                                <div className="mb-32">
                                    <h3 className="text-2xl font-bold mb-2 text-gray-400 group-hover:text-[var(--color-gradient)] transition-all duration-300 ease-out scale-105 group-hover:scale-100">
                                        {service.title}
                                    </h3>


                                    <p className="text-sm text-gray-500 group-hover:text-[var(--color-gradient)] transition-all duration-300 ease-out scale-105 group-hover:scale-100">
                                        {service.subtitle}
                                    </p>


                                    <p className="text-gray-400 text-xs leading-relaxed mt-4 group-hover:text-[var(--color-gradient)] transition-all duration-300 ease-out scale-105 group-hover:scale-100">
                                        {service.description}
                                    </p>

                                </div>

                                {/* Bottom Section */}
                                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-700 group-hover:bg-[var(--color-gradient)] transition-all">
                                          <ArrowUpRight />
                                    </div>

                                    <span
                                        className="text-6xl font-black text-transparent group-hover:text-[var(--color-gradient)] transition-all duration-300 ease-out scale-110 group-hover:scale-100"
                                        style={{ WebkitTextStroke: '2px rgba(75, 85, 99, 0.5)' }}
                                    >
                                        {service.number}
                                    </span>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
