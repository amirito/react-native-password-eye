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

import styles from './styles'

const TextBox = (props) => {
    const {
            onChangeText, 
            alertType, 
            blurOnSubmit=false, 
            hint, 
            hintColor='#818181',
            hintStyles,
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

    const renderAlertIcon = () => {
        if (alertType) {
            switch(alertType) {
                case 'success':
                    return (<FeatherIcon name={'smile'} size={16} color={'#28a745'} />);

                case 'warning':
                    return (<FeatherIcon name={'alert-triangle'} size={16} color={'#ffc107'} />);

                case 'error':
                    return (<FeatherIcon name={'alert-circle'} size={16} color={'#dc3545'} />);

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
    inputStyle: PropTypes.arrayOf(PropTypes.object),
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    returnKeyType: PropTypes.string,
    rtl: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
}

export default TextBox;
