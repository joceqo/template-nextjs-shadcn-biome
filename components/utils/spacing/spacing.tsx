import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const sizes = [
  "size-fl-3xs",
  "size-fl-2xs",
  "size-fl-xs",
  "size-fl-sm",
  "size-fl-md",
  "size-fl-lg",
  "size-fl-xl",
  "size-fl-2xl",
  "size-fl-3xl",
] as const;

const sizesColorsMap = {
  "size-fl-3xs": "bg-indigo-200",
  "size-fl-2xs": "bg-blue-200",
  "size-fl-xs": "bg-cyan-200",
  "size-fl-sm": "bg-teal-200",
  "size-fl-md": "bg-green-200",
  "size-fl-lg": "bg-yellow-200",
  "size-fl-xl": "bg-orange-200",
  "size-fl-2xl": "bg-red-200",
  "size-fl-3xl": "bg-pink-200",
};

export interface SpacingProps {
  size: (typeof sizes)[number];
  color?: boolean;
  className?: string;
}

const Spacing = ({
  size,
  color = true,
  className,
  children,
}: PropsWithChildren<SpacingProps>) => {
  return (
    <div className={cn(size, color && sizesColorsMap[size], className)}>
      {children}
    </div>
  );
};

export default Spacing;
