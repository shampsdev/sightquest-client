import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const StoreIcon = (props: SvgProps) => {
  return (
    <Svg
      className='translate-y-[2px] translate-x-[2px]'
      width={32}
      height={32}
      fill="none"
      { ...props }
    >
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.807 16.327v4.711m4.712-4.711v4.711m4.711-4.711v4.711m5.39-9.423H3.417a1.885 1.885 0 0 0-1.884 2.13L2.908 24.11a1.885 1.885 0 0 0 1.885 1.64h17.414a1.885 1.885 0 0 0 1.884-1.64l1.376-10.365a1.887 1.887 0 0 0-1.847-2.13Z"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.193 3.21a5.258 5.258 0 0 1 4.334 4.636l.415 3.77m-18.846 0 .414-3.77a5.258 5.258 0 0 1 4.335-4.598"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.23 3.606a2.356 2.356 0 0 1-2.356 2.356h-4.711a2.356 2.356 0 1 1 0-4.712h4.711a2.356 2.356 0 0 1 2.356 2.356Z"
      />
    </Svg>
  )
}
