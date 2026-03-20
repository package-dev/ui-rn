import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
/**
 * Collection of React Native Vector Icons
 * Provides access to various icon sets from react-native-vector-icons
 */
export declare const RNVectorIcon: {
    Ionicons: typeof Ionicons;
    AntDesign: typeof Ionicons;
    Entypo: typeof Ionicons;
    EvilIcons: typeof Ionicons;
    MaterialIcons: typeof Ionicons;
    MaterialCommunityIcons: typeof Ionicons;
    FontAwesome: typeof Ionicons;
    FontAwesome5: typeof FontAwesome5;
    SimpleLineIcons: typeof Ionicons;
    Feather: typeof Ionicons;
    Octicons: typeof Ionicons;
    Fontisto: typeof Ionicons;
};
export type IconType = keyof typeof RNVectorIcon;
import { Props } from "./PropsStyle";
export default class IconApp extends React.PureComponent<Props> {
    static defaultProps: Props;
    res: {
        color: string;
        style: any;
        size: number;
    };
    constructor(props: Props);
    render(): React.JSX.Element | null;
}
