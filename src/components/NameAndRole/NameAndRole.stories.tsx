import { Meta, StoryObj } from "@storybook/react";
import NameAndRole from ".";

export default {
  title: "Components/NameAndRole",
  component: NameAndRole,
} as Meta<typeof NameAndRole>;

type Story = StoryObj<typeof NameAndRole>;

export const Default: Story = {
  args: {
    name: "Andrew Domingues",
    role: "Front-end Developer & UX/UI Designer."
  }
}; 