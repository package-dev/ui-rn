import { IColor } from "../config"
import { StyleProp, FlexStyle, TouchableWithoutFeedbackProps, ViewStyle } from "react-native"
import { MakeProp } from "./makeStyle"

export interface PropsApp {
  borderUpRadius?: number
  borderDownRadius?: number
  alignItems?: FlexStyle['alignItems']
  alignSelf?: FlexStyle['alignSelf']
  justifyContent?: FlexStyle['justifyContent']
  borderStyle?: ViewStyle['borderStyle']
  opacity?: ViewStyle['opacity']
  overflow?: ViewStyle['overflow']
  w100?: boolean
  h100?: boolean
  mid?: boolean
  row?: boolean
  alignCenter?: boolean
  justifyCenter?: boolean
  borderCircle?: boolean
  centerBetween?: boolean
  justifyBetween?: boolean
  overHidden?: boolean
  square?: number
  width100?: boolean
  height100?: boolean
  background?: Array<IColor> | Array<(string)> | string
  gradient?: 'vertical' | 'horizontal'
  flexOne?: boolean
  shadowColor?: string | boolean
  borderOption?: { top?: number, left?: number, right?: number, bottom?: number, color?: string }
  positionOption?: { top?: number, left?: number, right?: number, bottom?: number }
  paddingOption?: { all?: number, top?: number, left?: number, right?: number, bottom?: number }
  paddingFlex?: { vertical?: number, horizontal?: number }
  marginFlex?: { vertical?: number, horizontal?: number }
  marginOption?: { all?: number, top?: number, left?: number, right?: number, bottom?: number }
  shadowOption?: { color?: string, width?: number, height?: number, opacity?: number, radius?: number, elevation?: number }
  styleChar?: string
  widthScreen?: boolean
  heightScreen?: boolean

}

//@ts-ignore
export interface Props extends TouchableWithoutFeedbackProps, PropsApp, MakeProp {
  children?: React.ReactNode
  hidden?: boolean
  activeOpacity?: number
} 
