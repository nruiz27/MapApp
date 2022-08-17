import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListMarkerScreen from '../screens/ListMarkerScreen';
import AddMarkerScreen from '../screens/AddMarkerScreen';
import ShowMarkerScreen from '../screens/ShowMarkerScreen';
import { Colors } from '../styles/themeStyles';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: Colors.primaryColor }, headerTintColor: '#fff' }}>
      <Stack.Screen name="ListMarker" options={{ title: 'Listado de ubicaciones' }} component={ListMarkerScreen} />
      <Stack.Screen name="AddMarker" options={{ title: 'Agregar ubicación' }} component={AddMarkerScreen} />
      <Stack.Screen name="ShowMarker" options={{ title: 'Ubicación' }} component={ShowMarkerScreen} />
    </Stack.Navigator>
  );
}
