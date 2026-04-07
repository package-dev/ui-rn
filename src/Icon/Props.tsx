import {
    RNVectorIcon,
} from "./index"
import {
    FlexStyle,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native'
import { MakeProp } from "./makeProps";
export interface Props extends MakeProp {
    name: string
    size?: number
    type?: keyof typeof RNVectorIcon
    onPress?: () => void
    styleContainer?: StyleProp<ViewStyle>
    style?: StyleProp<TextStyle>
    alignSelf?: FlexStyle['alignSelf']
    disabled?: boolean
    activeOpacity?: number
    color?: string

}


