"use client";

import PostCard, { IPostCard } from "@/components/cards/post/PostCard";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface IPostList {
  postCards?: IPostCard[];
}

const PostList: React.FC<IPostList> = ({ postCards }) => {
  const paths = usePathname();
  const [selected, setSelected] = useState<string[]>(
    Array(postCards?.length).fill("")
  );

  const setBackground = (index: number): void => {
    const newSelectedList = [...selected];

    for (let i = 0; i < newSelectedList.length; i++) {
      newSelectedList[i] = "";
    }

    newSelectedList.splice(index, 1, "bg-zinc-600");
    setSelected(newSelectedList);
  };

  useEffect(() => {
    const currentPaths = paths?.split("/");

    if (currentPaths) {
      selected.forEach((_, i) => {
        if (currentPaths && postCards) {
          const hasPath = postCards[i].url?.endsWith(
            currentPaths[currentPaths?.length - 1]
          );

          if (hasPath) {
            setBackground(i);
          }
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paths]);

  return (
    <div className="mr-4 mb-4 flex flex-col place-items-center space-y-4 overflow-y-auto">
      {postCards?.map((postCard, index: number) => {
        return (
          <div
            key={postCard.url}
            className={`rounded-lg p-4 transition-colors ${selected[index++]}`}
          >
            <PostCard {...postCard} />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
