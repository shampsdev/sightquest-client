import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const LocationIcon = (props: SvgProps) => (
  <Svg width={40} height={40} {...props} viewBox='0 0 30 30'>
    <Path
      stroke='#000'
      strokeWidth={2}
      d='M22.09 1.331c1.489-.892 3.33.408 2.987 2.11l-4.431 22.025c-.37 1.832-2.826 2.203-3.718.56l-3.425-6.3a4 4 0 0 0-2.89-2.04l-7.083-1.12c-1.846-.293-2.318-2.732-.715-3.692L22.09 1.331Z'
    />
  </Svg>
);
