import { cn } from "@/lib/utils";
import React from "react";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  customStyle?: string;
  flex?: boolean;
  column?: boolean;
  center?: boolean;
  centerColumn?: boolean;
  full?: boolean;
  Hfull?: boolean;
  between?: boolean;
  betweenColumn?: boolean;
  gap?: number;
  pointer?: boolean;
  relative?: boolean;
  absolute?: boolean;
  screen?: boolean;
  minH?: string;
  maxH?: string;
  itemsCenter?: boolean;
  wrap?: boolean;
  grow?: boolean;
  mt?: number;
  mb?: number;
  grid?: boolean;
  as?: React.ElementType;
  children: React.ReactNode;
}

const Div: React.FC<DivProps> = ({
  className = "",
  flex,
  column,
  center,
  centerColumn,
  full,
  Hfull,
  between,
  betweenColumn,
  gap,
  pointer,
  relative,
  absolute,
  screen,
  minH,
  maxH,
  itemsCenter,
  wrap,
  grow,
  mt,
  mb,
  grid,
  as,
  children,
  ...props
}) => {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        full && `w-full`,
        Hfull && `h-full`,
        screen && `h-screen`,
        minH && `min-h-[${minH}]`,
        maxH && `min-h-[${maxH}]`,
        flex && `flex`,
        wrap && `flex-wrap`,
        grow && `grow`,
        column && `flex flex-col`,
        between && `flex justify-between`,
        betweenColumn && `flex flex-col justify-between`,
        center && `flex justify-center items-center`,
        centerColumn && `flex flex-col justify-center items-center`,
        itemsCenter && `items-center`,
        gap && `gap-${gap}`,
        pointer && `cursor-pointer`,
        relative && `relative`,
        absolute && `absolute`,
        mt ?? `mt-${mt}`,
        mb ?? `mt-${mb}`,
        grid && `grid`,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Div;
