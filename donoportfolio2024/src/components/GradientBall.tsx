import { Box } from "@mui/material";
import React from "react";

interface Props {
  scale?: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color?: string;
}

const GradientBall = ({
  scale,
  top,
  bottom,
  left,
  right,
  color,
}: Props) => {
  return (
    <Box
      className="noselect"
      sx={{
        position: "absolute",
        top: top ? `${top}%` : "auto",
        left: left ? `${left}%` : "auto",
        right: right ? `${right}%` : "auto",
        bottom: bottom ? `${bottom}%` : "auto",
        zIndex: 0,
        filter: "blur(200px)",
        borderRadius: "50%",
        width: "30%",
        minWidth: "320px",
        height: "30%",
        minHeight: "320px",
        backgroundColor: color
          ? `${color}`
          : "var(--primary)",
        transform: `scale(${scale ?? 1})`,
      }}
    ></Box>
  );
};

export default GradientBall;
