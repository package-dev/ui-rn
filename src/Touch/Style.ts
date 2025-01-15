import { StyleProp, ViewStyle, StyleSheet, Dimensions } from "react-native";
import { isArray, isEmpty, isNumber, isObject, isString } from "underscore";
import { Props } from './Props'
import { Colors } from "../config";
import { makeStyle } from "./makeStyle";

export const Style: any = (props: Props) => {

  const PropsApp = StyleSheet.flatten([
    props.alignItems && { alignItems: props.alignItems },
    props.justifyContent && { justifyContent: props.justifyContent },
    props.borderStyle && { borderStyle: props.borderStyle },
    props.overflow && { overflow: props.overflow },
    props.borderUpRadius && { borderTopLeftRadius: (props.borderUpRadius), borderTopRightRadius: (props.borderUpRadius) },
    props.borderDownRadius && { borderBottomLeftRadius: (props.borderUpRadius), borderBottomRightRadius: (props.borderUpRadius) },
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

    //
    props.positionOption && {
      position: 'absolute',
      top: props.positionOption?.top,
      bottom: props.positionOption?.bottom,
      left: props.positionOption?.left,
      right: props.positionOption?.right,
    },
    props.paddingOption && {
      paddingLeft: props.paddingOption?.all || props.paddingOption?.left,
      paddingTop: props.paddingOption?.all || props.paddingOption?.top,
      paddingRight: props.paddingOption?.all || props.paddingOption?.right,
      paddingBottom: props.paddingOption?.all || props.paddingOption?.bottom,
    },
    props.marginOption && {
      marginLeft: props.marginOption?.all || props.marginOption?.left,
      marginTop: props.marginOption?.all || props.marginOption?.top,
      marginRight: props.marginOption?.all || props.marginOption?.right,
      marginBottom: props.marginOption?.all || props.marginOption?.bottom,
    },
    props.borderOption && {
      borderLeftWidth: props.borderOption.left,
      borderTopWidth: props.borderOption.top,
      borderBottomWidth: props.borderOption.bottom,
      borderRightWidth: props.borderOption.right,
      borderColor: props.borderOption.color,
    },
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
    props.shadowColor && {
      shadowColor: isString(props.shadowColor) ? props.shadowColor : '#000',
      shadowOffset: { width: 2, height: 2, },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 2,
    },
    props.w100 && { width: '100%' },
    props.h100 && { height: '100%' },

    props.widthScreen && { width: Dimensions.get('screen').width },
    props.heightScreen && { height: Dimensions.get('screen').height },


  ])
  return [
    makeStyle(props),
    PropsApp,
  ]
}