import * as React from 'react';
import ClickableLogo from './ClickableLogo';

export default {
  title: 'Components/ClickableLogo',
  component: ClickableLogo,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

interface ClickableLogoArgs {
  onClick: () => void;
}

const Template = (args: ClickableLogoArgs) => <ClickableLogo {...args} />;

export const Default = Template.bind({});

// Default.args = {
//   onClick: () => {
//     console.log('This overrides our original onClick');
//   },
// };
