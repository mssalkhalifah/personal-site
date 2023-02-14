import Gallary from "@/components/gallary";

interface Project {
  title?: string;
  imgUrl?: string;
  date?: string;
}

async function getProjects() {
  const projects: Project[] = [
    { title: "1Hello World" },
    { title: "2World" },
    { title: "3World Hello" },
    { title: "4World Hello" },
  ];

  return projects;
}
export default async function page() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col">
      <Gallary projects={projects} />
    </div>
  );
}
