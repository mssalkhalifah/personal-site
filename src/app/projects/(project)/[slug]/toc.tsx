"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDotCircle, FaArrowCircleDown, FaAlignJustify } from "react-icons/fa";

interface Header {
  id: string;
  title: string;
  depth: number;
}

const TableOfContent: React.FC = () => {
  const [toc, setToc] = useState<Header[]>([]);
  const [isLoaded, setLoaded] = useState(false);
  const [expanded, SetExpanded] = useState(true);

  const scrollInto = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      let offset = 110; // Adjust this value based on your preference
      const y = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ behavior: "smooth", top: y });
    }
  };

  useEffect(() => {
    let headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const headings: Header[] = [];

    headers.forEach((header, index) => {
      header.id = `header-${index + 1}`;
      const depth = Number(header.nodeName.substring(1)) - 1;
      console.log(depth, header);
      headings.push({
        id: header.id,
        title: header.textContent || "",
        depth: depth,
      });
    });

    setToc(headings);
    setLoaded(true);
    SetExpanded(window.innerWidth > 1024)
  }, []);

  return (
    <>
      {isLoaded && (
        <div className="absolute top-0 z-50 w-full bg-zinc-50 dark:bg-zinc-800 shadow-lg rounded-lg lg:sticky lg:top-20">
          <div
            onClick={() => SetExpanded(!expanded)}
            className="flex justify-between place-items-center w-full px-3 py-2 rounded-lg z-10 cursor-pointer bg-zinc-800 dark:bg-zinc-900 text-zinc-50"
          >
            <div className="flex font-bold place-items-center">
              <FaAlignJustify className="mr-2" />
              <div>
                <span className="text-2xl">T</span>
                <span className="text-lg">able of Content</span>
              </div>
            </div>
            <FaArrowCircleDown
              className={`scale-125 transition-transform ${
                !expanded && "rotate-180"
              }`}
            />
          </div>
          <AnimatePresence>
            <motion.div
              key={String(expanded)}
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
              {expanded && (
                <div className="p-2">
                  {toc.map((header) => (
                    <div
                      key={header.title}
                      onClick={() => scrollInto(header.id)}
                      className="my-2 transition-colors rounded-md hover:bg-zinc-500 hover:text-zinc-50 cursor-pointer"
                    >
                      <div className="flex place-items-center">
                        <FaDotCircle className="min-w-[32px]" />{" "}
                        <span className="mx-1">{header.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default TableOfContent;
