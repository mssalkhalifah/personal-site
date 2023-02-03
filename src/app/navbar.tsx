"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import {
  FaFolder,
  FaFolderOpen,
  FaHome,
  FaBlogger,
  FaSun,
  FaMoon,
} from "react-icons/fa";

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
      className={`w-24 rounded-lg bg-white p-2 shadow-md transition dark:bg-dark-blue ${className}`}
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

  useEffect(() => {
    setToggle(localStorage.theme !== "dark");

    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <button
      className="rounded-md bg-white p-3 shadow-md transition dark:bg-dark-blue"
      onClick={() => {
        if (!toggle) {
          document.documentElement.classList.remove("dark");
          localStorage.theme = "light";
        } else {
          document.documentElement.classList.add("dark");
          localStorage.theme = "dark";
        }

        setToggle(!toggle);
      }}
    >
      {toggle ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default function Navbar() {
  return (
    <div className="pointer-events-auto mt-4 flex w-full place-items-center justify-between">
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
