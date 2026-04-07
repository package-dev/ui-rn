//@ts-nocheck
import React from 'react';
import SafeAreaView, { ForceInsetProp } from 'react-native-safe-area-view';
import { StyleProp, ViewStyle } from 'react-native';
export interface LayoutProps {
  children?: any;
  forceInset?: ForceInsetProp;
  forceInsetBot?: ForceInsetProp;
  styleBottom?: StyleProp<ViewStyle> | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  primary?: string;
  bottomInset?: boolean;

}
export default function Layout({
  children,
  forceInset = { top: 'always', horizontal: 'never', bottom: 'never' },
  forceInsetBot = { vertical: 'never' },
  styleBottom,
  style,
  primary,
  bottomInset
}: LayoutProps) {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
        },
        style,
        primary && {
          backgroundColor: primary
        }
      ]}
      forceInset={forceInset}
    >
      <SafeAreaView
        style={[
          {
            flex: 1,
            backgroundColor: 'white'
          },
          styleBottom,
        ]}
        forceInset={{ ...(bottomInset || styleBottom) && { vertical: 'never', bottom: 'always' }, ...forceInsetBot }}
      >
        {children}
      </SafeAreaView>
    </SafeAreaView >
  );
}
