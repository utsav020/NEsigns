import { ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ServicesSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const cardHoverVariants = {
        rest: {
            borderColor: 'rgba(75, 85, 99, 1)',
            scale: 1
        },
        hover: {
            borderColor: 'var(--color-gradient)',
            scale: 1.02,
            y: -5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const textHoverVariants = {
        rest: { 
            color: '#9CA3AF',
            scale: 1
        },
        hover: { 
            color: 'var(--color-gradient)',
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const numberHoverVariants = {
        rest: { 
            opacity: 0,
            scale: 1.1
        },
        hover: { 
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const arrowButtonVariants = {
        rest: { 
            backgroundColor: 'rgba(75, 85, 99, 1)',
            scale: 1,
            rotate: 0
        },
        hover: { 
            backgroundColor: 'var(--color-gradient)',
            scale: 1.1,
            rotate: 45,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const circleVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3
            }
        }
    };

    const arrowIconVariants = {
        hidden: { scale: 0, rotate: -180, opacity: 0 },
        visible: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 12,
                delay: 0.5
            }
        }
    };

    return (
        <section 
            ref={sectionRef}
            className="relative bg-gradient-to-tl from-black via-[#0b0b0b] to-[#2a1a00] px-4 py-8 overflow-hidden"
        >
            {/* Background container */}
            <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="containers px-8 h-full">
                    <motion.div 
                        className="bg-[#1A1717] h-full shadow-2xl"
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ transformOrigin: 'top' }}
                    />
                </div>
            </motion.div>

            <div className="relative z-10 container">
                {/* Header Section */}
                <motion.div
                    className="flex flex-col items-center mb-10"
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="flex items-center justify-center gap-6 leading-none">
                        <motion.h2 
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Look at
                        </motion.h2>
                        <motion.div 
                            className="w-50 h-15 bg-gray-300 rounded-full md:block hidden"
                            variants={circleVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        />
                    </div>

                    <div className="flex items-center justify-center gap-6 md:ml-25 ml-0">
                        <motion.div 
                            className="md:w-20 w-15 md:h-20 h-15 bg-[var(--color-gradient)] rounded-full flex items-center justify-center"
                            variants={arrowIconVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            whileHover={{ 
                                scale: 1.1, 
                                rotate: 360,
                                transition: { duration: 0.6 }
                            }}
                        >
                            <img src="/images/WhiteArrow.png" alt="" />
                        </motion.div>

                        <motion.h2 
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            our Services
                        </motion.h2>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            custom={index}
                        >
                            <motion.div 
                                className="group relative border border-gray-700 p-6 h-full cursor-pointer overflow-hidden"
                                variants={cardHoverVariants}
                                initial="rest"
                                whileHover="hover"
                            >
                                {/* Hover Background Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-[var(--color-gradient)]/5 to-transparent"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Top Content */}
                                <div className="mb-32 relative z-10">
                                    <motion.h3 
                                        className="text-2xl font-bold mb-2"
                                        variants={textHoverVariants}
                                    >
                                        {service.title}
                                    </motion.h3>

                                    <motion.p 
                                        className="text-sm mb-4"
                                        variants={textHoverVariants}
                                    >
                                        {service.subtitle}
                                    </motion.p>

                                    <motion.p 
                                        className="text-xs leading-relaxed"
                                        variants={textHoverVariants}
                                    >
                                        {service.description}
                                    </motion.p>
                                </div>

                                {/* Bottom Section */}
                                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                    <motion.div 
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                                        variants={arrowButtonVariants}
                                    >
                                        <ArrowUpRight />
                                    </motion.div>

                                    <motion.span
                                        className="text-6xl font-black text-[var(--color-gradient)]"
                                        style={{ WebkitTextStroke: '2px rgba(75, 85, 99, 0.5)' }}
                                        variants={numberHoverVariants}
                                    >
                                        {service.number}
                                    </motion.span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
