import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
export const FlashIcon = (props: SvgProps) => (
  <Svg width={27} height={40} fill='none' {...props}>
    <Path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M17.695 1.085 1.25 24.07h11.625L8.487 38.765a.225.225 0 0 0 .039.164c.016.022.037.04.06.052a.16.16 0 0 0 .155-.002.184.184 0 0 0 .062-.06L25.25 15.93H13.796l4.229-14.696a.235.235 0 0 0-.045-.163.187.187 0 0 0-.063-.052.166.166 0 0 0-.158.005.19.19 0 0 0-.064.062Z'
    />
  </Svg>
);
