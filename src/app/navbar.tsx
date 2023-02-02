"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import {
  FaFolder,
  FaFolderOpen,
  FaHome,
  FaBlogger,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { Url } from "url";

interface NavButton {
  title?: string;
  className?: string;
  iconTypeOpen?: ReactNode;
  iconTypeClose?: ReactNode;
  url?: string;
}

function NavButton({
  title,
  className,
  iconTypeOpen,
  iconTypeClose,
  url,
}: NavButton) {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <button
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      className={`p-2 bg-white rounded-lg w-24 shadow-md ${className}`}
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

function DarkModeToggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <button
      className="p-2 bg-white rounded-md shadow-md"
      onClick={() => setToggle(!toggle)}
    >
      {toggle ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default function Navbar() {
  return (
    <div className="flex w-full mt-4 justify-between place-items-center pointer-events-auto">
      <div>
        <NavButton
          title="Home"
          iconTypeOpen={<FaHome />}
          iconTypeClose={<FaHome />}
          url="/"
        />
        <NavButton
          title="Projects"
          className="mx-4"
          iconTypeOpen={<FaFolderOpen />}
          iconTypeClose={<FaFolder />}
          url="/projects"
        />
        <NavButton
          title="Blogs"
          iconTypeOpen={<FaBlogger />}
          iconTypeClose={<FaBlogger />}
          url="/blogs"
        />
      </div>
      <div>
        <DarkModeToggle />
      </div>
    </div>
  );
}
