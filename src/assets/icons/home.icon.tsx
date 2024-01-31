import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeIcon = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M26.602 24.65v-9.598a5.83 5.83 0 0 0-.45-2.25 5.705 5.705 0 0 0-1.279-1.884l-8.857-8.634a2.74 2.74 0 0 0-1.913-.784 2.74 2.74 0 0 0-1.913.784L3.33 10.918a5.706 5.706 0 0 0-1.278 1.884 5.831 5.831 0 0 0-.45 2.25v9.597c0 .756.292 1.481.813 2.016.52.535 1.227.835 1.964.835h19.445c.736 0 1.443-.3 1.964-.835a2.89 2.89 0 0 0 .813-2.016Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 18.14c0-.817.351-1.6.976-2.178a3.477 3.477 0 0 1 2.357-.902h3.334c.884 0 1.732.325 2.357.902.625.578.976 1.361.976 2.178v9.24H9v-9.24Z"
    />
  </Svg>
)

export default HomeIcon
