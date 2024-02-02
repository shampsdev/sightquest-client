import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const SearchIcon = (props: SvgProps) => (
  <Svg
    width={35}
    height={35}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 21.333c1.99 0 3.897-.807 5.303-2.245A7.754 7.754 0 0 0 25 13.667c0-2.034-.79-3.984-2.197-5.421A7.418 7.418 0 0 0 17.5 6c-1.99 0-3.897.808-5.303 2.246A7.754 7.754 0 0 0 10 13.666c0 2.034.79 3.984 2.197 5.422a7.418 7.418 0 0 0 5.303 2.245Zm0 0V29m-3.125-15.333c0-.848.33-1.66.915-2.26a3.09 3.09 0 0 1 2.21-.935"
    />
  </Svg>
)
export default SearchIcon
