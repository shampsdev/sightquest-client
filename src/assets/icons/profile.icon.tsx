import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ProfileIcon = (props: SvgProps) => (
  <Svg fill='none' viewBox='0 0 24 24' {...props}>
    <Path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.4}
      d='M14.5 16.5h1.615c.868 0 1.68-.425 2.173-1.139l3.343-4.829a1.093 1.093 0 0 0-1.704-1.36l-2.654 2.894a3.796 3.796 0 0 1-4.209.96l-3.624-1.45a2.95 2.95 0 0 0-2.73.284l-3.838 2.558a1.188 1.188 0 0 0 1.19 2.05l3.186-1.592c.62-.31 1.298.305 1.049.953L6.5 20.5M7 4H4m2 3H4m14-.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'
    />
  </Svg>
);
export default ProfileIcon;
