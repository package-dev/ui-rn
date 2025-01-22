### Install:

```js
npm install ui-rn
```

### Exanmple :

```tsx
import {Block, Text, Icon, Touch, Layout, LoadingView} from 'ui-rn';
import React from 'react';
export default function test() {
  return (
    <Layout>
      <Block
        mar-5
        pad-5
        red
        background={['red', 'blue']}
        positionOption={{top: 10, left: 5}}
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
  );
}
```

### Block Props:

| Prop             | Description                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| borderUpRadius   | number                                                                                                     |
| borderDownRadius | number                                                                                                     |
| alignItems       | FlexStyle['alignItems']                                                                                    |
| alignSelf        | FlexStyle['alignSelf']                                                                                     |
| justifyContent   | FlexStyle['justifyContent']                                                                                |
| borderStyle      | ViewStyle['borderStyle']                                                                                   |
| opacity          | ViewStyle['opacity']                                                                                       |
| overflow         | ViewStyle['overflow']                                                                                      |
| w100             | boolean                                                                                                    |
| h100             | boolean                                                                                                    |
| mid              | boolean                                                                                                    |
| row              | boolean                                                                                                    |
| alignCenter      | boolean                                                                                                    |
| justifyCenter    | boolean                                                                                                    |
| borderCircle     | boolean                                                                                                    |
| centerBetween    | boolean                                                                                                    |
| justifyBetween   | boolean                                                                                                    |
| overHidden       | boolean                                                                                                    |
| square           | number                                                                                                     |
| width100         | boolean                                                                                                    |
| height100        | boolean                                                                                                    |
| background       | Array < IColor > Array < (string) > string                                                                 |
| gradient         | 'vertical', 'horizontal'                                                                                   |
| flexOne          | boolean                                                                                                    |
| shadowColor      | string, boolean                                                                                            |
| borderOption     | { top?: number, left?: number, right?: number, bottom?: number, color?: string }                           |
| positionOption   | { top?: number, left?: number, right?: number, bottom?: number }                                           |
| paddingOption    | { all?: number, top?: number, left?: number, right?: number, bottom?: number }                             |
| paddingFlex      | { vertical?: number, horizontal?: number }                                                                 |
| marginFlex       | { vertical?: number, horizontal?: number }                                                                 |
| marginOption     | { all?: number, top?: number, left?: number, right?: number, bottom?: number }                             |
| shadowOption     | { color?: string, width?: number, height?: number, opacity?: number, radius?: number, elevation?: number } |
| styleChar        | string                                                                                                     |
| widthScreen      | boolean                                                                                                    |
| heightScreen     | boolean                                                                                                    |

### Block style props:

| Prop Style | ViewStyle         |
| ---------- | ----------------- |
| bg         | backgroundColor   |
| background | backgroundColor   |
| w          | width             |
| width      | width             |
| minW       | minWidth          |
| maxW       | maxWidth          |
| h          | height            |
| height     | height            |
| minH       | minHeight         |
| maxH       | maxHeight         |
| pad        | padding           |
| padH       | paddingHorizontal |
| padV       | paddingVertical   |
| padL       | paddingLeft       |
| padT       | paddingTop        |
| padR       | paddingRight      |
| padB       | paddingBottom     |
| mar        | margin            |
| marH       | marginHorizontal  |
| marV       | marginVertical    |
| marL       | marginLeft        |
| marT       | marginTop         |
| marR       | marginRight       |
| marB       | marginBottom      |
| border     | borderWidth       |
| borderW    | borderWidth       |
| borderR    | borderRadius      |
| borderC    | borderColor       |
| borderLW   | borderLeftWidth   |
| borderTW   | borderTopWidth    |
| borderRW   | borderRightWidth  |
| borderBW   | borderBottomWidth |
| flex       | flex              |
| zIndex     | zIndex            |
| left       | left              |
| top        | top               |
| bottom     | bottom            |
| right      | right             |
| opacity    | opacity           |

### Text :

| Prop Style  | ViewStyle                         |
| ----------- | --------------------------------- |
| bold        | boolean , TextStyle['fontWeight'] |
| center      | boolean                           |
| italic      | boolean                           |
| underline   | boolean                           |
| color       | string                            |
| toUpperCase | boolean                           |
| toLowerCase | boolean                           |
| background  | string                            |

### Icon :

| Prop Style | ViewStyle |
| ---------- | --------- |
| center     | boolean   |
| size       | number    |
| color      | string    |
| name       | string    |
| type       | string    |

## Type
| Type |
| ---------- |
|Ionicons|
|AntDesign|
|Entypo|
|EvilIcons|
|MaterialIcons|
|MaterialCommunityIcons|
|FontAwesome|
|FontAwesome5|
|SimpleLineIcons|
|Feather|
|Octicons|
|Fontisto|
