import { StyleSheet, TextStyle } from "react-native";
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
    color: "color",
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
    padV: "paddingVertical",
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
    borderC: "borderColor",
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
    opacity: 'opacity',
    size: 'fontSize'
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
export type MakeProp =
    Partial<Record<ShortKey, number | string>> &
    Partial<Record<ColorKey, boolean>> &
    Record<string, any>;

export const makeStyle = (props: { [key: string]: any }) => {
    const style: TextStyle = {};
    Object.keys(props).forEach((key) => {
        const match = key.match(/^(\w+)-(\w+)$/);

        if (isColorKey(key)) {
            style.backgroundColor = key;
            return;
        }

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