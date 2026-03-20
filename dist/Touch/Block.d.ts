import React from "react";
import { View } from "react-native";
import { Props } from "./Props";
declare const Block: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<View>>;
export default Block;
