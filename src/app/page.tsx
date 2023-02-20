import Divider1 from "@/components/dividers/divider-1/divider-1";
import Divider2 from "@/components/dividers/divider-2/divider-2";
import Profile from "@/components/profile/profile";
import Scene from "@/components/scene";
import { Suspense } from "react";
import ProjectSection from "./project-section";

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
        className="relative flex h-full w-full place-items-center"
      ></section>
    </>
  );
}
