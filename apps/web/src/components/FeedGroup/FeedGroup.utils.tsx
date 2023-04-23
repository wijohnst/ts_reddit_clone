import { Props as FeedItemProps } from '../FeedItem/FeedItem';
import { ReactComponent as HomeIcon } from '../../assets/homeIcon.svg';
import { ReactComponent as PopularIcon } from '../../assets/popularIcon.svg';

export const feedItems: FeedItemProps[] = [
  {
    svg: <HomeIcon />,
    label: 'Home',
    href: '',
  },
  {
    svg: <PopularIcon />,
    label: 'Popular',
    href: '',
  },
];
