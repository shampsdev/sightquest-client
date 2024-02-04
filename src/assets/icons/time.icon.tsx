import React from 'react'
import Svg, { Circle, Path, SvgProps } from 'react-native-svg'

const TimeIcon = (props: SvgProps) => (
  <Svg
    width={26}
    height={27}
    fill="none"
    {...props}
  >
    <Circle cx={13} cy={13.5} r={12} stroke="#000" strokeWidth={2} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M13 6.5v7.09l4 4.91"
    />
  </Svg>
)

export default TimeIcon;