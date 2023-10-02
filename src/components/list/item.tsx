"use client";

import Image, { StaticImageData } from "next/image";
import placeHolder from "../../../public/thumb_placeholder.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

interface IItem {
  imageURL?: StaticImageData;
  title?: string;
}

const Item: React.FC<IItem> = ({ imageURL, title }): JSX.Element => {
  const [isHover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "tween" }}
      className="mx-auto rounded-md bg-primary p-2 text-secondary shadow-md sm:p-5 md:py-5 md:px-8"
    >
      <div>
        <motion.div animate={{ scale: isHover ? 1.1 : 1 }}>
          <Image
            className="rounded-lg"
            src={imageURL || placeHolder}
            alt={"profileImage"}
            width={120}
            height={120}
          />
        </motion.div>
        <h1
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="mt-2 hidden text-center text-lg underline hover:cursor-pointer lg:block"
        >
          {title}
        </h1>
      </div>
    </motion.div>
  );
};

export default Item;
