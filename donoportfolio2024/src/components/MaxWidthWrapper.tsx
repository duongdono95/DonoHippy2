import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MaxWidthWrapper = ({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: ReactNode;
}) => {
  return (
    <div
      id={id}
      className={cn(
        "mx-auto w-full max-w-screen-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
