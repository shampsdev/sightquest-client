import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const PlayIcon = (props: SvgProps) => (
  <Svg
    width={29}
    height={31}
    fill="none"
    {...props}
  >
    <Path stroke="#000" strokeLinecap="round" strokeWidth={2} d="M11.602 1h6" />
    <Path
      stroke="#000"
      strokeWidth={2}
      d="M14.602 30c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13Z"
    />
    <Path
      stroke="#000"
      strokeWidth={2}
      d="M17.184 13.66c1.613 1.206 2.418 1.809 2.418 2.84s-.805 1.634-2.418 2.84c-.445.332-.886.646-1.293.907-.355.23-.759.466-1.176.699-1.61.896-2.413 1.345-3.135.848-.72-.495-.786-1.534-.918-3.614a28.131 28.131 0 0 1-.06-1.68c0-.517.024-1.093.06-1.68.132-2.08.198-3.118.918-3.614.722-.497 1.527-.048 3.135.848.417.233.82.47 1.176.699.405.261.848.575 1.293.907Z"
    />
  </Svg>
)
export default PlayIcon;
