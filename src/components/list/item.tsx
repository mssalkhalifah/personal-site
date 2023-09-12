"use client";

import Image, { StaticImageData } from "next/image";
import placeHolder from "../../../public/thumb_placeholder.jpg";
import { motion } from "framer-motion";

interface IItem {
  imageURL?: StaticImageData;
  title?: string;
  barPercentage: number;
}

const Item: React.FC<IItem> = ({
  imageURL,
  title,
  barPercentage,
}): JSX.Element => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "tween" }}
      className="mx-auto rounded-md bg-primary p-2 text-secondary shadow-md sm:p-5 md:py-5 md:px-8"
    >
      <motion.div whileHover={{ y: -6 }}>
        <Image
          className="rounded-lg"
          src={imageURL || placeHolder}
          alt={"profileImage"}
          width={120}
          height={120}
        />
        <h1 className="mt-2 hidden text-center text-lg lg:block">{title}</h1>
      </motion.div>
    </motion.div>
  );
};

export default Item;
