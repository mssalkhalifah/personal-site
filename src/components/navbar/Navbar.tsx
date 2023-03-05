"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { FaFolder, FaFolderOpen, FaHome, FaBlogger } from "react-icons/fa";
import Container from "../layouts/container/Container";

export interface INavbar {}

interface NavButton {
  title?: string;
  className?: string;
  iconTypeOpen?: ReactNode;
  iconTypeClose?: ReactNode;
  url?: string;
  onClick?: () => void;
  focus?: boolean;
}

function NavButton({
  title,
  className,
  iconTypeOpen,
  iconTypeClose,
  url,
  onClick,
  focus = false,
}: NavButton) {
  const [mouseOver, setMouseOver] = useState(false);
  const focusedStyle = focus ? "bg-gray-500 shadow-lg" : "";

  return (
    <button
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={onClick && (() => onClick())}
      className={`w-28 rounded-md ${focusedStyle} p-2 text-white transition duration-300 hover:scale-110 ${className}`}
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
  const scrollPosition = useScrollPosition();
  const pathname = usePathname();
  const [focus, setFocus] = useState([true, false, false]);
  const [sectionElements, setSectionElements] = useState<
    (HTMLElement | null)[]
  >([]);
  const topStyle = "bg-zinc-500/50 backdrop-blur-md";
  const scrollTo = (i: number) => {
    window.scrollTo({
      top: sectionElements[i]?.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (pathname?.length === 1) {
      setSectionElements([
        document.getElementById("TopSection"),
        document.getElementById("ProjectSection"),
        document.getElementById("AboutSection"),
      ]);
    }
  }, [pathname]);

  useEffect(() => {
    const newFocusList = [false, false, false];
    if (
      sectionElements[0] &&
      sectionElements[1] &&
      sectionElements[2] &&
      pathname?.length === 1
    ) {
      if (
        scrollPosition >= sectionElements[0]?.offsetTop &&
        scrollPosition < sectionElements[1]?.offsetTop
      ) {
        newFocusList.splice(0, 1, true);
      } else if (
        scrollPosition >= sectionElements[1]?.offsetTop &&
        scrollPosition < sectionElements[2]?.offsetTop
      ) {
        newFocusList.splice(1, 1, true);
      } else if (scrollPosition >= sectionElements[2]?.offsetTop) {
        newFocusList.splice(2, 1, true);
      }
      setFocus(newFocusList);
    } else {
      setFocus([false, false, false]);
    }
  }, [pathname, scrollPosition, sectionElements]);

  return (
    <nav className={`fixed left-0 top-0 z-[5] flex w-full`}>
      <Container>
        <div
          className={`flex w-full place-items-center justify-between rounded-lg p-2 transition-all duration-300 ${
            scrollPosition > 0 &&
            "mx-2 translate-y-2 bg-zinc-500/50 backdrop-blur-md"
          }`}
        >
          <div>
            <NavButton
              title="Home"
              iconTypeOpen={<FaHome />}
              iconTypeClose={<FaHome />}
              url="/"
              focus={focus[0]}
              onClick={() => scrollTo(0)}
            />
            <NavButton
              title="Projects"
              className="mx-4"
              iconTypeOpen={<FaFolderOpen />}
              iconTypeClose={<FaFolder />}
              url="/"
              focus={focus[1]}
              onClick={() => scrollTo(1)}
            />
            <NavButton
              title="About me"
              iconTypeOpen={<FaBlogger />}
              iconTypeClose={<FaBlogger />}
              url="/"
              focus={focus[2]}
              onClick={() => scrollTo(2)}
            />
          </div>
          <div className="mr-2 text-lg">
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
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
