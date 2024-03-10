import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const DefaultPageLayout = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(" max-w-7xl w-full mx-auto", className)}
    >
      {children}
    </div>
  );
};

export default DefaultPageLayout;
