import React, { ReactNode, useCallback } from "react";
import { Animated, TouchableOpacity, ViewProps } from "react-native";
import { Style } from "./Style";
import { Props } from "./Props";

interface ButtonScaleProps extends Props {
  scaleValue?: number;
  scale?: boolean;
  containerStyle?: ViewProps["style"];
}
type TouchableOpacityRef = React.ComponentRef<typeof TouchableOpacity>;

const Touch = React.forwardRef<TouchableOpacityRef, ButtonScaleProps>(
  ({ scaleValue = 1.1, style, background, containerStyle, ...props }, ref) => {
    if (props?.hidden) return <></>;
    const animatedButtonScale = React.useRef(new Animated.Value(1)).current;
    const onPressIn = useCallback(() => {
      Animated.spring(animatedButtonScale, {
        toValue: scaleValue,
        useNativeDriver: true,
      }).start();
    }, [scaleValue]);
    const onPressOut = useCallback(() => {
      Animated.spring(animatedButtonScale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }, []);
    return (
      <TouchableOpacity
        ref={ref}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        activeOpacity={props.activeOpacity || 1}
        style={containerStyle}
        {...props}
      >
        <Animated.View
          style={[
            { transform: [{ scale: animatedButtonScale }] },
            Style(props),
            style,
          ]}
        >
          {props.children}
        </Animated.View>
      </TouchableOpacity>
    );
  },
);

export default Touch;
