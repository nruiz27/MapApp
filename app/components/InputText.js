import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Sizes, Colors } from '../styles/themeStyles';

export default function InputText(props)
{
    const [ value, setValue ] = useState('');
    const style = props.style ? [styles.textInput, props.style] : styles.textInput;

    const handleChange = (newValue) => {
        props.onChange(newValue);
        setValue(newValue);
    };

    return (
        <TextInput
            placeholder={props.placeholder}
            style={style}
            editable={(props.disable !== undefined) ? props.disable : true}
            placeholderTextColor={Colors.Text.placeholderColor}
            value={value}
            onChangeText={handleChange}
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: Colors.Background.inputColor,
		fontSize: Sizes.Text.inputSize,
        borderColor: 'rgba(0, 0, 0, .25)',
        borderWidth: 0.5,
        paddingHorizontal: 12,
        paddingVertical: 10,
        minHeight: 50,
        borderRadius: 15,
    },
});