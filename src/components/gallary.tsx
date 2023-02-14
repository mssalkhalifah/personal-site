"use client";

import { useState } from "react";
import Card from "./Card";

interface Project {
  title?: string;
  imgUrl?: string;
  date?: string;
}

interface GallaryProps {
  projects: Project[];
}

export default function Gallary({ projects }: GallaryProps) {
  const [page, setPage] = useState(0);
  const content: React.ReactNode[] = [];

  for (let i = 0; i < projects.length; i++) {
    content.push(<Card title={projects[i].title} />);
  }

  const setNextPage = () => {
    if (page === content.length - 1) {
      setPage(0);
      return;
    }

    setPage(page + 1);
  };

  const setPrevPage = () => {
    if (page <= 0) {
      setPage(content.length - 1);
      return;
    }

    setPage(page - 1);
  };

  return (
    <div className="flex flex-col">
      {content[page]}
      <div className="flex w-full place-items-center justify-evenly">
        <button
          className="border-2 border-white bg-white p-1 text-2xl text-black hover:bg-black hover:text-white"
          onClick={() => setPrevPage()}
        >
          Prev Page
        </button>
        <button
          className="border-2 border-white bg-white p-1 text-2xl text-black hover:bg-black hover:text-white"
          onClick={() => setNextPage()}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
