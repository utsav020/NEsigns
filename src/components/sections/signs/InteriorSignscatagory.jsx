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
    { id: "ada", name: "ADA Signage", image: "https://images.unsplash.com/photo-1607827448299-a099b845ff0f?w=200&h=150&fit=crop" },
    { id: "dimensional", name: "Dimensional Letters", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=150&fit=crop" },
    { id: "directional", name: "Directional Signs", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=200&h=150&fit=crop" },
    { id: "graphics", name: "Custom Graphics & Decals", image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=200&h=150&fit=crop" },
    { id: "canvas", name: "Custom Canvas Prints", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&h=150&fit=crop" },
    { id: "tradeshow", name: "Trade Show Signage", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=150&fit=crop" },
    { id: "corporate", name: "Corporate Branding Signs", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=200&h=150&fit=crop" },
    { id: "banners", name: "Banners and Posters", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=150&fit=crop" },
    { id: "custom", name: "Any Custom Interior Signs", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=150&fit=crop" },
    { id: "menu", name: "Menu Boards", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=150&fit=crop" },
    { id: "backdrop", name: "Step and Repeat Backdrop", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=200&h=150&fit=crop" },
    { id: "banner-stands", name: "Banner Stands", image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=200&h=150&fit=crop" },
    { id: "acrylic", name: "Acrylic Signs", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=150&fit=crop" },
  ];

  /* ----------------------------------
     Gallery Images
  ---------------------------------- */
  const galleryImages = {
    ada: [
      "https://images.unsplash.com/photo-1607827448299-a099b845ff0f?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
    ],
    dimensional: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=400&fit=crop",
    ],
    directional: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=400&fit=crop",
    ],
    graphics: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=400&fit=crop",
    ],
    canvas: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
    ],
    tradeshow: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
    ],
    corporate: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=400&fit=crop",
    ],
    banners: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
    ],
    custom: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=400&fit=crop",
    ],
    menu: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
    ],
    backdrop: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop",
    ],
    "banner-stands": [
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=400&fit=crop",
    ],
    acrylic: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop",
    ],
  };

  /* ----------------------------------
     SAFETY FALLBACK (prevents crashes)
  ---------------------------------- */
  const safeCategory =
    galleryImages[activeCategory] ? activeCategory : "ada";

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
              <span className="px-5 py-4 font-semibold">
                {category.name}
              </span>
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
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorSignscatagory;
