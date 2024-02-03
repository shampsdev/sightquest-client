import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
export const BackArrowIcon = (props: SvgProps) => (
  <Svg width={32} height={30} fill='none' {...props}>
    <Path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M7 1.5 1 7.375l5.688 5.688'
    />
    <Path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M1 7.375h18.683c5.592 0 10.341 4.566 10.559 10.156.23 5.907-4.65 10.969-10.56 10.969H5.874'
    />
  </Svg>
);
