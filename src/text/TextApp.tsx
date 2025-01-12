import { Colors, Language } from '../config'
import React, { isValidElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Style } from './Style'
import { Props } from './Props'
import { isArray, isObject } from 'underscore'
const TextApp: React.FC<Props> = ({ style, children, ...props }) => {
  const Children = () => {
    const content = props?.lang ? Language(props?.lang) : undefined
    if (typeof content !== 'undefined') {
      if (typeof content == 'string' || typeof content == 'number' || isArray(children)) return content
      if (typeof content == 'function') return "Error content == 'function'"
      if (isObject(children)) return JSON.stringify(children)
      if (isValidElement(content)) return content
      return React.createElement(Text, {})
    }
    if (typeof children !== 'undefined') {
      if (typeof children == 'string' || typeof children == 'number' || isArray(children)) return children
      if (isObject(children)) return JSON.stringify(children)
      if (typeof children == "function") return "Error children == 'function'"
      if (isValidElement(children)) return children
      return React.createElement(Text, {}, children)
    }
  }
  return (
    <Text
      // adjustsFontSizeToFit
      // selectable
      style={[styles.default, Style(props), style]}{...props}>
      {Children()}
    </Text>
  )
}
export default TextApp
const styles = StyleSheet.create({
  default: {
    fontWeight: '300',
    color: Colors('black'),
    fontSize: 15,
    paddingTop: 2
  },
})
