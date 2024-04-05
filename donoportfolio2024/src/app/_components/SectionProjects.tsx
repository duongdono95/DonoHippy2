import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { db } from "@/libs/db";
import React from "react";

const SectionProjects = async () => {
  const projects = await db.project.findMany();
  console.log(projects);
  return (
    <MaxWidthWrapper id="projects" className="py-20">
      <SectionTitle title="Projects" position="right" />
      <div className={"py-20 flex flex-col gap-10"}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default SectionProjects;
