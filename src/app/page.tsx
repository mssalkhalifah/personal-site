import Divider1 from "@/components/dividers/divider-1/divider-1";
import Divider2 from "@/components/dividers/divider-2/divider-2";
import Profile from "@/components/profile/profile";
import Scene from "@/components/scene";
import Image from "next/image";
import { Suspense } from "react";
import ProjectSection from "./project-section";
import profileImage from "../../public/profile.jpg";
import outsystemsIcon from "../../public/outsystems-icon.png";
import Item from "@/components/list/item";
import Container from "@/components/layouts/container/Container";
import Name from "@/components/profile/name";

export default function Page() {
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <Scene />
      <div className="flex h-full w-full place-items-center justify-center bg-third">
        <div className="flex max-w-4xl flex-col justify-center space-y-4">
          <div className="flex place-items-center space-x-2">
            <Image
              className="rounded-lg"
              src={profileImage}
              alt={"profileImage"}
              width={150}
              height={150}
            />
            <div className="space-y-2 text-center">
              <h1 className=" text-3xl font-black">
                Hi! My name is Mohammad Alkhalifah
              </h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                quod dolorem quidem voluptas rerum magnam sed corrupti quisquam
                at ipsam animi eum. Fugiat possimus voluptatibus aut laudantium
                minima voluptates ratione?
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-secondary p-4 shadow-md">
            <h1 className="mb-5 text-center text-3xl font-black">
              Checkout My Experiences!
            </h1>
            <div className="flex w-full flex-col space-y-6">
              <Item
                key={1}
                title="OutSystems"
                imageURL={outsystemsIcon}
                barPercentage={60}
              />
              <Item
                key={2}
                title="NextJS"
                imageURL={outsystemsIcon}
                barPercentage={70}
              />
              <Item
                key={3}
                title="NextJS"
                imageURL={outsystemsIcon}
                barPercentage={70}
              />
              <Item
                key={4}
                title="NextJS"
                imageURL={outsystemsIcon}
                barPercentage={70}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    //<Container id="TopSection">
    //  <div className="flex h-full w-full place-items-center">
    //    <div className="ml-20 w-1/2">
    //      <Profile />
    //    </div>
    //    <div className="h-full w-1/2">
    //      <Scene />
    //    </div>
    //  </div>
    //  <Divider1 />
    //</Container>

    //<Container id="ProjectSection" altBackgroundColour>
    //  <div className="flex h-full w-full place-items-center justify-center">
    //    <Suspense fallback={<p className="text-white">Loading...</p>}>
    //      <ProjectSection />
    //    </Suspense>
    //  </div>
    //  <Divider2 />
    //</Container>

    //<Container id="AboutSection">
    //  <div className="mx-20 flex h-full w-full place-items-center justify-center">
    //    <div className="flex w-1/2 flex-col justify-center">
    //      <div className="relative flex max-w-screen-md place-items-center overflow-visible rounded-lg bg-zinc-900 p-10 shadow-md shadow-zinc-700">
    //        <Image
    //          className="absolute -left-8 rounded-lg"
    //          src={profileImage}
    //          height={150}
    //          width={150}
    //          alt={""}
    //        />
    //        <p className="ml-24 text-2xl">
    //          A bachelor of computer science at Imam Mohammad Ibn Saud Islamic
    //          University with first-class honor. A Saudi. And like programming
    //          video games and web apps as a hobby.
    //        </p>
    //      </div>
    //      <ul className="mt-4 max-w-screen-md list-inside list-disc rounded-lg bg-zinc-900 p-10 text-2xl shadow-md shadow-zinc-700">
    //        <li>
    //          Finished my preparatory year at Imam Mohammad Ibn Saud Islamic
    //          University.
    //        </li>
    //        <li>Started my computer science bachelor{"'"}s degree course.</li>
    //        <li>
    //          Graduated from Imam Mohammad Ibn Saud Islamic University with
    //          Bachelor{"'"}s degree in computer science with first-class
    //          honor.
    //        </li>
    //      </ul>
    //    </div>
    //    <div className="flex h-full w-1/2 flex-col justify-center">
    //      <Scene />
    //    </div>
    //  </div>
    //</Container>
  );
}
