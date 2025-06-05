import { StyleProp, ViewStyle, StyleSheet, Dimensions } from "react-native";
import { isArray, isEmpty, isNumber, isObject, isString } from "underscore";
import { Props } from './Props'
import { Colors } from "../config";
import { makeStyle } from "./makeStyle";

/**
 * Style utility function that generates React Native styles based on provided props
 * This function combines various style properties into a single style object
 * 
 * @param props - Style properties object containing various style configurations
 * @returns Array containing base styles and computed styles
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <View style={Style({ mid: true, row: true })}>
 * 
 * // With position options
 * <View style={Style({ 
 *   positionOption: { top: 10, left: 20 },
 *   paddingOption: { all: 10 }
 * })}>
 * 
 * // With shadow
 * <View style={Style({ 
 *   shadowOption: {
 *     color: '#000',
 *     width: 2,
 *     height: 2,
 *     opacity: 0.5,
 *     radius: 5
 *   }
 * })}>
 * ```
 */
export const Style: any = (props: Props) => {

  const PropsApp = StyleSheet.flatten([
    // Layout properties
    props.alignItems && { alignItems: props.alignItems },
    props.justifyContent && { justifyContent: props.justifyContent },
    props.borderStyle && { borderStyle: props.borderStyle },
    props.overflow && { overflow: props.overflow },

    // Border radius properties
    props.borderUpRadius && { borderTopLeftRadius: (props.borderUpRadius), borderTopRightRadius: (props.borderUpRadius) },
    props.borderDownRadius && { borderBottomLeftRadius: (props.borderUpRadius), borderBottomRightRadius: (props.borderUpRadius) },

    // Layout shortcuts
    props.mid && { alignItems: 'center', justifyContent: 'center' },
    props.row && { flexDirection: 'row' },
    props.width100 && { width: '100%' },
    props.height100 && { height: '100%' },
    props.square && { width: props.square, height: props.square },
    props.borderCircle && { borderRadius: 1000 },
    props.alignCenter && { alignItems: 'center' },
    props.justifyCenter && { justifyContent: 'center' },
    props.justifyBetween && { justifyContent: 'space-between' },
    props.overHidden && { overflow: 'hidden' },
    props.centerBetween && { alignItems: 'center', justifyContent: 'space-between', },

    // Position options
    props.positionOption && {
      position: 'absolute',
      top: props.positionOption?.top,
      bottom: props.positionOption?.bottom,
      left: props.positionOption?.left,
      right: props.positionOption?.right,
    },

    // Padding options
    props.paddingOption && {
      paddingLeft: props.paddingOption?.all || props.paddingOption?.left,
      paddingTop: props.paddingOption?.all || props.paddingOption?.top,
      paddingRight: props.paddingOption?.all || props.paddingOption?.right,
      paddingBottom: props.paddingOption?.all || props.paddingOption?.bottom,
    },

    // Margin options
    props.marginOption && {
      marginLeft: props.marginOption?.all || props.marginOption?.left,
      marginTop: props.marginOption?.all || props.marginOption?.top,
      marginRight: props.marginOption?.all || props.marginOption?.right,
      marginBottom: props.marginOption?.all || props.marginOption?.bottom,
    },

    // Border options
    props.borderOption && {
      borderLeftWidth: props.borderOption.left,
      borderTopWidth: props.borderOption.top,
      borderBottomWidth: props.borderOption.bottom,
      borderRightWidth: props.borderOption.right,
      borderColor: props.borderOption.color,
    },

    // Shadow options
    !isEmpty(props.shadowOption) && {
      shadowColor: props.shadowOption?.color,
      shadowOffset: {
        width: props.shadowOption?.width,
        height: props.shadowOption?.height,
      },
      shadowOpacity: props.shadowOption?.opacity,
      shadowRadius: props.shadowOption?.radius,
      elevation: props.shadowOption?.elevation,
    },

    // Default shadow
    props.shadowColor && {
      shadowColor: isString(props.shadowColor) ? props.shadowColor : '#000',
      shadowOffset: { width: 2, height: 2, },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 2,
    },

    // Width and height shortcuts
    props.w100 && { width: '100%' },
    props.h100 && { height: '100%' },

    // Screen dimensions
    props.widthScreen && { width: Dimensions.get('screen').width },
    props.heightScreen && { height: Dimensions.get('screen').height },
  ])

  return [
    makeStyle(props),
    PropsApp,
  ]
}