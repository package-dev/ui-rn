import React, { PureComponent, ReactNode } from "react"
import RNLoading, { Props } from "./Loading"

/**
 * Reference to the Loading component instance
 */
const loadingRef = React.createRef<RNLoading>()

/**
 * Static Loading class that provides global access to loading functionality
 * This class allows showing and hiding the loading indicator from anywhere in the app
 * 
 * @example
 * ```tsx
 * // Show loading
 * Loading.show();
 * 
 * // Hide loading
 * Loading.hide();
 * ```
 */
export class Loading {
    /**
     * Shows the loading indicator
     */
    static show() {
        loadingRef.current?.show()
    }

    /**
     * Hides the loading indicator
     */
    static hide() {
        loadingRef.current?.hide()
    }
}

/**
 * LoadingView component that renders the Loading component
 * This component should be mounted at the root level of your app
 * to enable global loading functionality
 * 
 * @example
 * ```tsx
 * // In your App.tsx or root component
 * <LoadingView />
 * ```
 */
export default class LoadingView extends PureComponent<Props> {
    render(): ReactNode {
        return (
            <RNLoading ref={loadingRef} {...this.props} />
        )
    }
}