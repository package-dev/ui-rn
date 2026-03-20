import React from "react";
import { TouchableOpacity } from "react-native";
import { Style } from "./Style";
import { Props } from "./Props";

type TouchableOpacityRef = React.ComponentRef<typeof TouchableOpacity>;

/**
 * Touch component that extends TouchableOpacity with additional styling capabilities
 * Supports gradient backgrounds and custom styling options
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <Touch onPress={() => console.log('pressed')}>
 *   <Text>Press me</Text>
 * </Touch>
 *
 *
 * // With custom styling
 * <Touch
 *   mid={true}
 *   row={true}
 *   paddingOption={{ all: 10 }}
 *   onPress={() => console.log('pressed')}
 * >
 *   <Text>Styled Button</Text>
 * </Touch>
 * ```
 */
const Touch = React.forwardRef<TouchableOpacityRef, Props>(
  ({ style, ...props }, ref) => {
    if (props?.hidden) return <></>;
    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={props.activeOpacity || 0.5}
        style={[Style(props), style]}
        {...props}
      >
        {props.children}
      </TouchableOpacity>
    );
  },
);

export default Touch;
