import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';

import { Auth } from '@navigation/Auth';
import AppLoading from 'expo-app-loading';
import Toast from 'react-native-toast-message'

import {
  useFonts,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_600SemiBold,
  WorkSans_400Regular_Italic,
  WorkSans_500Medium_Italic,
  WorkSans_600SemiBold_Italic,
} from '@expo-google-fonts/work-sans';

export default function App() {

  let [fontsLoaded] = useFonts({
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_600SemiBold,
    WorkSans_400Regular_Italic,
    WorkSans_500Medium_Italic,
    WorkSans_600SemiBold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <Auth />
        <Toast visibilityTime={8000} />
      </Provider>
    );
  }
}