"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import profile from "../../../public/Profile.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMiniQueueList } from "react-icons/hi2";
import Sidebar from "./side/SideBar";
import ToggleDark from "../themes/ToggleDark";
import { motion } from "framer-motion";

export interface INavbar {}

const Navbar: React.FC<INavbar> = ({}) => {
  const [isTop, setTop] = useState(true);
  const [isProjectsPage, setProjectsPage] = useState(false);
  const [isDropdownClicked, setDropdownClicked] = useState(false);
  const scrollPosition = useScrollPosition();
  const pathname = usePathname();

  useEffect(() => {
    setTop(scrollPosition === 0);
    const isCurrentPathHome = pathname?.split("/");

    setProjectsPage(isCurrentPathHome && isCurrentPathHome[1] === "projects");
  }, [pathname, scrollPosition]);

  return (
    <nav
      id="navbar"
      className={`fixed z-[100] transition-all ${
        isTop
          ? "bg-transparent w-screen px-4"
          : "w-screen backdrop-blur lg:bg-zinc-900/70 px-4 lg:rounded-full lg:mt-2 lg:mx-[2%] lg:w-[96%]"
      }`}
    >
      <div className="container mx-auto py-2">
        <div className="flex place-items-center justify-between">
          <div className="flex place-items-center w-full">
            <Image
              className="block rounded-xl shadow-md sm:hidden z-50"
              src={profile}
              alt={"profile"}
              width={50}
              height={50}
            />
            <Link
              href={"/"}
              className={`mx-auto z-50 transition-colors sm:mx-0 ${
                isTop ? "" : "sm:text-zinc-50"
              }`}
            >
              <span className="font-black text-3xl">M</span>
              <span className="font-semibold text-xl">SSALKHALIFAH</span>
            </Link>
            <Link href={"/projects"}>
              <span
                className={`hidden mx-6 w-fit px-2 py-1 transition-all sm:block ${
                  isProjectsPage
                    ? "bg-zinc-200 px-4 dark:bg-zinc-600 rounded-md"
                    : "bg-zinc-400 rounded-xl"
                }`}
              >
                PROJECTS
              </span>
            </Link>
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setDropdownClicked(!isDropdownClicked)}
              className="block p-2 bg-zinc-50 dark:bg-zinc-700 shadow-md w-[50px] h-[50px] z-50 rounded-xl sm:hidden"
            >
              <HiMiniQueueList className="mx-auto w-[25px] h-[25px]" />
            </motion.button>
          </div>
          <div className="hidden sm:block">
            <ToggleDark />
          </div>
        </div>
      </div>
      <Sidebar isOpen={isDropdownClicked} />
    </nav>
  );
};

export default Navbar;
