import React from "react";
import SafeAreaView from "react-native-safe-area-view";
export default function Layout({ children, forceInset = { top: "always", horizontal: "never", bottom: "never" }, forceInsetBot = { vertical: "never" }, styleBot, style, disable, }) {
    if (disable)
        return <>{children}</>;
    return (<SafeAreaView style={[
            {
                flex: 1,
            },
            style,
        ]} forceInset={forceInset}>
      <SafeAreaView style={[
            {
                flex: 1,
            },
            styleBot,
        ]} forceInset={forceInsetBot}>
        {children}
      </SafeAreaView>
    </SafeAreaView>);
}
