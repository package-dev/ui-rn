import React from 'react'
import { TextProps, TextStyle } from 'react-native'
import {   ILanguage } from '../config'
import { MakeProp } from './makeStyle'
interface PropsParent {
    children?: React.ReactNode
    bold?: boolean | TextStyle['fontWeight']
    center?: boolean
    italic?: boolean
    underline?: boolean
    color?: string 
    toUpperCase?: boolean
    toLowerCase?: boolean
    background?: string  
}
//@ts-ignore
export interface Props extends TextProps, PropsParent, MakeProp {
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