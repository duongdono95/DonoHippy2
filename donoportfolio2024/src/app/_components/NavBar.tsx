"use client";
import {
  AppBar,
  Box,
  Button,
  Divider,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";

type ComponentId =
  | "home"
  | "aboutMe"
  | "projects"
  | "techStack"
  | "experience";

const NavBar = () => {
  const [shouldBeFixed, setShouldBeFixed] = useState(false);
  const navBarRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] =
    useState<ComponentId>("home");

  useEffect(() => {
    const handleScroll = () => {
      if (navBarRef.current) {
        const isAbove =
          window.pageYOffset >= navBarRef.current.offsetTop;
        setShouldBeFixed(isAbove);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "home",
      "aboutMe",
      "projects",
      "techStack",
      "experience",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(
              entry.target.id as ComponentId
            );
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () =>
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
  }, []);

  const scrollToSection =
    (sectionId: ComponentId) =>
    (event: React.MouseEvent) => {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      setActiveSection(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

  return (
    <Box
      ref={navBarRef}
      id="navBar"
      sx={{
        boxShadow: "none",
        padding: "20px",
        position: shouldBeFixed ? "sticky" : undefined,
        top: shouldBeFixed ? 0 : undefined,
      }}
    >
      <div
        className="mx-auto w-1/2 min-w-96 px-5 py-3 flex justify-evenly sm:gap-5 z-20 rounded-[50px]"
        style={{
          border: "1px solid var(--primary02)",
          backdropFilter: "blur(10px)",
        }}
      >
        {[
          "home",
          "aboutMe",
          "techStack",
          "experience",
          "projects",
        ].map((sectionId) => (
          <React.Fragment key={sectionId}>
            <p
              onClick={scrollToSection(
                sectionId as ComponentId
              )}
              className={
                activeSection === sectionId
                  ? "cursor-pointer my-4 max-xl:text-[10px] text-transparent bg-clip-text bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] border-b-2 border-white max-sm:text-[10px]"
                  : "max-xl:text-[10px] my-4 cursor-pointer hover:scale-110"
              }
            >
              {sectionId !== "aboutMe" &&
                sectionId.charAt(0).toUpperCase() +
                  sectionId.slice(1)}
              {sectionId === "aboutMe" && "About Me"}
            </p>

            {sectionId !== "projects" && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "var(--primary05)" }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </Box>
  );
};

export default NavBar;
