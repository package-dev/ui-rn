import React from "react";
import { ViewProps } from "react-native";
import { Props } from "./Props";
interface ButtonScaleProps extends Props {
    scaleValue?: number;
    scale?: boolean;
    containerStyle?: ViewProps["style"];
}
declare const Touch: React.ForwardRefExoticComponent<Omit<ButtonScaleProps, "ref"> & React.RefAttributes<import("react-native").View>>;
export default Touch;
