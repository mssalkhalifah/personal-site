"use client";

import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import profile from "../../public/Profile.png";
import { motion, Variants } from "framer-motion";
import TypeIt from "typeit";
import { useEffect, useRef, useState } from "react";
import { TbBrandReact, TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const MyProfile: React.FC = () => {
  const canAnimate = useRef<boolean>(true);
  const [fontAnimated, setFontAnimated] = useState(false);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { type: "tween" } },
  };

  useEffect(() => {
    if (canAnimate.current) {
      canAnimate.current = false;
      // @ts-ignore
      new TypeIt("#hiSpan", {
        speed: 35,
        cursor: false,
        afterComplete: () => setFontAnimated(true),
      })
        .type('<span class="text-4xl sm:text-6xl font-black">Hi!</span>')
        .type(
          `<span class="text-3xl m-2 justify-self-center ${pixelifySans.className}">&lt;welcome to my site! /&gt;</span>`,
        )
        .go();
    }
  }, []);

  return (
    <div className="absolute top-32 right-0 left-0">
      <div className="flex place-items-center justify-center">
        <motion.div
          layout
          initial={false}
          animate={fontAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            delay: 0.5,
            type: "tween",
          }}
        >
          <Image
            className="rounded-xl hidden sm:block"
            src={profile}
            alt={"profile"}
            width={150}
            height={150}
          />
        </motion.div>
        <div className="text-center flex flex-col mx-0 sm:mx-4">
          <div
            id="hiSpan"
            className="flex flex-col place-items-center self-center sm:flex-row"
          ></div>
          <motion.span
            initial={false}
            animate={
              fontAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ type: "tween" }}
            className={"text-2xl sm:text-4xl font-bold"}
          >
            {" I'm Mohammad Alkhalifah"}
          </motion.span>
          <motion.span
            initial={false}
            animate={
              fontAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ delay: 0.2, type: "tween" }}
            className={"text-2xl sm:text-4xl font-bold"}
          >
            {"A Full-Stack Developer"}
          </motion.span>
        </div>
      </div>
      {fontAnimated && (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex place-items-center justify-center mt-3 text-lg font-bold space-x-4"
        >
          <motion.li
            variants={item}
            className="flex place-items-center bg-zinc-50 dark:bg-zinc-800 shadow-lg rounded-xl px-3"
          >
            <span className="mr-1">
              <TbBrandNextjs />
            </span>
            NextJS
          </motion.li>
          <motion.li
            variants={item}
            className="flex place-items-center bg-zinc-50 dark:bg-zinc-800 shadow-lg rounded-xl px-3"
          >
            <span className="text-green-500 mr-1">
              <TbBrandNodejs />
            </span>
            NodeJS
          </motion.li>

          <motion.li
            variants={item}
            className="flex place-items-center bg-zinc-50 dark:bg-zinc-800 shadow-lg rounded-xl px-3"
          >
            <span className="text-blue-500 mr-1">
              <TbBrandReact />
            </span>
            React
          </motion.li>
          <motion.li
            variants={item}
            className="flex place-items-center bg-zinc-50 dark:bg-zinc-800 shadow-lg rounded-xl px-3"
          >
            <span className="text-blue-700 mr-1">
              <BiLogoPostgresql />
            </span>
            Postgres
          </motion.li>
        </motion.ul>
      )}
    </div>
  );
};

export default MyProfile;
