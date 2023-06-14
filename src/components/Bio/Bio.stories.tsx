import { Meta, StoryObj } from "@storybook/react";
import Bio, { TEXT } from ".";

export default {
  title: "Components/Bio",
  component: Bio,
} as Meta<typeof Bio>;

type Story = StoryObj<typeof Bio>;

export const Default: Story = {
  args: {
    text: TEXT
  }
};