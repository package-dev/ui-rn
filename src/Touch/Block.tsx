import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Style } from './Style'
import { Props } from './Props'
import { isArray, isString } from 'underscore';
import LinearGradient from 'react-native-linear-gradient'

type TouchableOpacityRef = React.ComponentRef<typeof View>
const Block = React.forwardRef<TouchableOpacityRef, Props>(({ style, ...props }, ref) => {
  if (props?.hidden) return <></>
  //@ts-ignore
  if (isArray(props.background) && props.background.length > 1 && props.background.every(i => isString(i)))
    return (
      <LinearGradient
        //@ts-ignore
        colors={props.background}
        start={props.gradient == "vertical" ? { x: 0, y: 0 } : { x: 0, y: 0 }}
        end={props.gradient == "vertical" ? { x: 0, y: 1 } : { x: 1, y: 0 }}
        style={[Style(props), style, props.styleBox]}>
        {props.children}
      </LinearGradient >
    )
  //@ts-ignore
  return (<View ref={ref} style={[Style(props), style, props.styleBox]}
    {...props}>
    {props.children}
  </View>
  )
})

export default Block
const styles = StyleSheet.create({
  defaultTouch: {
  },
})
