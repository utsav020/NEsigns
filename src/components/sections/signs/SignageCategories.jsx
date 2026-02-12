import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SignageCategories() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((json) => {
        const match = json.SignageCategories.find((item) => item.slug === slug);
        setData(match);
      });
  }, [slug]);

  if (!data) return <div className="" />;

  const services = data.subServices || [];
  const showViewMore = ["exterior-sign", "interior-sign", "temporary-signs"].includes(slug);

  return (
    <div className="">
      {/* Header */}
      <header className=" lg:px-20 py-8">
        <Link
          to="/services/signage"
          className="inline-flex items-center text-neutral-400 hover:text-white transition"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-6 lg:px-20 pb-12">
        <div className="container">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            </div>
            <span className="text-xs text-neutral-400 uppercase tracking-widest">
              {data.slug.replace("-", " ")}
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 max-w-4xl leading-tight">
            {data.title}
          </h1>
          <p className="text-base text-neutral-400 max-w-2xl">
            {data.description}
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.filter(item => item && item.title).map((item, index) => (
              <ServiceCard
                key={item.id || index}
                item={item}
                showViewMore={showViewMore}
                slug={slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Service Card Component ---------- */

function ServiceCard({ item, showViewMore, slug, index }) {
  // Gradient colors for each card - using exact linear gradients
  const gradients = [
    "linear-gradient(180deg, #852170 0%, rgba(137, 57, 96, 0.45) 100%)",     // Building Signs
    "linear-gradient(180deg, #EDBC5A 0%, rgba(137, 57, 96, 0.45) 100%)",     // Freestanding Signs
    "linear-gradient(180deg, #27A3D5 0%, rgba(137, 57, 96, 0.45) 100%)",     // Directional Signs
    "linear-gradient(180deg, #ED90CF 0%, rgba(137, 57, 96, 0.45) 100%)",     // Temporary Signs
  ];

  // Redirect logic: All interior signs go to one page, others are dynamic
  const getLink = () => {
    // Safety check
    if (!item || !item.title) {
      return `/categories/${slug}`;
    }

    // Exterior logic
    if (item.title === "Freestanding Signs") {
      return `/categories/${slug}/freestanding-signs?tab=monument`;
    }

    if (item.title === "Directional Signs") {
      return `/categories/${slug}/freestanding-signs?tab=wayfinding`;
    }

    // Interior sign logic (JSON-driven)
    if (slug === "interior-sign") {
      const tabMap = {
        "ADA Signage": "ada",
        "Custom Graphics": "graphics",
        "Custom Graphics ": "graphics", // handles trailing space in JSON
        "Corporate Branding Signs": "corporate",
        "Menu Board": "menu",
      };

      return `/categories/${slug}/interior-sign?tab=${
        tabMap[item.title] || "ada"
      }`;
    }

    return `/categories/${slug}/${item.title
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
  };

  return (
    <div className="group relative overflow-hidden border border-white/70">
      {/* Background Image */}
      {item?.image && (
        <img
          src={item.image}
          alt={item.title || 'Sign'}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Gradient Overlay - Fades out on hover */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
        style={{
          background: gradients[index % 4]
        }}
      />

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-between min-h-[400px]">
        {/* Top Section - Title & Description */}
        <div className="p-6 pb-0">
          <h3 className="text-2xl font-bold text-white mb-3">{item?.title || 'Sign Type'}</h3>
          {/* Description - Hides on hover */}
          <p className="text-sm text-white/90 leading-relaxed max-w-[280px] transition-opacity duration-300 group-hover:opacity-0">
            {item?.desc || ''}
          </p>
        </div>

        {/* Bottom Section - Glassmorphism Controls */}
        <div 
          className="w-full border-t border-white/10"
          style={{
            background: '#000000CC',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex items-center justify-between p-3">
            <span className="text-xs text-white/80">View all Signs</span>
            
            {showViewMore && (
              <Link
                to={getLink()}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                View More
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}