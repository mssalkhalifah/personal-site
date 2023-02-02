import Image from "next/image";
import profilePic from "../../public/profile.jpg";

export default function Profile() {
  return (
    <div className="pointer-events-auto flex flex-col place-items-center md:flex-row">
      <div>
        <Image
          src={profilePic}
          alt={"Picture of me"}
          width={210}
          height={210}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="md:ml-4">
        <div className="flex flex-col text-center md:text-start">
          <h1 className="text-5xl font-black">
            Hi! I&apos;m
            <br /> Mohammad <br /> Alkhalifah
          </h1>
          <p className="text-lg">A Software Developer</p>
          <p className="rounded-lg bg-black p-2 text-white shadow-md md:w-fit">
            Currently working at{" "}
            <a
              className="text-red hover:underline hover:decoration-white hover:decoration-2"
              href="https://www.mis.com.sa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIS
            </a>{" "}
            as System Developer
          </p>
        </div>
      </div>
    </div>
  );
}
