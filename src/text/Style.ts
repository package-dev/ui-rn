import { Colors } from "../config";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";

import { Props } from './Props'
import { makeStyle } from "./makeStyle";
export const Style: any = (props: Props, ColorApp = Colors) => {
    const PropsConvert = StyleSheet.flatten([
        props.color && { color: props.color },
        props.center && { textAlign: 'center' },
        props.italic && { fontStyle: 'italic' },
        props.bold && { fontWeight: typeof props.bold == "boolean" ? '500' : props.bold },
        props.underline && { textDecorationLine: 'underline' },
        props.toUpperCase && { textTransform: 'uppercase' },
        props.toLowerCase && { textTransform: 'lowercase' },

    ])
    return [
        makeStyle(props),
        PropsConvert,
    ]
}

