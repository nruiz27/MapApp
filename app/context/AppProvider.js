import React, { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppProvider = ({ children }) =>
{
    const [ data, setData ] = useState([]);

    const addMarker = (marker) => {
        let newData = [...data];
        newData = [
            ...data,
            marker,
        ]
        setData(newData);
    }

    useEffect(() => {
        (async() => {
            try {
                const newData = await AsyncStorage.getItem('@marker_app');
                if ( newData ) {
                    setData(JSON.parse(newData));
                }
            } catch (error) {
                setData([]);
            }
        })();
    }, []);

    useEffect(() => {
        (async() => {
            try {
                await AsyncStorage.setItem('@marker_app', JSON.stringify(data));
            } catch (error) {
                // Do nothing
            }
        })();
    }, [data]);

    return (
        <AppContext.Provider value={{ data, addMarker }}>
            {
                children
            }
        </AppContext.Provider>
    )
}