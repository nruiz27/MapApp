import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function Map(props)
{
    return (
        <>
            <MapView
                onPress={(event) => props.handleMapPress ? props.handleMapPress(event.nativeEvent.coordinate) : null}
                showsUserLocation
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: props.initialPosition.latitude,
                    longitude: props.initialPosition.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                {
                    props.marker && (
                        <Marker
                            coordinate={{
                                latitude: props.marker.latitude,
                                longitude: props.marker.longitude
                            }}
                            title={props.marker.title}
                        />
                    )
                }
            </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
      flex: 1
    },
});