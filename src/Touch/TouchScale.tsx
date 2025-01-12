
import React, { ReactNode, useCallback } from 'react';
import { Animated, TouchableOpacity, ViewProps, } from 'react-native';
import { Style } from './Style'
import { Props } from './Props'
import { isArray } from 'underscore';
import LinearGradient from 'react-native-linear-gradient'
import isColor from "validate-color";

interface ButtonScaleProps extends Props {
    scaleValue?: number
    scale?: boolean
    containerStyle?: ViewProps['style']
}
type TouchableOpacityRef = React.ComponentRef<typeof TouchableOpacity>

const Touch = React.forwardRef<TouchableOpacityRef, ButtonScaleProps>(({ scaleValue = 1.1, style, background, containerStyle, ...props }, ref) => {
    if (props?.hidden) return <></>
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
    if (isArray(background) && background.length > 1 && background.every(i => isColor(i)))
        return (

            <TouchableOpacity
                ref={ref}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                {...props}
                activeOpacity={props.activeOpacity || 1}
            >
                <Animated.View style={[{ transform: [{ scale: animatedButtonScale }] }, Style(props), style]}>
                    <LinearGradient
                        colors={background}
                        start={props.gradient == "vertical" ? { x: 0, y: 0 } : { x: 0, y: 0 }}
                        end={props.gradient == "vertical" ? { x: 0, y: 1 } : { x: 1, y: 0 }}
                        style={[Style(props), style,]}
                    >
                        {props.children}
                    </LinearGradient>
                </Animated.View>
            </TouchableOpacity>

        )
    return (
        <TouchableOpacity
            ref={ref}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            activeOpacity={props.activeOpacity || 1}
            style={containerStyle}
            {...props}>
            <Animated.View style={[{ transform: [{ scale: animatedButtonScale }] }, Style(props), style]}>
                {props.children}
            </Animated.View>
        </TouchableOpacity>
    )
});

export default Touch