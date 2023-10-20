import { serialize } from "next-mdx-remote/serialize";
import ProjectController from "@/lib/project/project.controller";
import TableOfContent from "./toc";
import { Roboto } from "next/font/google";
import Stack from "@/components/tags/tag/stack";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { formatIsoDateString } from "@/utils/date";
import MDXContent from "./MDXContent";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

export default async function page({ params }: { params: { slug: string } }) {
  const project = await ProjectController.getProject(params.slug);
  const source = await serialize(project?.attributes.content || "");
  const imageURL =
    process.env.imageURL +
    (project?.attributes.postImage.data?.attributes.url || "");

  return (
    <>
      {project && (
        <div
          style={{ animationFillMode: "forwards" }}
          className="animate-fadeInUp opacity-0"
        >
          <div className="flex flex-col-reverse mx-2 lg:grid lg:grid-cols-8 lg:gap-10">
            <div className="mt-16 col-span-5 lg:mt-0">
              <span className={`text-5xl ${roboto.className}`}>
                {project.attributes.title}
              </span>
              <div className="flex flex-wrap mt-2 place-items-center">
                {project.attributes.stacks.data.map((stack) => (
                  <div key={stack.attributes.uuid} className="m-1">
                    <Stack
                      title={stack.attributes.name}
                      color={stack.attributes.color}
                    />
                  </div>
                ))}
              </div>
              <div className="flex space-x-2 mt-2 place-items-center">
                <span className="text-xl">
                  {"Started at "}
                  {formatIsoDateString(project.attributes.startdate || "")}
                </span>
                <FaArrowRightLong className="min-w-[16px]" />
                <span className="text-xl">
                  {project?.attributes.enddate
                    ? "Ended at " +
                      formatIsoDateString(project.attributes.enddate)
                    : "Present"}
                </span>
              </div>
              <Image
                className="rounded-xl"
                src={imageURL}
                alt={project?.attributes.postImage.data?.attributes.name || ""}
                height={300}
                width={1000}
              />
              {project && <MDXContent source={source} />}
            </div>
            <div className="sticky top-16 col-span-3">
              <TableOfContent />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projects = await ProjectController.getAllProjects();

  if (projects.data) {
    return projects.data?.map((project) => ({
      slug: project.attributes.slug,
    }));
  }

  return [];
}
