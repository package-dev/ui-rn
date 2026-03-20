import React from "react";
import { View } from "react-native";
import { Style } from "./Style";
import { Props } from "./Props";

type TouchableOpacityRef = React.ComponentRef<typeof View>;
const Block = React.forwardRef<View, Props>(
  ({ style, ...props }, ref) => {
    if (props?.hidden) return <></>;
    return (
      <View ref={ref} style={[Style(props), style]} {...props}>
        {props.children}
      </View>
    );
  },
);

export default Block;
