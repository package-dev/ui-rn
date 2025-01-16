import { StyleSheet } from "react-native";
import { isNaN, isNumber } from "underscore";
enum COLORS { "white" = 1, "red", "blue", "black", "green", "yellow", "pink", "gray", "primary" }
enum NAMES { "ic_back" = "add-circle", }
type ColorModifiers = Partial<Record<keyof typeof COLORS, boolean>>;
type NameModifiers = Partial<Record<keyof typeof NAMES, boolean>>;

const SHORT_VARIATIONS = {
    mar: "margin",
    marH: "marginHorizontal",
    marV: "marginVertical",
    marL: "marginLeft",
    marT: "marginTop",
    marR: "marginRight",
    marB: "marginBottom",
    zIndex: 'zIndex',
    opacity: 'opacity',
    size: 'size',

};
export type ShortKey = keyof typeof SHORT_VARIATIONS;
export type Convert<T extends string> = Partial<Record<T, boolean | number | string>>
export type MakeProp = Convert<ShortKey> & ColorModifiers & NameModifiers

export const makeProps = (props: { [key: string]: any }) => {
    const style: { [key: string]: number | string } = {};
    let res = { size: props.size ?? 23, color: props.color ?? 'gray', name: props.name ?? 'home' }
    Object.keys(props).forEach((key) => {
        const match = key.match(/^(\w+)-(\w+)$/) as string[]
        // console.debug('COLORS11', key, COLORS[key])
        if (COLORS[key]) {
            console.debug('COLORS22', match)
            res['color'] = key
        }
        if (NAMES[key]) {
            let match = key.match(/^(\w+)_(\w+)$/) as string[]
            res['name'] = NAMES[match[1]]
        }
        else if (match) {
            const value = isNaN(parseInt(match[2], 10)) ? match[2] : parseInt(match[2], 10)
            if (match[1] == 'size') res['size'] = parseInt(match[2], 10)
            else if (match[1] == 'color') res['color'] = match[2]
            else if (SHORT_VARIATIONS[match[1]]) style[SHORT_VARIATIONS[match[1]]] = value
        }

    });
    return { ...res, style: StyleSheet.create({ style }).style }
};
