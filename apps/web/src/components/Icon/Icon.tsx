import * as React from 'react';
import './Icon.scss';

export enum iconColor {
  Default = 'black',
  Orange = '#EB5428',
  Grey = '#888A8C',
}

export interface Props {
  children: React.ReactElement;
  colorProp?: iconColor;
  /** What should happen when the icon is clicked? */
  onClick?: () => void;
}

/**
 * Renders an icon component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactElement} props.children - The child element to render within the icon.
 * @returns {JSX.Element} - A JSX element representing the icon component.
 */
const Icon = ({ children, colorProp = iconColor.Default, onClick }: Props) => {
  return (
    <div style={{ color: colorProp }} onClick={onClick}>
      {children}
    </div>
  );
};

export default Icon;
