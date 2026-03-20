import { StyleSheet } from "react-native";
import { isNaN } from "underscore";
var COLORS;
(function (COLORS) {
    COLORS[COLORS["white"] = 1] = "white";
    COLORS[COLORS["red"] = 2] = "red";
    COLORS[COLORS["blue"] = 3] = "blue";
    COLORS[COLORS["black"] = 4] = "black";
    COLORS[COLORS["green"] = 5] = "green";
    COLORS[COLORS["yellow"] = 6] = "yellow";
    COLORS[COLORS["pink"] = 7] = "pink";
    COLORS[COLORS["gray"] = 8] = "gray";
    COLORS[COLORS["primary"] = 9] = "primary";
})(COLORS || (COLORS = {}));
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
const isColorKey = (key) => {
    return key in COLORS;
};
const isShortKey = (key) => {
    return key in PROPS;
};
export const makeStyle = (props) => {
    const style = {};
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
                style[PROPS[rawKey]] = value;
            }
            else {
                style[rawKey] = value;
            }
            return;
        }
        // 🔹 Normal props
        if (isShortKey(key)) {
            style[PROPS[key]] = props[key];
        }
    });
    return StyleSheet.create({ style }).style;
};
