import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Block } from 'ui-rn';
export default function App() {
    return (
        <View style={styles.container}>
            <Text>App</Text>
            <Block></Block>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});