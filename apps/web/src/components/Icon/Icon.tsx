import * as React from 'react';
import './Icon.scss';

interface Props {
  children: React.ReactElement;
  style?: React.CSSProperties;
}

/**
 * Renders an icon component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactElement} props.children - The child element to render within the icon.
 * @param {React.CSSProperties} props.style - The inline styles to apply to the icon container element.
 * @returns {JSX.Element} - A JSX element representing the icon component.
 */
const Icon = ({ children, style }: Props) => {
  return <div style={style}>{children}</div>;
};

export default Icon;
