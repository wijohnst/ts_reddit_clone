import * as React from 'react';
import ClickableLogo, { Props } from './ClickableLogo';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/ClickableLogo',
  component: ClickableLogo,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof ClickableLogo>;

const Template: ComponentStory<typeof ClickableLogo> = (args: Props) => (
  <ClickableLogo {...args} />
);

export const Default = Template.bind({});
