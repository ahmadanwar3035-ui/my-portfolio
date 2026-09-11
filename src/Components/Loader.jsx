
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#030712] flex items-center justify-center overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.35) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-cyan-500/20 blur-[100px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-purple-500/20 blur-[90px]"
      />

      {/* Main Loader */}
      <div className="relative flex flex-col items-center justify-center">

        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border border-cyan-400/20 border-t-cyan-400"
        />

        {/* Middle Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-40 h-40 sm:w-52 sm:h-52 lg:w-68 lg:h-68 rounded-full border border-purple-400/20 border-b-purple-400"
        />

        {/* Inner Ring */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: 360,
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border border-cyan-400/30"
        />

        {/* Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.15)]"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400"
          >
            A.
          </motion.div>
        </motion.div>

        {/* Orbit Dot */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          className="mt-20 sm:mt-24 lg:mt-28 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[0.15em] sm:tracking-[0.25em] text-center"
        >
          AHMAD
          <span className="text-cyan-400">.</span>
        </motion.h1>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-5 sm:mt-6 flex flex-col items-center"
        >
          <p className="text-gray-500 text-xs sm:text-sm tracking-[0.2em] uppercase">
            Loading Portfolio
          </p>

          {/* Progress Bar */}
          <div className="w-52 sm:w-72 lg:w-96 h-1 mt-4 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Corner Details */}
      <div className="absolute top-5 left-5 sm:top-8 sm:left-8 text-[9px] sm:text-[10px] text-cyan-400/40 tracking-[0.2em]">
        SYSTEM_INIT
      </div>

      <div className="absolute top-5 right-5 sm:top-8 sm:right-8 text-[9px] sm:text-[10px] text-purple-400/40 tracking-[0.2em]">
        2026
      </div>

      <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 text-[9px] sm:text-[10px] text-cyan-400/40 tracking-[0.2em]">
        FRONTEND
      </div>

      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 text-[9px] sm:text-[10px] text-purple-400/40 tracking-[0.2em]">
        READY
      </div>
    </div>
  );
}

