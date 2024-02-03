import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
export const CoinsIcon = (props: SvgProps) => (
  <Svg width={27} height={22} fill='none' {...props}>
    <Path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M25.643 12.428v4.286c0 1.857-4.478 4.286-10 4.286-5.523 0-10-2.429-10-4.286v-3.571'
    />
    <Path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M6.063 13.513c1.235 1.64 5.057 3.179 9.58 3.179 5.522 0 10-2.295 10-4.266 0-1.107-1.41-2.32-3.623-3.172'
    />
    <Path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M21.357 5.286V9.57c0 1.857-4.477 4.286-10 4.286s-10-2.428-10-4.286V5.286'
    />
    <Path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M11.357 9.549c5.523 0 10-2.295 10-4.266 0-1.973-4.477-4.283-10-4.283s-10 2.31-10 4.283c0 1.971 4.477 4.266 10 4.266Z'
      clipRule='evenodd'
    />
  </Svg>
);
