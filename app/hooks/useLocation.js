import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

export default function useLocation()
{
    const config = {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 3600000,
    };

    const [ hasLocation, setHasLocation ] = useState(false);
    const [ initialPosition, setInitialPosition ] = useState();

    useEffect(() => {
          Geolocation.getCurrentPosition(
            ({ coords }) => {
                setInitialPosition({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                });
                setHasLocation(true);
            },
            error => console.log("ERROR", error),
            config,
          );
    }, [])

    return {
        hasLocation,
        initialPosition
    }
}