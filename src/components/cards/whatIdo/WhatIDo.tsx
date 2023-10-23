"use client";

import { Variant, Variants, motion } from "framer-motion";
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript } from "react-icons/bi";
import { BsTriangle } from "react-icons/bs";
import { FaCloud, FaGear, FaSquare } from "react-icons/fa6";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import { AiFillDatabase } from "react-icons/ai";
import { GiCube } from "react-icons/gi";

const getContainer = (delay: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: delay,
        staggerChildren: 0.3,
        delayChildren: delay + 0.35,
      },
    },
  };
};

const getItemContainer = (variant: Variant): Variants => {
  return {
    hidden: { opacity: 0, x: 0, y: 0 },
    show: variant,
  };
};

export const WhatIDoFrontEnd: React.FC = () => {
  return (
    <motion.div
      variants={getContainer(0.2)}
      initial="hidden"
      whileInView="show"
      className="relative text-center bg-zinc-50 shadow-lg rounded-xl h-52 min-w-[20rem] p-2 dark:bg-zinc-900 dark:shadow-zinc-900"
    >
      <span className="text-xl">FRONTEND</span>
      <div className="absolute flex justify-center place-items-center inset-0 mt-4 h-full w-full">
        <motion.span
          variants={{
            show: {
              y: [40, -48],
              x: [-60, 0],
              opacity: [0, 1, 1, 1],
              transition: {
                repeat: Infinity,
                duration: 1,
              },
            },
          }}
          className="absolute dark:text-zinc-700"
        >
          <FaSquare />
        </motion.span>

        <motion.span
          variants={{
            show: {
              y: [-48, 40],
              x: [0, 60],
              opacity: [0, 1, 1, 1],
              transition: {
                repeat: Infinity,
                duration: 1,
              },
            },
          }}
          className="absolute dark:text-zinc-700"
        >
          <FaSquare />
        </motion.span>

        <motion.span
          variants={{
            show: {
              y: [52, 52],
              x: [52, -52],
              opacity: [0, 1, 1, 1],
              transition: {
                repeat: Infinity,
                duration: 1,
              },
            },
          }}
          className="absolute dark:text-zinc-700"
        >
          <FaSquare />
        </motion.span>

        <motion.div
          variants={getItemContainer({ y: -48, opacity: 1 })}
          className="absolute bg-white dark:bg-zinc-800 dark:shadow-zinc-950 rounded-xl shadow-md"
        >
          <BiLogoCss3 className="w-14 h-14 text-blue-500" />
        </motion.div>

        <motion.div
          variants={getItemContainer({ y: 40, x: 56, opacity: 1 })}
          className="absolute bg-white dark:bg-zinc-800 dark:shadow-zinc-950 rounded-xl shadow-md"
        >
          <BiLogoJavascript className="w-14 h-14 text-yellow-500" />
        </motion.div>

        <motion.div
          variants={getItemContainer({ y: 40, x: -56, opacity: 1 })}
          className="absolute bg-white dark:bg-zinc-800 dark:shadow-zinc-950 rounded-xl shadow-md"
        >
          <BiLogoHtml5 className="w-14 h-14 text-red-500" />
        </motion.div>
        <BsTriangle className="w-32 h-32 dark:text-zinc-700" />
      </div>
    </motion.div>
  );
};

export const WhatIDoBackend: React.FC = () => {
  return (
    <motion.div
      variants={getContainer(0.5)}
      initial="hidden"
      whileInView="show"
      className="relative text-center bg-zinc-50 shadow-lg rounded-xl h-52 min-w-[20rem] p-2 dark:bg-zinc-900 dark:shadow-zinc-900"
    >
      <span className="text-xl">BACKEND</span>
      <div className="absolute flex justify-center place-items-center inset-0 mt-4 h-full w-full">
        <motion.div
          variants={getItemContainer({ opacity: 1 })}
          className="absolute"
        >
          <div className="relative w-56 h-36 rounded-xl shadow-md dark:shadow-zinc-950 bg-white dark:bg-zinc-800">
            <span className="absolute w-4 h-4 bg-red-500 rounded-full left-2 top-2"></span>
            <span className="absolute w-4 h-4 bg-yellow-500 rounded-full left-8 top-2"></span>
            <span className="absolute w-4 h-4 bg-green-500 rounded-full left-14 top-2"></span>

            <span className="absolute w-16 h-2 bg-green-500 rounded-full right-12 top-12"></span>
            <span className="absolute w-8 h-2 bg-yellow-500 rounded-full right-2 top-12"></span>

            <span className="absolute w-12 h-2 bg-green-500 rounded-full right-13 top-16"></span>
            <span className="absolute w-12 h-2 bg-yellow-500 rounded-full right-2 top-16"></span>

            <span className="absolute w-10 h-2 bg-green-500 rounded-full right-13 top-20"></span>
            <span className="absolute w-14 h-2 bg-yellow-500 rounded-full right-2 top-20"></span>

            <span className="absolute w-16 h-2 bg-green-500 rounded-full right-12 top-24"></span>
            <span className="absolute w-8 h-2 bg-yellow-500 rounded-full right-2 top-24"></span>

            <span className="absolute w-16 h-2 bg-green-500 rounded-full right-12 top-28"></span>
            <span className="absolute w-8 h-2 bg-yellow-500 rounded-full right-2 top-28"></span>

            <FaCloud className="absolute w-24 h-24 top-9 left-2 text-zinc-700 dark:text-zinc-900" />
            <motion.span
              className="absolute top-[84px] left-8 text-zinc-600 dark:text-zinc-700"
              whileInView={{
                rotate: 360,
                transition: {
                  duration: 2.5,
                  repeat: Infinity,
                  type: "tween",
                  ease: [],
                },
              }}
            >
              <FaGear className="w-12 h-12" />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const WhatIDoDatabase: React.FC = () => {
  return (
    <motion.div
      variants={getContainer(0.8)}
      initial="hidden"
      whileInView="show"
      className="relative text-center bg-zinc-50 shadow-lg rounded-xl h-52 min-w-[20rem] p-2 dark:bg-zinc-900 dark:shadow-zinc-900"
    >
      <span className="text-xl">DATABASE</span>
      <div className="absolute flex justify-center place-items-center inset-0 mt-4 h-full w-full">
        <span className="absolute animate-pulse bg-green-500 w-4 h-4 left-[121px] top-[50px]"></span>
        <span className="absolute animate-pulse bg-yellow-500 w-4 h-4 left-[121px] top-[95px]"></span>
        <span className="absolute animate-pulse bg-red-500 w-4 h-4 left-[121px] top-[140px]"></span>

        <span className="absolute">
          <AiFillDatabase className="w-36 h-36 text-zinc-700 dark:text-zinc-800" />
        </span>
      </div>
    </motion.div>
  );
};
