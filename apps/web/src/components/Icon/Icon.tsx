import * as React from 'react';
import './Icon.scss';

interface Props {
  children: React.ReactElement;
  style?: React.CSSProperties;
}

const Icon = ({ children, style }: Props) => {
  return <div style={style}>{children}</div>;
};

export default Icon;
