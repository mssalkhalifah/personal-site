import Image from "next/image";
import profilePic from "../../../public/profile.jpg";
import Name from "./name";

export default function Profile() {
  return (
    <div className="pointer-events-auto flex flex-col place-items-center text-white md:flex-row">
      <div>
        <Image
          src={profilePic}
          alt={"Picture of me"}
          width={210}
          height={210}
          className="rounded-lg shadow-md"
        />
      </div>
      <Name />
    </div>
  );
}
