import { IColor } from "../config"
import { StyleProp, FlexStyle, TouchableWithoutFeedbackProps, ViewStyle } from "react-native"
import { MakeProp } from "./makeStyle"

/**
 * Interface for application-specific props that extend React Native's style properties
 * @interface PropsApp
 */
export interface PropsApp {
  /** Border radius for top corners */
  borderUpRadius?: number
  /** Border radius for bottom corners */
  borderDownRadius?: number
  /** Flexbox alignment along cross axis */
  alignItems?: FlexStyle['alignItems']
  /** Flexbox alignment for self */
  alignSelf?: FlexStyle['alignSelf']
  /** Flexbox alignment along main axis */
  justifyContent?: FlexStyle['justifyContent']
  /** Border style (solid, dashed, dotted) */
  borderStyle?: ViewStyle['borderStyle']
  /** Opacity of the view */
  opacity?: ViewStyle['opacity']
  /** Overflow behavior */
  overflow?: ViewStyle['overflow']
  /** Set width to 100% */
  w100?: boolean
  /** Set height to 100% */
  h100?: boolean
  /** Center content both horizontally and vertically */
  mid?: boolean
  /** Set flex direction to row */
  row?: boolean
  /** Center content horizontally */
  alignCenter?: boolean
  /** Center content vertically */
  justifyCenter?: boolean
  /** Make border radius circular */
  borderCircle?: boolean
  /** Center content horizontally and space between vertically */
  centerBetween?: boolean
  /** Space content evenly along main axis */
  justifyBetween?: boolean
  /** Hide overflow content */
  overHidden?: boolean
  /** Set width and height to same value */
  square?: number
  /** Set width to 100% */
  width100?: boolean
  /** Set height to 100% */
  height100?: boolean
  /** Background color or gradient colors */
  background?: Array<IColor> | Array<(string)> | string
  /** Gradient direction */
  gradient?: 'vertical' | 'horizontal'
  /** Set flex to 1 */
  flexOne?: boolean
  flex1?: boolean
  /** Shadow color or boolean to enable default shadow */
  shadowColor?: string | boolean
  /** Border options for each side */
  borderOption?: { top?: number, left?: number, right?: number, bottom?: number, color?: string }
  /** Position options for absolute positioning */
  positionOption?: { top?: number, left?: number, right?: number, bottom?: number }
  /** Padding options for each side */
  paddingOption?: { all?: number, top?: number, left?: number, right?: number, bottom?: number }
  /** Padding options for vertical and horizontal */
  paddingFlex?: { vertical?: number, horizontal?: number }
  /** Margin options for vertical and horizontal */
  marginFlex?: { vertical?: number, horizontal?: number }
  /** Margin options for each side */
  marginOption?: { all?: number, top?: number, left?: number, right?: number, bottom?: number }
  /** Shadow configuration options */
  shadowOption?: { color?: string, width?: number, height?: number, opacity?: number, radius?: number, elevation?: number }
  /** Custom style character */
  styleChar?: string
  /** Set width to screen width */
  widthScreen?: boolean
  /** Set height to screen height */
  heightScreen?: boolean
}

/**
 * Main Props interface that combines TouchableWithoutFeedbackProps, PropsApp, and MakeProp
 * @interface Props
 */
//@ts-ignore
export interface Props extends TouchableWithoutFeedbackProps, PropsApp, MakeProp {
  /** Child components */
  children?: React.ReactNode
  /** Hide the component */
  hidden?: boolean
  /** Opacity when pressed */
  activeOpacity?: number
} 
