import { ColorName } from "@assets/colors"
import { StyleProp, FlexStyle, TouchableWithoutFeedbackProps, ViewStyle } from "react-native"
type B = boolean
type N = number
type S = string
export interface PropsConvert {
  bg?: S | Array<ColorName>
  w?: FlexStyle['width']
  h?: FlexStyle['height']
  pad?: N
  padH?: N
  padV?: N
  padL?: N
  padT?: N
  padR?: N
  padB?: N
  flex?: N
  mar?: N
  marH?: N
  marV?: N
  marL?: N
  marT?: N
  marR?: N
  marB?: N
  minW?: N
  maxW?: N
  minH?: N
  maxH?: N
  borderC?: S | Array<color>
  borderW?: N | Array<border>
  borderLW?: N | Array<border>
  borderTW?: N | Array<border>
  borderRW?: N | Array<border>
  borderBW?: N | Array<border>
  borderR?: N | Array<size>
  borderUpRadius?: N | Array<size>
  borderDownRadius?: N | Array<size>
  alignItems?: FlexStyle['alignItems']
  alignSelf?: FlexStyle['alignSelf']
  justifyContent?: FlexStyle['justifyContent']
  borderStyle?: ViewStyle['borderStyle']
  opacity?: ViewStyle['opacity']
  overflow?: ViewStyle['overflow']
  zIndex?: ViewStyle['opacity']

}
export interface PropsApp {
  _background?: S//old
  alignI?: FlexStyle['alignItems']//old
  justifyC?: FlexStyle['justifyContent']//old
  bgW?: B//old
  positionA?: boolean//old
  left0?: boolean //old
  top0?: boolean //old
  right0?: boolean//old
  bottom0?: boolean //old
  centerH?: boolean //old
  overH?: B //old
  w100?: B //old
  h100?: B //old
  width?: FlexStyle['width']//old
  height?: FlexStyle['height']//old
  borderR100?: boolean
  //
  mid?: B
  row?: B
  alignCenter?: B
  justifyCenter?: B
  borderCircle?: B
  centerBetween?: B
  justifyBetween?: B
  overHidden?: B
  square?: N
  width100?: B
  height100?: B
  white?: B
  red?: B
  blue?: B
  black?: B
  green?: B
  yellow?: B
  pink?: B
  gray?: B
  primary?: B
  background?: Array<ColorName> | Array<(S)> | S
  gradient?: 'vertical' | 'horizontal'
  flexOne?: B//old
  shadowColor?: S | B
  //option
  borderOption?: { top?: N, left?: N, right?: N, bottom?: N, color?: S }
  positionOption?: { top?: N, left?: N, right?: N, bottom?: N }
  paddingOption?: { all?: N, top?: N, left?: N, right?: N, bottom?: N }
  paddingFlex?: { vertical?: N, horizontal?: N }
  marginFlex?: { vertical?: N, horizontal?: N }
  marginOption?: { all?: N, top?: N, left?: N, right?: N, bottom?: N }
  shadowOption?: { color?: S, width?: N, height?: N, opacity?: N, radius?: N, elevation?: N }
  //recent
  pad5?: B; pad10?: B; pad20?: B;
  padV5?: B; padV10?: B; padV20?: B;
  padH5?: B; padH10?: B; padH20?: B;
  padL5?: B; padL10?: B; padL20?: B;
  padT5?: B; padT10?: B; padT20?: B;
  padR5?: B; padR10?: B; padR20?: B;
  padB5?: B; padB10?: B; padB20?: B;
  //
  mar5?: B; mar10?: B; mar20?: B;
  marH5?: B; marH10?: B; marH20?: B;
  marV5?: B; marV10?: B; marV20?: B;
  marL5?: B; marL10?: B; marL20?: B;
  marT5?: B; marT10?: B; marT20?: B;
  marR5?: B; marR10?: B; marR20?: B;
  marB5?: B; marB10?: B; marB20?: B;
  //
  flex1?: B; flex2?: B; flex3?: B; flex4?: B; flex5?: B; flex6?: B; flex7?: B; flex8?: B; flex9?: B;
  borderR2?: B; borderR5?: B; borderR10?: B; borderR15?: B; borderR20?: B;
  borderW1?: B; borderW2?: B; borderW3?: B; borderW4?: B; borderW5?: B;
  /**'padding30;marginTop6;borderRadius11;' */
  styleChar?: S
  //
  widthScreen?: boolean
  heightScreen?: boolean
}
export interface Props extends TouchableWithoutFeedbackProps, PropsConvert, PropsApp {
  children?: React.ReactNode
  styleBox?: StyleProp<ViewStyle>
  hidden?: B
  activeOpacity?: N
}
/**
 * backfaceVisibility:route hidden
 */
type size = 0 | 5 | 10 | 15 | 20 | 30 | 40 | 50 | 100
type color = '#ddd' | '#fff' | '#eee' | '#000' | 'white' | 'blue' | 'green' | 'pink' | 'yellow' | "white" | 'black' | 'blue'
type border = 0.3 | 0.5 | 0.8 | 1 | 2 | 3 | 4 | 5