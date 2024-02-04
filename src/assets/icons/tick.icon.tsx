import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
export const TickIcon = (props: SvgProps) => (
  <Svg
    width={26}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="m1.249 19 8.375 11.067L24.751 1.934"
    />
  </Svg>
)
