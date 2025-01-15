import {
    RNVectorIcon,
} from "./index"
import React from 'react'
import {
    FlexStyle,
    StyleProp,
    StyleSheet,
    TextProps,
    TextStyle,
    TouchableOpacity,
    ViewProps,
    ViewStyle,
} from 'react-native'

import { isArray, isEmpty, isNumber, isObject, isString } from "underscore";
import { MakeProp } from "./makeProps";
export interface Props extends MakeProp {
    name: string
    size?: number
    type?: keyof typeof RNVectorIcon
    onPress?: () => void
    styleContainer?: StyleProp<ViewStyle>
    style?: StyleProp<TextStyle>
    alignSelf?: FlexStyle['alignSelf']
    disabled?: boolean
    activeOpacity?: number
    color?: string

}


