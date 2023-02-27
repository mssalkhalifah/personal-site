"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
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
  return (
    <nav className="fixed top-0 z-[5] mt-4 flex w-full justify-center">
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
    </nav>
  );
};

export default Navbar;
