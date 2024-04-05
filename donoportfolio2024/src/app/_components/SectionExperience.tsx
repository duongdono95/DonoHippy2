import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Image from "next/image";

dayjs.extend(customParseFormat);

const SectionExperience = () => {
  const workingHistory = [
    {
      startedDate: "2021-11-01",
      finishedDate: null,
      company: "Aotearoa Energy LTD",
      location: "Auckland - NZ",
      position: "Full-stack Developer",
      imgLogo:
        "https://raw.githubusercontent.com/duongdono95/Dono_Assets/master/AotearoaEnergy/AE-Logo.png",
    },
  ];
  const getWorkingDuration = (
    startedDate: string,
    finishedDate: string | null
  ) => {
    const endDate = dayjs(finishedDate ?? new Date());
    const diff = endDate.diff(startedDate, "month");
    console.log(diff);
    const years = Math.floor(diff / 12);
    const months = diff % 12;
    return `${years} year(s) ${months} month(s)`;
  };

  return (
    <MaxWidthWrapper id="experience">
      <SectionTitle title="Experience" />
      <div className="py-10 flex flex-col gap-16 items-center">
        {workingHistory.map((job, index) => (
          <div
            key={index}
            className=" flex max-md:flex-col justify-center items-center gap-10 pb-3 "
          >
            <div className="relative w-60 h-28 max-h-56">
              <Image className="" src={job.imgLogo} fill alt={job.company} />
            </div>
            <div className="h-56 w-2 max-md:w-56 max-md:h-2 opacity-80 bg-gradient-radial from-[var(--primary07)] via-[var(--primary01)] to-[rgba(255, 255, 255, 0)]"></div>
            <div className="h-56  flex flex-col gap-2 text-base">
              <p className="text-3xl font-black">{job.company}</p>
              <p className="opacity-70">{job.location}</p>
              <div className="flex">
                <p className="w-28 text-xl opacity-70">Position:</p>
                <p className="text-xl">{job.position}</p>
              </div>
              <div className="flex">
                <p className="w-28 text-xl opacity-70">From:</p>
                <p className="text-xl">
                  {dayjs(job.startedDate).format("DD/MM/YYYY")}
                </p>
              </div>
              <div className="flex items-center">
                <p className="w-28 text-xl opacity-70">To:</p>
                <p
                  className="text-base p-2 rounded-lg"
                  style={{
                    backgroundColor: !job.finishedDate ? "green" : "",
                  }}
                >
                  {job.finishedDate
                    ? dayjs(job.finishedDate).format("DD/MM/YYYY")
                    : "On Going"}
                </p>
              </div>
              <div className="flex">
                <p className="w-28 text-xl opacity-70">Duration:</p>
                <p className="text-xl ">
                  {getWorkingDuration(job.startedDate, job.finishedDate)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default SectionExperience;
