import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

export default function List(props)
{
    return (
        <FlatList
            data={props.data}
            renderItem={({ item, index }) => (
                <ListItem 
                    key={index}
                    item={item}
                    dataKeyName={props.dataKeyName}
                    navigation={props.navigation}
                    navigateTo={props.navigateTo}
                />
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}