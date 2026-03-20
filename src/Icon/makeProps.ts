import { StyleSheet, ViewStyle } from "react-native";

enum COLORS {
    white = 1,
    red,
    blue,
    black,
    green,
    yellow,
    pink,
    gray,
    primary,
}

type ColorKey = keyof typeof COLORS;
type ColorModifiers = Partial<Record<ColorKey, boolean>>;

const PROPS = {
    mar: "margin",
    marH: "marginHorizontal",
    marV: "marginVertical",
    marL: "marginLeft",
    marT: "marginTop",
    marR: "marginRight",
    marB: "marginBottom",
    zIndex: "zIndex",
    opacity: "opacity",
    size: "size",
} as const;

export type ShortKey = keyof typeof PROPS;

export type Convert<T extends string> = Partial<
    Record<T, boolean | number | string>
>;

export type MakeProp = Convert<ShortKey> & ColorModifiers;

/** type guards */
const isColorKey = (key: string): key is ColorKey => key in COLORS;
const isShortKey = (key: string): key is ShortKey =>
    key in PROPS;

type Result = {
    size: number;
    color: string;
    name: string;
    style: ViewStyle;
};

export const makeProps = (props: Record<string, any>): Result => {
    const style: ViewStyle = {};

    const res: Omit<Result, "style"> = {
        size: props.size ?? 23,
        color: props.color ?? "gray",
        name: props.name ?? "home",
    };

    Object.keys(props).forEach((key) => {
        const match = key.match(/^(\w+)-(\w+)$/);

        // color modifier
        if (isColorKey(key)) {
            res.color = key;
            return;
        }

        if (match) {
            const rawKey = match[1];
            const rawValue = match[2];

            const value = isNaN(Number(rawValue))
                ? rawValue
                : Number(rawValue);

            if (rawKey === "size") {
                res.size = Number(rawValue);
            } else if (rawKey === "color") {
                res.color = rawValue;
            } else if (isShortKey(rawKey)) {
                (style as any)[PROPS[rawKey]] = value;
            }
        }
    });

    return {
        ...res,
        style: StyleSheet.create({ style }).style,
    };
};