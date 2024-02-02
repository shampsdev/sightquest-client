import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const ArrowIcon = (props: SvgProps) => {
  return (
    <Svg
    width={39}
    height={37}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      stroke="#000"
      strokeWidth={2}
      d="M1 18.5C1 28.116 9.232 36 19.5 36 29.767 36 38 28.116 38 18.5S29.767 1 19.5 1C9.232 1 1 8.884 1 18.5Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28 19H11m0 0 8.5-9M11 19l8.5 9"
    />
  </Svg>
  )
}
