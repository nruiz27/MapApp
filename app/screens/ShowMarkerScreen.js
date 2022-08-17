import React from 'react';
import { View, StyleSheet } from 'react-native';
import Map from '../components/Map';

export default function ShowMarkerScreen({ route })
{
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Map
                initialPosition={{
                    latitude: item.latitude,
                    longitude: item.longitude
                }}
                marker={item}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
});