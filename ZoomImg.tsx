import { Animated, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Image, ImageProps } from 'react-native'
import { ImageZoom, ZoomableRef } from '@likashefqet/react-native-image-zoom';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { isNumber } from 'underscore';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'


const { width, height } = Dimensions.get('screen')
const HIT_SLOP = { top: 16, left: 16, bottom: 16, right: 16 };
const TIME = 50
interface ZoomImageProps extends ImageProps {
    uri: string
}
interface ZoomImageState {
    visible: boolean
    disableZoonOut: boolean
}
export default class ZoomImg extends React.Component<ZoomImageProps, ZoomImageState> {
    ref = React.createRef<ZoomableRef>()
    scale: number = 1
    scale_v = 0.3
    _startZoomIn: any
    _startZoomOut: any
    constructor(props: ZoomImageProps) {
        super(props)
        this.state = {
            visible: false,
            disableZoonOut: true
        }
        this.zoomIn = this.zoomIn.bind(this)
        this.zoomOut = this.zoomOut.bind(this)
        this.startZoomIn = this.startZoomIn.bind(this)
        this.stopZoomIn = this.stopZoomIn.bind(this)
        this.startZoomOut = this.startZoomOut.bind(this)
        this.stopZoomOut = this.stopZoomOut.bind(this)

    }
    onZoom(e?: any) { }
    zoomIn() {
        const { disableZoonOut } = this.state
        if (disableZoonOut) { this.setState({ disableZoonOut: false }) }
        this.scale = this.scale + this.scale_v
        this.ref.current?.zoom({ scale: this.scale, x: width / 2, y: height / 2 })
    }
    zoomOut() {
        if (this.scale - this.scale_v <= 1) {
            this.ref.current?.zoom({ scale: 1, x: 0, y: 0 })
            this.setState({ disableZoonOut: true })
            return
        }
        this.scale = this.scale - this.scale_v
        this.ref.current?.zoom({ scale: this.scale, x: width / 2, y: height / 2 })
    }
    startZoomIn() { this._startZoomIn = setInterval(() => { this.zoomIn() }, TIME); }
    stopZoomIn() { if (this._startZoomIn) clearInterval(this._startZoomIn) }
    startZoomOut() { this._startZoomOut = setInterval(() => { this.zoomOut() }, TIME); }
    stopZoomOut() { if (this._startZoomOut) clearInterval(this._startZoomOut) }

    open() { this.setState({ visible: true }) }
    close() { this.setState({ visible: false }) }
    render(): React.ReactNode {
        const { uri, style, source } = this.props
        const { visible, disableZoonOut, } = this.state
        const styleButton = { hitSlop: HIT_SLOP }
        if (isNumber(source)) return <Image source={source} style={style} />
        //@ts-ignore
        const value = uri ?? source.uri
        return (
            <>
                <TouchableOpacity onPress={() => this.open()}>
                    <Image source={{ uri: value }} style={style} />
                </TouchableOpacity>
                <Modal visible={visible} presentationStyle='fullScreen'>
                    <StatusBarManager presentationStyle='overFullScreen' />
                    <SafeAreaView forceInset={{ top: 'always', }} style={{ flex: 1, backgroundColor: '#000' }}>
                        <GestureHandlerRootView style={styles.container}>
                            <View style={[styles.header]}>
                                <SafeAreaView style={styles.root}>
                                    <TouchableOpacity style={styles.closeButton} onPress={() => this.close()} hitSlop={HIT_SLOP}>
                                        <Text style={styles.closeText}>✕</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.closeButton} onPress={this.zoomIn} onLongPress={this.startZoomIn} onPressOut={this.stopZoomIn} {...styleButton}>
                                        <Text style={[styles.closeText, styles.actionText]}>+</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.closeButton, { backgroundColor: disableZoonOut ? "#0000001F" : "#00000077" }]} disabled={disableZoonOut} onPress={this.zoomOut} onLongPress={this.startZoomOut} onPressOut={this.stopZoomOut} {...styleButton}>
                                        <Text style={[styles.closeText, styles.actionText]}>-</Text>
                                    </TouchableOpacity>
                                </SafeAreaView>
                            </View>
                            <ImageZoom
                                ref={this.ref}
                                uri={value}
                                minScale={1}
                                maxScale={3}
                                // scale={4}
                                doubleTapScale={3}
                                isSingleTapEnabled
                                isDoubleTapEnabled
                                onInteractionStart={() => {
                                    console.log('onInteractionStart');
                                    this.onZoom();
                                }}
                                onInteractionEnd={() => console.log('onInteractionEnd')}
                                onPanStart={() => console.log('onPanStart')}
                                onPanEnd={() => console.log('onPanEnd')}
                                onPinchStart={() => console.log('onPinchStart')}
                                onPinchEnd={() => console.log('onPinchEnd')}
                                onSingleTap={() => console.log('onSingleTap')}
                                onDoubleTap={(zoomType) => {
                                    console.log('onDoubleTap', zoomType);
                                    this.onZoom(zoomType);
                                }}
                                onProgrammaticZoom={(zoomType) => {
                                    console.log('onZoom', zoomType);
                                    this.onZoom(zoomType);
                                }}
                                style={styles.image}
                                onResetAnimationEnd={(finished, values) => {
                                    console.log('onResetAnimationEnd', finished);
                                    console.log('lastScaleValue:', values?.SCALE.lastValue);
                                    // onAnimationEnd(finished);
                                }}
                                resizeMode="contain"
                            />
                        </GestureHandlerRootView >
                    </SafeAreaView>
                </Modal>
            </>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    image: {
        width: width,
        height: height,
        resizeMode: 'contain'
    },
    header: {
        position: "absolute",
        width: "100%",
        zIndex: 1,
        top: 0,
    },
    action: {
        position: "absolute",
        width: "100%",
        zIndex: 1,
        top: 100,
    },
    root: {
        alignItems: "flex-end",
    },
    closeButton: {
        marginRight: 8,
        marginTop: 8,
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 22,
        backgroundColor: "#00000077",
    },
    closeText: {
        lineHeight: 22,
        fontSize: 19,
        textAlign: "center",
        color: "#FFF",
        includeFontPadding: false,
    },
    actionButton: {
        marginRight: 5,
        marginTop: 8,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 22,
        backgroundColor: "#00000077",
    },
    actionText: {
        fontSize: 24
    }
})
const StatusBarManager = ({ presentationStyle, }: { presentationStyle?: "fullScreen" | "pageSheet" | "formSheet" | "overFullScreen" | undefined; }) => {
    if (Platform.OS === "ios" || presentationStyle !== "overFullScreen") {
        return null;
    }
    //Can't get an actual state of app status bar with default RN. Gonna rely on "presentationStyle === overFullScreen" prop and guess application status bar state to be visible in this case.
    StatusBar.setHidden(true);
    useEffect(() => {
        StatusBar.setHidden(true);
        return () => StatusBar.setHidden(false);
    }, []);
    return null;
};