import { mockPostCardProps } from "@/components/cards/post/PostCard.mocks";
import PostCard, { IPostCard } from "@/components/cards/post/PostCard";

export interface IPostList {
  postCards?: IPostCard[];
}

const PostList: React.FC<IPostList> = ({ postCards }) => {
  return (
    <div className="mr-4 mb-4 flex flex-col place-items-center space-y-4 overflow-y-auto">
      <PostCard {...mockPostCardProps.base} />
      <PostCard {...mockPostCardProps.base} />
    </div>
  );
};

export default PostList;
