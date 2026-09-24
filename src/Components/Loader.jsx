import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F6F7FC]">
      <div className="relative flex flex-col items-center">
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-full bg-[#14162B]"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-display text-2xl font-semibold text-[#F6F7FC]">
            AA
          </span>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="font-display text-sm font-medium tracking-wide text-[#14162B]">
            Ahmad Anwar
          </p>
          <p className="mt-1 text-xs text-[#6E7391]">Frontend Developer</p>
        </motion.div>

        <div className="mt-6 h-px w-24 overflow-hidden bg-[#DDE1F0]">
          <motion.div
            className="h-full bg-[#2748E0]"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
