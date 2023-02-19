import Gallary from "@/components/gallary";

/*
* {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  }
 */
interface Project {
  title?: string;
  imgUrl?: string;
  date?: string;
}

async function getProjects() {
  const delay = (ms: number): Promise<unknown> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const resJson = await res.json();
  const projects: Project[] = [];

  await delay(1);

  for (let i = 0; i < 10; i++) {
    projects.push({
      title: resJson[i].id,
      imgUrl: resJson[i].thumbnailUrl,
    });
  }

  return projects;
}

export default async function ProjectSection() {
  const projects = await getProjects();

  return <Gallary projects={projects} />;
}
