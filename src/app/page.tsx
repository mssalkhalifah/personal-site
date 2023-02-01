import Container from "@/components/container";
import Profile from "./profile";

export default function Page() {
  const whatIDo =
    "I am a fresh computer science graduate at Imam Mohammad Ibn Saud Islamic University with first-class honor. I am Saudi. And I currently live in Riyadh. Also, I can speak three languages. And those are English, Arabic, and Thai. And I like developing tiny demos of games as a hobby. Furthermore, I have a knack for android applications and currently looking for mobile or web development jobs to further increase my knowledge and experiences.";
  const whatILove =
    "I love playing video games and building a small demo of them. And I also love rockets and Sci-fi! My favorite space video game is  Kerbal Space Program.   And my favorite pass time is reading manga.";

  return (
    <>
      <Profile />
      <p className="mt-4 text-3xl ">
        A bachelor of computer science graduate at Imam Mohammad Ibn Saud
        Islamic University with first-class honor. A Saudi. And like developing
        video games and web apps as a hobby.
      </p>
    </>
    // <Container className="mt-5" title="What I do" content={whatIDo} />
    // <Container className="mt-5" title="What I love" content={whatILove} />
  );
}
