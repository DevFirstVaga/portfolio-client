import { Meta, StoryObj } from "@storybook/react";
import Photo, { IMG } from ".";

export default {
  title: "Components/Photo",
  component: Photo,
} as Meta<typeof Photo>;

type Story = StoryObj<typeof Photo>;

export const Default: Story = {
  args: {
    imgLink: IMG
  }
};