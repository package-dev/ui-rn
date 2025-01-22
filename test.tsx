import { Block, Text, Icon, Touch, Layout, LoadingView } from 'ui-rn';
import React from 'react'
export default function test() {
    return (
        <Layout>
            <Block
                mar-5
                pad-5
                red
                background={['red', 'blue']}
                positionOption={{ top: 10, left: 5 }}
                alignCenter
                borderCircle
                mid
                row
                width-150
                height-300>
                <Text size-14 red toUpperCase italic bold>
                    Hello
                </Text>
                <Icon name="home" size-45 type="MaterialIcons" />
            </Block>
        </Layout>
    )
}
