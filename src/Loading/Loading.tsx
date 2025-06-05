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

/**
 * Props for the Loading component
 * @interface Props
 */
export type Props = {
    /** Custom style for the loading box container */
    boxStyle?: ViewProps['style']
    /** Custom style for the main container */
    containerStyle?: ViewProps['style']
}

/**
 * Internal state of the Loading component
 * @interface State
 */
type State = {
    /** Controls the visibility of the loading modal */
    visible: boolean,
    /** Determines if the loading can be dismissed by touch */
    touch: boolean,
    /** Current progress value (0-100) */
    progress: number,
    /** Controls whether to show progress indicator */
    progressShow: boolean,
    /** Type of loading indicator to display */
    type: LoadingTypeI
}

/**
 * Loading component that displays a modal with customizable loading indicators
 * and optional progress tracking.
 * 
 * @example
 * ```tsx
 * const loading = useRef<Loading>(null);
 * 
 * // Show loading
 * loading.current?.show();
 * 
 * // Show loading with progress
 * loading.current?.openProgress({ progress: 50, progressShow: true });
 * 
 * // Hide loading
 * loading.current?.hide();
 * ```
 */
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

    /**
     * Shows the loading modal
     * @param touch - Whether the loading can be dismissed by touch (default: true)
     */
    show(touch = true) {
        this.setState({ visible: true, touch })
    }

    /**
     * Hides the loading modal and resets progress
     */
    hide() {
        this.setState({ visible: false, progress: 0, progressShow: false })
    }

    /**
     * Updates the progress state
     * @param e - Object containing progress updates
     */
    openProgress(e: any) { this.setState(prev => ({ ...prev, ...e })) }

    /**
     * Handles touch events to dismiss the loading modal
     */
    onPressOut() {
        if (this.state.touch) {
            this.hide()
        }
    }

    componentDidMount(): void {
    }
    componentWillUnmount(): void {
    }

    /**
     * Renders the loading indicator based on the selected type
     * @returns React element for the loading indicator
     */
    renderIcon() {
        if (this.state.type) return React.createElement(LoadingType[this.state.type], { color: '#4481EB' })
        return null
    }

    /**
     * Renders the progress text if progressShow is true
     * @returns React element for the progress text
     */
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
