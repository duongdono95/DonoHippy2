import { Project } from "@prisma/client";
import React from "react";
import ImageSlider from "./ImageSlider";
import Link from "next/link";
import { Button } from "@mui/material";
import { Github, Globe } from "lucide-react";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className={
        "max-lg:flex-col max-lg:justify-center flex items-center gap-16 p-8 rounded-3xl"
      }
      style={{ backgroundColor: "var(--white01)" }}
    >
      <ImageSlider images={project.imageUrls} />
      <div className={"flex flex-col gap-5 max-w-[600px] max-lg:px-5"}>
        <div className={"flex items-center gap-3"}>
          <p className={"text-4xl"}>{project.title} -</p>
          {project.status === "available" ? (
            <p className={"py-2 px-4 bg-green-500 rounded-xl"}>
              {project.status}
            </p>
          ) : (
            <p className={"py-2 px-4 bg-red-500 rounded-xl"}>
              {project.status}
            </p>
          )}
        </div>
        <p className={"opacity-70 italic text-[12px]"}>{project.duration}</p>
        <div className={"flex items-center gap-3"}>
          <p className={"opacity-70 italic"}>Designed and Developed by: </p>
          <p className={"uppercase"}>{project.author}</p>
        </div>
        <p className={"text-2xl"}>{project.description}</p>

        <div className={"flex gap-5 flex-wrap"}>
          {project.techStack.map((tech, i) => (
            <p
              key={i}
              className={
                "px-4 py-2 border-2 border-[var(--white02)] hover:scale-110 cursor-pointer rounded-xl"
              }
            >
              {tech}
            </p>
          ))}
        </div>

        <Link href={project.url}>
          <Button
            className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] py-2 text-sm "
            variant={"contained"}
            fullWidth
          >
            <Globe size={20} className={"mr-3"} /> {project.title} Website
          </Button>
        </Link>
        <div>
          {project.githubUrls.map((url, i) => (
            <Link href={url} key={i}>
              <Button className={"my-3"} variant={"outlined"} fullWidth>
                <Github size={20} /> Link {i + 1}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
