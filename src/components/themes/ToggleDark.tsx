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

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={() => toggleTheme()}
      whileTap={{ scale: 0.8 }}
      className="p-4 text-zinc-950 bg-zinc-50 transition-colors dark:text-zinc-50 dark:bg-zinc-500 rounded-xl shadow-xl"
    >
      {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
    </motion.button>
  );
};

export default ToggleDark;
