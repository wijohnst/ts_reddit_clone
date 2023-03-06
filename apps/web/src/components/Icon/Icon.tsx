import * as React from 'react';
import './Icon.scss';

interface Props {
  children: React.ReactElement;
}

/**
 * Renders an icon component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactElement} props.children - The child element to render within the icon.
 * @returns {JSX.Element} - A JSX element representing the icon component.
 */
const Icon = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Icon;
