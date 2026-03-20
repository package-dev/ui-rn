import { StyleSheet } from "react-native";
import { makeStyle } from "./makeStyle";
export const Style = (props) => {
    const PropsConvert = StyleSheet.flatten([
        props.color && { color: props.color },
        props.center && { textAlign: 'center' },
        props.italic && { fontStyle: 'italic' },
        props.bold && { fontWeight: typeof props.bold == "boolean" ? '500' : props.bold },
        props.underline && { textDecorationLine: 'underline' },
        props.toUpperCase && { textTransform: 'uppercase' },
        props.toLowerCase && { textTransform: 'lowercase' },
    ]);
    return [
        makeStyle(props),
        PropsConvert,
    ];
};
