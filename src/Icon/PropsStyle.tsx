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
export interface Props {
    name: string
    size?: number | Array<size>
    type?: keyof typeof RNVectorIcon
    onPress?: () => void
    styleContainer?: StyleProp<ViewStyle>
    style?: StyleProp<TextStyle>
    alignSelf?: FlexStyle['alignSelf']
    disabled?: boolean
    activeOpacity?: number
    color?: string

}

type size = 18 | 20 | 22 | 23 | 24 | 25 | 26 | 28 | 30 | 32 | 34 | 36

