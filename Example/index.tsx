import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Block } from 'ui-rn';
import { LinearGradient } from 'react-native-linear-gradient';
export default function App() {
    return (
        <>

            <LinearGradient
                colors={['#FF6B6B', '#4ECDC4']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <TouchableOpacity style={{ padding: 20, borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>Gradient Block</Text>
                </TouchableOpacity>
            </LinearGradient>
            <Text style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 16, color: 'blue', alignItems: 'center' }}></Text>
            <TouchableOpacity
                style={{
                    padding: 10,
                    backgroundColor:'blue',
                    borderRadius: 10,
                }}
            >
                <Text style={{ color: 'white', alignItems: 'center' }}>Press Me</Text>
            </TouchableOpacity>
        </>
    );
}

