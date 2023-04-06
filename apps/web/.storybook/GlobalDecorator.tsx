import React from 'react';
import { addDecorator } from '@storybook/react';
import '../src/Styles/Global.scss';

const GlobalDecorator = (storyFn) => (
  <div className="global-wrapper">{storyFn()}</div>
);

addDecorator(GlobalDecorator);
