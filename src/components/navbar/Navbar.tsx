"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export interface INavbar {}

const Navbar: React.FC<INavbar> = ({}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const isCurrentPathHome = pathname
      ?.split("/")
      .findIndex((path) => path !== "");

    if (isCurrentPathHome) {
      if (isCurrentPathHome >= 0) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    }
  }, [pathname]);

  return (
    <nav className="fixed z-20 w-full bg-primary/50 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => router.back()}
              className={`mr-4 ${
                isHome ? "hidden" : "inline-flex"
              } items-center space-x-1 rounded-md border border-transparent bg-blue-600 px-2 py-1 text-sm font-medium text-zinc-50 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              <FaArrowLeft />
              <span>Back</span>
            </button>
            <div className="flex-shrink-0">
              <Link href="/">
                <p className="text-xl font-bold text-secondary">My Website</p>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <p className="rounded-md px-3 py-2 text-sm font-medium text-fourth hover:bg-gray-700 hover:text-white">
                    Home
                  </p>
                </Link>
                <Link href="/projects">
                  <p className="rounded-md px-3 py-2 text-sm font-medium text-fourth hover:bg-gray-700 hover:text-white">
                    Projects
                  </p>
                </Link>
                <Link href="/contact">
                  <p className="rounded-md px-3 py-2 text-sm font-medium text-fourth hover:bg-gray-700 hover:text-white">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-700 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              <GiHamburgerMenu
                className={`${!isOpen ? "block" : "hidden"} h-6 w-6`}
              />
              {/* Heroicon name: x */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, toggle classes based on menu state. */}
      <div className="md:hidden">
        <div
          className={`space-y-1 px-2 pt-2 pb-3 ${
            isOpen ? "block" : "hidden"
          } sm:px-3`}
        >
          <Link href="/">
            <p className="block rounded-md px-3 py-2 text-base font-medium text-fourth hover:bg-third hover:text-primary">
              Home
            </p>
          </Link>
          <Link href="/projects">
            <p className="block rounded-md px-3 py-2 text-base font-medium text-fourth hover:bg-third hover:text-primary">
              Projects
            </p>
          </Link>
          <Link href="">
            <p className="block rounded-md px-3 py-2 text-base font-medium text-fourth hover:bg-third hover:text-primary">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
