import Image from "next/image";
import profilePic from "../../public/profile.jpg";

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row place-items-center">
      <div>
        <Image
          src={profilePic}
          alt={"Picture of me"}
          width={200}
          height={200}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="md:ml-4">
        <div className="flex flex-col text-center md:text-start">
          <h1 className="font-extrabold text-3xl">
            Mohammad Sulaiman Saleh Alkhalifah
          </h1>
          <p className="text-lg">Bachelor degree of computer science</p>
          <p className="bg-dark-blue p-2 mt-2 text-white rounded-lg shadow-md md:w-fit">
            Currently working at{" "}
            <a
              className="text-red hover:underline hover:decoration-2 hover:decoration-white"
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
