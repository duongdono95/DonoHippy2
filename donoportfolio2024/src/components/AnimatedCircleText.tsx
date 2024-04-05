"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { Box } from "@mui/material";
const AnimatedCircleText = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <Box className="relative text-circle-rotating  w-[150px] h-[150px] uppercase text-white rotate-[-103deg]  transform font-bold -z-1 font-sans">
      <svg viewBox="0 0 200 200">
        <path
          id="textPath"
          d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
          transform="translate(100,100)"
          fill="none"
          strokeWidth="0"
        ></path>
        <g fontSize="14.1px">
          <text textAnchor="start">
            <textPath
              className="text-circle-coloring"
              xlinkHref="#textPath"
              startOffset="0%"
            >
              {`• - • Software Engineer • - • Web Developer •
              - • Machine Learning `}
            </textPath>
          </text>
        </g>
      </svg>
      <div className="absolute bg-gradient-radial from-[var(--secondary04)] to-[var(--primary01)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] rounded-[50%] flex items-center justify-center">
        <Logo nobg scale={1.2} color="white" />
      </div>
    </Box>
  );
};

export default AnimatedCircleText;
