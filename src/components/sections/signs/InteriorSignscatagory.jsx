import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const InteriorSignscatagory = () => {
  /* ----------------------------------
     Read tab from URL
  ---------------------------------- */
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab") || "ada";

  const [activeCategory, setActiveCategory] = useState(tabFromUrl);

  /* ----------------------------------
     Sync state when URL changes
  ---------------------------------- */
  useEffect(() => {
    setActiveCategory(tabFromUrl);
  }, [tabFromUrl]);

  /* ----------------------------------
     Categories
  ---------------------------------- */
  const categories = [
    {
      id: "ada",
      name: "ADA Signage",
      image: "/images/interiorsigns/ADA_03.png",
    },
    {
      id: "dimensional",
      name: "Dimensional Letters",
      image: "/images/interiorsigns/Dimension_5.png",
    },
    {
      id: "directional",
      name: "Directional Signs",
      image: "/images/interiorsigns/Directional_5.png",
    },
    {
      id: "graphics",
      name: "Custom Graphics & Decals",
      image: "/images/interiorsigns/Graphics_3.png",
    },
    {
      id: "canvas",
      name: "Custom Canvas Prints",
      image: "/images/interiorsigns/Custom_Canvas_8.png",
    },
    {
      id: "tradeshow",
      name: "Trade Show Signage",
      image: "/images/interiorsigns/TradShow_2.jpg",
    },
    {
      id: "corporate",
      name: "Corporate Branding Signs",
      image: "/images/interiorsigns/Corpo_Bran_8.png",
    },
    {
      id: "banners",
      name: "Banners and Posters",
      image: "/images/interiorsigns/Banner_1.png",
    },
    {
      id: "custom",
      name: "Any Custom Interior Signs",
      image: "/images/interiorsigns/Any_Custom_1.png",
    },
    {
      id: "menu",
      name: "Menu Boards",
      image: "/images/interiorsigns/ManuBoard_1.png",
    },
    {
      id: "backdrop",
      name: "Step and Repeat Backdrop",
      image: "/images/interiorsigns/Backdrop_2.png",
    },
    {
      id: "banner-stands",
      name: "Banner Stands",
      image: "/images/interiorsigns/Stand_7.png",
    },
    {
      id: "acrylic",
      name: "Acrylic Signs",
      image: "/images/interiorsigns/Acrylic_1.png",
    },
  ];

  /* ----------------------------------
     Gallery Images
  ---------------------------------- */
  const galleryImages = {
    ada: [
      "/images/interiorsigns/ADA_01.png",
      "/images/interiorsigns/ADA_02.png",
      "/images/interiorsigns/ADA_03.png",
      "/images/interiorsigns/ADA_04.png",
      "/images/interiorsigns/ADA_05.png",
      "/images/interiorsigns/ADA_06.png",
      "/images/interiorsigns/ADA_07.png",
      "/images/interiorsigns/ADA_08.png",
      "/images/interiorsigns/ADA_09.png",
    ],
    dimensional: [
      "/images/interiorsigns/Dimension_1.png",
      "/images/interiorsigns/Dimension_2.png",
      "/images/interiorsigns/Dimension_3.png",
      "/images/interiorsigns/Dimension_4.png",
      "/images/interiorsigns/Dimension_5.png",
      "/images/interiorsigns/Dimension_6.png",
      "/images/interiorsigns/Dimension_7.png",
      "/images/interiorsigns/Dimension_8.png",
    ],
    directional: [
      "/images/interiorsigns/Directional_1.png",
      "/images/interiorsigns/Directional_2.png",
      "/images/interiorsigns/Directional_3.png",
      "/images/interiorsigns/Directional_4.png",
      "/images/interiorsigns/Directional_5.png",
      "/images/interiorsigns/Directional_6.png",
      "/images/interiorsigns/Directional_7.png",
      "/images/interiorsigns/Directional_8.png",
    ],
    graphics: [
      "/images/interiorsigns/Graphics_1.png",
      "/images/interiorsigns/Graphics_2.png",
      "/images/interiorsigns/Graphics_3.png",
      "/images/interiorsigns/Graphics_4.png",
      "/images/interiorsigns/Graphics_5.png",
      "/images/interiorsigns/Graphics_6.png",
      "/images/interiorsigns/Graphics_7.png",
      "/images/interiorsigns/Graphics_8.png",
      "/images/interiorsigns/Graphics_9.png",
    ],
    canvas: [
      "/images/interiorsigns/Custom_Canvas_1.png",
      "/images/interiorsigns/Custom_Canvas_2.png",
      "/images/interiorsigns/Custom_Canvas_3.png",
      "/images/interiorsigns/Custom_Canvas_4.png",
      "/images/interiorsigns/Custom_Canvas_5.png",
      "/images/interiorsigns/Custom_Canvas_6.png",
      "/images/interiorsigns/Custom_Canvas_7.png",
      "/images/interiorsigns/Custom_Canvas_8.png",
    ],
    tradeshow: [
      "/images/interiorsigns/TradShow_1.jpg",
      "/images/interiorsigns/TradShow_2.jpg",
      "/images/interiorsigns/TradShow_3.jpg",
      "/images/interiorsigns/TradShow_4.jpg",
      "/images/interiorsigns/TradShow_5.jpg",
      "/images/interiorsigns/TradShow_6.jpg",
      "/images/interiorsigns/TradShow_7.jpg",
    ],
    corporate: [
      "/images/interiorsigns/Corpo_Bran_4.png",
      "/images/interiorsigns/Corpo_Bran_1.png",
      "/images/interiorsigns/Corpo_Bran_2.png",
      "/images/interiorsigns/Corpo_Bran_3.png",
      "/images/interiorsigns/Corpo_Bran_6.png",
      "/images/interiorsigns/Corpo_Bran_7.png",
      "/images/interiorsigns/Corpo_Bran_8.png",
      "/images/interiorsigns/Corpo_Bran_9.png",
      "/images/interiorsigns/Corpo_Bran_5.png",
    ],
    banners: [
      "/images/interiorsigns/Banner_1.png",
      "/images/interiorsigns/Banner_2.png",
      "/images/interiorsigns/Banner_3.png",
      "/images/interiorsigns/Banner_4.png",
      "/images/interiorsigns/Banner_5.png",
      "/images/interiorsigns/Banner_6.png",
      "/images/interiorsigns/Banner_7.png",
      "/images/interiorsigns/Banner_8.png",
    ],
    custom: [
      "/images/interiorsigns/Any_Custom_1.png",
      "/images/interiorsigns/Any_Custom_2.png",
      "/images/interiorsigns/Any_Custom_3.png",
      "/images/interiorsigns/Any_Custom_4.png",
      "/images/interiorsigns/Any_Custom_5.png",
      "/images/interiorsigns/Any_Custom_6.png",
      "/images/interiorsigns/Any_Custom_7.png",
    ],
    menu: [
      "/images/interiorsigns/ManuBoard_1.png",
      "/images/interiorsigns/ManuBoard_2.png",
      "/images/interiorsigns/ManuBoard_3.png",
      "/images/interiorsigns/ManuBoard_4.png",
      "/images/interiorsigns/ManuBoard_5.png",
      "/images/interiorsigns/ManuBoard_6.png",
      "/images/interiorsigns/ManuBoard_7.png",
      "/images/interiorsigns/ManuBoard_8.png",
    ],
    backdrop: [
      "/images/interiorsigns/Backdrop_1.png",
      "/images/interiorsigns/Backdrop_2.png",
      "/images/interiorsigns/Backdrop_3.png",
      "/images/interiorsigns/Backdrop_4.png",
      "/images/interiorsigns/Backdrop_5.png",
      "/images/interiorsigns/Backdrop_6.png",
      "/images/interiorsigns/Backdrop_7.png",
      "/images/interiorsigns/Backdrop_8.png",
    ],
    "banner-stands": [
      "/images/interiorsigns/Stand_1.png",
      "/images/interiorsigns/Stand_2.png",
      "/images/interiorsigns/Stand_3.png",
      "/images/interiorsigns/Stand_4.png",
      "/images/interiorsigns/Stand_5.png",
      "/images/interiorsigns/Stand_6.png",
      "/images/interiorsigns/Stand_7.png",
      "/images/interiorsigns/Stand_8.png",
    ],
    acrylic: [
      "/images/interiorsigns/Acrylic_1.png",
      "/images/interiorsigns/Acrylic_2.png",
      "/images/interiorsigns/Acrylic_3.png",
      "/images/interiorsigns/Acrylic_4.png",
      "/images/interiorsigns/Acrylic_5.png",
      "/images/interiorsigns/Acrylic_6.png",
      "/images/interiorsigns/Acrylic_7.png",
      "/images/interiorsigns/Acrylic_8.png",
    ],
  };

  /* ----------------------------------
     SAFETY FALLBACK (prevents crashes)
  ---------------------------------- */
  const safeCategory = galleryImages[activeCategory] ? activeCategory : "ada";

  return (
    <div className="p-6">
      {/* Back */}
      <Link
        to="/categories/interior-sign"
        className="inline-flex items-center text-neutral-400 hover:text-white transition"
      >
        <ArrowLeft size={22} />
      </Link>

      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[var(--color-gradient)] text-sm tracking-[0.2em] font-light">
              INTERIOR SIGNS
            </span>
            <ArrowRight className="text-[var(--color-gradient)]" size={22} />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[var(--color-gradient)]">High-Quality</span>{" "}
            Interior Signs You Can Trust
          </h1>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center bg-[#2a2a2a] rounded-xl overflow-hidden border-2 transition-all duration-300 hover:border-[#d4a574] hover:-translate-y-1 ${
                safeCategory === category.id
                  ? "border-[var(--color-gradient)]"
                  : "border-[#3a3a3a]"
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-32 h-20 object-cover"
              />
              <span className="px-5 py-4 font-semibold">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {galleryImages[safeCategory].map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorSignscatagory;
