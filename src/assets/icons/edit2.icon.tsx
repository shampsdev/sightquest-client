import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const Edit2Icon = (props: SvgProps) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15 6 3 3m-5 11h8M5 16l-1 4 4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0L5 16Z"
      />
    </Svg>
  )
}

export default Edit2Icon;