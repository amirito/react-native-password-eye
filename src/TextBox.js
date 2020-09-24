import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput,
} from 'react-native';

import PropTypes from 'prop-types'; 
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import styles from './styles'

const TextBox = (props) => {
    const {
            onChangeText, 
            alertType, 
            blurOnSubmit=false, 
            hint, 
            hintColor='#818181',
            hintStyles,
            iconFamily='Feather',
            iconSuccess='smile',
            iconSuccessColor='#28a745',
            iconWarning='alert-triangle',
            iconWarningColor='#ffc107',
            iconAlert='alert-circle',
            iconAlertColor='#dc3545',
            inputStyle, 
            placeholder, 
            placeholderTextColor="#C5C5C5", 
            rtl=false,
            returnKeyType='next',
            secureTextEntry=false, 
            containerStyles,
            value
        } = props;

    const [isSecure, setIsSecure] = useState(true);

    const [textValue, setTextValue] = useState(props.value);
    
    useEffect(() => {

    });

    const onChange = (text) => {
        setTextValue(text);
        onChangeText(text);
    }

    /*
        AntDesign by AntFinance (297 icons)
        Entypo by Daniel Bruce (411 icons)
        EvilIcons by Alexander Madyankin & Roman Shamin (v1.10.1, 70 icons)
        Feather by Cole Bemis & Contributors (v4.28.0, 285 icons)
        FontAwesome by Dave Gandy (v4.7.0, 675 icons)
        FontAwesome 5 by Fonticons, Inc. (v5.13.0, 1588 (free) 7842 (pro) icons)
        Fontisto by Kenan Gündoğan (v3.0.4, 615 icons)
        Foundation by ZURB, Inc. (v3.0, 283 icons)
        Ionicons by Iconic Framework (v5.0.1, 1227 icons)
        MaterialIcons by Google, Inc. (v4.0.0, 1547 icons)
        MaterialCommunityIcons by MaterialDesignIcons.com (v5.3.45, 5346 icons)
        Octicons by Github, Inc. (v8.4.1, 184 icons)
        Zocial by Sam Collins (v1.0, 100 icons)
        SimpleLineIcons by Sabbir & Contributors (v2.4.1, 189 icons)
    */
    const renderAlertIcon = () => {
        let Icon = FeatherIcon;

        switch(iconFamily){
            case 'Feather': 
                Icon = FeatherIcon;
                break;
            case 'AntDesign': 
                Icon = AntDesign;
                break;
            case 'Entypo': 
                Icon = Entypo;
                break;
            case 'EvilIcons': 
                Icon = EvilIcons;
                break;
            case 'FontAwesome': 
                Icon = FontAwesome;
                break;
            case 'FontAwesome': 
                Icon = FontAwesome5;
                break;
            case 'Fontisto': 
                Icon = Fontisto;
                break;
            case 'Foundation': 
                Icon = Foundation;
                break;
            case 'Ionicons': 
                Icon = Ionicons;
                break;
            case 'MaterialIcons': 
                Icon = MaterialIcons;
                break;
            case 'MaterialCommunityIcons': 
                Icon = MaterialCommunityIcons;
                break;
            case 'Octicons': 
                Icon = Octicons;
                break;
            case 'Zocial': 
                Icon = Zocial;
                break;
            case 'SimpleLineIcons': 
                Icon = SimpleLineIcons;
                break;

            default:
                Icon = FeatherIcon;
                break;
        }

        if (alertType) {
            switch(alertType) {
                case 'success':
                    return (<Icon name={iconSuccess} size={16} color={iconSuccessColor} />);

                case 'warning':
                    return (<Icon name={iconWarning} size={16} color={iconWarningColor} />);

                case 'error':
                    return (<Icon name={iconAlert} size={16} color={iconAlertColor} />);

                default: 
                    return null;
            }
        }
    }

    const onEyePress = () => {
        setIsSecure(!isSecure)
    }

    return (
        <>
            <View style={[containerStyles, rtl ? styles.justifyInRow : styles.justifyLeftInRow]}>
                <TextInput 
                    style={[inputStyle, {flex: 1}]}
                    onChangeText={(text) => onChange(text)}
                    blurOnSubmit={ blurOnSubmit }
                    returnKeyType={ returnKeyType }
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureTextEntry ? isSecure : false}
                    value={textValue} />
                    
                <View style={[rtl ? styles.justifyLeftInRow: styles.justifyRightInRow]}>
                    {
                        secureTextEntry &&
                            <View>
                                <TouchableOpacity onPress={() => onEyePress()} style={[styles.paddingH5]}>
                                    <FeatherIcon name={isSecure ? 'eye' : 'eye-off'} size={16} color={'#2E2E2E'} />
                                </TouchableOpacity>
                            </View>
                    }

                    {
                        secureTextEntry && alertType &&
                            <View style={[{width: 1, height: 20, backgroundColor: '#2E2E2E',}]} />
                    }
                    
                    <View style={[styles.paddingH5]} >
                        {
                            renderAlertIcon()
                        }
                    </View>
                </View>
            </View>
            {
                hint &&
                    <Text style={[styles.font12, hintStyles, {color: hintColor}]}>{hint}</Text>
            }
            
        </>
    );
};

TextBox.propTypes = {
    onChangeText: PropTypes.func.isRequired,
    alertType: PropTypes.string,
    blurOnSubmit: PropTypes.bool,
    containerStyles: PropTypes.arrayOf(PropTypes.object),
    hint: PropTypes.string,
    hintColor: PropTypes.string,
    hintStyles: PropTypes.arrayOf(PropTypes.object),
    iconFamily: PropTypes.string,
    iconSuccess: PropTypes.string,
    iconSuccessColor: PropTypes.string,
    iconWarning: PropTypes.string,
    iconWarningColor: PropTypes.string,
    iconAlert: PropTypes.string,
    iconAlertColor: PropTypes.string,
    inputStyle: PropTypes.arrayOf(PropTypes.object),
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    returnKeyType: PropTypes.string,
    rtl: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
}

export default TextBox;
