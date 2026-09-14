
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    >
      {/* Outer Circle */}
      <div
        className="
          absolute
          -translate-x-1/2
          -translate-y-1/2
          w-7
          h-7
          rounded-full
          border
          border-purple-400
          bg-purple-500/10
          shadow-[0_0_20px_rgba(168,85,247,0.5)]
        "
      />

      {/* Center Dot */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-1.5
          h-1.5
          rounded-full
          bg-fuchsia-400
        "
      />
    </motion.div>
  );
}


