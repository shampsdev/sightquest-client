import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const LeftArrowIcon = (props: SvgProps) => {
  return (
    <Svg
      width={27}
      height={27}
      fill="none"
      {...props}
    >
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 13.5h25m0 0L13.5 1M26 13.5 13.5 26"
      />
    </Svg>
  )
}

export default LeftArrowIcon;