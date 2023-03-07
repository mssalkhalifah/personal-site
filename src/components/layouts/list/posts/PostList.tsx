import { mockPostCardProps } from "@/components/cards/post/PostCard.mocks";
import PostCard, { IPostCard } from "@/components/cards/post/PostCard";

export interface IPostList {
  postCards?: IPostCard[];
}

const PostList: React.FC<IPostList> = ({ postCards }) => {
  return (
    <div className="mr-4 mb-4 flex flex-col place-items-center overflow-y-auto">
      <ol>
        <li>
          <PostCard {...mockPostCardProps.base} />
        </li>
        <li className="mt-4">
          <PostCard {...mockPostCardProps.base} />
        </li>
      </ol>
    </div>
  );
};

export default PostList;
