"use client";

import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import profile from "../../public/Profile.png";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";
import { useState } from "react";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: "400",
});

const MyProfile: React.FC = () => {
  const [fontAnimated, setFontAnimated] = useState(false);

  return (
    <div className="absolute top-32 right-0 left-0 flex place-items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
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
        <div className="flex flex-col place-items-center self-center sm:flex-row">
          <TypeIt
            options={{
              cursorChar: "",
              speed: 60,
            }}
          >
            <span className="text-6xl font-black">Hi!</span>
          </TypeIt>
          <TypeIt
            options={{
              cursorChar: "",
              speed: 40,
              afterComplete: () => {
                setFontAnimated(true);
              },
            }}
          >
            <span
              className={`text-3xl m-2 justify-self-center ${pixelifySans.className}`}
            >
              {"<welcome to my site! />"}
            </span>
          </TypeIt>
        </div>
        <span
          className={`text-4xl delay-75 ${
            fontAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          } transition-all font-bold`}
        >
          {" I'm Mohammad Alkhalifah"}
        </span>
        <span
          className={`text-4xl delay-200 ${
            fontAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          } transition-all font-bold`}
        >
          {"A Full-Stack Developer"}
        </span>
      </div>
    </div>
  );
};

export default MyProfile;
