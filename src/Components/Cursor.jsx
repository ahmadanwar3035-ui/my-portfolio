import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        className="fixed w-5 h-5 border border-cyan-400 rounded-full pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />

      <div
        className="fixed w-40 h-40 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none z-[9998]"
        style={{
          left: position.x - 80,
          top: position.y - 80,
        }}
      />
    </>
  );
}
