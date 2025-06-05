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
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { IconProps } from 'react-native-vector-icons/Icon'
import { isArray, isString } from 'underscore'

/**
 * Collection of React Native Vector Icons
 * Provides access to various icon sets from react-native-vector-icons
 */
export const RNVectorIcon = {
    Ionicons,
    AntDesign,
    Entypo,
    EvilIcons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
    FontAwesome5,
    SimpleLineIcons,
    Feather,
    Octicons,
    Fontisto
}

/** Type definition for available icon sets */
export type IconType = keyof typeof RNVectorIcon

import { Props, } from './PropsStyle'
import { makeProps } from './makeProps'

/**
 * IconApp component that provides a unified interface for using various icon sets
 * Supports touch interaction and custom styling
 * 
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <IconApp name="home" />
 * 
 * // Custom size and color
 * <IconApp 
 *   name="star" 
 *   size={30} 
 *   color="gold" 
 * />
 * 
 * // With touch interaction
 * <IconApp 
 *   name="heart" 
 *   onPress={() => console.log('pressed')} 
 * />
 * 
 * // Using different icon set
 * <IconApp 
 *   type="FontAwesome" 
 *   name="user" 
 * />
 * ```
 */
export default class IconApp extends React.PureComponent<Props> {
    /** Default props for the IconApp component */
    static defaultProps: Props = {
        size: 23,
        color: 'gray',
        name: 'home',
    }

    /** Internal state for computed props */
    res: { color: string, style: any, size: number }

    constructor(props) {
        super(props)
        this.res = makeProps(props)
    }

    render() {
        const { size, color, style } = this.res
        // console.debug('res', this.res)
        if (this.props.name === "none") return null
        const IconView = RNVectorIcon[this.props.type || 'Ionicons']
        if (typeof this.props.onPress != "function") {
            return (
                <IconView
                    size={size}
                    color={color}
                    style={style}
                    name={this.props.name}
                    onPress={this.props.onPress}
                />
            )
        }
        return (
            <TouchableOpacity
                activeOpacity={this.props.activeOpacity || 0.5}
                disabled={
                    typeof this.props.onPress == 'function' ? this.props.disabled : true
                }
                style={
                    [
                        styles.container,
                        { ...(this.props.alignSelf && { alignSelf: this.props.alignSelf }) },
                        this.props.style,
                        this.props.styleContainer,

                    ]} >
                <IconView
                    size={size}
                    color={color}
                    style={style}
                    name={this.props.name}
                    onPress={this.props.onPress}
                />
            </TouchableOpacity>
        )
    }
}

/**
 * Default styles for the IconApp component
 */
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
})
