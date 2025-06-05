import { StyleSheet } from "react-native";
import { isNaN, isNumber } from "underscore";

/**
 * Enum of predefined color names that can be used for background colors
 */
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

/** Type for color modifiers that can be used as boolean flags */
type ColorModifiers = Partial<Record<keyof typeof COLORS, boolean>>;

/**
 * Mapping of short property names to their full React Native style property names
 * This allows for shorter, more convenient style property names
 */
const SHORT_VARIATIONS = {
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
    opacity: 'opacity'
};

/** Type for short property names */
export type ShortKey = keyof typeof SHORT_VARIATIONS;

/** Type for converting string keys to a record of boolean/number/string values */
export type Convert<T extends string> = Partial<Record<T, boolean | number | string>>

/** Type combining short property names and color modifiers */
export type MakeProp = Convert<ShortKey> & ColorModifiers

/**
 * Creates a React Native style object from props using short property names
 * Supports color names, hyphenated properties, and direct style properties
 * 
 * @param props - Object containing style properties
 * @returns React Native style object
 * 
 * @example
 * ```tsx
 * // Using color names
 * makeStyle({ white: true }) // { backgroundColor: 'white' }
 * 
 * // Using hyphenated properties
 * makeStyle({ 'pad-10': true }) // { padding: 10 }
 * 
 * // Using direct properties
 * makeStyle({ width: 100 }) // { width: 100 }
 * ```
 */
export const makeStyle = (props: { [key: string]: any }) => {
    const style: { [key: string]: number | string } = {};
    Object.keys(props).forEach((key) => {
        const match = key.match(/^(\w+)-(\w+)$/) as string[]
        // console.debug(key, match)
        if (COLORS[key]) {
            style['backgroundColor'] = key
        }
        else if (match) {
            const value = isNaN(parseInt(match[2], 10)) ? match[2] : parseInt(match[2], 10)
            // console.debug('value', value)
            // console.debug('value', parseInt(match[2], 10))
            // console.debug('value', isNumber(parseInt(match[2], 10)))
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
