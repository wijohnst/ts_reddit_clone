import * as React from 'react';
import './Icon.scss';

interface Props {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  color?: string;
}

const Icon = ({ svg: Svg, color }: Props) => {
  return (
    <>
      <Svg className="icon" style={{ color: color }} />
    </>
  );
};

export default Icon;

// we need to add on hover
// we need to make these links
