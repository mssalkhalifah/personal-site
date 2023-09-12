import circuitBackground from "../../public/circuit-background.png";
import Image from "next/image";
import Scene from "@/components/scene";
import MyExperiences from "./my-experiences";

export default function Page() {
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <Scene />

      <div className="relative flex h-full w-full flex-col place-items-center justify-center bg-third">
        <div className="mx-2 flex max-w-5xl flex-col justify-center space-y-4">
          <MyExperiences />
        </div>
      </div>

      <div className="relative flex h-full w-full place-items-center justify-center bg-secondary">
        <div className="mx-2 flex max-w-4xl flex-col justify-center space-y-4"></div>
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
