import ClickableLogo from './ClickableLogo';

export default {
  title: 'Components/ClickableLogo',
  component: ClickableLogo,
};

interface Props {
  onClick: () => void;
}

const Template = ({ onClick }: Props) => <ClickableLogo onClick={onClick} />;

export const Default = Template.bind({});
