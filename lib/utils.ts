import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  const className = clsx(inputs);

  // for some reason, tailwind-merge is breaking here

  //   inputs (4) ['text-destructive', 'font-semibold', 'text-fl-5xl', undefined]
  // utils.ts:8 className text-destructive font-semibold text-fl-5xl
  // utils.ts:11 merged font-semibold text-fl-5xl

  // it remove a needed class

  // console.log("className", className);
  // const merged = twMerge(clsx(inputs));

  // console.log("merged", merged);

  return className;
}
