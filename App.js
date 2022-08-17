import 'react-native-gesture-handler';
import React from 'react';
import { enableLatestRenderer } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './app/navigation/AppStack';
import { AppProvider } from './app/context/AppProvider';
import FlashMessage from "react-native-flash-message";

enableLatestRenderer();

export default function App()
{
  return (
      <NavigationContainer>
        <AppProvider>
          <AppStack />
          <FlashMessage position="top" />
        </AppProvider>
      </NavigationContainer>
  );
}
