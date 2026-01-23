import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import Home from "./pages/Home";
import Loader from "./components/Loader";
import Navbar from "./components/layout/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function App() {
  const [loading, setLoading] = useState(true);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ ONLY SAFE LENIS SETUP (NO LAG)
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 0.2,
      easing: (t) => 1,
      smooth: true,
      smoothTouch: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [loading]);

  return (
    <BrowserRouter>
      {loading && <Loader />}

      {!loading && (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}
