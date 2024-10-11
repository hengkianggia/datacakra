import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
  flex?: boolean;
  Hfull?: boolean;
  column?: boolean;
  center?: boolean;
  centerColumn?: boolean;
  between?: boolean;
  itemsCenter?: boolean;
  grid?: boolean;
}

const Wrapper = ({
  children,
  className,
  full,
  Hfull,
  flex,
  column,
  center,
  centerColumn,
  between,
  itemsCenter,
  grid,
}: WrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1320px] relative px-10",
        className,
        full && "w-full",
        Hfull && "h-full",
        flex && `flex`,
        column && `flex flex-col`,
        center && `flex justify-center items-center`,
        centerColumn && `flex flex-col justify-center items-center`,
        between && `flex justify-between`,
        itemsCenter && `items-center`,
        grid && `grid`
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
