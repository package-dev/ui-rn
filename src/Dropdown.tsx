import React from "react";
import { Platform, StatusBar } from "react-native";
import DropdownAlert from "react-native-dropdownalert";
const ref = React.createRef<DropdownAlert>()

export default function AlertApp() {
    return (
        <DropdownAlert
            ref={ref}
            inactiveStatusBarBackgroundColor={'green'}
            updateStatusBar={false}
            errorColor={'#9A9891FFFF'}
            successColor={'#238209'}
            // errorImageSrc={Images('logo')}
            // successImageSrc={Images('logo')}
            imageStyle={{
                padding: 8,
                width: 36,
                height: 36,
                alignSelf: 'center',
                borderRadius: 23,
            }}
            elevation={40}
            containerStyle={{ backgroundColor: 'pink' }}
            closeInterval={1300}
            showCancel={false}
            wrapperStyle={{ marginTop: Platform.OS == "ios" ? 0 : StatusBar.currentHeight }}
        />
    )
}
export class AlertPush {
    static warn(title: string = 'title', message: string = '') {
        ref.current?.alertWithType('warn', title, message)
    }
    static error(title: string = 'title', message: string = '') {
        ref.current?.alertWithType('error', title, message)
    }
    static success(title: string = 'title', message: string = '') {
        ref.current?.alertWithType('success', title, message)
    }
}