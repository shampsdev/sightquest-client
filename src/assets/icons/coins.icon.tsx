import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'


export const CoinsIcon = (props: SvgProps) => {
  return (
    <Svg
      width={27}
      height={22}
      fill="none"
      {...props}
    >
      <Path
        stroke={ props.stroke || "#000" }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M25.286 12.429v4.285c0 1.858-4.478 4.286-10 4.286-5.523 0-10-2.428-10-4.286v-3.571"
      />
      <Path
        stroke={ props.stroke || "#000" }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.706 13.513c1.235 1.64 5.057 3.179 9.58 3.179 5.522 0 10-2.295 10-4.266 0-1.107-1.41-2.32-3.623-3.172"
      />
      <Path
        stroke={ props.stroke || "#000" }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 5.286V9.57c0 1.857-4.477 4.286-10 4.286S1 11.43 1 9.571V5.286"
      />
      <Path
        stroke={ props.stroke || "#000" }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 9.549c5.523 0 10-2.295 10-4.266C21 3.31 16.523 1 11 1S1 3.31 1 5.283c0 1.971 4.477 4.266 10 4.266Z"
        clipRule="evenodd"
      />
    </Svg>
  )
}
