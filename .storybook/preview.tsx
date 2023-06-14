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
        <div onClick={(event) => event.preventDefault()}>
          {Story()}
        </div>
      </ThemeProvider >
    ),
  ],

};

export default preview;



