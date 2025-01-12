import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Polygon, Svg } from 'react-native-svg'
export default function Hexagon({ width = 100, stroke = "black", strokeWidth = "2", fill = "lightblue" }) {
    const diameter = width
    const radius = (diameter / 2)
    const m = (Math.sqrt(3) / 2) * radius// Math.sin(60) * radius //-> x
    const n = (1 / 2) * radius//Math.cos(60) * radius//-> y
    const hexagonPoints = [
        { x: radius, y: 0 },
        { x: radius + m, y: radius - n },//60
        { x: radius + m, y: radius + n },
        { x: radius, y: diameter },//180
        { x: radius - m, y: radius + n },
        { x: radius - m, y: radius - n },
        { x: radius, y: 0 },
    ]
    const points = hexagonPoints.map(point => `${point.x},${point.y}`).join(' ');
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Svg height={diameter} width={width}>
                <Polygon points={points} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({})