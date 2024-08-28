import React from "react";

import {
  Badge as ShadcnBadge,
  BadgeProps as ShadcnBadgeProps,
} from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ExtendedBadgeProps extends ShadcnBadgeProps {
  size?: "sm" | "md";
}

const Badge = ({ className, size = "sm", ...props }: ExtendedBadgeProps) => {
  const sizeClasses = {
    sm: "text-fl-xs px-2 py-0.5",
    md: "text-fl-sm px-4 py-1 ",
  };

  return (
    <ShadcnBadge className={cn(sizeClasses[size], className)} {...props} />
  );
};

export { Badge };
