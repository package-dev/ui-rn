import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, Block, Icon } from './src'

export default function Example() {
  return (
    <View>
      <Block pad-40 />
      <Text pink color='red' />
      <Icon name='red' />
    </View>
  )
}
