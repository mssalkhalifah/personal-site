import Image, { StaticImageData } from "next/image";
import placeHolder from "../../../public/thumb_placeholder.jpg";

interface IItem {
  imageURL?: StaticImageData;
  title?: string;
  barPercentage: number;
}

const Item: React.FC<IItem> = ({
  imageURL,
  title,
  barPercentage,
}): JSX.Element => {
  return (
    <div className="flex w-full place-items-center space-x-4">
      <Image
        className="rounded-full"
        src={imageURL || placeHolder}
        alt={"profileImage"}
        width={80}
        height={80}
      />
      <div className="w-full space-y-2">
        <h1 className="text-xl">{title}</h1>
        <div
          style={{ width: `${String(barPercentage) + "%"}` }}
          className={`h-5 bg-primary shadow-lg`}
        ></div>
      </div>
    </div>
  );
};

export default Item;
