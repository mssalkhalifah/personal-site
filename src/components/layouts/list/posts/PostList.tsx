import Image from "next/image";
import PlaceholderImage from "../../../../../public/thumb_placeholder.png";

export interface IPostList {}

const PostList: React.FC<IPostList> = ({}) => {
  return (
    <div className="mr-4 flex flex-col place-items-center">
      <ol>
        <li>
          <Image src={PlaceholderImage} alt={"First"} />
        </li>
        <li className="mt-2">
          <Image src={PlaceholderImage} alt={"First"} />
        </li>
        <li className="mt-2">
          <Image src={PlaceholderImage} alt={"First"} />
        </li>
        <li className="mt-2">
          <Image src={PlaceholderImage} alt={"First"} />
        </li>
      </ol>
    </div>
  );
};

export default PostList;
