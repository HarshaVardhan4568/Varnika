import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#450719] text-white text-center relative overflow-hidden">
      {/* SOFT GLOW */}
      <div className="absolute w-72 h-72 bg-white opacity-10 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-white opacity-10 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* HEADING */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Elevate Your Style
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          className="mt-3 text-sm md:text-base text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Discover handcrafted elegance with Varnika
        </motion.p>

        {/* 🔥 FIXED BUTTON (SCROLL WORKS NOW) */}
        <motion.a
          href="#collection"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-6 bg-white text-[#450719] px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Explore Collection
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Hero;
