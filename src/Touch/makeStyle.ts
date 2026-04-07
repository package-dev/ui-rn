import { StyleSheet, ViewStyle } from "react-native";
import { isNaN, isNumber } from "underscore";

enum COLORS {
    "white" = 1,
    "red",
    "blue",
    "black",
    "green",
    "yellow",
    "pink",
    "gray",
    "primary"
}
const PROPS = {
    bg: "backgroundColor",
    background: "backgroundColor",
    w: "width",
    width: "width",
    minW: "minWidth",
    maxW: "maxWidth",
    h: "height",
    height: "height",
    minH: "minHeight",
    maxH: "maxHeight",
    pad: "padding",
    padH: "paddingHorizontal",
    horizontal: "paddingHorizontal",
    padV: "paddingVertical",
    vertical: "paddingVertical",
    padL: "paddingLeft",
    padT: "paddingTop",
    padR: "paddingRight",
    padB: "paddingBottom",
    mar: "margin",
    marH: "marginHorizontal",
    marV: "marginVertical",
    marL: "marginLeft",
    marT: "marginTop",
    marR: "marginRight",
    marB: "marginBottom",
    border: 'borderWidth',
    borderW: 'borderWidth',
    borderR: "borderRadius",
    radius: "borderRadius",
    borderC: "borderColor",
    borderColor: "borderColor",
    borderLW: "borderLeftWidth",
    borderTW: "borderTopWidth",
    borderRW: "borderRightWidth",
    borderBW: "borderBottomWidth",
    flex: 'flex',
    zIndex: 'zIndex',
    left: 'left',
    top: 'top',
    bottom: 'bottom',
    right: 'right',
    opacity: 'opacity'
} as const;

const isColorKey = (key: string): key is ColorKey => {
    return key in COLORS;
};

const isShortKey = (key: string): key is ShortKey => {
    return key in PROPS;
};

export type ColorKey = keyof typeof COLORS;
export type ShortKey = keyof typeof PROPS;
export type Convert<T extends string> = Partial<Record<T, boolean | number | string>>
export type ColorModifiers = Partial<Record<keyof typeof COLORS, boolean>>;
export type MakeProp = Convert<ShortKey> & ColorModifiers

export const makeStyle = <T>(props: { [key: string]: any }) => {
    const style: ViewStyle = {};

    Object.keys(props).forEach((key) => {
        const match = key.match(/^(\w+)-(\w+)$/);

        // 🎨 Color
        if (isColorKey(key)) {
            style.backgroundColor = key;
            return;
        }

        // 🔹 Hyphen syntax (pad-10)
        if (match) {
            const [, rawKey, rawValue] = match;

            const value = isNaN(Number(rawValue))
                ? rawValue
                : Number(rawValue);

            if (isShortKey(rawKey)) {
                style[PROPS[rawKey]] = value as any;
            } else {
                (style as any)[rawKey] = value;
            }
            return;
        }

        // 🔹 Normal props
        if (isShortKey(key)) {
            style[PROPS[key]] = props[key] as any;
        }
    });

    return StyleSheet.create({ style }).style;
};