### Install:

```js
npm install ui-rn
```

### Block :

```tsx
import {Block, Text, Icon, Touch} from 'ui-rn';
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
</Block>;
```
