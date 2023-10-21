"use client";

import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import profile from "../../public/Profile.png";
import { motion, Variants } from "framer-motion";
import TypeIt from "typeit";
import { useEffect, useRef, useState } from "react";
import { TbBrandReact, TbBrandNextjs, TbBrandNodejs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import Link from "next/link";
import { Stack } from "@/lib/stack/stack.interfaces";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

interface IMyProfile {
  stacks: Stack[];
}

const getStackIconByName = (name: string): JSX.Element => {
  if (name.toLowerCase().indexOf("react") >= 0) {
    return <TbBrandReact />;
  }

  if (name.toLowerCase().indexOf("nextjs") >= 0) {
    return <TbBrandNextjs />;
  }

  if (name.toLowerCase().indexOf("nodejs") >= 0) {
    return <TbBrandNodejs />;
  }

  if (name.toLowerCase().indexOf("postgresql") >= 0) {
    return <BiLogoPostgresql />;
  }

  return <></>;
};

const MyProfile: React.FC<IMyProfile> = ({ stacks }) => {
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
          className="flex flex-wrap place-items-center justify-center mt-3 text-lg font-bold "
        >
          {stacks.map((stack, index) => (
            <motion.li key={index} variants={item} whileHover={{ scale: 1.05 }}>
              <Link
                href={stack.attributes.url}
                target="_blank"
                className="flex place-items-center bg-zinc-50 dark:bg-zinc-800 shadow-lg rounded-xl px-3 mx-2 my-1"
              >
                <span
                  className="mr-1"
                  style={{
                    color:
                      stack.attributes.name.toLowerCase() === "nextjs"
                        ? ""
                        : stack.attributes.color,
                  }}
                >
                  {getStackIconByName(stack.attributes.name)}
                </span>
                {stack.attributes.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default MyProfile;
