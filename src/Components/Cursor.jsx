import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2748E0]/60" />
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2748E0]" />
    </motion.div>
  );
}
