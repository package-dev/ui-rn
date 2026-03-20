import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, Block } from './src/index'

export default function Example() {
  return (
    <View>
      <Block pad-40 />
      <Text pink color='red' />
    </View>
  )
}

const styles = StyleSheet.create({})