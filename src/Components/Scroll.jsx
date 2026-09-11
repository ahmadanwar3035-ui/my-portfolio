
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (total <= 0) {
        setScroll(0);
        return;
      }

      const progress = (window.scrollY / total) * 100;

      setScroll(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 z-[9999] transition-[width] duration-75"
      style={{ width: `${scroll}%` }}
    />
  );
}

