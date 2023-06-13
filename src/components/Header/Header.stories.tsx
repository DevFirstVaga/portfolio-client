import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Meta, StoryObj } from "@storybook/react";
import Header from ".";

export default {
  title: "Components/Header",
  component: Header,
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Desktop: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    nickname: "MyNick",
    sections: [
      "1 Section",
      "2 Section",
      "3 Section",
    ]
  }
};

export const Mobile: Story = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12mini',
    }
  },
  args: {
    nickname: "MyNick",
    sections: [
      "1 Section",
      "2 Section",
      "3 Section",
    ]
  }
};

