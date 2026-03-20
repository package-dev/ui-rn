import { TextStyle } from "react-native";
declare enum COLORS {
    "white" = 1,
    "red" = 2,
    "blue" = 3,
    "black" = 4,
    "green" = 5,
    "yellow" = 6,
    "pink" = 7,
    "gray" = 8,
    "primary" = 9
}
declare const PROPS: {
    readonly bg: "backgroundColor";
    readonly background: "backgroundColor";
    readonly color: "color";
    readonly w: "width";
    readonly width: "width";
    readonly minW: "minWidth";
    readonly maxW: "maxWidth";
    readonly h: "height";
    readonly height: "height";
    readonly minH: "minHeight";
    readonly maxH: "maxHeight";
    readonly pad: "padding";
    readonly padH: "paddingHorizontal";
    readonly padV: "paddingVertical";
    readonly padL: "paddingLeft";
    readonly padT: "paddingTop";
    readonly padR: "paddingRight";
    readonly padB: "paddingBottom";
    readonly mar: "margin";
    readonly marH: "marginHorizontal";
    readonly marV: "marginVertical";
    readonly marL: "marginLeft";
    readonly marT: "marginTop";
    readonly marR: "marginRight";
    readonly marB: "marginBottom";
    readonly border: "borderWidth";
    readonly borderW: "borderWidth";
    readonly borderR: "borderRadius";
    readonly borderC: "borderColor";
    readonly borderLW: "borderLeftWidth";
    readonly borderTW: "borderTopWidth";
    readonly borderRW: "borderRightWidth";
    readonly borderBW: "borderBottomWidth";
    readonly flex: "flex";
    readonly zIndex: "zIndex";
    readonly left: "left";
    readonly top: "top";
    readonly bottom: "bottom";
    readonly right: "right";
    readonly opacity: "opacity";
    readonly size: "fontSize";
};
export type ColorKey = keyof typeof COLORS;
export type ShortKey = keyof typeof PROPS;
export type Convert<T extends string> = Partial<Record<T, boolean | number | string>>;
export type ColorModifiers = Partial<Record<keyof typeof COLORS, boolean>>;
export type MakeProp = Convert<ShortKey> & ColorModifiers;
export declare const makeStyle: (props: {
    [key: string]: any;
}) => TextStyle;
export {};
