import * as React from 'react';
import './Icon.scss';

interface Props {
  // we are only accepting svg elements
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

// destructuring props, and renaming svg so we can render SVG element
const Icon = ({ svg: Svg }: Props) => {
  return (
    <>
      <Svg />
    </>
  );
};
export default Icon;
