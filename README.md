[![npm version](https://badge.fury.io/js/react-native-password-eye.svg)](https://badge.fury.io/js/react-native-password-eye)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)


# react-native-password-eye

![enter image description here](https://i.ibb.co/MkQLkkR/Simulator-Screen-Shot-i-Phone-11-2020-09-17-at-18-07-16.png)
##  Installation
1. install [react-native-vector-icon](https://github.com/oblador/react-native-vector-icons)
2. Run:  `$ npm install --save react-native-password-eye`


## usage

```js
 import TextBox from 'react-native-password-eye'; 
 ```

place `<TextBox>` tag wherever you want to have it.

```js
<TextBox onChangeText={(text) => console.log('onChangeText: ', text)} />
```

### Methods

|props  | required |
|--|--|
| onChangeText | YES |


### Properties

|props|value  | default value|
|--|--|--|
| alertType| one of `success`, `warning`, `error`  | null|
|  blurOnSubmit| `bool` | false |
|  hint| `string` | null|
| hintColor| `string` |#818181 |
| hintStyles| `style`| |
| inputStyle| `style`| |
| placeholder| `string`| |
| placeholderTextColor| `string`| #C5C5C5|
| rtl| `bool` | false|
| returnKeyType|  `enum` ( similar to default [TextInput](https://reactnative.dev/docs/textinput#returnkeytype) ) | next |
| secureTextEntry| `bool` | false|
| style| `style` | |

#### styles

|props|description |
|--|--|
| containerStyles | styling for view containing the input and the hint message |
| inputStyle | styling for Input Component |
| hintStyles | styling for hint text in the bottom of the input |

#### customize icons

|props|description | default value |
|--|--|--|
| iconFamily | one of the icon sets of [react-native-vector-icon](https://github.com/oblador/react-native-vector-icons#bundled-icon-sets) | `Feather`|
| iconSuccess | icon name for success icon | `smile` |
| iconSuccessColor | icon color for success icon | `#28a745` |
| iconWarning | icon name for warning icon | `alert-triangle` |
| iconWarningColor | icon color for warning icon | `#ffc107` |
| iconAlert | icon name for error icon | `alert-circle` |
| iconAlertColor | icon color for error icon | `#dc3545` |

example: 
``` js
import TextBox from 'react-native-password-eye';

<TextBox 
	iconFamily={'MaterialCommunityIcons'}
	iconSuccess={'emoticon-happy-outline'}
	iconWarning={'alert-outline'}
	iconAlert={'alert-octagon-outline'}
/>
```

