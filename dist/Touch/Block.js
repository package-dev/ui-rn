import React from "react";
import { View } from "react-native";
import { Style } from "./Style";
const Block = React.forwardRef(({ style, ...props }, ref) => {
    if (props?.hidden)
        return <></>;
    return (<View ref={ref} style={[Style(props), style]} {...props}>
        {props.children}
      </View>);
});
export default Block;
