import Image from "next/image";
import BackgroundImage from "../../../public/projects_placeholder.jpg";

export default function page() {
  return (
    <div className="">
      <Image
        src={BackgroundImage}
        alt={"Project background image"}
        width={583.9}
      />
    </div>
  );
}
