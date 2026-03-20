import { StyleSheet } from "react-native";
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
};
/** type guards */
const isColorKey = (key) => key in COLORS;
const isShortKey = (key) => key in PROPS;
export const makeProps = (props) => {
    const style = {};
    const res = {
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
            }
            else if (rawKey === "color") {
                res.color = rawValue;
            }
            else if (isShortKey(rawKey)) {
                style[PROPS[rawKey]] = value;
            }
        }
    });
    return {
        ...res,
        style: StyleSheet.create({ style }).style,
    };
};
