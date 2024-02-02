import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const PlusIcon = (props: SvgProps) => {
  return (
    <Svg
      width={26}
      height={26}
      fill="none"
      {...props}
    >
      <Path
        fill="#000"
        d="M14.258 11.742V1.258a1.258 1.258 0 0 0-2.516 0v10.484H1.258a1.258 1.258 0 0 0 0 2.516h10.484v10.484A1.275 1.275 0 0 0 13 26a1.258 1.258 0 0 0 1.258-1.258V14.258h10.484A1.258 1.258 0 0 0 26 13a1.275 1.275 0 0 0-1.258-1.258H14.258Z"
      />
    </Svg>
  )
}

export default PlusIcon;