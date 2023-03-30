import * as React from "react"
import Svg, { Mask, Rect, G, Path } from "react-native-svg"

const SvgComponent = ({color}) => (
  <Svg
    width={330}
    height={80}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={330}
      height={80}
    >
      <Rect width={330} height={80} rx={15} fill="#fff" />
    </Mask>
    <G mask="url(#a)">
      <Path d="M244-26 193 81v24.5l149.5-5V-26H244Z" fill={color ? color : '#E8BAFF'} />
    </G>
  </Svg>
)

export default SvgComponent