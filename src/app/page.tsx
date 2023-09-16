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
  );
}
