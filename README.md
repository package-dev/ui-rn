# <div align="center">UI-RN</div>

<div align="center">
  <img src="https://img.shields.io/npm/v/ui-rn.svg?version=1.0.17" alt="npm version" />
  <img src="https://img.shields.io/npm/dm/ui-rn.svg" alt="npm downloads" />
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license" />
</div>

<div align="center">
  <h3>A powerful and flexible React Native UI component library</h3>
  <p>Build beautiful mobile applications quickly and efficiently</p>
</div>

<details>
<summary><h2>📑 Table of Contents</h2></summary>

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Components](#components)
  - [Block](#block)
  - [Text](#text)
  - [Icon](#icon)
  - [Layout](#layout)
  - [LoadingView](#loadingview)
- [Component Props](#component-props)
</details>

## 🚀 Installation

```bash
npm install ui-rn
```

## ⚡ Quick Start

Here's a simple example to get you started:

```tsx
import {Block, Text, Icon, Touch, Layout, LoadingView} from 'ui-rn';
import React from 'react';

export default function Example() {
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

## 🎨 Components

### Block

<details>
<summary>The <code>Block</code> component is a versatile container that supports various styling options and layouts.</summary>

#### Example

```tsx
// Basic Block
<LinearGradient
    colors={['#FF6B6B', '#4ECDC4']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
>
    <TouchableOpacity style={{ padding: 20, borderRadius: 10 }}>
        <Text style={{ color: 'white' }}>Gradient Block</Text>
    </TouchableOpacity>
</LinearGradient>


// Block with gradient
<Block
  background={['#FF6B6B', '#4ECDC4']}
  gradient="vertical"
  pad-20
  borderR-10
>
  <Text white>Gradient Block</Text>
</Block>

// Block with shadow
<Block
  shadowOption={{
    color: '#000',
    width: 0,
    height: 2,
    opacity: 0.25,
    radius: 3.84,
    elevation: 5
  }}
  pad-15
  bg-white
>
  <Text>Shadow Block</Text>
</Block>
```

#### Block Props

| Prop             | Type                                                                                                       | Description                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------- |
| borderUpRadius   | number                                                                                                     | Border radius for top corners    |
| borderDownRadius | number                                                                                                     | Border radius for bottom corners |
| alignItems       | FlexStyle['alignItems']                                                                                    | Flex alignment for items         |
| alignSelf        | FlexStyle['alignSelf']                                                                                     | Self alignment in flex container |
| justifyContent   | FlexStyle['justifyContent']                                                                                | Flex justification               |
| borderStyle      | ViewStyle['borderStyle']                                                                                   | Border style                     |
| opacity          | ViewStyle['opacity']                                                                                       | Opacity level                    |
| overflow         | ViewStyle['overflow']                                                                                      | Overflow behavior                |
| w100             | boolean                                                                                                    | Set width to 100%                |
| h100             | boolean                                                                                                    | Set height to 100%               |
| mid              | boolean                                                                                                    | Center content vertically        |
| row              | boolean                                                                                                    | Display as row                   |
| alignCenter      | boolean                                                                                                    | Center align items               |
| justifyCenter    | boolean                                                                                                    | Center justify content           |
| borderCircle     | boolean                                                                                                    | Make border circular             |
| centerBetween    | boolean                                                                                                    | Center content between items     |
| justifyBetween   | boolean                                                                                                    | Justify content between items    |
| overHidden       | boolean                                                                                                    | Hide overflow                    |
| square           | number                                                                                                     | Set equal width and height       |
| width100         | boolean                                                                                                    | Set width to 100%                |
| height100        | boolean                                                                                                    | Set height to 100%               |
| background       | Array<string> \| string                                                                                    | Background color or gradient     |
| gradient         | 'vertical' \| 'horizontal'                                                                                 | Gradient direction               |
| flexOne          | boolean                                                                                                    | Set flex to 1                    |
| shadowColor      | string \| boolean                                                                                          | Shadow color                     |
| borderOption     | { top?: number, left?: number, right?: number, bottom?: number, color?: string }                           | Border options                   |
| positionOption   | { top?: number, left?: number, right?: number, bottom?: number }                                           | Position options                 |
| paddingOption    | { all?: number, top?: number, left?: number, right?: number, bottom?: number }                             | Padding options                  |
| paddingFlex      | { vertical?: number, horizontal?: number }                                                                 | Flexible padding                 |
| marginFlex       | { vertical?: number, horizontal?: number }                                                                 | Flexible margin                  |
| marginOption     | { all?: number, top?: number, left?: number, right?: number, bottom?: number }                             | Margin options                   |
| shadowOption     | { color?: string, width?: number, height?: number, opacity?: number, radius?: number, elevation?: number } | Shadow options                   |
| widthScreen      | boolean                                                                                                    | Set width to screen width        |
| heightScreen     | boolean                                                                                                    | Set height to screen height      |

#### Block Style Props

| Prop Style | ViewStyle         | Description         |
| ---------- | ----------------- | ------------------- |
| bg         | backgroundColor   | Background color    |
| background | backgroundColor   | Background color    |
| w          | width             | Width               |
| width      | width             | Width               |
| minW       | minWidth          | Minimum width       |
| maxW       | maxWidth          | Maximum width       |
| h          | height            | Height              |
| height     | height            | Height              |
| minH       | minHeight         | Minimum height      |
| maxH       | maxHeight         | Maximum height      |
| pad        | padding           | Padding             |
| padH       | paddingHorizontal | Horizontal padding  |
| padV       | paddingVertical   | Vertical padding    |
| padL       | paddingLeft       | Left padding        |
| padT       | paddingTop        | Top padding         |
| padR       | paddingRight      | Right padding       |
| padB       | paddingBottom     | Bottom padding      |
| mar        | margin            | Margin              |
| marH       | marginHorizontal  | Horizontal margin   |
| marV       | marginVertical    | Vertical margin     |
| marL       | marginLeft        | Left margin         |
| marT       | marginTop         | Top margin          |
| marR       | marginRight       | Right margin        |
| marB       | marginBottom      | Bottom margin       |
| border     | borderWidth       | Border width        |
| borderW    | borderWidth       | Border width        |
| borderR    | borderRadius      | Border radius       |
| borderC    | borderColor       | Border color        |
| borderLW   | borderLeftWidth   | Left border width   |
| borderTW   | borderTopWidth    | Top border width    |
| borderRW   | borderRightWidth  | Right border width  |
| borderBW   | borderBottomWidth | Bottom border width |
| flex       | flex              | Flex value          |
| zIndex     | zIndex            | Z-index             |
| left       | left              | Left position       |
| top        | top               | Top position        |
| bottom     | bottom            | Bottom position     |
| right      | right             | Right position      |
| opacity    | opacity           | Opacity             |

</details>

### Text

<details>
<summary>The <code>Text</code> component provides various text styling options.</summary>

#### Example

```tsx
// Basic Text
<Text style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 16, color: 'blue', alignItems: 'center' }}>Hello World</Text>

// new
<Text
  bold
  italic
  size-16
  color="blue"
  center
>
  Hello World
</Text>

```

#### Text Props

| Prop Style  | Type                               | Description           |
| ----------- | ---------------------------------- | --------------------- |
| bold        | boolean \| TextStyle['fontWeight'] | Bold text             |
| center      | boolean                            | Center align text     |
| italic      | boolean                            | Italic text           |
| underline   | boolean                            | Underlined text       |
| color       | string                             | Text color            |
| toUpperCase | boolean                            | Convert to uppercase  |
| toLowerCase | boolean                            | Convert to lowercase  |
| background  | string                             | Text background color |

</details>

### Icon

<details>
<summary>The <code>Icon</code> component supports various icon libraries.</summary>

#### Example

```tsx
// Basic Icon
<>
<MaterialIcons name="home" size={24} />
<FontAwesome name="heart" size={24} />
<Ionicons name="star" size={24} />
</>

// Different Icon Types
<>
  <Icon name="home" type="MaterialIcons" size-24 />
  <Icon name="heart" type="FontAwesome" size-24 color="red" />
  <Icon name="star" type="Ionicons" size-24 color="gold" />
</>
```

#### Icon Props

| Prop Style | Type    | Description       |
| ---------- | ------- | ----------------- |
| center     | boolean | Center align icon |
| size       | number  | Icon size         |
| color      | string  | Icon color        |
| name       | string  | Icon name         |
| type       | string  | Icon type         |

#### Supported Icon Types

- Ionicons
- AntDesign
- Entypo
- EvilIcons
- MaterialIcons
- MaterialCommunityIcons
- FontAwesome
- FontAwesome5
- SimpleLineIcons
- Feather
- Octicons
- Fontisto
</details>

### Touch

<details>
<summary>The <code>Touch</code> component is a touchable wrapper with feedback effects.</summary>

#### Example

```tsx
// Basic Button
<TouchableOpacity
    style={{
        padding: 10,
        backgroundColor:'blue',
        borderRadius: 10,
    }}
>
    <Text style={{ color: 'white', alignItems: 'center' }}>Press Me</Text>
</TouchableOpacity>

// Button with ripple effect
<Touch
  pad-10
  bg-blue
  borderR-10
>
  <Text white center>Press Me</Text>
</Touch>
```

#### Touch Props

| Prop Style     | Type       | Description                     |
| -------------- | ---------- | ------------------------------- |
| onPress        | () => void | Function called when pressed    |
| disabled       | boolean    | Disable touch events            |
| activeOpacity  | number     | Opacity when pressed (0-1)      |
| rippleColor    | string     | Color of ripple effect          |
| rippleDuration | number     | Duration of ripple effect in ms |

</details>

### Layout

<details>
<summary>The <code>Layout</code> component provides a base layout structure with safe area handling.</summary>

#### Example

```tsx
// Layout with Safe Areas
<Layout forceInset={{top: 'always'}} forceInsetBot={{vertical: 'never'}}>
  <Block pad-20>
    <Text>Content with Safe Areas</Text>
  </Block>
</Layout>
```

#### Layout Props

| Prop Style    | Type                 | Description                                       | Default Value                                           |
| ------------- | -------------------- | ------------------------------------------------- | ------------------------------------------------------- |
| children      | ReactNode            | Child components to be rendered inside layout     | -                                                       |
| forceInset    | ForceInsetProp       | Safe area inset configuration for top view        | { top: 'always', horizontal: 'never', bottom: 'never' } |
| forceInsetBot | ForceInsetProp       | Safe area inset configuration for bottom view     | { vertical: 'never' }                                   |
| styleBot      | StyleProp<ViewStyle> | Custom style for bottom SafeAreaView              | undefined                                               |
| style         | StyleProp<ViewStyle> | Custom style for top SafeAreaView                 | undefined                                               |
| isBack        | boolean              | Whether to show back button                       | false                                                   |
| disable       | boolean              | Disable SafeAreaView and render children directly | false                                                   |

#### Usage Examples

```tsx
// Basic usage
<Layout>
  <Text>Content</Text>
</Layout>

// With custom safe area insets
<Layout
  forceInset={{ top: 'always', bottom: 'always' }}
  forceInsetBot={{ vertical: 'always' }}
>
  <Text>Content with full safe area</Text>
</Layout>

// With custom styles
<Layout
  style={{ backgroundColor: 'white' }}
  styleBot={{ padding: 20 }}
>
  <Text>Styled content</Text>
</Layout>

// Disable safe area
<Layout disable>
  <Text>Content without safe area</Text>
</Layout>
```

#### ForceInsetProp Types

The `forceInset` and `forceInsetBot` props accept the following values:

- `'always'`: Always apply the safe area inset
- `'never'`: Never apply the safe area inset
- `'top'`: Apply inset only to the top
- `'bottom'`: Apply inset only to the bottom
- `'left'`: Apply inset only to the left
- `'right'`: Apply inset only to the right
- `'horizontal'`: Apply inset to both left and right
- `'vertical'`: Apply inset to both top and bottom
</details>

### LoadingView

<details>
<summary>The <code>LoadingView</code> component displays a loading indicator with optional overlay.</summary>

#### Example

```tsx
<Host>
  <LoadingView />
</Host>
```

</details>

<div align="center">
  <h3>Made with ❤️ by UI-RN Team</h3>
</div>
