
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Cursor Ring */}
      <div
        className={`hidden md:block fixed w-5 h-5 border border-cyan-400 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />

      {/* Cursor Glow */}
      <div
        className={`hidden md:block fixed w-32 h-32 lg:w-40 lg:h-40 bg-cyan-500/20 blur-[70px] lg:blur-[80px] rounded-full pointer-events-none z-[9998] transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x - 64,
          top: position.y - 64,
        }}
      />
    </>
  );
}

