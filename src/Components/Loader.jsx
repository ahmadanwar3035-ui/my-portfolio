
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Loader() {
  const progress = useMotionValue(0);

  const roundedProgress = useTransform(
    progress,
    (value) => `${Math.round(value)}%`
  );

  useEffect(() => {
    animate(progress, 100, {
      duration: 3,
      ease: "easeInOut",
    });
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] bg-[#020617] text-white overflow-hidden flex items-center justify-center">

      {/* ================= BACKGROUND ================= */}

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[140px]"
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [50, -50, 50],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 flex flex-col items-center">

        {/* Top Small Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="w-10 h-[1px] bg-cyan-400" />

          <span className="text-[10px] md:text-xs tracking-[0.5em] text-gray-500">
            WELCOME TO MY WORLD
          </span>

          <span className="w-10 h-[1px] bg-purple-500" />
        </motion.div>


        {/* ================= ORB ================= */}

        <div className="relative flex items-center justify-center">

          {/* Outer Glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl"
          />

          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border border-cyan-400/20 border-t-cyan-400 border-r-transparent"
          />

          {/* Second Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-60 h-60 md:w-68 md:h-68 rounded-full border border-purple-500/20 border-b-purple-500 border-l-transparent"
          />

          {/* Third Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-48 h-48 rounded-full border border-cyan-400/10 border-t-cyan-300"
          />

          {/* Center */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            className="
              relative
              w-40 h-40
              md:w-48 md:h-48
              rounded-full
              bg-[#020617]
              border border-white/10
              flex items-center justify-center
              shadow-[0_0_100px_rgba(34,211,238,0.12)]
            "
          >

            {/* Inner Glow */}
            <motion.div
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-5 rounded-full bg-cyan-400/10 blur-2xl"
            />

            {/* A Logo */}
            <motion.div
              animate={{
                textShadow: [
                  "0 0 10px rgba(34,211,238,0.2)",
                  "0 0 40px rgba(34,211,238,0.9)",
                  "0 0 10px rgba(34,211,238,0.2)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="relative text-7xl md:text-8xl font-black tracking-tighter"
            >
              A
              <span className="text-cyan-400">.</span>
            </motion.div>

          </motion.div>

          {/* Orbit Dot */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-80 h-80 md:w-[360px] md:h-[360px]"
          >
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]" />
          </motion.div>

        </div>


        {/* ================= NAME ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-14 text-center"
        >

          <h1 className="
            text-6xl
            md:text-8xl
            lg:text-9xl
            font-black
            tracking-[-0.06em]
            leading-none
          ">
            AHMAD
            <span className="text-cyan-400">.</span>
          </h1>

          <div className="mt-5 flex items-center justify-center gap-4">

            <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-cyan-400" />

            <p className="
              text-[10px]
              md:text-xs
              tracking-[0.5em]
              text-gray-400
              uppercase
            ">
              Frontend Developer
            </p>

            <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-purple-500" />

          </div>

        </motion.div>


        {/* ================= LOADING ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 w-72 md:w-96"
        >

          <div className="flex justify-between items-end mb-3">

            <div>
              <p className="text-[9px] tracking-[0.3em] text-gray-600">
                SYSTEM STATUS
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Building experience...
              </p>
            </div>

            <motion.span className="text-sm font-mono text-cyan-400">
              {roundedProgress}
            </motion.span>

          </div>


          {/* Progress Background */}
          <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">

            <motion.div
              style={{
                width: useTransform(progress, (value) => `${value}%`),
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-purple-500
                shadow-[0_0_15px_rgba(34,211,238,0.7)]
              "
            />

          </div>

        </motion.div>


        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="
            mt-7
            text-[9px]
            tracking-[0.4em]
            text-gray-700
            uppercase
          "
        >
          Design • Code • Create
        </motion.p>

      </div>


      {/* ================= CORNER DETAILS ================= */}

      <div className="absolute top-8 left-8 text-[9px] text-gray-700 tracking-widest">
        01
      </div>

      <div className="absolute top-8 right-8 text-[9px] text-gray-700 tracking-widest">
        2026
      </div>

      <div className="absolute bottom-8 left-8 text-[9px] text-gray-700 tracking-widest">
        PORTFOLIO
      </div>

      <div className="absolute bottom-8 right-8 text-[9px] text-gray-700 tracking-widest">
        V1.0
      </div>

    </div>
  );
}



