import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Style } from './Style'
import { Props } from './Props'
import { isArray, isString } from 'underscore'
import LinearGradient from 'react-native-linear-gradient'

type TouchableOpacityRef = React.ComponentRef<typeof TouchableOpacity>

/**
 * Touch component that extends TouchableOpacity with additional styling capabilities
 * Supports gradient backgrounds and custom styling options
 * 
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Touch onPress={() => console.log('pressed')}>
 *   <Text>Press me</Text>
 * </Touch>
 * 
 * // With gradient background
 * <Touch 
 *   background={['#ff0000', '#00ff00']}
 *   gradient="vertical"
 *   onPress={() => console.log('pressed')}
 * >
 *   <Text>Gradient Button</Text>
 * </Touch>
 * 
 * // With custom styling
 * <Touch 
 *   mid={true}
 *   row={true}
 *   paddingOption={{ all: 10 }}
 *   onPress={() => console.log('pressed')}
 * >
 *   <Text>Styled Button</Text>
 * </Touch>
 * ```
 */
const Touch = React.forwardRef<TouchableOpacityRef, Props>(({ style, ...props }, ref) => {
  if (props?.hidden) return <></>
  //@ts-ignore
  if (isArray(props.background) && props.background.length > 1 && props.background.every(i => isString(i)))
    return (
      <TouchableOpacity
        ref={ref}
        {...props}
        activeOpacity={props.activeOpacity || 0.5}
      >
        <LinearGradient
          //@ts-ignore
          colors={props.background}
          start={props.gradient == "vertical" ? { x: 0, y: 0 } : { x: 0, y: 0 }}
          end={props.gradient == "vertical" ? { x: 0, y: 1 } : { x: 1, y: 0 }}
          style={[Style(props), style]}
        >
          {props.children}
        </LinearGradient >
      </TouchableOpacity>
    )
  return (
    <TouchableOpacity
      ref={ref}
      activeOpacity={props.activeOpacity || 0.5}
      style={[Style(props), style]}
      {...props}>
      {props.children}
    </TouchableOpacity>
  )
})

export default Touch