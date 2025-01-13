import React, { PureComponent, ReactNode } from "react"
import RNLoading, { Props } from "./Loading"

const loadingRef = React.createRef<RNLoading>()
export class Loading {
    static show() {
        loadingRef.current?.show()
    }
    static hide() {
        loadingRef.current?.hide()
    }
}
export default class LoadingView extends PureComponent<Props> {
    render(): ReactNode {
        return (

            <RNLoading ref={loadingRef} {...this.props} />

        )

    }
}