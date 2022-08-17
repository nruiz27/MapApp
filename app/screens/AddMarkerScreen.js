import React, { useState, useContext } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import LoadingScreen from './LoadingScreen';
import Modal from '../components/Modal';
import useOpen from '../hooks/useOpen';
import InputText from '../components/InputText';
import { AppContext } from '../context/AppContext';
import Button from '../components/Button';
import { showMessage, hideMessage } from "react-native-flash-message";

export default function AddMarkerScreen({ navigation })
{
    const { addMarker } = useContext(AppContext);
    const [ isOpen, handleOpen ] = useOpen(false);
    const { hasLocation, initialPosition } = useLocation();
    const [ latlgn, setLatLng ] = useState(null);
    const [ inputText, setInputText ] = useState('');

    const handleMapPress = (coordinate) => {
        setLatLng({
            latitude: coordinate.latitude,
            longitude: coordinate.longitude
        });
        handleOpen();
    }

    const handleInputTextChange = (newText) => {
        setInputText(newText);
    }

    const handleMarkerSave = () => {
        if ( inputText && inputText.trim().length > 0 && latlgn ) {
            const newMarker = {
                ...latlgn,
                title: inputText,
            }
            addMarker(newMarker);
            navigation.goBack();
        } else {
            showMessage({
                message: "El nombre es requerido para guardar la ubicación.",
                type: "danger",
            });
        }
    }

    const handleModalClose = () => {
        setInputText('');
        setLatLng(null);
        handleOpen();
    }

    if ( !hasLocation ) {
        return <LoadingScreen />
    }

    return (
        <View style={styles.container}>
            <Map handleMapPress={handleMapPress} initialPosition={initialPosition}/>
            <Modal 
                isOpen={isOpen}
                title="Nueva ubicación"
                handleOpen={handleModalClose}
            >
                <View>
                    <InputText 
                        placeholder="Ingrese nombre"
                        onChange={handleInputTextChange}
                        style={styles.inputText}
                    />
                    <Button
                        onPress={handleMarkerSave}
                        title="Guardar"
                    />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inputText: {
        marginBottom: Platform.OS === 'android' ? 20 : 15,
    }
});