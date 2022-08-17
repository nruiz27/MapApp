import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as ElementButton } from 'react-native-elements';

export default function Button(props)
{
    return (
        <ElementButton
            onPress={props.onPress}
            title={props.title}
            buttonStyle={styles.button}
        />
    );
}

const styles = StyleSheet.create({
	button: {
        backgroundColor: '#0E528C',
        paddingTop: 12,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15,
		borderRadius: 10,
    },
});