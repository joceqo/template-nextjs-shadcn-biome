import React from 'react';

import type { Preview } from "@storybook/react";
import { ThemeProvider } from 'next-themes';
import { withThemeByClassName } from '@storybook/addon-themes';

import '../app/globals.css';
import './preview.css';

const withThemeProvider = (Story: any, context: any) => {
  const { theme } = context.globals;
  return (  
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme={theme}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
    withThemeProvider,
  ],
};

export default preview;
