"use client";

import PostCard, { IPostCard } from "@/components/cards/post/PostCard";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface IPostList {
  postCards?: IPostCard[];
}

const PostList: React.FC<IPostList> = ({ postCards }) => {
  const paths = usePathname();
  const [selected, setSelected] = useState<boolean[]>(
    Array(postCards?.length).fill(false)
  );

  const setBackground = (index: number): void => {
    const newSelectedList = [...selected];

    for (let i = 0; i < newSelectedList.length; i++) {
      newSelectedList[i] = false;
    }

    newSelectedList.splice(index, 1, true);
    setSelected(newSelectedList);
  };

  useEffect(() => {
    const currentPaths = paths?.split("/");

    if (currentPaths) {
      if (currentPaths.length <= 2) {
        setSelected(Array(postCards?.length).fill(""));
      } else {
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
    }

    window.scrollTo(0, 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paths]);

  return (
    <div className="mb-4 flex w-full flex-col justify-center space-y-1 overflow-y-auto">
      {postCards?.map((postCard, index: number) => {
        return (
          <div key={postCard.url} className="rounded-lg p-4 transition-colors">
            <PostCard {...postCard} isSelected={selected[index++]} />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
