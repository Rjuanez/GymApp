import * as React from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';
import colors from '../components/colors'

export default function SvgComponent(props) {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 100 100" {...props}>
      <Circle cx="50%" cy="20%" r="50%"  fill={colors.mainLight} />
       <Rect x="0" y="5" width="100%" height="100%" fill={colors.mainLight} /> 
    </Svg>
  );
}