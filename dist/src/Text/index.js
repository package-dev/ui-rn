import React, { isValidElement } from "react";
import { StyleSheet, Text as RNText } from "react-native";
import { Style } from "./Style";
import { isArray, isObject } from "underscore";
const Text = ({ style, children, ...props }) => {
    const Children = () => {
        const content = props?.lang ?? undefined;
        if (typeof content !== "undefined") {
            if (typeof content == "string" ||
                typeof content == "number" ||
                isArray(children))
                return content;
            if (typeof content == "function")
                return "Error content == 'function'";
            if (isObject(children))
                return JSON.stringify(children);
            if (isValidElement(content))
                return content;
            return React.createElement(RNText, {});
        }
        if (typeof children !== "undefined") {
            if (typeof children == "string" ||
                typeof children == "number" ||
                isArray(children))
                return children;
            if (isObject(children))
                return JSON.stringify(children);
            if (typeof children == "function")
                return "Error children == 'function'";
            if (isValidElement(children))
                return children;
            return React.createElement(RNText, {}, children);
        }
    };
    return (<RNText style={[styles.default, Style(props), style]} {...props}>
      {Children()}
    </RNText>);
};
export default Text;
const styles = StyleSheet.create({
    default: {
        fontSize: 14,
    },
});
