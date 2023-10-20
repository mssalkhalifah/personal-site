"use client";

import ToggleDark from "@/components/themes/ToggleDark";
import { stagger, useAnimate } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";
import { MdHome, MdLogoDev } from "react-icons/md";

interface ISidebar {
  isOpen: boolean;
}

const Sidebar: React.FC<ISidebar> = ({ isOpen }): JSX.Element => {
  const [scope, animate] = useAnimate();
  const { theme } = useTheme();
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate("#sidebar", isOpen ? { x: 0 } : { x: "-100%" }, {
      duration: 0.3,
      type: "tween",
    });

    let mainDivElement: HTMLElement | null = null;

    if (document.getElementById("mainDiv")) {
      mainDivElement = document.getElementById("mainDiv")!;
      animate(
        mainDivElement,
        isOpen
          ? {
              x: "65%",
              y: "25%",
              position: "absolute",
              overflowY: "hidden",
              height: "70%",
              borderRadius: "40px",
              background: theme === "light" ? "white" : "black",
              pointerEvents: "none",
              touchAction: "none",
            }
          : {
              x: 0,
              y: 0,
              overflowY: "",
              height: "",
              position: "",
              borderRadius: "0",
              background: "",
              pointerEvents: "",
              touchAction: "",
            },
        { duration: 0.2, type: "tween" },
      );
    }

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (isOpen) {
      themeColorMeta?.setAttribute("content", "#262628");
      document.querySelector("html")?.classList.add("overflow-hidden");
      document.querySelector("body")!.style.background = "#262628";
      mainDivElement?.classList.add("sidebar");
    } else {
      themeColorMeta?.setAttribute(
        "content",
        theme === "light" ? "white" : "black",
      );
      document.querySelector("html")?.classList.remove("overflow-hidden");
      document.querySelector("body")!.style.background = "";
      mainDivElement?.classList.remove("sidebar");
    }

    animate("li", isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }, {
      duration: 0.4,
      delay: isOpen ? staggerMenuItems : 0,
      type: "spring",
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, theme]);

  return (
    <div
      ref={scope}
      style={
        {
          /* position: "absolute", overflowY: "hidden", height: "60%" */
        }
      }
    >
      <div id="sidebar" className="block absolute top-0 sm:hidden">
        <ul className="ml-9 space-y-4 flex flex-col justify-center text-xl text-gray-100 h-screen">
          <li>
            <Link href={"/"} className="flex space-x-1 place-items-center">
              <MdHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href={"/projects"}
              className="flex space-x-1 place-items-center"
            >
              <MdLogoDev /> <span>Projects</span>
            </Link>
          </li>
          <div className="absolute w-fit bottom-40">
            <ToggleDark />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
