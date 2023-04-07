import React from 'react';
import '../src/Styles/Global.scss';

const GlobalDecorator = (storyFn) => (
  <div className="global-wrapper">{storyFn()}</div>
);
