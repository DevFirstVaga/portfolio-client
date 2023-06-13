import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "../src/theme/global";
import { theme } from "../src/theme/theme";

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],

};

export default preview;



