import Image from "next/image";
import BackgroundImage from "../../../public/projects_placeholder.jpg";

export default function page() {
  return (
    <div className="flex h-full place-items-center justify-center">
      <Image
        className="object-contain"
        src={BackgroundImage}
        alt={"Project background image"}
      />
    </div>
  );
}
