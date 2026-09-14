import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      {/* Main Loader */}
      <div className="relative flex flex-col items-center">
        {/* Outer Ring */}
        <motion.div
          className="absolute h-40 w-40 rounded-full border border-purple-500/10"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Rotating Ring */}
        <motion.div
          className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 rounded-full border-t-2 border-purple-500" />
          <div className="absolute inset-2 rounded-full border-r-2 border-fuchsia-500/70" />
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 shadow-2xl shadow-purple-600/30"
        >
          <span className="text-2xl font-black text-white">AA</span>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-[0.35em] text-white">
            AHMAD ANWAR
          </p>

          <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gray-600">
            Frontend Developer
          </p>
        </motion.div>

        {/* Loading Dots */}
        <div className="mt-6 flex items-center gap-2">
          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              className="h-1.5 w-1.5 rounded-full bg-purple-500"
              animate={{
                y: [0, -6, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: item * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
