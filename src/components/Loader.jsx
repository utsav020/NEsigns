import { useEffect, useState } from "react";

const Loader = () => {
  const [toNav, setToNav] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Start moving to navbar
    const t1 = setTimeout(() => setToNav(true), 800);

    // Remove loader after animation
    const t2 = setTimeout(() => setHide(true), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hide) return null;

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/images/Hero/Logo.png"
        alt="Loader Logo"
        style={{
          width: toNav 
            ? "clamp(70px, 15vw, 110px)" 
            : "clamp(100px, 25vw, 160px)",
          transform: toNav
            ? `translate(
                clamp(-42vw, calc(-100vw + 80px), -35vw), 
                clamp(-47vh, calc(-100vh + 60px), -38vh)
              ) scale(1)`
            : "scale(1.2)",
         
          transition: "all 1s ease",
          transformOrigin: "center",
        }}
      />
    </div>
  );
};

export default Loader;