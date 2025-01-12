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
export type IconType = keyof typeof RNVectorIcon
import { Props, } from './PropsStyle'
import { Colors } from '../config'
export default class IconApp extends React.PureComponent<Props> {
    static defaultProps: Props = {
        size: 23,
        color: 'gray',
        name: 'home',
    }
    render() {
        if (this.props.name === "none") return null
        const IconView = RNVectorIcon[this.props.type || 'Ionicons']
        if (typeof this.props.onPress != "function") {
            return (
                <IconView
                    //@ts-ignore
                    size={this.props.size}
                    //@ts-ignore
                    color={Colors(this.props.color) ?? this.props.color}
                    name={this.props.name}
                    onPress={this.props.onPress}
                    style={this.props.style as any}
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
                <IconView //@ts-ignore
                    size={this.props.size}
                    //@ts-ignore
                    color={Colors(this.props.color) ?? this.props.color}
                    name={this.props.name}
                    onPress={this.props.onPress}
                    style={this.props.style as any}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
})
