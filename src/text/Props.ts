import React from 'react'
import { TextProps, TextStyle } from 'react-native'
import { IColor, ILanguage } from '../config'
interface PropsParent {
    children?: React.ReactNode
    bold?: boolean | TextStyle['fontWeight']
    center?: boolean
    italic?: boolean
    underline?: boolean
    size?: number | Array<size>
    color?: string | Array<IColor>
    toUpperCase?: boolean
    toLowerCase?: boolean
    flex1?: boolean; flex2?: boolean; flex3?: boolean; flex4?: boolean; flex5?: boolean; flex6?: boolean; flex7?: boolean; flex8?: boolean; flex9?: boolean;
    background?: string | Array<ILanguage>
}
export interface Props extends TextProps, PropsParent {
    backgroundColor?: string
    primary?: boolean
    white?: boolean
    red?: boolean
    blue?: boolean
    green?: boolean
    yellow?: boolean
    pink?: boolean
    gray?: boolean
    black?: boolean
    /** Lang in file VI/EN */
    lang?: ILanguage
}
type size = 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25