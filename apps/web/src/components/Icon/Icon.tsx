import * as React from 'react';
import './Icon.scss';

interface Props {
  children: React.ReactElement;
  color?: string;
}

const Icon = ({ children, color }: Props) => {
  return <>{children}</>;
};

export default Icon;
