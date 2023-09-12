"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileImage from "../../public/profile-2.jpg";
import outsystemsIcon from "../../public/outsystems-icon.png";
import nextJsIcon from "../../public/nextjs-logo.jpg";
import typescriptLogo from "../../public/ts-logo-512.png";
import cSharpLogo from "../../public/c-sharp-logo.jpg";
import reactLogo from "../../public/React-icon.jpg";
import unityLogo from "../../public/unity-logo.jpg";
import nodeJsLogo from "../../public/nodejs-logo.jpg";
import javaLogo from "../../public/java-logo.png";
import Item from "@/components/list/item";

const MyExperiences: React.FC = ({}): JSX.Element => {
  return (
    <div>
      <div className="m-4 mb-4 flex flex-col place-items-center space-x-2 space-y-4 md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-2 font-primary"
        >
          <h1 className="text-5xl font-black">
            Hi! I&apos;m{" "}
            <span className="text-6x text-primary">
              {"<"}Mohammad Alkhalifah{" />"}
            </span>
          </h1>
          <p className="hidden text-xl sm:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quod
            dolorem quidem voluptas rerum magnam sed corrupti quisquam at ipsam
            animi eum. Fugiat possimus voluptatibus aut laudantium minima
            voluptates ratione?
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="min-w-fit"
        >
          <Image
            className="rounded-lg sm:drop-shadow-[15px_15px_rgb(42,36,56)]"
            src={profileImage}
            alt={"profileImage"}
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <h1 className="mb-5 hidden text-center text-3xl font-black sm:block">
        My Skills
      </h1>
      <div className="grid w-full grid-cols-4 gap-4">
        <Item
          key={2}
          title="TypeScript"
          imageURL={typescriptLogo}
          barPercentage={60}
        />
        <Item key={3} title="NextJs" imageURL={nextJsIcon} barPercentage={70} />
        <Item key={4} title="React" imageURL={reactLogo} barPercentage={70} />
        <Item
          key={5}
          title="C-Sharp"
          imageURL={cSharpLogo}
          barPercentage={40}
        />
        <Item key={6} title="Unity" imageURL={unityLogo} barPercentage={50} />
        <Item key={7} title="NodeJS" imageURL={nodeJsLogo} barPercentage={50} />
        <Item key={8} title="Java" imageURL={javaLogo} barPercentage={50} />
        <Item
          key={1}
          title="OutSystems"
          imageURL={outsystemsIcon}
          barPercentage={40}
        />
      </div>
    </div>
  );
};

export default MyExperiences;
