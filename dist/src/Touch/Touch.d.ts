import React from "react";
import { Props } from "./Props";
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
declare const Touch: React.ForwardRefExoticComponent<Props & React.RefAttributes<import("react-native").View>>;
export default Touch;
