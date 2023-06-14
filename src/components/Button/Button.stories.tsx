import { BsGithub, BsArrowRightCircleFill, BsQuestionLg } from "react-icons/bs";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    children: "GitHub",
    variant: "solid",
    size: "medium",
    color: "#000000",
    leftIcon: <BsGithub />,
  },
};

export const Ghost: Story = {
  args: {
    children: "Next",
    variant: "ghost",
    size: "medium",
    color: "#079425",
    rightIcon: <BsArrowRightCircleFill />
  }
};

export const Text: Story = {
  args: {
    children: "Click Me",
    variant: "text",
    size: "small",
    color: "#0000FF",
    rightIcon: <BsQuestionLg />
  }
};

export const WithoutIcon: Story = {
  args: {
    children: "See More",
    variant: "solid",
    size: "large",
    color: "#ff009d",
  }
};