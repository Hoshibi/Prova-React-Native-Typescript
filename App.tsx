import React from 'react';

import { Auth } from '@navigation/Auth';
import AppLoading from 'expo-app-loading';

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
      <Auth />
    );
  }
}