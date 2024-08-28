export const gaps = [
  "2",
  "4",
  "3xs",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
] as const;

export type StackGap = (typeof gaps)[number];
