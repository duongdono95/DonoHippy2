import React from "react";

interface Props {
  title: string;
  position?: "left" | "right" | "center";
}

const SectionTitle = ({ title, position }: Props) => {
  return (
    <h1
      style={{ textAlign: position ?? "left" }}
      className="text-5xl py-5 text-transparent bg-clip-text bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)]"
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
