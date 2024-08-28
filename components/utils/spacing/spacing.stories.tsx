import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import Spacing, { sizes, SpacingProps } from "./spacing";

const meta: Meta = {
  title: "Utils/Spacing",
  component: Spacing,
  argTypes: {
    size: {
      options: sizes,
      control: { type: "select" },
    },
  },
  args: {
    size: "size-fl-md",
  },
};

export default meta;

export const Default: StoryFn<typeof Spacing> = (args: SpacingProps) => (
  <Spacing {...args} />
);
