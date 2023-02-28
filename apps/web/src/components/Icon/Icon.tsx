import * as React from 'react';

interface Props {
  icon: string;
}

const Icon = (props: Props) => {
  const { icon } = props;
  return (
    <>
      <img src={icon} />
    </>
  );
};
export default Icon;
