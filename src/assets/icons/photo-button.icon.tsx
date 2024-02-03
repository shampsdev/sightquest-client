import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';
export const PhotoButtonIcon = (props: SvgProps) => (
  <Svg width={61} height={60} fill='none' {...props}>
    <Circle cx={30.25} cy={30} r={29} stroke='#000' strokeWidth={2} />
    <Circle cx={30.25} cy={30} r={24} fill='#000' />
  </Svg>
);
