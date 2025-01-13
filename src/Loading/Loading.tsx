import React, { PureComponent } from 'react'
import {
    Dimensions,
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewProps,
    Text
} from 'react-native'
import LoadingType, { LoadingTypeI } from './LoadingType'
export type Props = {
    boxStyle?: ViewProps['style']
    containerStyle?: ViewProps['style']
}
type State = {
    visible: boolean,
    touch: boolean,
    progress: number,
    progressShow: boolean,
    type: LoadingTypeI
}
export default class Loading extends PureComponent<Props, State> {
    state: State
    constructor(props: any) {
        super(props)
        this.state = {
            visible: false,
            touch: false,
            progress: 0,
            progressShow: false,
            type: 'BallIndicator'
        }
    }
    show(touch = true) {
        this.setState({ visible: true, touch })
    }
    hide() {
        this.setState({ visible: false, progress: 0, progressShow: false })
    }
    openProgress(e: any) { this.setState(prev => ({ ...prev, ...e })) }
    onPressOut() {
        if (this.state.touch) {
            this.hide()
        }
    }

    componentDidMount(): void {
    }
    componentWillUnmount(): void {
    }
    renderIcon() {
        if (this.state.type) return React.createElement(LoadingType[this.state.type], { color: '#4481EB' })
        return null
    }
    renderProgress() {
        if (this.state.progressShow) {
            return (<Text style={styles.text}>{this.state.progress}{'%'}</Text>)
        }
        return null
    }
    render() {
        return (
            <Modal
                visible={this.state.visible}
                transparent
                style={{ zIndex: 999999 }}
            >
                <TouchableOpacity onPress={() => this.onPressOut()}
                    activeOpacity={1} style={[styles.container, this.props.containerStyle]}>
                    <View style={[styles.box, this.props.boxStyle]}>
                        {this.renderProgress()}
                        {this.renderIcon()}
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#06060660',
    },
    box: {
        width: Dimensions.get('screen').width * 0.25,
        height: Dimensions.get('screen').width * 0.25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        shadowColor: '#000',
        elevation: 3,
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.1,
    },
    text: {
        position: 'absolute',
        fontSize: 10,
        color: '#4481EB'
    },
})
