import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

/* =======================
   IMAGE SOURCE
======================= */
const IMAGES = [
  "/images/OurWork/image_01.png",
  "/images/OurWork/image_02.png",
  "/images/OurWork/image_03.png",
  "/images/Hero/Img-1.png",
  "/images/Hero/Img-2.png",
  "/images/Hero/Img-3.png",
];

/* repeat images to fill space */
const FILLED_IMAGES = Array.from({ length: 36 }).map(
  (_, i) => IMAGES[i % IMAGES.length]
);

/* =======================
   MAIN COMPONENT
======================= */
export default function CrossScrollGallery() {
  const [view, setView] = useState("columns"); // columns | row
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative  bg-[#0a0a0a] overflow-hidden flex items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {view === "columns" && (
          <ColumnsView
            key="columns"
            scrollYProgress={scrollYProgress}
            onImageClick={() => setView("row")}
          />
        )}

        {view === "row" && (
          <RowView
            key="row"
            onImageClick={() => setView("columns")}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* =======================
   COLUMNS VIEW
======================= */
function ColumnsView({ scrollYProgress, onImageClick }) {
  const COLUMN_COUNT = 5; // 🔥 EXTRA COLUMNS

  return (
    <motion.div
      className="grid gap-16 min-h-[300vh]"
      style={{
        gridTemplateColumns: `repeat(${COLUMN_COUNT}, minmax(0,1fr))`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {Array.from({ length: COLUMN_COUNT }).map((_, colIndex) => {
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          colIndex % 2 === 0 ? [0, -900] : [-900, 0]
        );

        return (
          <motion.div
            key={colIndex}
            style={{ y }}
            className="flex flex-col gap-14"
          >
            {FILLED_IMAGES.filter(
              (_, i) => i % COLUMN_COUNT === colIndex
            ).map((src, i) => (
              <motion.div
                key={`${colIndex}-${i}`}
                layout
                onClick={onImageClick}
                whileHover={{ scale: 1.05 }}
                className="w-[220px] aspect-[4/5] cursor-pointer rounded-xl overflow-hidden shadow-xl"
                style={{
                  rotate: colIndex % 2 === 0 ? -8 : 8,
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* =======================
   ROW VIEW
======================= */
function RowView({ onImageClick }) {
  const x = useMotionValue(0);

  return (
    <motion.div
      className="relative w-full py-32 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -600, right: 600 }}
        dragElastic={0.15}
        style={{ x }}
        className="flex gap-10 cursor-grab active:cursor-grabbing w-max mx-auto"
      >
        {IMAGES.map((src, i) => {
          // each card offset
          const offset = i * 220;

          const scale = useTransform(
            x,
            [offset - 300, offset, offset + 300],
            [0.85, 1.2, 0.85]
          );

          const opacity = useTransform(
            x,
            [offset - 300, offset, offset + 300],
            [0.5, 1, 0.5]
          );

          return (
            <motion.div
              key={i}
              style={{ scale, opacity }}
              onClick={onImageClick}
              className="w-[180px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl flex-shrink-0"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}