"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FaFolder, FaFolderOpen, FaHome, FaBlogger } from "react-icons/fa";

export interface INavbar {}

interface NavButton {
  title?: string;
  className?: string;
  iconTypeOpen?: ReactNode;
  iconTypeClose?: ReactNode;
  url?: string;
  onClick?: () => void;
}

function NavButton({
  title,
  className,
  iconTypeOpen,
  iconTypeClose,
  url,
  onClick,
}: NavButton) {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <button
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={onClick && (() => onClick())}
      className={`w-28 rounded-md bg-gray-700 p-2 text-white shadow-lg transition hover:scale-110 ${className}`}
    >
      <Link href={url ? url : ""}>
        <div className="flex flex-row place-items-center justify-center">
          <span className="mr-1">
            {mouseOver ? iconTypeOpen : iconTypeClose}
          </span>
          {title}
        </div>
      </Link>
    </button>
  );
}

const Navbar: React.FC<INavbar> = ({}) => {
  const [top, setTop] = useState("");
  const topStyle = "bg-zinc-500/50 backdrop-blur-md";

  const onScroll = () => {
    if (window.pageYOffset === 0) {
      console.log("Scroll is at top");
      setTop("");
    } else {
      setTop(topStyle);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    if (window.pageYOffset !== 0) {
      setTop(topStyle);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-[5] flex w-full place-items-center justify-around p-2 transition-colors ${top}`}
    >
      <div>
        <NavButton
          title="Home"
          iconTypeOpen={<FaHome />}
          iconTypeClose={<FaHome />}
          url="/"
          onClick={() => {
            const element = document.getElementById("TopSection");
            window.scrollTo({
              top: element?.offsetTop,
              behavior: "smooth",
            });
          }}
        />
        <NavButton
          title="Projects"
          className="mx-12"
          iconTypeOpen={<FaFolderOpen />}
          iconTypeClose={<FaFolder />}
          onClick={() => {
            const element = document.getElementById("ProjectSection");
            window.scrollTo({
              top: element?.offsetTop,
              behavior: "smooth",
            });
          }}
        />
        <NavButton
          title="About me"
          iconTypeOpen={<FaBlogger />}
          iconTypeClose={<FaBlogger />}
          onClick={() => {
            const element = document.getElementById("AboutSection");
            window.scrollTo({
              top: element?.offsetTop,
              behavior: "smooth",
            });
          }}
        />
      </div>
      <div className="text-lg">
        <Link href={"#"}>
          <span className="hover:underline">Projects</span>
        </Link>
        <Link className="mx-7" href={"#"}>
          <span className="hover:underline">Blogs</span>
        </Link>
        <Link href={"#"}>
          <span className="hover:underline">Resume</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
