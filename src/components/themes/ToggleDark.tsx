"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface IToggleDark {}

const ToggleDark: React.FC<IToggleDark> = ({}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return mounted ? (
    <motion.button
      onClick={() => toggleTheme()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, type: "tween" }}
      whileTap={{ scale: 0.8 }}
      title="ToggleDark"
      className="text-zinc-950 bg-zinc-50 w-[50px] h-[50px] transition-colors dark:text-zinc-50 dark:bg-zinc-500 rounded-xl shadow-xl"
    >
      {theme === "light" ? (
        <MdLightMode className="mx-auto w-[25px] h-[25px]" />
      ) : (
        <MdDarkMode className="mx-auto w-[25px] h-[25px]" />
      )}
    </motion.button>
  ) : (
    <div className="w-[50px] h-[50px] bg-zinc-300 animate-pulse rounded-xl"></div>
  );
};

export default ToggleDark;
