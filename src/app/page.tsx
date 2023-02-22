import Divider1 from "@/components/dividers/divider-1/divider-1";
import Divider2 from "@/components/dividers/divider-2/divider-2";
import Profile from "@/components/profile/profile";
import Scene from "@/components/scene";
import Image from "next/image";
import { Suspense } from "react";
import ProjectSection from "./project-section";
import profileImage from "../../public/profile.jpg";
import HelloWorld from "./hello.mdx";

export default function Page() {
  return (
    <>
      <section
        id="TopSection"
        className="relative flex h-full w-full justify-center justify-items-center"
      >
        <div className="flex h-full w-[1920px]">
          <div className="flex h-full w-full place-items-center">
            <div className="ml-20 w-1/2">
              <Profile />
            </div>
            <div className="h-full w-1/2">
              <Scene />
            </div>
          </div>
        </div>
        <Divider1 />
      </section>
      <section
        id="ProjectSection"
        className="relative flex h-full w-full place-items-center justify-center bg-zinc-900"
      >
        <div className="flex h-full w-[1920px]">
          <div className="flex h-full w-full place-items-center justify-center">
            <Suspense fallback={<p className="text-white">Loading...</p>}>
              {/* @ts-expect-error Server Component */}
              <ProjectSection />
            </Suspense>
          </div>
        </div>
        <Divider2 />
      </section>
      <section
        id="AboutSection"
        className="relative flex h-full w-full place-items-center justify-center"
      >
        <div className="flex h-full w-[1920px]">
          <div className="mx-20 flex h-full w-full place-items-center justify-center">
            <div className="flex w-1/2 flex-col justify-center">
              <div className="relative flex max-w-screen-md place-items-center overflow-visible rounded-lg bg-zinc-900 p-10 shadow-md shadow-zinc-700">
                <Image
                  className="absolute -left-8 rounded-lg"
                  src={profileImage}
                  height={150}
                  width={150}
                  alt={""}
                />
                <p className="ml-24 text-2xl">
                  A bachelor of computer science at Imam Mohammad Ibn Saud
                  Islamic University with first-class honor. A Saudi. And like
                  programming video games and web apps as a hobby.
                </p>
              </div>
              <ul className="mt-4 max-w-screen-md list-inside list-disc rounded-lg bg-zinc-900 p-10 text-2xl shadow-md shadow-zinc-700">
                <li>
                  Finished my preparatory year at Imam Mohammad Ibn Saud Islamic
                  University.
                </li>
                <li>
                  Started my computer science bachelor{"'"}s degree course.
                </li>
                <li>
                  Graduated from Imam Mohammad Ibn Saud Islamic University with
                  Bachelor{"'"}s degree in computer science with first-class
                  honor.
                </li>
              </ul>
            </div>
            <div className="flex h-full w-1/2 flex-col justify-center">
              <Scene />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
