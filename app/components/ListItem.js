import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ListItem(props)
{
    return (
        <TouchableOpacity style={styles.itemContaniner} onPress={() => props.navigation.navigate(props.navigateTo, { item: props.item })}>
            <View style={styles.textContainer}>
                <Text style={styles.itemText}>{props.item[props.dataKeyName]}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon name="chevron-forward-outline" style={styles.iconItem}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContaniner: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
    },
    textContainer: {
        flex: 9.5,
        flexDirection: 'row',
        marginRight: 30,
    },
    itemText: {
        marginRight: 20,
        color: '#595D6E',
    },
    iconContainer: {
        flex: 0.5,
    },
    iconItem: {
        fontSize: 20,
        color: '#D6972E',
    }
})
