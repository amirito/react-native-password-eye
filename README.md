
# react-native-password-eye

![enter image description here](https://i.ibb.co/MkQLkkR/Simulator-Screen-Shot-i-Phone-11-2020-09-17-at-18-07-16.png)
##  Installation
1. install [react-native-vector-icon](https://github.com/oblador/react-native-vector-icons)
2. Run:  `$ npm install --save react-native-password-eye`


## usage

    import TextBox from 'react-native-password-eye';

place `<TextBox>` tag wherever you want to have it.

    <TextBox onChangeText={(text) => console.log('onChangeText: ', text)} />

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


### Methods

|props  | required |
|--|--|
| onChangeText | YES |


