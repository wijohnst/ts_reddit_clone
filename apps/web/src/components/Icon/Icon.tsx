import * as React from 'react';
import './Icon.scss';

export enum iconColor {
  Default = 'black',
  Orange = '#ff2800',
}

interface Props {
  /** What should be displayed? */
  children: React.ReactElement;
  /** The color of the Icon */
  colorProp?: iconColor;
  /**  An optional custom test ID for the component.  */
  customTestId?: string;
}

/**
 * Renders an icon component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactElement} props.children - The child element to render within the icon.
 * @returns {JSX.Element} - A JSX element representing the icon component.
 */
const Icon = ({
  children,
  colorProp = iconColor.Default,
  customTestId = 'iconTestId',
}: Props) => {
  return (
    <div
      className="icon-div"
      style={{ color: colorProp }}
      data-testid={customTestId}
    >
      {children}
    </div>
  );
};

export default Icon;
