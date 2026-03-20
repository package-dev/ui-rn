import { ViewStyle } from "react-native";
declare enum COLORS {
    white = 1,
    red = 2,
    blue = 3,
    black = 4,
    green = 5,
    yellow = 6,
    pink = 7,
    gray = 8,
    primary = 9
}
type ColorKey = keyof typeof COLORS;
type ColorModifiers = Partial<Record<ColorKey, boolean>>;
declare const PROPS: {
    readonly mar: "margin";
    readonly marH: "marginHorizontal";
    readonly marV: "marginVertical";
    readonly marL: "marginLeft";
    readonly marT: "marginTop";
    readonly marR: "marginRight";
    readonly marB: "marginBottom";
    readonly zIndex: "zIndex";
    readonly opacity: "opacity";
    readonly size: "size";
};
export type ShortKey = keyof typeof PROPS;
export type Convert<T extends string> = Partial<Record<T, boolean | number | string>>;
export type MakeProp = Convert<ShortKey> & ColorModifiers;
type Result = {
    size: number;
    color: string;
    name: string;
    style: ViewStyle;
};
export declare const makeProps: (props: Record<string, any>) => Result;
export {};
