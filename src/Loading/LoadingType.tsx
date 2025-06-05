import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';

/**
 * Collection of loading indicator components from react-native-indicators
 * Each indicator provides a different visual style for loading states
 * 
 * Available indicators:
 * - BallIndicator: Animated bouncing balls
 * - BarIndicator: Animated bars
 * - DotIndicator: Animated dots
 * - MaterialIndicator: Material design style loading indicator
 * - PacmanIndicator: Pacman-style loading animation
 * - PulseIndicator: Pulsing animation
 * - SkypeIndicator: Skype-style loading indicator
 * - UIActivityIndicator: Native iOS-style activity indicator
 * - WaveIndicator: Wave-like animation
 */
const LoadingType = {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
}

/**
 * Type definition for loading indicator names
 * Represents the keys of the LoadingType object
 */
export type LoadingTypeI = keyof typeof LoadingType

export default LoadingType