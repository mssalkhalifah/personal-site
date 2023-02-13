import Card from "@/components/Card";

interface Project {
  title?: string;
  imgUrl?: string;
  date?: string;
}

async function getProjects() {
  const projects: Project[] = [
    { title: "Hello World" },
    { title: "World" },
    { title: "World Hello" },
    { title: "World Hello" },
  ];

  return projects;
}

export default async function page() {
  const projects = await getProjects();
  const content: React.ReactNode[] = [];

  for (let i = 0; i < projects.length - 1; i = i + 2) {
    content.push(
      <div key={`${i}project`} className="flex flex-row">
        <Card title={projects[i].title} />
        <Card title={projects[i + 1].title} />
      </div>
    );
  }

  if (projects.length % 2 !== 0) {
    content.push(
      <div key={`${projects.length}project`} className="flex flex-row">
        <Card title={projects[projects.length - 1].title} />
      </div>
    );
  }

  return <div className="flex flex-col">{content}</div>;
}
