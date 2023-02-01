import Container from "@/components/container";
import Profile from "./profile";

export default function Page() {
  return (
    <>
      <Profile />
      <p className="text-[0] invisible lg:visible lg:text-3xl lg:mt-4">
        A bachelor of computer science at Imam Mohammad Ibn Saud Islamic
        University with first-class honor. A Saudi. And like developing video
        games and web apps as a hobby.
      </p>
    </>
  );
}
