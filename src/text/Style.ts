import { Colors } from "../config";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { isArray, isEmpty, isNumber, isObject, isString } from "underscore";
import { Props } from './Props'
export const Style: any = (props: Props, ColorApp = Colors) => {
    const PropsConvert = StyleSheet.flatten([
        props.color && { color: switchArrayValueFromData(props.color, ColorApp) },
        props.background && { backgroundColor: props.background },
        props.size && { fontSize: props.size },
        props.center && { textAlign: 'center' },
        props.italic && { fontStyle: 'italic' },
        props.bold && { fontWeight: typeof props.bold == "boolean" ? '500' : props.bold },
        props.underline && { textDecorationLine: 'underline' },
        props.toUpperCase && { textTransform: 'uppercase' },
        props.toLowerCase && { textTransform: 'lowercase' },
        props.white && { color: "white" }, props.red && { color: "red" },
        props.blue && { color: "blue" }, props.green && { color: "green" },
        props.yellow && { color: "yellow" }, props.pink && { color: "pink" },
        props.gray && { color: "gray" }, props.primary && { color: Colors('primary') },
        props.black && { color: "black" },
        props.flex1 && { flex: 1 }, props.flex2 && { flex: 2 }, props.flex3 && { flex: 3 },
        props.flex4 && { flex: 4 }, props.flex5 && { flex: 5 }, props.flex6 && { flex: 6 },
        props.flex7 && { flex: 7 }, props.flex8 && { flex: 8 }, props.flex9 && { flex: 9 },

    ])
    const PropsApp = StyleSheet.flatten([

    ])
    return [
        PropsApp,
        PropsConvert,
    ]
}

const switchArrayValueFromData = (value: any, ColorApp = Colors) => {
    if (isArray(value) && value.length == 1) return ColorApp(value[0])
    if (isString(value) || isNumber(value)) return value
    return undefined
}

