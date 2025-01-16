import { StyleSheet } from "react-native";
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
type ColorModifiers = Partial<Record<keyof typeof COLORS, boolean>>;

const SHORT_VARIATIONS = {
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
    //
    size: 'fontSize'
};
export type ShortKey = keyof typeof SHORT_VARIATIONS;
export type Convert<T extends string> = Partial<Record<T, boolean | number | string>>
export type MakeProp = Convert<ShortKey> & ColorModifiers

export const makeStyle = (props: { [key: string]: any }) => {
    const style: { [key: string]: number | string } = {};
    Object.keys(props).forEach((key) => {
        const match = key.match(/^(\w+)-(\w+)$/) as string[]
        if (COLORS[key]) {
            style['color'] = key
        }
        else if (match) {
            const value = isNaN(parseInt(match[2], 10)) ? match[2] : parseInt(match[2], 10)
            if (SHORT_VARIATIONS[match[1]]) style[SHORT_VARIATIONS[match[1]]] = value
            else style[match[1]] = value
        }
        else {
            if (SHORT_VARIATIONS[key]) {
                style[SHORT_VARIATIONS[key]] = props[key]
            }
            // else style[key] = props[key]
        }
    });
    return StyleSheet.create({ style }).style;
};
