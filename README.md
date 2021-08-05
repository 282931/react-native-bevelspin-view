# react-native-bevelspin-view

[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)](https://www.npmjs.com/package/react-native-bevelspin-view)
[![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)](https://www.npmjs.com/package/react-native-bevelspin-view)
[![npm](https://img.shields.io/npm/v/react-native-bevelspin-view.svg)](https://www.npmjs.com/package/react-native-bevelspin-view)
[![npm](https://img.shields.io/npm/dm/react-native-bevelspin-view.svg)](https://www.npmjs.com/package/react-native-bevelspin-view)
![license](https://img.shields.io/npm/l/react-native-bevelspin-view.svg)
| IOS widget                              |                       Demo                        |
| :-------------------------------------- | :-----------------------------------------------: |
| ![IOS wiget Demo](https://raw.githubusercontent.com/282931/react-native-bevelspin-view/master/ios-native.gif)      | ![Demo](https://raw.githubusercontent.com/282931/react-native-bevelspin-view/master/demo.gif)                              |

## Installation

need to install [react-native-reanimated2](https://docs.swmansion.com/react-native-reanimated/docs/installation) first

```
yarn add react-native-bevelspin-view
```

or

```
npm install react-native-bevelspin-view --save
```

## Notice

Build with react-native-reanimated 2.0,so it only works with react-native version 0.62 or above.


## Examples

[React Native example](./example/App.tsx)

### Code

```jsx
import { StyleSheet, Text, View } from 'react-native';
import { BevelView } from '../src/BevelView';
import React from 'react';
const App = () => (
  <View style={styles.container}>
    <BevelView style={styles.bevel}>
      <Text style={styles.text}>TEST</Text>
    </BevelView>
  </View>
);
const styles = StyleSheet.create({
  bevel: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: '#333',
  },
});
export default App;
```


## Props

| Prop                        |                      Default                      |                  Type                   | Description                                                                           |
| :-------------------------- | :-----------------------------------------------: | :-------------------------------------: | :------------------------------------------------------------------------------------ |
| children                    |                         -                         |                 `node`                  | Children elements                                                                     |
| bevelDeg                    |                        30                         |                `number`                 | Degress of the horizontal surface and view default is 30 deg                          |
| duration                    |                       16000                       |                `number`                 | The time ms of spin a circle,if duration = 0 not spin                                 |
| delay                       |                         0                         |                `number`                 | The time ms delay to spin                                                          |
| perspective                 |                        200                        |                `number`                 | transform perspective property                                                |

**More props**

This is a wrapper around [Animated.View](http://facebook.github.io/react-native/docs/View.html#props), all their `props` works well 

## Author

282931
