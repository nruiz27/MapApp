import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import List from '../components/List';
import Button from '../components/Button';

export default function ListMarkerScreen({ navigation })
{
    const { data } = useContext(AppContext);

    return (
        <View style={ styles.container }>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={() => navigation.navigate('AddMarker')}
                    title="Nueva ubicación"
                />
            </View>
            <List
                navigateTo="ShowMarker"
                navigation={navigation}
                data={data}
                dataKeyName="title"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      marginTop: 20,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10
    },
});