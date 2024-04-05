import AnimatedCircleText from "@/components/AnimatedCircleText";
import GradientBall from "@/components/GradientBall";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, IconButton, Link } from "@mui/material";
import Logo from "@/components/Logo";
import { FileSpreadsheet, Github, Linkedin } from "lucide-react";
import React from "react";

const SectionHome = () => {
  return (
    <div id="home" className="relative xl:max-h-screen p-10">
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto xl:py-5">
        <Logo />
        <div className="flex gap-6 ">
          <Link href={"https://github.com/duongdono95"}>
            <IconButton
              sx={{
                bgcolor: "var(--white02)",
                ":hover": {
                  bgcolor: "var(--white05)",
                  boxShadow: "2px 2px 10px var(--white05)",
                },
              }}
            >
              <Github size={20} />
            </IconButton>
          </Link>
          <Link href={"https://www.linkedin.com/in/duong-dono-a644b8189/"}>
            <IconButton
              sx={{
                bgcolor: "var(--white02)",
                ":hover": {
                  bgcolor: "var(--white05)",
                  boxShadow: "2px 2px 10px var(--white05)",
                },
              }}
            >
              <Linkedin size={20} />
            </IconButton>
          </Link>
          <Link href={""}>
            <IconButton
              sx={{
                bgcolor: "var(--white02)",
                ":hover": {
                  bgcolor: "var(--white05)",
                  boxShadow: "2px 2px 10px var(--white05)",
                },
              }}
            >
              <FileSpreadsheet size={20} />
            </IconButton>
          </Link>
        </div>
      </div>
      <GradientBall top={-8} left={-13} color="var(--primary07)" />
      <GradientBall right={8} top={30} scale={1.3} color="var(--secondary)" />
      <MaxWidthWrapper className="py-24  flex max-xl:flex-wrap justify-center items-center gap-14">
        <div
          style={{ backgroundColor: "var(--white01)" }}
          className="w-1/2  max-h-[500px] min-w-96 min-h-96 "
        >
          <AnimatedCircleText />
        </div>
        <div className="xl:w-1/2 min-w-96 flex flex-col gap-5">
          <p className="text-xl" style={{ color: "var(--secondary)" }}>
            Software Engineer - Artificial Intelligence (AI)
          </p>
          <h1 className="text-4xl font-bold opacity-70">Hi, I am Duong Dono</h1>
          <h1 className="text-4xl leading-tight">
            a Full-Stack Developer who is very passionate about Artificial
            Intelligence
          </h1>
          <p className="text-xl opacity-70 leading-10">
            My mission is to design and develop Webs/ Apps that are both
            functional and visual appealing, providing an excellent user
            experience.
          </p>
          <Button
            className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-4 text-sm "
            variant="contained"
            size="large"
          >
            Happy to contact me
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default SectionHome;
