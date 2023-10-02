"use client";

import HorizontalPostCard from "@/components/cards/horizontal/HorizontalPostCard";
import { IPostCard } from "@/components/cards/post/PostCard";
import PostList from "@/components/layouts/list/posts/PostList";
import { useState } from "react";

export interface ISidebar {
  items: IPostCard[];
}

const Sidebar: React.FC<ISidebar> = ({ items }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed inset-y-0 left-0 z-10 mt-10 h-full w-full -translate-x-0 backdrop-blur">
      <div className="mx-auto h-full max-w-2xl space-y-2">
        {items.map((item, index) => {
          return (
            <HorizontalPostCard
              key={index}
              title={item.title!}
              date={item.date!}
              tags={[]}
              description={item.description!}
              url={item.url!}
              imageUrl={item.imageUrl!}
              imageAlt={item.imageAlt!}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
