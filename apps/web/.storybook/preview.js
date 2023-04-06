import { configure } from '@storybook/react';
import './GlobalDecorator';

configure(require.context('../src', true, /\.stories\.ts$/), module);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
