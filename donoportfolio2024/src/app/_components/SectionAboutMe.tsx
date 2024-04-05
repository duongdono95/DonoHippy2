import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const SectionAboutMe = () => {
  return (
    <MaxWidthWrapper id={"aboutMe"} className="py-20 w-full ">
      <SectionTitle title="About Me" />
      <div className="flex items-center max-lg:flex-col max-lg:items-center py-10 gap-10">
        <div className="max-w-[50%] w-full h-[500px] bg-red-500"></div>
        <div className="max-w-[50%] w-full">
          <p className="text-lg">
            I am a full-stack developer with a background in software
            engineering and a strong interest in machine learning and design.
            With over two years of experience in UI/UX design before
            transitioning to Web development, I blend artistic insight with
            technical prowess to build web applications that are not just
            functional but visually appealing with awesome user experience.
          </p>
          <p className="text-lg">
            Driven by the belief that growth comes from facing challenges, I
            embrace every opportunity to learn and improve. Inspired by the idea
            that we thrive by navigating through challenges rather than avoiding
            them, I approach every project with creativity, resilience, and a
            growth mindset.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default SectionAboutMe;
