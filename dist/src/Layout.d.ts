import React from "react";
import { ForceInsetProp } from "react-native-safe-area-view";
import { StyleProp, ViewStyle } from "react-native";
export interface LayoutAppProps {
    children?: any;
    forceInset?: ForceInsetProp;
    forceInsetBot?: ForceInsetProp;
    styleBot?: StyleProp<ViewStyle> | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    isBack?: boolean;
    disable?: boolean;
}
export default function Layout({ children, forceInset, forceInsetBot, styleBot, style, disable, }: LayoutAppProps): React.JSX.Element;
